<template>
    <div class="requestContainer">

        <div class="title">

            <img src="~/assets/images/home/popular-begha-shape.png" alt="">

            <span class="text">درخواست های جدید</span>

            <span class="quantitiy">{{ requestsCount.toLocaleString('fa-IR') }} مورد جدید</span>

        </div>

        <span class="date">دوشنبه ۱۴۰۲/۱۲/۰۲</span>

        <div ref="requestsQuantitie" class="requests">

            <div v-for="index in 4" :key="4" class="request">

                <img src="~/assets/images/cemetery/cemetery.png" alt="">

                <div class="detail">

                    <span class="requestDetail">درخواست زائرسرا</span>

                    <span class="name">محمدحسین قربانی</span>

                </div>

                <div class="watch">
                    
                    <span class="text">مشاهده</span>

                    <span class="material-symbols-outlined">
                    keyboard_backspace
                    </span>
                    

                </div>

            </div>

        </div>

    </div>
</template>

<script lang="ts" setup>

const requestsQuantitie = ref()

const requestsCount = ref(0)

onMounted(() => {
  requestsCount.value = requestsQuantitie.value.children.length-1
})

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.requestContainer{
    display: flex;
    flex-direction: column;
    width: 100%;

    .title{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;

        .text{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$surface-on;
        }

        .quantitiy{
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$error;
            margin-right: auto;
        }
    }

    .date{
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color:$surface-on-variant;
        margin-top: 24px;
        margin-bottom: 16px;
    }

    .requests{
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 16px;

        .request{
            display: flex;
            flex-direction: row;
            align-items: center;
            width:100%;
            gap: 8px;
            padding-bottom: 11px;
            border-bottom: 1px solid $secondary-container;

            img{
                width:44px;
                height: 44px;
                border-radius: 16px;
            }

            .detail{
                display: flex;
                flex-direction: column;
                gap: 4px;

                .requestDetail{
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    color: $surface-on;
                }

                .name{
                    font-size: 11px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    color: $surface-on-variant;
                }
            }
            .watch{
                color: $primary;
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-right: auto;
                gap: 4px;

                .text{
                    font-size: 11px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }

                .material-symbols-outlined{
                    font-size: 17px;
                }
            }
        }
    }
}
</style>