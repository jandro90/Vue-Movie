<template>
  <div class="container">
    <SearchComponent @onSearchShow="onSearchShow"/>

    <div class="card-list d-flex flex-wrap justify-content-center" v-if="shows">
    <div class="m-2" v-for="show in shows" :key="show.show.id">
      <CardElement :show="show" @onDetails="onDetails"/>
    </div>

  </div>

  <div class="text-center mt-10" v-if="isLoadingData">
    <v-progress-circular
      indeterminate
      color="#03e9f4"
    ></v-progress-circular>
  </div>
  </div>
</template>

<script>
import SearchComponent from '@/components/Search.vue'
import CardElement from '@/components/CardElement.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: 'ShowListView',
    components: { SearchComponent, CardElement },
    setup() {
      const router = useRouter();
    // Vuex
      const store = useStore();
      const loadShows = (query) => store.dispatch('movieStore/loadShows', query);
      const shows = computed(() => store.getters['movieStore/getShows']);
      const clearSelectedShow = () => store.commit('movieStore/setSelectedShow', null);

    // Listeners
      const onSearchShow = (inputValue) => {
        loadShows(inputValue);
      }

      const onDetails = (show) => {
        store.commit('movieStore/setSelectedShow', show);
        router.push({name: 'show-detail'});
      }

    // Lifecycle
      onMounted(() => {
        clearSelectedShow();
        if (shows.value?.length) return;
        loadShows();
      })

      return {
        // Vuex Getters
        shows,
        isLoadingData: computed(() => store.getters['movieStore/isLoadingData']),
        // Vuex Actions
        loadShows,
        onSearchShow,
        // Component Functions
        onDetails
      }
    }
}
</script>