<template>
    
    <div class="greenBox container">

        <div class="firstItem">

            <span @click="$router.go(-1)" class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span>رویداد ها</span>

        </div>    

    </div>

    <div class="container">

        <div class="poster">

        </div>

        <div class="explanation">

            <div class="firstPart">

                   <div class="title">

                        <span class="icon-Prayer-Iran"></span>

                        <span class="text">جشن بزرگ عید فطر </span>


                    </div>

                    <div class="rating">

                        <span class="number">4.2</span>

                        <span class="material-symbols-rounded">
                        kid_star
                        </span>

                    </div>

            </div>

            <p class="h-[85px] overflow-auto">برگزاری مراسم ترحیم در بقعه متبرکه از دیرباز جزیی از این اجرای مراسم ترحیم میباشد.رزرو بقعه متبرکه مراسم ترحیم پس از خاکسپاری و تهیه اقلام پذیرایی.</p>


        </div>

        <div class="mausoleum">

            <div class="nameOfMausoleum">

                <span class="icon-Mosque-Iran"></span>

                <span>امام زاده صالح (ع)</span>

            </div>

            <span class="date">۲۲ بهمن ساعت ۱۹:۰۰</span>

        </div>

    </div>


    
</template>

<script lang="ts" setup>

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

.poster{
    width: 100%;
    height: 250px;
    border-radius: 8px;
    background-image: url('~/assets/images/events/example.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.explanation{
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid $outline-variant;
    gap: 12px;
    border-bottom: 1px solid $outline-variant;
    margin-bottom: 12px;

    .firstPart{
        display: flex;
        align-items: center;
        flex-direction: row;

        .title{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 8px;

        .icon-Prayer-Iran{
            border-radius: 4px;
            background: linear-gradient(180deg, #8AC6FD 0%, #49A2F5 100%);
            width: 24px;
            height: 24px;
            color: $surface;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: large;
        }

        .text{
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
        }
    }

    .rating{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: auto;
        gap: 4px;

        span{
            color: $warning;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .material-symbols-rounded{
            transform: scale(1.5);
            padding-bottom: 2px;
        }
    }

    }
 
}

.mausoleum{
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 100%;

        .nameOfMausoleum{
            display: flex;
            align-items: center;
            gap: 4px;
            background: $secondary-container;
            padding: 7px 10px 7px 10px;
            border-radius: 8px;

            .icon-Mosque-Iran{
                color: $primary;
                transform: scale(1.8);
                padding-bottom: 3px;
            }
        }

        .date{
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
            margin-right: auto;
        }
    }
</style>