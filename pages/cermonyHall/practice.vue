<template>

    <BaseEventCalendar />        <input class="slider" type="range">


</template>
<script lang="ts" setup>

import BaseEventCalendar from "~/components/global/BaseEventCalendar.vue";
import moment from "jalali-moment";

</script>
<style scoped lang="ts">
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: red;
  position: relative;
  bottom: 3px;
}
input{
    accent-color: $secondary;
    -webkit-appearance: none;
    width:100%;
}
input[type=range]::-webkit-slider-runnable-track  {
  -webkit-appearance: none;
  background: $secondary-container;
  height:4px;
  
}
</style>