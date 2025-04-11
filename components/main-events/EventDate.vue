<template>

    <div class="main h-[300px]">
        
        <DatePicker  :show="true" :dualInput="true" :mode="'range'" :column="1"  />

    </div>

</template>

<script setup lang="ts">

import DatePicker from '../global/date-picker/DatePicker.vue';

defineComponent({DatePicker})

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";



</style>