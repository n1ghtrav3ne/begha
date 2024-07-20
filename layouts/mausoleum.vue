<template>
    <div>
        <Header v-if="!initStore.isLoading"></Header>
        <VitePwaManifest />
        <NuxtPage />
        <Footer v-if="!initStore.isLoading"></Footer>
    </div>
</template>

<script lang="ts" setup>
import Header from '~/components/layouts/mausoleumHeader.vue';
import Footer from '~/components/layouts/mausoleumFooter.vue';
import { useInitialApp } from '@/stores/init-app';
defineComponent({Header , Footer})
const initStore = useInitialApp();

setTimeout(() => {
    initStore.changeLoadingState()
}, 1000);



</script>

<style lang="scss" scoped>

</style>