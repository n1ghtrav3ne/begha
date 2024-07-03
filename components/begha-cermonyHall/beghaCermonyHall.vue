<template>
    
    <div class="greenBox container flex flex-row items-center py-[12px]">

        <div class="inline-flex items-center gap-[16px]">

        <span class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span class="w-[83px] h-[25px] flex items-center">سالن مراسم</span>

        </div>

    </div>


    <Swiper
        :modules="[SwiperPagination, SwiperEffectCreative]"
        :slidesPerView="'auto'"
        :loop="false"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="slide in 3" :key="slide">
          <img
            class="post-images h-full w-full"
            src="~/assets/images/cermony/cermonyHall.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

    <div class="details w-full h-[563px] container absolute rounded-t-[16px] top-[335px] z-50">

        <div class="w-full h-[98px] flex gap-[12px] flex-col items-center self-stretch mb-[12px]">

            <div class="flex flex-row justify-between h-[25px] self-stretch">

                <span class="cermonyHall">سالن مراسم</span>

                <div class="flex items-center">

                    <p class="price">۲۰٬۰۰۰٬۰۰۰ تومان</p>

                    <p class="pHour">/هر ساعت</p>

                </div>

            </div>

            <p class="address w-[fit] h-[17px] ml-auto">اصفهان، خیابان مصلی، لورم ایپسوم، روبروی لورم</p>

            <div class="w-full h-[32px] flex justify-between self-stretch items-center">

                <div class="mausoleumIcon flex flex-row items-center justify-center w-[133px] rounded-[6px] h-full px-[10px] gap-[4px] py-[4px]">

                    
                        <img class="pb-1.5" src="~/assets/images/cermony/secondaryIcon.svg" alt="">


                    <p class="nameOfmausoleum flex items-center">امام زاده صالح (ع)</p>

                </div>
 
                <div class="mr-auto flex flex-row items-center self-stretch ga-[4px]">

                    <img class="w-[20px] h-[20px]" src="assets/images/cermony/ant-design_star-filled.png" alt="">

                    <p class="rating">5.0</p>

                </div>

            </div>

        </div>

        <hr class="w-full h-0">

        <div class="flex-col flex gap-[16px] mt-[16px] w-full h-[420px] ">

            <div class="explanation flex flex-col gap-[12px]">

                <span class="explanationHead">توضیحات</span>

                <p>
                    در مورد اهمیت و ارزش ادبی و بلاغت نهج‌البلاغه سخنان متعددی از اندیشمندان زبان عربی نقل شده است[۲۰] برخی یکی از دلایل ماندگاری این کتاب را فصاحت و بلاغت موجود در این کتاب دانسته‌اند
                </p>

            </div>

            <div class="reservation flex flex-col gap-[12px]">

                <span class="reservationHead">اطلاعات رزرو</span>

                <p>
                    از ساعت ۸:۰۰ الی ۱۳:۰۰ (حداکثر ۲۰۰ نفر)
                </p>

            </div>

            <div class="facilities gap-[12px] w-[90%] h-[101px] flex flex-col">

                <span class="facilitiesHead">امکانات</span>

                <div class="flex flex-row h-[70px] items-center justify-between">

                    <div class="catering flex flex-col gap-[8px]">

                        <div class="cateringIcon flex items-center p-[4px] rounded-full">

                            <img class="w-full h-full" src="~/assets/images/cermony/Ghari.svg" alt="">

                        </div>

                        <p class="w-[46px] flex justify-center h-[22px]">پذیرایی</p>
                        
                    </div>

                    <div class="catering flex flex-col gap-[8px]">

                        <div class="cateringIcon flex items-center p-[4px] rounded-full">

                            <img class="w-full h-full" src="~/assets/images/cermony/Ghari.svg" alt="">

                        </div>

                        <p class="w-[46px] flex justify-center h-[22px]">قاری</p>
                        
                    </div>

                    <div class="catering flex flex-col gap-[8px]">

                        <div class="cateringIcon flex items-center p-[4px] rounded-full">

                            <img class="w-full h-full" src="~/assets/images/cermony/Ghari.svg" alt="">

                        </div>

                        <p class="w-[46px] flex justify-center h-[22px]">مداح</p>
                        
                    </div>

                    <div class="catering flex flex-col gap-[8px]">

                        <div class="cateringIcon flex items-center p-[4px] rounded-full">

                            <img class="w-full h-full" src="~/assets/images/cermony/Ghari.svg" alt="">

                        </div>

                        <p class="w-[46px] flex justify-center h-[22px]">سخنران</p>
                        
                    </div>

                    <div class="catering flex flex-col gap-[8px]">

                        <div class="cateringIcon flex items-center p-[4px] rounded-full">

                            <img class="w-full h-full" src="~/assets/images/cermony/Ghari.svg" alt="">

                        </div>

                        <p class="w-[46px] flex justify-center h-[22px]">عکاسی</p>
                        
                    </div>
                </div>

            </div>

            <div class="reservationRequest fixed top-[90%] left-2.5 w-[95%] h-[44px]  flex flex-row justify-between">

                <button @click="modalStore.changeReservingCermonyHall('active')" class="reservationButton">

                    <p >درخواست رزرو</p>

                </button>

                <div class="save">

                    <img src="~/assets/images/cermony/Save Icon.svg" alt="">

                </div>

            </div>

        </div>

    </div>

    <cermonyHallReservation v-if="modalStore.isOpenReservingCermonyHall" />
      
</template>
<script setup lang="ts">
import cermonyHallReservation from "./cermonyHallReservation.vue"
import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();


defineComponent({cermonyHallReservation})
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
    font-family: 'yekan-regular';

    p{
        font-weight: 400;
        font-family: 'yekan-regular';
    }

}

.swiper{
    direction: ltr !important;
    height: 301px !important;
  }
    :deep(.swiper-wrapper){
      direction: ltr !important;
    }

    .swiper-slide {
      position: relative !important;
      direction: ltr !important;
    }

.details{
    background-color: $surface;
    font-family: 'yekan-regular';


    .cermonyHall{
        font-size: 16px;
        font-weight: 700;
    }

    .price{
        font-size: 14px;
        font-weight: 700;
        color: $secondary;
    }

    .pHour{
        font-weight: 400;
        font-size: 11px;
        color: $surface-on-variant;
    }

    .address{
        color: $surface-on-variant;
        font-weight: 400;
        font-size: 11px;
    }

    .mausoleumIcon{
        background-color: $secondary-container;

        .nameOfmausoleum{
            font-size: 11px;
            font-weight: 400;
        }

    }

    .rating{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
            width: 19px;
            height:19px;
        }

    hr{
        color: $outline-variant;
    }

    .explanation{

        .explanationHead{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $secondary;
        }
        p{
            height: 76px;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
            overflow: auto;
        }

    }

    .reservation{

        .reservationHead{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $secondary;
        }
        p{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
        }

    }

    .facilities{

        .facilitiesHead{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $secondary;
        }

        .catering{

            .cateringIcon{
            background-color: $secondary-container;
            }

            p{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                
            }

        }
    
       

    }

    .reservationRequest{

        .reservationButton{
            width:85%;
            background-color: $primary;
            display: flex;
            padding: 8px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            border-radius: 8px;
            color: $primary-on;

            p{
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
            

        }

        .save{
            display: flex;
            width: 44px;
            height: 44px;
            padding: 8px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            border: 1px solid $primary;
            border-radius:8px;
            background-color:$primary-container;
        }

    }

}


</style>