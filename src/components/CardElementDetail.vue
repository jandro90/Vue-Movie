<template>
    <v-card class="mx-auto my-12" max-width="374">
        <v-img :src="getImage(selectedShow?.show?.image?.original)"></v-img>

        <v-card-title>{{ getName(selectedShow?.show?.name) }}</v-card-title>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating
                    :value="getRate(selectedShow?.score)"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                    <b>Score: </b>{{ getRate(selectedShow?.score) }}
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                <b>Genres: </b> {{ getGenres(selectedShow?.show?.genres) }}
            </div>

            <div v-html="selectedShow?.show?.summary"></div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Availability</v-card-title>
        <div class="grey--text ms-4">
            <b>Days: </b>{{ getDays(selectedShow?.show?.schedule?.days) }}
        </div>

        <v-card-text>
            <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>
                    {{ getTime(selectedShow?.show?.schedule?.time) }}
                </v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="goBack">
                Back
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import useShow from "@/composables/useShow";
import { useRouter } from "vue-router";

export default {
    name: "CardElementDetail",
    props: {
        selectedShow: Object,
    },
    setup() {
        const router = useRouter();

        const goBack = () => {
            router.go(-1);
        }

        return {
            goBack,
            ...useShow(),
        };
    },
};
</script>

<style></style>
