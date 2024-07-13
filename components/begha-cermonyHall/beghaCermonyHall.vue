<template>
    
    <div class="greenBox container">

        <div class="firstItem">

        <span class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span class="cermonyTxt">سالن مراسم</span>

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
            class="post-images"
            src="~/assets/images/cermony/cermonyHall.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

    <div class="details container">

        <div class="title">

            <div class="pricePerHour">

                <span class="cermonyHall">سالن مراسم</span>

                <div>

                    <span class="price">۲۰٬۰۰۰٬۰۰۰ تومان</span>

                    <span class="pHour">/هر ساعت</span>

                </div>

            </div>

            <p class="address">اصفهان، خیابان مصلی، لورم ایپسوم، روبروی لورم</p>

            <div class="mausoleum">

                <div class="mausoleumIcon">

                    
                        <img class="pb-1.5" src="~/assets/images/cermony/secondaryIcon.svg" alt="">


                    <span class="nameOfmausoleum">امام زاده صالح (ع)</span>

                </div>
 
                <div class="rating">

                    <img src="assets/images/cermony/ant-design_star-filled.png" alt="">

                    <span>5.0</span>

                </div>

            </div>

        </div>

        <hr>

        <div class="information">

            <div class="explanation">

                <span class="explanationHead">توضیحات</span>

                <p>
                    در مورد اهمیت و ارزش ادبی و بلاغت نهج‌البلاغه سخنان متعددی از اندیشمندان زبان عربی نقل شده است[۲۰] برخی یکی از دلایل ماندگاری این کتاب را فصاحت و بلاغت موجود در این کتاب دانسته‌اند
                </p>

            </div>

            <div class="reservation">

                <span class="reservationHead">اطلاعات رزرو</span>

                <div class="info">

                    <span class="capacity">
                    ظرفیت حداکثر ۲۰۰ نفر 
                    </span>

                <div @click="modalStore.changeCermonyHallReservationHours('active')" class="reservationHours">

                    <span class="text">مشاهده ساعات رزرو</span>
                    
                    <span class="material-symbols-rounded icon ">
                    arrow_left
                    </span>

                </div>

                </div>

            </div>

            <div class="facilities">

                <span class="facilitiesHead">امکانات</span>

                <div class="facilitiesContainer">

                    <div v-for="index in 5" :key="index" class="catering">

                        <div class="cateringIcon">

                            <img src="~/assets/images/cermony/Ghari.svg" alt="">

                        </div>

                        <span>پذیرایی</span>
                        
                    </div>

                </div>

            </div>

            <div class="reservationRequest">

                <button @click="modalStore.changeReservingCermonyHall('active')" class="reservationButton">

                    <span>درخواست رزرو</span>

                </button>

                <div class="save">

                    <img src="~/assets/images/cermony/Save Icon.svg" alt="">

                </div>

            </div>

        </div>

    </div>

    <cermonyHallReservation v-if="modalStore.isOpenReservingCermonyHall" />

    <reservationHours v-if="modalStore.isOpenCermonyHallReservationHours" />
      
</template>
<script setup lang="ts">
import cermonyHallReservation from "./cermonyHallReservation.vue"

import reservationHours from "./reservationHours.vue"
import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();


defineComponent({cermonyHallReservation,reservationHours})
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
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    .firstItem{
        display: inline-flex; 
        align-items: center; 
        gap: 16px;

        .cermonyTxt{
            display: flex; 
            align-items: center; 
            width: 83px;
            height: 25px;

        }
    }

}

.swiper{
    direction: ltr !important;
    height: 301px !important;

    .post-images{
        width: 100%;
        height: 100%;
    }
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
    position: absolute; 
    z-index: 50; 
    width: 100%; 
    height: 563px;
    top: 335px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;

    .title{
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        align-self: stretch; 
        width: 100%; 
        height: 98px;
        margin-bottom: 12px;
        gap: 12px;

        .pricePerHour{
            display: flex; 
            flex-direction: row; 
            justify-content: space-between; 
            align-self: stretch; 
            height: 25px;

            div{
                display: flex;
                align-items: center;
            }

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

        }
    }

    

 

    .address{
        color: $surface-on-variant;
        font-weight: 400;
        font-size: 11px;
        width: fit-content;
        margin-left: auto;
    }

    .mausoleum{
        display: flex; 
        justify-content: space-between; 
        flex-direction: row;
        align-items: center; 
        align-self: stretch; 
        width: 100%; 
        height: 32px;

        .mausoleumIcon{
            background-color: $secondary-container;
            display: flex; 
            flex-direction: row; 
            justify-content: center; 
            align-items: center; 
            height: 100%; 
            width: 133px;
            border-radius: 6px;
            gap: 4px;
        
        .nameOfmausoleum{
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

    }

        .rating{
            display: flex; 
            flex-direction: row; 
            align-items: center; 
            align-self: stretch; 
            margin-right: auto;
            gap: 4px;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
            height:100%;

            span{
                padding-top: 3px;
            }
        }

    }


    hr{
        color: $outline-variant;
        width: 100%;
        height: 0;
    }

    .information{

        display: flex; 
        flex-direction: column; 
        width: 100%; 
        margin-top: 16px;
        height: 420px;
        gap: 16px;

        .explanation{

            display: flex;
            flex-direction: column;
            gap: 12px;

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
        
            display: flex;
            flex-direction: column;
            gap: 12px;

        .reservationHead{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $secondary;
        }

        .info{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .capacity{
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on;
            }

            .reservationHours{
                color: $secondary;
                display: flex;
                flex-direction: row;
                align-items: center;

                .text{
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }

                .icon{
                    transform: scale(1.5);
                    padding-top: 1px;
                }
            }
        }

    }

    .facilities{

        display: flex; 
        flex-direction: column; 
        width: 90%;
        height: 101px;
        gap: 12px;

        .facilitiesHead{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $secondary;
        }

        .facilitiesContainer{
            display: flex; 
            flex-direction: row; 
            justify-content: space-between; 
            align-items: center; 
            height: 70px;

            .catering{

                display: flex;
                flex-direction: column;
                gap: 8px;

                .cateringIcon{
                    background-color: $secondary-container;
                    display: flex; 
                    align-items: center; 
                    border-radius: 100%; 
                    padding: 4px;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                }

                span{
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    display: flex; 
                    justify-content: center; 
                    width: 46px;
                    height: 22px;
                    color: $surface-on;
                    
                }

        }

        }


    }

    }

    

    .reservationRequest{

        display: flex; 
        position: fixed; 
        left: 0.625rem; 
        flex-direction: row; 
        justify-content: space-between; 
        top: 90%;
        width: 95%;
        height: 44px;

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

            span{
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