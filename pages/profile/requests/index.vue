<template>
  <div>
     <MyRequests />
  </div>
</template>

<script lang="ts" setup>
import MyRequests from '@/components/user-profile/MyRequests.vue';
defineComponent({MyRequests})
definePageMeta({
  layout:  'empty-layout'
})
</script>
