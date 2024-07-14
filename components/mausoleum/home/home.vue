<template>
    
    <div class="container">

        <facilitiesBanner />

        <profile />

        <serviceButtons />

        <newRequest />

    </div>


</template>

<script setup lang="ts">
import facilitiesBanner from "./facilitiesBanner.vue"

import profile from "./profile.vue"

import serviceButtons from "./serviceButtons.vue";

import newRequest from "./newRequest.vue"

defineComponent({facilitiesBanner,profile,serviceButtons,newRequest})
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

</style>