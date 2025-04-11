<template>
  <div>
    <BeghaNews />
  </div>
</template>

<script lang="ts" setup>
import BeghaNews from "@/components/begha-news/BeghaNews.vue";
defineComponent({ BeghaNews });
definePageMeta({
  layout: "empty-layout",
});
</script>
