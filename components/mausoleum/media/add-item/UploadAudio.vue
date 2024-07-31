<template>
   

    <div class="itemsContainer">

        <div class="greenBox container">

            <div class="firstItem">

                <span @click="$emit('close')" class="material-symbols-outlined ">
                arrow_right_alt
            </span>

            <span>افزودن صوت</span>

            </div>    

        </div>


        <div class="px-[16px]">

            <div class="videoCover">

            <div class="iconContainer">

                <img src="~/assets/images/mausoleum-media/image.svg" alt="">

            </div>

            <div class="title">

                <span class="image">تصویر کاور صوت</span>

                <span class="choose">انتخاب عکس</span>

            </div>


            </div>

            <div class="inputContainer">

                <div class="h-14">

                    
                <BaseInput color="white" label="انتخاب صوت" placeholder="فایل صوتی مورد نظر را انتخاب کنید" :border="true">
                <template #append>

                    <span class="material-symbols-outlined">
                    videocam
                    </span>

                </template>
                </BaseInput>

                </div>

                

            </div>
            

        </div>

        <div class="buttonContainer">

            <button type="button" class="upload">
                بارگذاری
            </button>

        </div>

      


    </div>
   
</template>

<script setup lang="ts">

import BaseInput from "~/components/global/input.vue"

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

.itemsContainer{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    max-width: 600px;
    right: 0;
    left: 0;
    margin: 0 auto;
    background: $surface;

    .videoCover{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 24px;
        gap: 12px;
        width: 100%;
        max-width: 600px;
        background: $surface-variant;
        padding: 12px;
        border-radius: 12px;

        .iconContainer{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            background: #D0E7FD;
            width:56px;
            height:56px;
        }

        .title{
            display: flex;
            flex-direction: column;
            height: 100%;
            gap: 4px;

            .image{
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                color: $surface-on;
            }

            .choose{
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $secondary;
            }
        }
    }

    .inputContainer{
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 24px;

        .material-symbols-outlined{
            color: $secondary;
            background: $secondary-container;
            padding:4px;
            border-radius:100%;
        }

        .warning{
            color: $secondary;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

    }
}

.buttonContainer{
    position: fixed;
    right: 0;
    left: 0;
    margin: 0 auto;
    max-width: 600px;
    bottom: 5%;
    
    .upload{
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $primary-on;
        background: $primary;
        border-radius: 12px;
        width: 95%;
        position: relative;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
}
</style>