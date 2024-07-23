<template>

    <div class="greenBox container">

        <div class="textContainer">

            <span class="city">تهران، تهران</span>

            <span class="material-symbols-rounded">
            where_to_vote
            </span>

        </div>

        
    </div>

    <div class="container">

        <div class="imageProfile">

            <img src="~/assets/images/cemetery/cemetery.png" alt="">

        </div>

        <div class="titleContainer">

            <div class="title">

                <span class="name">حرم امام زاده صالح (ع)</span>

                <span class="followers">۳۴۹ نفر دنبال کننده</span>

            </div>

            <button>دنبال کردن</button>

        </div>

        <div class="bannerContainer">

            <div class="banner">

                <div class="text">

                    <span class="discountText">تخفیف ویژه زائرسرا</span>

                    <span class="main">مخصوص خانواده های شهدا</span>

                    <div class="reserve">

                        <span class="txt">رزرو زائرسرا</span>

                        <span class="material-symbols-outlined">
                        keyboard_backspace
                        </span>

                    </div>
                    
                </div>

                <div class="mr-auto">

                        <img class="relative top-12" src="~/assets/images/one-begha/mosque.png" alt="">

                        <img class="relative bottom-16 right-14" src="~/assets/images/mausoleumHome/Group 4.svg" alt="">

                </div>

          

            </div>

        </div>

        <div class="serviceButtonContainer">

            
        <div @click="$router.push(item.link)" v-for="(item , index) in items" :key="index" class="icon">

            <div :style="`background:${item.backColor}`" class="iconHolder">

                <img ref="myImage" :src="item.image" alt="">

            </div>

            <span class="name">{{ item.name }}</span>

            <span v-if="!item.deactive" :class="`${item.badgeColorClass}`"  class="btn-badge">جدید</span>
            
            <span v-if="item.deactive" class="deactive">غیر فعال</span>


        </div>

        <div class="training">

            <div class="iconHolder">

                <img src="~/assets/images/begha-services/training.svg" alt="">

            </div>

            
            <span class="name">آموزشی</span>

            <span class="btn-badge">. . .</span>

        </div>


        </div>


    </div>

</template>

<script lang="ts" setup>

import cermonyHall from "~/assets/images/mausoleumHome/serviceButton/cermonyHall.svg"

import zaersara from "~/assets/images/begha-services/zaersara.svg"

import library from "~/assets/images/begha-services/library.svg"

import graves from "~/assets/images/begha-services/graves.svg"




const items=ref<{backColor:string;image:any;name:string;badgeColorClass:string;link:string ; deactive:boolean}[]
>([
    {
        backColor:'linear-gradient(180deg, #83F7BE 0%, #2CD685 100%)',
        image:cermonyHall,
        name:'سالن مراسم',
        badgeColorClass : 'success-bg-color', 
        link:'/begha-cermonyHall/1',
        deactive:false,
    },
    {
        backColor:'linear-gradient(180deg, #89CEFE 0%, #259CF0 100%)',
        image:zaersara,
        name:'زائرسرا',
        badgeColorClass : 'success-bg-color', 
        link:'',
        deactive:true,
    },
    {
        backColor:'linear-gradient(180deg, #27E487 0%, #09C56C 100%)',
        image:library,
        name:'کتابخانه',
        badgeColorClass : 'success-bg-color', 
        link:'/library/book/1',
        deactive:false,
    },
    {
        backColor:'linear-gradient(180deg, #F8E895 0%, #F4C82A 100%)',
        image:graves,
        name:'قبور',
        badgeColorClass : 'success-bg-color', 
        link:'/begha-cemetery/1',
        deactive:false,
    },
])

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
@import "~/assets/css/fonts.scss";

.greenBox{
    width: 100%;
    height: 48px;
    background: $primary;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;

    .textContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        color: $primary-on;

        .city{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

    }

}

.container{

    .imageProfile{

        width: 86px;
        height: 86px;
        padding: 4px;
        border-radius: 100%;
        position: relative;
        bottom: 3.5rem;
        background: $surface;

        img{
            border-radius: 100%;
            width: 100%;
            height:100%;
        }

    }

    .titleContainer{

        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        position: relative;
        bottom: 3rem;

        .title{
            display: flex;
            flex-direction: column;
            gap: 4px;

            .name{
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                color: $surface-on; 
            }

            .followers{
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on-variant;
            }

        }

        button{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 8px;
                color: $primary-on;
                background: $primary;
                border-radius: 8px;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                }

    }

    .bannerContainer{
        display: flex;
        width: 100%;
        align-items: center;
        border-top: 1px solid $outline-variant;
        padding-top: 24px;
        position: relative;
        bottom: 2rem;

        .banner{
            background: #623BFF;
            width: 100%;
            height: 118px;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 12px;
            overflow: hidden;

            .text{
                display: flex;
                gap: 8px;
                flex-direction: column;
                margin-right: 16px;
                height: 100%;
                justify-content: space-between;

                .discountText{
                    width: fit-content;
                    color: $surface;
                    font-family: 'peyda-regular';
                    background: #FDBB08;
                    padding: 8px;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    border-radius: 0px 0px 10px 10px;
                    height: 25px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .main{
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    font-family: 'peyda-regular';
                    color: $surface;
                }

                .reserve{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding-right: 12px;
                    padding-left: 12px;
                    padding-top: 4px;
                    padding-bottom: 4px;
                    border-radius: 20px;
                    width: fit-content;
                    gap: 4px;
                    background: $surface;
                    height: 25px;
                    margin-bottom: 16px;
                }

            }
        }
    }

    .serviceButtonContainer{
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 95%;
    margin-top: 24px;
    position: relative;
    bottom: 4rem;


    .icon{
        height: 75px;
        width: 62px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        margin-right: auto;
        margin-left: auto;
        position: relative;

        .iconHolder{
            border-radius: 12px;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;

        }

        
    .name{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color:$surface-on;
    }

    .btn-badge {
        position: absolute;
        top: 50%;
        right: 60%;
        color: #fff;
        border-radius: 9px;
        border: 2px solid $surface;
        font-family: "yekan-regular";
        width: 25px;
        height: 14px;
        font-size: 6px;
        text-align: center;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        }

    }

    .deactive{
        position: absolute;
        top: -5px;
        right: 60%;
        color: #fff;
        border-radius: 9px;
        border: 2px solid $surface;
        font-family: "yekan-regular";
        width: 25px;
        height: 14px;
        font-size: 6px;
        text-align: center;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $error;
        font-size: 4px;
    }


.error-bg-color{
  background-color: $error !important;
}

.success-bg-color{
  background-color: $primary !important;
}


    }

    .training{
        height: 75px;
        width: 62px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        margin-right: auto;
        margin-left: auto;
        position: relative;

        .iconHolder{
            border-radius: 12px;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: linear-gradient(180deg, #F8E895 0%, #F4C82A 100%);

        }

        
    .name{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color:$surface-on;
    }
    
        .btn-badge{
                position: absolute;
                top: 50%;
                right: 60%;
                color: #fff;
                border-radius: 9px;
                border: 2px solid $surface;
                font-family: "yekan-regular";
                width: 25px;
                height: 14px;
                font-size: 12px;
                padding-bottom: 2px;
                text-align: center;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(180deg, #F8E895 0%, #F4C82A 100%);
            }

}

    
}

</style>