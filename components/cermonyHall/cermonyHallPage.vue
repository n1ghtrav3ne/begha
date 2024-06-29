<template>

    <div class="greenBox container flex flex-row items-center py-[12px] px-[16px]">

        <span class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <div class="pr-[16px]">سالن مراسم</div>

        <div class="flex flex-row items-center mr-auto gap-[4px]">
            <span class="material-symbols-outlined mr-[70px] flex w-[24px] h-[24px]">
            arrow_drop_down
            </span>

        <div>
            اصفهان، نجف اباد
        </div>

        <span class="icon-Location-Iran location-choose-icon ml-1"> </span>

        </div>

    </div>

    <div class="container">
        <div class="beghaSearch text-[12px] p-[16px] items-center rounded-[16px] flex-row mt-[15px] flex w-full h-[52px]">

        <input class="w-[239px] h-[19px]" placeholder="جست و جو اماکن متبرکه" type="text">

        <div class="searchIconContainer rounded-full flex w-[24px] justify-center mr-auto h-[24px] items-center">
            <img src="~/assets/images/cermony/Group 48096574.svg" alt="img">
        </div>

        </div>

        <div class="reservationDate w-full rounded-[16px] h-[54px] flex mt-[15px] items-center flex-row mx-auto px-[24px] py-[16px]">

        <p class="text-[14px] w-[98px] h-[22px]">انتخاب تاریخ رزرو</p>

        <span class="material-symbols-outlined">
            arrow_drop_down
        </span>

        </div>

        <div class="cermonyTitle w-full mx-auto flex items-center mb-[24px] mt-[32px]">

        <img src="~/assets/images/home/popular-begha-shape.png" alt="beghaShape">

        <p class="firstTxt w-[83px] h-[25px] text-[16px] mr-[8px]">سالن مراسم</p>

        <div @click="modalStore.changeCermonyHallRequestFilterActive('active')" class="w-[127px] h-[17px] text-[11px] mr-auto flex justify-between flex-row">
            <p class="secondTxt">ترتیب یر اساس</p>
            <p class="thirdTxt">محبوب ترین</p>
        </div>

        <span class="material-symbols-outlined">
            arrow_drop_down
        </span>

        </div>

        <div v-for="(item,index) in beghaCermonyHallItems" :key="index" class="cermonyHallContainer">
        <cermonyCard :item="item" />
        </div>
        
        </div>

        <cermonyHallFilter  v-if="modalStore.isOpenCermonyHallrequestFilter" />
    
</template>

<script lang="ts" setup>

    import cermonyHallFilter from "./cermonyHallFilter.vue"
    import CermonyCard from "./cermonyCard.vue";
    import { useModalStore } from "~/stores/modals-store";
    const modalStore = useModalStore();

    const beghaCermonyHallItems=ref<
    {title:string; members:string; rating:number; capacity:string; mausoleum:string}[]
    >([
        {
            title:'سالن مراسم',
            members:'مداح، سخنران، پذیرایی',
            rating:6.5,
            capacity:'ظرفیت ۷۰۰ نفر',
            mausoleum:'امام زاده صالح (ع)'
        },
        {
            title:'سالن مراسم',
            members:'مداح، سخنران، پذیرایی',
            rating:6.5,
            capacity:'ظرفیت ۷۰۰ نفر',
            mausoleum:'امام زاده صالح (ع)'
        },
        {
            title:'سالن مراسم',
            members:'مداح، سخنران، پذیرایی',
            rating:6.5,
            capacity:'ظرفیت ۷۰۰ نفر',
            mausoleum:'امام زاده صالح (ع)'
        },
        {
            title:'سالن مراسم',
            members:'مداح، سخنران، پذیرایی',
            rating:6.5,
            capacity:'ظرفیت ۷۰۰ نفر',
            mausoleum:'امام زاده صالح (ع)'
        },
    ]);
    defineComponent([CermonyCard,cermonyHallFilter])

    const showOrder=ref(false);

    const activateShowOrder=()=>{
        showOrder.value= !showOrder.value
    }

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.greenBox{
    background-color: $primary;
    height:48px;
    display:flex;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 11px;
    padding-right: 16px;
    color: $primary-on;
    font-size: 12px;
    font-family: yekanBakh;
}
.beghaSearch{
    border: 1px solid $outline;
    font-family: yekanBakh;

    input{
        outline: 0;
        background-color: $surface;
    }

    .searchIconContainer{
            width: 32px;
            height: 32px;
            background-color: $secondary-container;
            .searchIcon{
                color: $secondary;
            }
     }
    
}

.reservationDate{
    border: 1px solid $outline-variant;
    color:$secondary;
    font-family: yekanBakh;
}

.cermonyTitle{

    .firstTxt{
        font-family: yekanBakh;
        font-weight: 700;
    }
    
    .thirdTxt{
        color:$secondary
    }

    span{
        color:$secondary
    }

}
@font-face {
    font-family: yekanBakh;
    src: url("~/assets/fonts/yekanBakh/YekanBakh-Regular.woff");
}
</style>
