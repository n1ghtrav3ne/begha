<template>
  <div>
    <LibraryPage />
  </div>
</template>

<script lang="ts" setup>
import LibraryPage from "@/components/library/LibraryPage.vue";
defineComponent({ LibraryPage });
definePageMeta({
  layout: "empty-layout",
});
</script>
