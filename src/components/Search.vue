<template>
    <div class="form-group has-search m-2">
        <span class="fa fa-search form-control-feedback"></span>
        <input
            type="text"
            ref="inputElement"
            v-model="model"
            class="form-control"
            placeholder="Search..."
            @keypress.enter="emitShow"
        />
    </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
    name: "SearchComponent",
    emits: ["onSearchShow"],
    setup(props, ctx) {
        // models data binding
        const model = ref();
        // acces to html elements
        const inputElement = ref();
        // emitters
        const emitShow = () =>
            ctx.emit("onSearchShow", model.value.replace(/\s/g, "+"));
        // lifecycle
        onMounted(() => {
            inputElement.value.focus();
        });

        return {
            model,
            inputElement,
            emitShow,
        };
    },
};
</script>

<style scoped>
.main {
    width: 50%;
    margin: 50px auto;
}

.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
</style>
