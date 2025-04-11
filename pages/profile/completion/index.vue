<template>

      <completeProfile />

</template>
<script lang="ts" setup>
  import completeProfile from "@/components/user-profile/completion/completeProfile.vue";
  defineComponent({ completeProfile });
  definePageMeta({
    layout: "empty-layout",
  });
</script>