<template>

    <div>
        <v-slider step="1" color="#429FF5" max="1000" tra track-color="#E4F1FE" thumb-color="white"  thumb-label="always" class="capacity mx-auto">

</v-slider>
    </div>
    
</template>
<script setup lang="ts">



</script>
<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

 .capacity{
        width: 90%;
        position: absolute;
        :deep(.v-slider-thumb__label) {
    background-color: $secondary;
    color: $secondary-container;
    position: absolute;
    left: 0;
    
  }
 }
</style>