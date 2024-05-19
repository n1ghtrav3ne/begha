<template>
  <div>
    <BeghaMediaPostList />
  </div>
</template>

<script lang="ts" setup>
import BeghaMediaPostList from "@/components/begha-media/BeghaMediaPostList.vue";
defineComponent({ BeghaMediaPostList });
definePageMeta({
  layout: "begha-layout",
});
</script>
