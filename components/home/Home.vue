<template>
    <div>
        <div v-if="!initStore.isLoading" class="app-home">
            <div class="container">
                <div class="pray-banner">
                    <img src="~/assets/images/home/pray-home-banner.svg" alt="">
                </div>
            </div>
        </div>
        <SplashLoading v-if="initStore.isLoading" />
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
