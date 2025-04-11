<template>
  <div>
    <BeghaEvents />
  </div>
</template>

<script lang="ts" setup>
import BeghaEvents from "@/components/begha-events/BeghaEvents.vue";
defineComponent({ BeghaEvents });
definePageMeta({
  layout: 'begha-layout',
});
</script>
