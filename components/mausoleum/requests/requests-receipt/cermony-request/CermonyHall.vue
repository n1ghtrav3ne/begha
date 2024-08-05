<template>

     <div class="greenBox flex flex-row pt-[12px] pb-[11px] px-[16px] bg-primary-700 w-full items-center">

            <div class="firstItem flex flex-row items-center gap-4 text-primary-50">

                <span @click="$router.go(-1)" class="material-symbols-outlined ">
                arrow_right_alt
            </span>

            <span class="text-[16px]">درخواست ها</span>

            </div>   
            
            </div>


        <div class="container">

             <div class="flex flex-row w-full justify-between items-center mt-2">

            <div class="flex flex-col gap-1">

                <span class="text-[16px] font-bold">سالن مراسم</span>

                <span v-if="newOne" class="text-xs text-secondary-700 font-normal">درخواست جدید</span>

                <span v-if="!newOne" class="font-normal text-xs text-neutral-500">پاسخ داده شده در ۱۴۰۲/۱۲/۱۲ ، ۱۲:۳۴</span>

            </div>


            <div v-if="newOne" class="flex flex-row items-center gap-3">

                <div class="flex flex-col items-center gap-1">

                    <div @click="AcceptMessageSheet=true"  class="bg-primary-700 w-10 h-10 flex justify-center items-center p-2 rounded-lg">

                        <span class="material-symbols-outlined text-primary-50">
                        check
                        </span>

                    </div>

                    <span class="text-primary-700 font-normal text-sm">تائيد</span>

                </div>

                   <div @click="RejectMessageSheet=true" class="flex flex-col items-center gap-1">

                    <div class="bg-error-700 w-10 h-10 flex justify-center items-center p-2 rounded-lg">

                        <span class="material-symbols-outlined text-primary-50">
                        close
                        </span>

                    </div>

                    <span class="text-error-700 font-normal text-sm">رد</span>

                </div>

            </div>

            <span v-if="confirmed" class="text-xs font-normal bg-primary-200 rounded-lg text-primary-700 px-3 py-2">تائید شده</span>

            <span v-if="denied" class="text-xs font-normal bg-error-100 rounded-lg text-error-700 px-3 py-2">رد شده</span>

            <span v-if="failed" class="text-xs font-normal bg-error-100 rounded-lg text-error-700 px-3 py-2">لغو شده توسط کاربر</span>

            </div>


                <div class="flex flex-row mt-6 py-2 w-fit items-center px-4 rounded-lg gap-1 bg-secondary-200">

                    <span class="icon-Mosque-Iran text-secondary-700 scale-150 mb-1"></span>

                    <span class="font-normal text-xs">امام زاده صالح (ع)</span>

                </div>

                <div v-if="confirmed" class="flex flex-col py-2 px-4 gap-2 border text-primary-700 border-success-400 bg-primary-200 rounded-xl mt-8">

                    <div class="flex flex-row gap-2 items-center">

                        <span class="material-symbols-outlined">
                        check_circle
                        </span>

                        <span class="font-bold text-sm">
                            پذیرش موفق
                        </span>

                    </div>

                    <span class="text-xs font-normal">درخواست کاربر در تاریخ ۱۴۰۲/۱۲/۱۲ ساعت ۱۲:۳۴ تائید شد. </span>

                </div>

                <div v-if="denied" class="flex flex-col py-2 px-4 gap-3 border text-error-700 border-error-400 bg-error-100 rounded-xl mt-8">

                    <div class="gap-2 flex flex-row items-center">

                        <span class="material-symbols-outlined scale-150">
                        cancel
                        </span>

                        <div class="flex flex-col gap-1">

                            <span class="text-sm font-bold">پذیرش ناموفق</span>

                            <span class="font-normal text-xs">درخواست کاربر در تاریخ ۱۴۰۲/۱۲/۱۲ ساعت ۱۲:۳۴ رد شد.</span>

                        </div>

                    </div>

                    <hr class="w-full text-error-400">

                    <div class="flex flex-row items-center gap-2">

                        <span class="font-normal text-xs">مشاهده توضیحات</span>

                        <span class="icon-Arrow-Bottom-Iran scale-150"></span>

                    </div>

                </div>

                <div v-if="failed" class="flex flex-row items-center py-2 px-4 gap-3 border text-error-700 border-error-400 bg-error-100 rounded-xl mt-8">

                    <span class="material-symbols-outlined scale-150">
                    cancel
                    </span>

                    <div class="flex flex-col gap-1">

                        <span class="font-bold text-sm">لغو شده توسط کاربر</span>

                        <span class="text-xs font-normal">درخواست ارسال شده توسط کاربر در تاریخ ۱۴۰۲/۱۲/۱۲ ساعت ۱۲:۳۴ لغو شد.</span>

                    </div>

                </div>

                <div class="mt-8 rounded-xl w-full flex flex-col px-3 py-3 bg-white ">

                    <div v-for="(item , index) in receiptInfo" :key="index" class="flex flex-row items-center py-3 border-b border-dashed border-neutral-100 w-full justify-between">

                        <span class="text-xs font-normal text-neutral-500">{{ item.title }}</span>

                        <div class="flex flex-row items-center gap-1">

                            <span>{{ item.value }}</span>

                            <span v-if="item.hasIcon" class="material-symbols-outlined scale-75">
                            content_copy
                            </span>

                        </div>

                    </div>

                    <span class="text-secondary-700 font-normal text-xs mt-3 mb-3">خدمات درخواستی</span>

                    <div class="flex flex-row items-center gap-3">

                        <div class="bg-secondary-200 flex justify-center items-center w-6 h-6 rounded-lg">

                            <span class="material-symbols-outlined text-secondary-700">
                            check
                            </span>

                        </div>

                        <span class="font-normal text-sm">پذیرایی مراسم ختم</span>

                    </div>

                    
                    <div class="flex flex-row items-center gap-3 mt-4">

                        <div class="bg-secondary-200 flex justify-center items-center w-6 h-6 rounded-lg">

                            <span class="material-symbols-outlined text-secondary-700">
                            check
                            </span>

                        </div>

                        <span class="font-normal text-sm">مداح، سخنران، قاری</span>

                    </div>
                     
                </div>

                <div class="flex flex-col gap-4 mt-6">

                    <span class="text-xs font-normal text-neutral-500">درخواست‌های قبلی این کاربر</span>

                    <RequestCard :item="item" v-for="(item , index) in requestItems" :key="index" />

                </div>

        </div>

        <BottomSheets v-model="AcceptMessageSheet">

            <AcceptMessage @close="AcceptMessageSheet=false" />

        </BottomSheets>
       
        <BottomSheets v-model="RejectMessageSheet">

            <RejectMessage />

        </BottomSheets>

