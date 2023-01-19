<template>
    <v-card class="mx-auto" max-width="500">
        <v-img
            class="white--text align-end"
            :src="getImage(show?.show?.image?.medium)"
        >
        </v-img>

        <v-card-subtitle class="pb-0">
            <b>{{ getName(show?.show?.name) }}</b>
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <div>
                <b>Language:</b>
                {{ getLang(show?.show?.language) }}
            </div>

            <div><b>Days:</b> {{ getDays(show?.show?.schedule?.days) }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="orange" text @click="onDetails"> Details </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import useShow from "@/composables/useShow";

export default {
    name: "CardElement",
    emits: ["onDetails"],
    props: {
        show: Object,
    },
    setup({ show }, ctx) {
        const onDetails = () => ctx.emit("onDetails", show);

        return {
            ...useShow(),
            onDetails,
        };
    },
};
</script>

<style></style>
