<template>
    <div>
        <Header />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script lang="ts" setup>
import Header from '~/components/layouts/header.vue';
import Footer from '~/components/layouts/footer.vue';
defineComponent({Header , Footer})
</script>

<style lang="scss" scoped>

</style>