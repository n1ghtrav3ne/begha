<template>
    <cemetery />
</template>
<script setup lang="ts">
import cemetery from "~/components/cemetery/cemeteryPage.vue"
defineComponent({cemetery})
definePageMeta({
    layout:"empty-layout"
})
</script>