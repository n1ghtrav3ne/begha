<template>

<div class="greenBox container">

<div class="firstItem">

    <span class="material-symbols-outlined ">
    arrow_right_alt
</span>

<span>آرامستان</span>

</div>    

    <img @click="modalStore.changeCemeterySearch('active')" class="mr-auto" src="~/assets/images/cemetery/search-normal copy.svg" alt="">

</div>

<div class="container">

    <div class="cemeteryTitle">

        <div class="imgContainer">

            <img class="h-full w-full" src="~/assets/images/one-begha/begha-profile.png" alt="">

        </div>

        <div class="name">

            <span>آرامستان بقیع</span>

            <div class="mausoleumName px-[10px] py-[4px]">

                <img class="pb-[3px]" src="~/assets/images/cemetery/holyBegha.svg" alt="">

                <span>امام زاده صالح (ع)</span>

            </div>

        </div>

        <div @click="reservationStore.changeGraveReservation('active')" class="graveReq">

            <div class="imgHolder">

                <img class="graveImg" src="~/assets/images/cemetery/grave-stone.svg" alt="">

                <img class="addImg" src="~/assets/images/cemetery/add-circle.svg" alt="">

            </div>

            <span>درخواست قبر</span>

        </div>

    </div>

    <hr class="firstLine">

    <div class="deceasedTitle mt-[32px] w-full">

        <span class="theDeceased">متوفیان</span>

        <div @click="modalStore.changeBeghaCemeteryFilter('active')" class="sectionFilter">
            <span>همه قطعه ها</span>
            <img src="~/assets/images/cemetery/arrow-down.svg" alt="">
        </div>

    </div>

    <div class="cardsContainer mt-[24px]">

        <div v-for="(item,index) in theDeceaseds" :key="index">

            <deceasedCard @click="modalStore.changeDeceasedInfo('active')" :item="item" />

        </div>

    </div>

</div>

    <orderingFilter v-if="modalStore.isOpenBeghaCemeteryFilter" />

    <deceasedInfo v-if="modalStore.isOpenDeceasedInfo" />

    <search v-if="modalStore.isOpenCemeterySearch" />

    <graveReserve v-if="reservationStore.isOpenGraveReservation" />

</template>
<script setup lang="ts">

import deceasedCard from "./deceasedCard.vue"

import orderingFilter from "./orderingFilter.vue"

import deceasedInfo from "./deceasedInfo.vue"

import search from "./cemeterySearch/search.vue"

import graveReserve from "./graveRequest/graveReserve.vue"

import { useModalStore } from "~/stores/modals-store";

import {useReservationStore} from "~/stores/graveRequest-store";

const reservationStore=useReservationStore();

const modalStore = useModalStore();

defineComponent({deceasedCard,orderingFilter,deceasedInfo,search,graveReserve})

const theDeceaseds=ref<{name:string;fatherName:string;section:string}[]
>([
    
    {
        name:'محمدرضا موسوی',
        fatherName:'فرزند عباس',
        section:'قطعه شهدا (قبر ۲۲۱، طبقه ۲)'
    },
    {
        name:'محمدرضا موسوی',
        fatherName:'فرزند عباس',
        section:'قطعه شهدا (قبر ۲۲۱، طبقه ۲)'
    },
    {
        name:'محمدرضا موسوی',
        fatherName:'فرزند عباس',
        section:'قطعه شهدا (قبر ۲۲۱، طبقه ۲)'
    },
    {
        name:'محمدرضا موسوی',
        fatherName:'فرزند عباس',
        section:'قطعه شهدا (قبر ۲۲۱، طبقه ۲)'
    },
    {
        name:'محمدرضا موسوی',
        fatherName:'فرزند عباس',
        section:'قطعه شهدا (قبر ۲۲۱، طبقه ۲)'
    },
    {
        name:'محمدرضا موسوی',
        fatherName:'فرزند عباس',
        section:'قطعه شهدا (قبر ۲۲۱، طبقه ۲)'
    },
])


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

.cemeteryTitle{
    width: 100%;
    height: 68px;
    display: flex;
    flex-direction: row;
    gap: 8px; 

    .imgContainer{
        width: 68px;
        height: 68px;
        border-radius: 100%;

        img{
            border-radius: 100%;
        }
    }

    .name{
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: $surface-on;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: end;
        .mausoleumName{
            display: flex;
            flex-direction: row;
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            align-items: center;
            background: $secondary-container;
            border-radius: 8px;
            gap: 4px;
        }
    }

    .graveReq{
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-right: auto;
        align-items: center;
        gap: 8px;        

        .imgHolder{
            border-radius: 100%;
            background: $primary;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 36px;
            width: 36px;

            .graveImg{
                position: relative;
                right: 20%;
            }

            .addImg{
                position: relative;
                left: 60%;
                top: 18%;
            }
        
        }
        
        span{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$primary;
        }
    }

}

.firstLine{
        width:100%;
        height: 0;
        margin-top: 24px;
        color: $outline-variant;
    }

    .deceasedTitle{

        padding-top: 8px;
        padding-bottom: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $outline-variant;

        .theDeceased{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$surface-on;
            display: flex;
            align-items: center;
            
        }

        .sectionFilter{
            display: flex;
            flex-direction: row;
            gap: 4px;

            span{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color:$secondary;
                display: flex;
                align-items: center;
            }
        
        }

    }

</style>