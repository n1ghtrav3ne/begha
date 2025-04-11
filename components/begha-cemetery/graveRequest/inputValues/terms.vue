<template>


            <div class="termsContainer">

                <li class="list-item " v-for="index in 6">رفتار مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند.</li>
                    
            </div>


</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
}

.termsContainer{
    display: list-item;
    flex-direction: column;
    margin-top: 16px;

    li{
        list-style: decimal;
    }
  
}


</style>