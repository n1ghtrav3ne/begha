<template>
    <div class="bannerContainer">

        <div class="textContainer md:mt-4">

            <span class="text">برای دسترسی به امکانات بیشتر و اعمال تغییرات، لطفاً وارد پنل ادمین شوید</span>

            <div class="button">

        <span>رفتن به پنل ادمین</span>

        <span class="material-symbols-outlined">
        keyboard_backspace
        </span>

        </div>

        </div>

        <div class="imageHolder">


        <img class="dots" src="~/assets/images/mausoleumHome/Group 4.svg" alt="">

        <img class="laptop" src="~/assets/images/mausoleumHome/moreFacility.png" alt="">

        

        </div>


    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
@import "~/assets/css/fonts.scss";


.bannerContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 39px;
    width:100%;
    height: 139px;
    background: $secondary;
    border-radius: 12px;
    padding: 12px;

    .textContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 55%;
        height: 93px;
        gap: 12px;
        justify-content: space-between;
        margin-bottom: 5%;

        .text{
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            color: $secondary-on;
            font-family: 'peyda-regular';
        }

        .button{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        background: $secondary-on;
        border-radius: 20px;
        font-family: 'Peyda';
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-left: auto;
        padding-right: 12px;
        padding-left: 12px;
        padding-top: 4px;
        padding-bottom: 4px;

        .material-symbols-outlined{
            font-size: 20px;
            padding-top: 2px;
        }
        }
    }

  

    .imageHolder{
        height: 100%;
        margin-right: auto;

        .dots{
        position: relative;
        right: 20%;
    }
        .laptop{
        position: relative;
        transform: scaleX(-1);
        width: 123px;
        bottom: 45%;
        height: 123px;
        z-index: 50;
        }
    }

  
}

</style>