<template>
  <div>
    <AuthLogin />
  </div>
</template>

<script lang="ts" setup>
import AuthLogin from "~/components/auth/index.vue";
defineComponent({ AuthLogin });
definePageMeta({
  layout: "empty-layout",
});
</script>

<style lang="scss" scoped>
</style>