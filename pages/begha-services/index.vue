<template>

    <BeghaService />

</template>
<script setup lang="ts">
import BeghaService from "~/components/begha-services/BeghaService.vue";
defineComponent({BeghaService})
definePageMeta({
  layout: 'begha-layout',
});
</script>