<template>
  <div class="container">
    <h1 class="text-center m-2"> Show Info </h1>
    <CardElementDetail :selectedShow="selectedShow"/>
  </div>
</template>

<script>
import CardElementDetail from '@/components/CardElementDetail.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core';

export default {
    name: 'ShowDetailView',
    components: { CardElementDetail },
    setup() {
        const store = useStore();

        return {
            selectedShow: computed(() => store.getters['movieStore/selectedShow']),
        }
    }
}
</script>