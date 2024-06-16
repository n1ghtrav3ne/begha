<template>
  <div>
    <BookDetail />
  </div>
</template>

<script lang="ts" setup>
import BookDetail from "@/components/library/BookDetail.vue";
defineComponent({ BookDetail });
definePageMeta({
  layout: "empty-layout",
});
</script>
