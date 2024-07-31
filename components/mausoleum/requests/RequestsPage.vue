<template>

   <div class="greenBox container">

    <div class="firstItem">

        <span @click="$router.go(-1)" class="material-symbols-outlined ">
        arrow_right_alt
    </span>

    <span>درخواست ها</span>

    </div>    

    <img class="mr-auto" src="~/assets/images/mausoleum-media/search-normal.svg" alt="">

    </div>

    <div class="container">

        <div class="w-full bg-neutral-100 mt-[16px] p-[2px] ">

        </div>

    </div>


</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.greenBox{
    background-color: $primary;
    height:48px;
    display:flex;
    align-items: center;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 11px;
    padding-right: 16px;
    color: $primary-on;
    

    .firstItem{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

   
}
</style>