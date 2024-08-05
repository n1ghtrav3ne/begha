<template>

      <Notifications />
      
</template>
<script lang="ts" setup>
  import Notifications from "@/components/user-profile/notifications/Notifications.vue";
  defineComponent({ Notifications });
  definePageMeta({
    layout: "empty-layout",
  });
</script>