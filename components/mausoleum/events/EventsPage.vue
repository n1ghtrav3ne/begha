<template>
    
    <div class="greenBox container">

        <div class="firstItem">

            <span @click="$router.go(-1)" class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span>رویداد ها</span>

        </div>    

    </div>

    <div ref="events" class="contianer">
        
        <div v-if="emptyCheck" class="emptyContainer">

                <div class="imageContainer">

                <img src="~/assets/images/noItem/No Item.svg" alt="">

                <span>رویدادی تعریف نشده است.</span>

                </div>

                <div class="newEvent">

                    

                    <span>رویداد جدید</span>

                </div>

        </div>

        <div class="search">

            <img src="~/assets/images/cermony/search-normal.svg" alt="">

            <input placeholder="جستجو" type="text">

            <span @click="DatePickerSheet=true" class="material-symbols-outlined"> calendar_month </span>

        </div>

        <div class="day mt-[32px]">

            <span>امروز</span>

             <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slidesPerView="'auto'"
                :spaceBetween="25"
                :loop="false"
                :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
                }"
            >
                <SwiperSlide @click="$router.push('events/event-detail')" class="!w-[85%]" v-for="(item , index) in eventsItems" :key="index">
                    
                    <EventCard :item="item" />

                </SwiperSlide>

            </Swiper>

        </div>

        <div class="day mt-[32px]">

            <span>دوشنبه ۲۲ اردیبهشت</span>

             <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slidesPerView="'auto'"
                :spaceBetween="25"
                :loop="false"
                :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
                }"
            >
                <SwiperSlide  @click="$router.push('events/event-detail')" class="!w-[85%]" v-for="(item , index) in eventsItems" :key="index">
                    
                    <EventCard :item="item" />

                </SwiperSlide>

            </Swiper>

        </div>

        <div class="day mt-[32px]">

            <span>یکشنبه ۲۱ اردیبهشت</span>

             <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slidesPerView="'auto'"
                :spaceBetween="25"
                :loop="false"
                :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
                }"
            >
                <SwiperSlide  @click="$router.push('events/event-detail')" class="!w-[85%]" v-for="(item , index) in eventsItems" :key="index">
                    
                    <EventCard :item="item" />

                </SwiperSlide>

            </Swiper>

        </div>

        <div class="buttonContainer">

            <span class="material-symbols-rounded">
            add
            </span>


        </div>

    </div>

    <BottomSheets v-model="DatePickerSheet">

        <DatePicker :show="true" :dualInput="true" :mode="'range'" :column="1" />

    </BottomSheets>

    
</template>

<script lang="ts" setup>

import DatePicker from '~/components/global/date-picker/DatePicker.vue';

import EventCard from './EventCard.vue';

import pray from "~/assets/images/events/pray.jpg"

import drinking from "~/assets/images/events/drinking.jpg"

const events=ref()

const emptyCheck=ref(false)

const DatePickerSheet=ref(false)

onMounted(() => {
  if (events.value.children.length === 0) {
    emptyCheck.value = true; 
  } else {
    emptyCheck.value = false; 
  }
});

const eventsItems=ref<{image:any ; name:string ; date:string ; number:number ; hasRating:boolean}[]
>([
    {
        image:pray,
        name:'جشن بزرگ عید فطر ',
        date:'۲۲ بهمن ساعت ۱۹:۰۰',
        number:2,
        hasRating:true
    },
    {
        image:drinking,
        name:'جشن بزرگ عید فطر ',
        date:'۲۲ بهمن ساعت ۱۹:۰۰',
        number:0,
        hasRating:false
    },
    {
        image:pray,
        name:'جشن بزرگ عید فطر ',
        date:'۲۲ بهمن ساعت ۱۹:۰۰',
        number:3,
        hasRating:true
    },
    {
        image:drinking,
        name:'جشن بزرگ عید فطر ',
        date:'۲۲ بهمن ساعت ۱۹:۰۰',
        number:5,
        hasRating:true
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

.emptyContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40%;
    gap: 16px;

    .imageContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;

        span{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
        }
    }

    .newEvent{
        display: flex;
        flex-direction: row;
        gap: 8px;
        padding: 8px 12px 8px 12px;
        background: $primary;
        border-radius: 8px;
        align-items: center;

        span{
            color: $primary-on;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
   
    }
}

.search{
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid $outline;
    gap: 8px;

    input{
        background: transparent;
        outline: 0;
    }

    .material-symbols-outlined{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: auto;
        color: $secondary;
        background: $secondary-container;
        width: 36px;
        height: 36px;
        border-radius: 100%;
    }
}

.day{
    display: flex;
    flex-direction: column;
    gap: 12px;

    span{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
  
}

.buttonContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px 8px 12px;
    border-radius: 8px;
    background: $primary;
    width: 44px;
    height: 44px;
    margin-top: 112px;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;

    span{
        color: $primary-on;
    }
}
</style>