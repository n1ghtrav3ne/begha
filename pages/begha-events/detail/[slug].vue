<template>
  <div>
    <BeghaNewsDetail />
  </div>
</template>

<script lang="ts" setup>
import BeghaNewsDetail from "@/components/begha-news/BeghaNewsDetail.vue";
defineComponent({ BeghaNewsDetail });
definePageMeta({
  layout: "empty-layout",
});
</script>
