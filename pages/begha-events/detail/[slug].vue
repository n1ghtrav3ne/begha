<template>
  <div>
    <BeghaEventsDetail />
  </div>
</template>

<script lang="ts" setup>
import BeghaEventsDetail from "@/components/begha-events/BeghaEventsDetail.vue";
defineComponent({ BeghaEventsDetail });
definePageMeta({
  layout: "begha-layout",
});
</script>
