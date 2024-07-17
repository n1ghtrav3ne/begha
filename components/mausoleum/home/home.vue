<template>
    
    <div class="container">

        <facilitiesBanner />

        <profile />

        <serviceButtons />

        <newRequest />

    </div>

    <moreServiceButtons v-if="mausoleumStore.isOpenServiceButtons" />


</template>

<script setup lang="ts">
import facilitiesBanner from "./facilitiesBanner.vue"

import profile from "./profile.vue"

import serviceButtons from "./serviceButtons.vue";

import newRequest from "./newRequest.vue"

import moreServiceButtons from "./moreServiceButtons.vue"

import {useMausoleumStore} from "~/stores/m-modals-store"

const mausoleumStore=useMausoleumStore()


defineComponent({facilitiesBanner,profile,serviceButtons,newRequest,moreServiceButtons})


</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

</style>