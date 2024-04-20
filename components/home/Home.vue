<template>
    <div>
        <SplashLoading v-if="initStore.isLoading" />
        <i class="ico ue913-Help"></i>
    </div>
</template>

<script lang="ts" setup>
import SplashLoading from './Initial.vue';
import { useInitialApp } from '@/stores/init-app';
defineComponent({SplashLoading})
const initStore = useInitialApp();

</script>

<style lang="scss">
@import '../../assets/css/icons.scss'
</style>
