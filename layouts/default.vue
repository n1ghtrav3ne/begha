<template>
    <div>
        <Header v-if="!initStore.isLoading" />
        <VitePwaManifest />
        <NuxtPage />
        <Footer v-if="!initStore.isLoading" />
    </div>
</template>

<script lang="ts" setup>
import Header from '~/components/layouts/Header.vue';
import Footer from '~/components/layouts/Footer.vue';
import { useInitialApp } from '@/stores/init-app';
defineComponent({Header , Footer})
const initStore = useInitialApp();

setTimeout(() => {
    initStore.changeLoadingState()
}, 5000);



</script>

<style lang="scss" scoped>

</style>