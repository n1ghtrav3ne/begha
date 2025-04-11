<template>
  <div>
     <FollowedBeghaList />
  </div>
</template>

<script lang="ts" setup>
import FollowedBeghaList from '@/components/followedBegha/list/FollowedBeghaList.vue';
defineComponent({FollowedBeghaList})
definePageMeta({
  layout:  'default'
})
</script>
