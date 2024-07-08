<template>

    <BaseDialog :modalHeight="307">
        
        <template #headerText>

            <span class="headerText">تاریخ فوت متوفی را انتخاب کنید.</span>

        </template>

        <template #body>

            <div class="swiperContainer">

                 <Swiper  ref="swiper" @scroll="onSlideChange"
                    :modules="[SwiperPagination, SwiperEffectCreative]"
                    :slidesPerView="3"
                    :loop="true"
                    direction="vertical"
                    class="daySlider"
                    @click="toggleBars(1)" 
                    >
                    <SwiperSlide :class="{active:barsStyle===1}" v-for="(day,index) in days" :key="index">
                        
                    {{ day }}

                    </SwiperSlide>

                </Swiper>

                <Swiper
                    :modules="[SwiperPagination, SwiperEffectCreative]"
                    :slidesPerView="3"
                    :loop="true"
                    direction="vertical"
                    ref="swiper"
                    class="monthSlider"
                    @click="toggleBars(2)" 
                    >
                    <SwiperSlide  v-for="(month,index) in months" :key="index">
                        
                    {{ month }}

                    </SwiperSlide>

                </Swiper>

                <Swiper
                    :modules="[SwiperPagination, SwiperEffectCreative]"
                    :slidesPerView="3"
                    :loop="true"
                    direction="vertical"
                    ref="swiper"
                    class="yearSlider"
                    @click="toggleBars(3)" 
                    >
                    <SwiperSlide v-for="(year,index) in years" :key="index">
                        
                    {{ year }}

                    </SwiperSlide>

                </Swiper>

            </div>

            <div class="bars">

                <div  class="bar" v-for="index in 3" :key="index">

                </div>

            </div>

        </template>

       
    </BaseDialog>

</template>
<script setup lang="ts">

import BaseDialog from "~/components/global/BaseDialog.vue"

defineComponent({BaseDialog})
    

const days: Ref<number[]> = ref([])

for (let i = 1; i <= 31; i++) {
  days.value.push(i)
}

enum months {
  Farvardin = 'فروردین',
  Ordibehesht = 'اردیبهشت',
  Khordad = 'خرداد',
  Tir = 'تیر',
  Mordad = 'مرداد',
  Shahrivar = 'شهریور',
  Mehr = 'مهر',
  Aban = 'آبان',
  Azar = 'آذر',
  Dey = 'دی',
  Bahman = 'بهمن',
  Esfand = 'اسفند'
}

const currentYear=ref(1403)
const persianMonths: months[] = Object.values(months);

const startYear = ref(1403)
const maxYear = ref(1500)

const years = ref(Array.from({ length: maxYear.value - startYear.value + 1 }, (_, i) => startYear.value + i))

const barsStyle=ref(0)

const toggleBars=(index:number)=>{
    barsStyle.value=index
}

const swiper = ref()
    const activeSlide = ref(0)

    const onSlideChange = () => {
      activeSlide.value = swiper.value.activeIndex
    }
</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
}
.swiperContainer{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 132px;
    gap: 12px;
    margin-top: 16px;
}
.swiper{
    height:100% !important;
    width: 40%;

  }

    .swiper-slide {
      position: relative !important;
      direction: ltr !important;
      display: flex;
      justify-content: center;
      align-items: center;
      
      height: 30%;
    }
.singleSlide{
    background: red;
}
.monthSlider{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
}
.daySlider{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
}

.bars{
    display: flex;
    flex-direction: row;
    gap: 12px;
    position: relative;
    height: 37px;
    width: 100%;
    right: 0;
    bottom: 34%;

    .bar{
        border-top: 1px solid $outline-variant;
        border-bottom: 1px solid $outline-variant;
        height: 100%;
        width:100%;
    }

  
}
.active{
    border-top: 1px solid $secondary;
    border-bottom: 1px solid $secondary;
    }
</style>