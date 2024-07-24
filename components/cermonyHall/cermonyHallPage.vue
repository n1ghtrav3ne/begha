<template>

    <div class="greenBox container">

        <div class="firstItem">

            <span @click="$router.push('../')" class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span>سالن مراسم</span>
        
        </div>    
        

        

        <div @click="modalStore.changeCermonyHallSearchCities('active')" class="secondItem">
            <img src="~/assets/images/cermony/arrow-down.svg" alt="">

        <span>
            اصفهان، نجف اباد
        </span>

        <img src="~/assets/images/cermony/Location copy.svg" alt="">

        </div>

    </div>

    <div class="container">
        <div class="beghaSearch">

        <input placeholder="جست و جو اماکن متبرکه" type="text">

        <div @click="modalStore.changeFacilitiesSearchFilter('active')" class="searchIconContainer">
            <img src="~/assets/images/cermony/Group 48096574.svg" alt="img">
        </div>

        </div>

        <div class="reservationDate mx-auto px-[24px] py-[16px]">

        <span class="text-[14px]">انتخاب تاریخ رزرو</span>

        <span class="material-symbols-outlined">
            arrow_drop_down
        </span>

        </div>

        <div class="cermonyTitle mx-auto flex">

        <img src="~/assets/images/home/popular-begha-shape.png" alt="beghaShape">

        <p class="firstTxt w-[83px] h-[25px] text-[16px] mr-[8px]">سالن مراسم</p>

        <div @click="modalStore.changeCermonyHallRequestFilterActive('active')" class="filter">
            <p class="secondTxt">ترتیب یر اساس</p>
            <p class="thirdTxt">محبوب ترین</p>
        </div>

        <span class="material-symbols-outlined">
            arrow_drop_down
        </span>

        </div>

        <NuxtLink to="begha-cermonyHall/4233" v-for="(item,index) in beghaCermonyHallItems" :key="index" class="cermonyHallContainer">
        <cermonyCard :item="item" />
        </NuxtLink>
        
        </div>

        <cermonyHallFilter  v-if="modalStore.isOpenCermonyHallrequestFilter" />
        <cermonySearchCities v-if="modalStore.isOpenCermonyHallSearchCities" />

        <facilitiesSearchFilter v-if="modalStore.isOpenFacilitiesSearchFilter" />

    
</template>

<script lang="ts" setup>
    import cermonyHallFilter from "./cermonyHallFilter.vue"
    import cermonySearchCities from "./cermonySearchCities.vue"
    import CermonyCard from "./cermonyCard.vue";
    import facilitiesSearchFilter from "./facilitiesSearchFilter.vue"
    import { useModalStore } from "~/stores/modals-store";
    const modalStore = useModalStore();

    const beghaCermonyHallItems=ref<
    {title:string; members:string; rating:number; capacity:number; mausoleum:string}[]
    >([
        {
            title:'سالن مراسم',
            members:'مداح، سخنران، پذیرایی',
            rating:6.5,
            capacity:700,
            mausoleum:'امام زاده صالح (ع)'
        },
        {
            title:'سالن مراسم',
            members:'مداح، سخنران، پذیرایی',
            rating:6.5,
            capacity:700,
            mausoleum:'امام زاده صالح (ع)'
        },
        {
            title:'سالن مراسم',
            members:'مداح، سخنران، پذیرایی',
            rating:6.5,
            capacity:700,
            mausoleum:'امام زاده صالح (ع)'
        },
        {
            title:'سالن مراسم',
            members:'مداح، سخنران، پذیرایی',
            rating:6.5,
            capacity:700,
            mausoleum:'امام زاده صالح (ع)'
        },
    ]);
    defineComponent([CermonyCard,cermonyHallFilter,cermonySearchCities])

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
    align-items: center;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 11px;
    padding-right: 16px;
    color: $primary-on;
    font-family: 'yekan-regular';

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

    .secondItem{
        width: 142px;
        font-weight: 400;
        display:flex;
        flex-direction: row;
        align-items: center;
        margin-right: auto;
        justify-content: space-between;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
.beghaSearch{
    border: 1px solid $outline;
    font-family: 'yekan-regular';
    font-size: 12px;
    padding: 16px;
    align-items: center;
    border-radius: 16px;
    flex-direction: row;
    display: flex;
    height: 52px;
    width: 100%;
    input{
        outline: 0;
        background-color: $surface;
        font-size: 12px;
        width:90%;
    }

    .searchIconContainer{
            margin-right: auto;
            display: flex;
            border-radius: 100%;
            justify-content: center;
            width: 32px;
            height: 32px;
            padding: 4px;
            background-color: $secondary-container;
            
            img{
                width: 24px;
                height: 24px;
            }
           
     }
    

}

.beghaSearch:hover{
    border: 1px solid $secondary;
    box-shadow: 0px 1px 8px 0px rgba(66, 159, 245, 0.45);
}

.reservationDate{
    border: 1px solid $outline-variant;
    color:$secondary;
    font-family: 'yekan-regular';
    width: 100%;
    border-radius:16px;
    height:54px;
    display:flex;
    margin-top: 15px;
    align-items:center;
    flex-direction:row;
}

.cermonyTitle{

    align-items: center;
    width: 100%;
    margin-bottom: 24px;
    margin-top: 32px;
    display:flex;

    .filter{
       
        width: 127px;
        height: 17px;
        font-size: 11px;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .firstTxt{
        font-family: 'yekan-regular';
        font-weight: 700;
    }
    
    .thirdTxt{
        color:$secondary
    }

    span{
        color:$secondary
    }

}


</style>
