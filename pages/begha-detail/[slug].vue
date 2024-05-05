<template>
    <div>
      <BeghaDetail />
    </div>
  </template>
  
  <script lang="ts" setup>
  import BeghaDetail from '@/components/begha-detail/BeghaDetail.vue'
  defineComponent({BeghaDetail})
  definePageMeta({
    layout : 'begha-layout'
  })
  </script>
  