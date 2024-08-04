<template>

  <div class="greenBox flex flex-row pt-[12px] pb-[11px] px-[16px] bg-primary-700 w-full items-center">

  <div class="firstItem flex flex-row items-center gap-4 text-primary-50">

      <span @click="$router.go(-1)" class="material-symbols-outlined ">
      arrow_right_alt
  </span>

  <span class="text-[16px]">درخواست های من</span>

  </div>   

  </div>

  <div class="container">

    <div class="flex flex-row items-center w-full mt-6 justify-between">

    <span class="text-base font-bold">درخواست زائرسرا</span>

    <span v-if="confirmed" class="text-primary-700 bg-primary-200 px-3 py-2 rounded-xl text-tiny">تائید شده</span>

  </div>

  <div class="px-[10px] py-2 w-fit rounded-lg flex flex-row items-center gap-1 mt-3 bg-secondary-200">

    <span class="icon-Mosque-Iran text-secondary-700 scale-150 pb-1"></span>

    <span>امام زاده صالح (ع)</span>

  </div>

    <span class="text-tiny relative top-3 text-neutral-500">اصفهان، خیابان مصلی، لورم ایپسوم، روبروی لورم</span>


    <div v-if="confirmed" class="flex flex-row items-center py-2 px-4 gap-3 border text-primary-700 border-success-400 bg-primary-200 rounded-xl mt-8">

            
      <span class="material-symbols-outlined scale-150">
          check_circle
      </span>

      <div class="flex flex-col gap-2">

      <span class="font-bold text-sm">
          پذیرش موفق
      </span>

        <span class="text-xs font-normal">درخواست کاربر در تاریخ ۱۴۰۲/۱۲/۱۲ ساعت ۱۲:۳۴ تائید شد. </span>

      </div>


    </div>


          <div class="mt-8 w-full flex flex-col px-3 border-y border-neutral-100 py-3">

                    <div v-for="(item , index) in receiptInfo" :key="index" class="flex flex-row items-center py-3 w-full justify-between">

                        <span class="text-xs font-normal text-neutral-500">{{ item.title }}</span>

                        <div class="flex flex-row items-center gap-1">

                            <span class="text-sm font-bold">{{ item.value }}</span>

                            <span v-if="item.hasIcon" class="material-symbols-outlined scale-75">
                            content_copy
                            </span>

                        </div>

                    </div>

                    
                </div>


          <div class="flex flex-col gap-4 mt-4">

            <span class="text-tiny text-neutral-500">لیست رزرو ها</span>

            <div v-for="index in 3" :key="index" class="flex flex-row gap-2 border-b border-secondary-200 w-full pb-[11px] items-center">

              <img class="w-11 h-11 rounded-xl" src="~/assets/images/cemetery/cemetery.png" alt="">

              <div class="flex flex-col gap-1">

                <span class="text-sm">درخواست اتاق ۱۲ نفره (۱ عدد)</span>

                <span class="text-tiny text-neutral-500">مبلغ کل: ۱٬۲۰۰٬۰۰۰ تومان</span>

              </div>

            </div>

          </div>


          <div class="flex flex-col items-center mt-8">

            <div class="w-full p-2 flex h-11 justify-center items-center rounded-lg bg-primary-700 text-primary-50 cursor-pointer">

              <div class="flex flex-row items-center gap-2">

                <span class="material-symbols-outlined">
                call
                </span>

                <span class="text-xs">ارتباط با پشتیبانی</span>

              </div>

            </div>


            <div @click="$router.push('/zaer-sara/list')" class="w-full p-2 flex h-11 justify-center items-center rounded-lg text-primary-700 cursor-pointer">

              <div class="flex flex-row items-center gap-2">

                <span class="text-xs">رفتن به صفحه زائرسرا</span>

              </div>

            </div>

          </div>

  </div>


</template>

<script setup lang="ts">

const confirmed=ref(true)

const receiptInfo=ref<{title:string ; value:string ; hasIcon?:boolean}[]
>([
    {
        title:'مبلغ پرداختی',
        value:'۱٬۲۰۰٬۰۰۰ تومان',
    },
    {
        title:'تاریخ ارسال درخواست',
        value:'۱۲ اردیبهشت ۱۴۰۳، ۱۴:۳۲',
    },
    {
        title:'تاریخ ورود',
        value:'۱۲ اردیبهشت ۱۴۰۳'
    },
    {
        title:'تاریخ خروج',
        value:'۱۲ اردیبهشت ۱۴۰۳'
    },
    {
        title:'شماره پیگیری',
        value:'۷۴۸۴۹۳'
    },
    {
        title:'شماره سفارش',
        value:'۹۴۵۰۰۳۲۴',
        hasIcon:true
    },
])

</script>