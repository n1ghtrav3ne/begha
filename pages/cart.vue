<template>
  <div>
    <ClientOnly>
      <cart />
    </ClientOnly>
  </div>
</template>

<script setup>
import cart from "@/components/cart/index.vue";
definePageMeta({
  layout: "empty-layout",
});
</script>

<style lang="scss" scoped>
</style>