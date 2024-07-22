<template>

    <BaseDialog :modalHeight="758">

        <template #headerText>

            <span class="headerText">اطلاعات متوفی</span>

        </template>

        <template #body>

            <div class="infoContainer">

                <div class="profile">

                    <img src="~/assets/images/cemetery/noOne.png" alt="">

                    <div class="nameContainer flex flex-col items-center gap-[4px]">

                        <span class="name">محمدرضا موسوی</span>

                        <span class="fatherName">فرزند عباس</span>

                    </div>

                </div>

                <div class="date">

                    <div class="birthDate">

                        <span>تاریخ تولد</span>

                        <span>۱۳۰۲/۱۲/۱۲</span>

                    </div>

                    <div class="deathDate">

                        <span>تاریخ فوت</span>

                        <span>۱۳۷۸/۱۲/۱۲</span>

                    </div>

                    <div class="burialPlace">

                        <span>محل دفن</span>

                        <span>قطعه شهدا، قبر ۲۱۲، طبقه ۲</span>

                    </div>

                </div>

                <div class="diary">

                    <span class="title">
                        زندگی‌نامه
                    </span>

                    <p class="explanation">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                    </p>

                </div>

            </div>

        </template>
    
    </BaseDialog>

</template>
<script setup lang="ts">
import BaseDialog from '~/components/global/BaseDialog.vue';

defineComponent({BaseDialog})

</script>
<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.infoContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    padding-top: 32px;
    gap: 24px;

    .profile{
        display: flex;
        flex-direction: column;
        height: 179px;
        gap: 8px;
        align-items: center;

        img{
            width: 120px;
            height: 120px;
            border-radius: 100%;
        }

        .name{
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
        }

        .fatherName{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
        }
    }

    .date{
        gap: 16px;
        padding-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
        width: 100%;
        height:auto;
        border-top:1px solid $secondary-s;

        .birthDate{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }

        .deathDate{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }

        .burialPlace{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
    }

    .diary{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid $secondary-s;
        padding-top: 16px;
        gap:12px;

        .title{
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            color: $surface-on;
            margin-left: auto;
        }

        .explanation{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            height: 176px;
            overflow: auto;
        }
    }
}

</style>