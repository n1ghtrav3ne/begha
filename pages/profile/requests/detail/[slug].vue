<template>
  <div>
    <RequestDetail />
  </div>
</template>

<script lang="ts" setup>
import RequestDetail from "@/components/user-profile/requests/Detail.vue";
defineComponent({ RequestDetail });
definePageMeta({
  layout: "empty-layout",
});
</script>
