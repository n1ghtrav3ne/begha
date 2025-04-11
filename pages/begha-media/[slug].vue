<template>
  <div>
    <BeghaMedia />
  </div>
</template>

<script lang="ts" setup>
import BeghaMedia from "@/components/begha-media/BeghaMedia.vue";
defineComponent({ BeghaMedia });
definePageMeta({
  layout: 'begha-layout',
});
</script>
