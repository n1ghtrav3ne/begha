<template>
  <div>
    <MainMedia />
  </div>
</template>

<script lang="ts" setup>
import MainMedia from "@/components/main-media/MainMedia.vue";
defineComponent({ MainMedia });
definePageMeta({
  layout: "default",
});
</script>
