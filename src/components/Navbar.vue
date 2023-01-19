<template>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <router-link
                :to="{ name: 'show-list' }"
                v-slot="{ href, navigate }"
            >
                <a
                    class="navbar-brand text-light"
                    :href="href"
                    @click="navigate"
                    >Vue Movie</a
                >
            </router-link>

            <ul class="navbar-nav">
                <li class="nav-item d-flex">
                    <router-link
                        :to="{ name: 'show-list' }"
                        v-slot="{ isExactActive, navigate, href }"
                    >
                        <a
                            class="nav-link text-light mr-10"
                            :class="{ 'text-success': isExactActive }"
                            @click="navigate"
                            :href="href"
                            >Home</a
                        >
                    </router-link>

                    <router-link
                        :to="{ name: 'about' }"
                        v-slot="{ isExactActive, navigate, href }"
                    >
                        <a
                            class="nav-link text-light"
                            :class="{ 'text-success': isExactActive }"
                            @click="navigate"
                            :href="href"
                            >About
                        </a>
                    </router-link>
                </li>
            </ul>

            <ul class="navbar-nav">
                <button class="btn btn-danger" @click="logout">Logout</button>
            </ul>
        </div>
    </nav>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
    name: "NavBar",
    setup() {
        const store = useStore();
        const router = useRouter();

        const logout = () => {
            store.commit("userStore/clearUser");
            router.push({ name: "login" });
        };

        return {
            logout,
        };
    },
};
</script>