</template>

<script setup lang="ts">

import RequestCard from '../../RequestCard.vue';

import AcceptMessage from './AcceptMessage.vue';

import RejectMessage from '../RejectMessage.vue';

const newOne=ref(true)

const confirmed=ref(false)

const denied=ref(false)

const failed=ref(false)

const AcceptMessageSheet=ref(false)

const RejectMessageSheet=ref(false)

const receiptInfo=ref<{title:string ; value:string ; hasIcon?:boolean}[]
>([
    {
        title:'اطلاعات کاربر',
        value:'۰۹۱۲۳۴۵۶۷۸۹',
        hasIcon:true
    },
    {
        title:'نام و نام‌خانوادگی',
        value:'محمدرضا اصلانی',
    },
    {
        title:'تاریخ ارسال درخواست',
        value:'۱۲ اردیبهشت ۱۴۰۳، ۱۴:۳۲'
    },
    {
        title:'ساعت ورود و خروج',
        value:'۱۲:۳۴ - ۱۴:۵۶'
    },
    {
        title:'مبلغ پرداختی',
        value:'۱٬۲۰۰٬۰۰۰ تومان'
    },
    {
        title:'شماره پیگیری',
        value:'۷۴۸۴۹۳',
        hasIcon:true
    },
    {
        title:'شماره سفارش',
        value:'۹۴۵۰۰۳۲۴',
        hasIcon:true
    }
])

const requestItems=ref<{text:string ; name:string ; new?:boolean ; inProgress?:boolean ; denied?:boolean ; confirmed?:boolean}[]
>([
    {
        text:'درخواست اتاق زائرسرا',
        name:'۱۴۰۲/۱۲/۰۲',
        confirmed:true,
    },
    {
        text:'درخواست اتاق زائرسرا',
        name:'۱۴۰۲/۱۲/۰۲',
        denied:true,
    },
])
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

</style>