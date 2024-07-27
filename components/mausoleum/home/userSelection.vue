<template>

            <div class="itemContainer">

                <div @click="selectUser(index)" :class="{active: selectedUser===index}" v-for="(item , index) in items" :key="index" class="item">

                    <img :src="image" alt="">

                    <div class="info">

                        <span class="name">{{item.name}}</span>

                        <span class="userType">{{ item.userType }}</span>

                    </div>

                    <span class="material-symbols-outlined">
                    check_circle
                    </span>

                </div>

            </div>

</template>

<script lang="ts" setup>

import mBaseDialog from '~/components/global/mBaseDialog.vue';

import image from "~/assets/images/cemetery/noOne.png"

defineComponent({mBaseDialog})

const selectedUser=ref()

const selectUser=(index:number)=>{
    selectedUser.value=index
}

const items=[
    {
        name:'امام زاده صالح (ع)',
        userType:'امام جماعت'
    },
    {
        name:'احمد حسینی',
        userType:'کاربر عادی '
    },
    {
        name:'امام زاده محسن',
        userType:'ادمین '
    },
]

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
}

.itemContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;

    .item{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
        border-radius: 16px;
        height: 64px;
        width: 100%;
        gap: 8px;

        img{
            width: 40px;
            height: 40px;
            border-radius: 100%;
        }

        .info{
            display: flex;
            flex-direction: column;

            .name{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color:$surface-on;
            }

            .userType{
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on-variant;
            }
        }
    }

    .material-symbols-outlined{
        margin-right: auto;
        color: $secondary;
        display: none;
    }
}

.active{
    background: $secondary-container;

    span{
        display: flex !important;
    }
}

</style>