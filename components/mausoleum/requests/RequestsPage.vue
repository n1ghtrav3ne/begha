<template>

   <div class="greenBox container">

    <div class="firstItem">

        <span @click="$router.go(-1)" class="material-symbols-outlined ">
        arrow_right_alt
    </span>

    <span>درخواست ها</span>

    </div>    

    <img @click="SearchOpen=true" class="mr-auto" src="~/assets/images/mausoleum-media/search-normal.svg" alt="">

    </div>

    <div class="container">

        <div class="w-full bg-neutral-100 text-neutral-500 mt-[16px] p-[2px] h-[36px] text-[12px] rounded-lg flex flex-row justify-center items-center">

            <div @click="userKind=false" :class="{active:!userKind}" class="flex justify-center h-full rounded-[8px] items-center w-[50%]">

                <span>کاربر عادی</span>

            </div>

            <div @click="userKind=true" :class="{active:userKind}" class="flex justify-center h-full rounded-[8px] items-center w-[50%]">

                <span>عوامل بقعه</span>

            </div>


        </div>

        <div class="w-full border-b border-b-neutral-100 flex flex-row justify-between mt-8 pb-[12px]">

            <span class="text-sm font-normal">درخواست ها</span>

            <div @click="sortItemsSheet=true" class="flex flex-row text-sm font-normal items-center gap-1 text-secondary-700">
                
                <span>همه</span>

                <span class="icon-Arrow-Bottom-Iran rotate-90 scale-125"></span>

            </div>

        </div>

        <div class="w-full h-auto flex flex-col mt-[24px]">

            <span class="text-xs font-normal text-neutral-500">دوشنبه ۱۴۰۲/۱۲/۰۲</span>

            <RequestCard @click="selectIndex(index)" :item="item" v-for="(item , index) in requestItems" :key="index" />

        </div>

          <div class="w-full h-auto flex flex-col mt-12">

            <span class="text-xs font-normal text-neutral-500">دوشنبه ۱۴۰۲/۱۲/۰۲</span>

            <RequestCard @click="selectIndex(index)" :item="item" v-for="(item , index) in requestItems" :key="index" />

        </div>

    </div>

    <BottomSheets title="مرتب ساری بر اساس" v-model="sortItemsSheet">

        <SortItems />

    </BottomSheets>

    <Search @close="SearchOpen=false" v-if="SearchOpen" />


</template>

<script setup lang="ts">

import RequestCard from './RequestCard.vue';

import SortItems from './SortItems.vue';

import Search from './Search.vue';

const userKind=ref(false)

const SearchOpen=ref(false)

const sortItemsSheet=ref(false)

const requestItems=ref<{text:string ; name:string ; new?:boolean ; inProgress?:boolean ; denied?:boolean ; confirmed?:boolean}[]
>([
    {
        text:'درخواست سالن مراسم',
        name:'محمدحسین قربانی',
        new:true,
    },
    {
        text:'درخواست کتاب',
        name:'محمدحسین قربانی',
        inProgress:true,
    },
    {
        text:'درخواست زائرسرا',
        name:'محمدحسین قربانی',
        denied:true
    },
    {
        text:'درخواست قبر',
        name:'محمدحسین قربانی',
       confirmed:true
    },
])

const router=useRouter()


const selectedIndex=ref()

const selectIndex=(index:number)=>{
    selectedIndex.value=index
    if(selectedIndex.value===0){
        router.push('requests/cermony-hall/1')
    }
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

.active{
    color: $surface-on;
    background: $surface;
    box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.04);
}
</style>