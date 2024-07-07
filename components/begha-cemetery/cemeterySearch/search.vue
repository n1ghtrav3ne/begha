<template>

    <div class="searchPage container">
        
        <div class="inputContainer">

            <img @click="modalStore.changeCemeterySearch('deactive')" class="w-[36px] h-[36px]" src="~/assets/images/cemetery/Back Icon.svg" alt="">

            <div class="input grid grid-cols-5 items-center">

                <span class="mausoleumName col-span-2">امام زاده صالح</span>



                <input class="col-span-2" placeholder="نام متوفی" type="text">

                <div @click="modalStore.changeCemeterySearchFilter('active')" class="iconHolder col-span-1">
                    <img src="~/assets/images/cermony/Group 48096574.svg" alt="">
                </div>


               

            </div>

        </div>

    </div>

    <searchFilter v-if="modalStore.isOpenCemeterySearchFilter" />

</template>
<script setup lang="ts">

import searchFilter from "./searchFilter.vue"

import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

defineComponent({searchFilter})

</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.searchPage{
    position: fixed;
    top: 0;
    z-index: 50;
    background-color: $surface;
    width:100%;
    height:100%;

    .inputContainer{
        width:100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 54px;
        margin-top: 16px;

        .input{
            width: 100%;
            height: 100%;
            border: 1px solid $outline;
            border-radius: 16px;
            

            .mausoleumName{
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-left: 1px solid $outline;
            }

            hr{
                height: 20px;
                width: 1px;
                color: $outline;
                background: $outline;
            }

            input{
                background: transparent;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                outline: 0;
                font-size: 14px;
                display: flex;
                align-items: center;
                padding-right: 8px;
            }

            .iconHolder{
                background: $secondary-container;
                border-radius:100%;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:3px;
                width: 30px;
                height: 30px;
                margin-right: 30%;
            
                img{
                   width: 90%;
                   height: 90%;

                }
                
            }
        }
    }
}

</style>