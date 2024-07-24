<template>

     <div class="greenBox container">

        <div class="firstItem">

            <span @click="$router.push('../')" class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span>رویدادها</span>
        
        </div>    
        

        

        <div class="secondItem">
            <img src="~/assets/images/cermony/arrow-down.svg" alt="">

        <span>
            اصفهان، نجف اباد
        </span>

        <img src="~/assets/images/cermony/Location copy.svg" alt="">

        </div>

    </div>

    <div class="container">

        <div class="search">

            <input placeholder="جستجو رویداد" type="text">


            <div class="iconContainer">
                
                <span class="material-symbols-outlined">
                calendar_month
                </span>

            </div>

        </div>

        <div class="title">

            <div class="icon">

                <img src="~/assets/images/home/popular-begha-shape.png" alt="">
                
                <span>رویداد های پیش رو</span>

            </div>

            <div class="filter">

                <span class="icon">همه بقعه ها</span>

                <span class="icon-Arrow-Bottom-Iran"></span>

            </div>

        </div>

        <div class="eventsContainer">

            <followEvents />

        </div>

    </div>

</template>

<script setup lang="ts">

import followEvents from "~/components/home/FollowEvents.vue"

defineComponent({followEvents})

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

.container{
    .search{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 13px;

        input{
            background: transparent;
            padding: 16px;
            border-radius: 16px;
            border: 1px solid $outline-variant;
            width: 100%;
        }

        .iconContainer{
            display: flex;
            align-items: center;
            justify-content: center;
            background: $secondary-container;
            padding: 12px;
            border-radius: 16px;
            color: $secondary;

            span{
                transform: scale(1.5);
                width: 32px;
                height: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .title{
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .icon{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .filter{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;

            .icon{
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;                
            }

            .icon-Arrow-Bottom-Iran{
                color: $secondary;
            }
        }
    }
}
</style>