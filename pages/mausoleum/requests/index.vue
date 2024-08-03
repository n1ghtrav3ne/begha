<template>

    <RequestsPage />

</template>
<script setup lang="ts">  
import RequestsPage from "~/components/mausoleum/requests/RequestsPage.vue"
defineComponent({RequestsPage})
definePageMeta({
    layout:'empty-layout'
})
</script>