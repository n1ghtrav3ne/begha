<template>
  <div>
     <BeghaList />
  </div>
</template>

<script lang="ts" setup>
import BeghaList from '@/components/begha/list/BeghaList.vue';
defineComponent({BeghaList})
definePageMeta({
  layout:  'empty-layout'
})
</script>
