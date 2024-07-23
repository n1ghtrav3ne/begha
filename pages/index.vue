<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts" setup>
import Home from '@/components/home/Home.vue';
import DatePicker from '@/components/global/date-picker/DatePicker.vue';
defineComponent({Home,DatePicker})
definePageMeta({
  layout : 'default'
})
</script>
