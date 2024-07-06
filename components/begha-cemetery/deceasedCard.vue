<template>

    <div class="cardHolder px-[12px] py-[16px]">

        <div class="firstPart">

            <div class="profile">

                <img class="rounded-full" src="~/assets/images/cemetery/noOne.png" alt="">

            </div>

            <div class="deceaseName">

                <span class="name">{{ item.name }}</span>

                <span class="fatherName">{{ item.fatherName }}</span>

            </div>

            <div class="watch">

                <span>مشاهده</span>

                <img src="~/assets/images/cemetery/arrow-left.svg" alt="">

            </div>

        </div>

        <hr>

        <div class="section">

            <div class="iconContainer">

                <img src="~/assets/images/cemetery/grave-stone copy.svg" alt="">

            </div>

            <span>{{ item.section }}</span>

        </div>

    </div>

</template>
<script setup lang="ts">
const props=defineProps(['item'])

</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.cardHolder{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 124px;
    border-radius: 16px;
    border: 1px solid $outline-variant;
    gap: 12px;
    margin-bottom: 16px;

    .firstPart{
        display: flex;
        flex-direction: row;
        gap: 8px;

        .profile{
            width: 44px;
            height: 44px;
            border-radius: 100%;
        }

        .deceaseName{
            display: flex;
            flex-direction: column;
            gap: 4px;

            .name{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on;
            }

            .fatherName{
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on-variant;
            }
        }

        .watch{
            display: flex;
            flex-direction: row;
            gap: 4px;
            align-items: center;
            margin-right: auto;
            margin-bottom: auto;

            span{
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $primary;
            }
        }
    }

    hr{
        color: $outline-variant;
        width: 100%;
        height: 0;
    }

    .section{
        display: flex;
        flex-direction: row;
        gap: 4px;
        align-items: center;

        .iconContainer{
            background: $primary-container;
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
        }

        span{
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$surface-on;
        }
    }

}

</style>