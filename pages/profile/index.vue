<template>
  <div>
     <UserProfile />
  </div>
</template>

<script lang="ts" setup>
import UserProfile from '@/components/user-profile/UserProfile.vue';
defineComponent({UserProfile})
definePageMeta({
  layout:  'default'
})
</script>
