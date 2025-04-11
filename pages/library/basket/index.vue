<template>
  <div>
    <LibraryBasket />
  </div>
</template>

<script lang="ts" setup>
import LibraryBasket from "@/components/library/LibraryBasket.vue";
defineComponent({ LibraryBasket });
definePageMeta({
  layout: "empty-layout",
});
</script>
