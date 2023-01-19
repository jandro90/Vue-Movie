<template>
    <NavBar />
    <router-view />
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar.vue";

export default defineComponent({
    name: "HomeView",
    components: { NavBar },
});
</script>
