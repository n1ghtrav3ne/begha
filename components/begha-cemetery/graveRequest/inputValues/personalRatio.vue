<template>

    <BaseDialog :modalHeight="400">

        <template #headerText>

            <span class="headerText">نسبت شما با متوفی</span>

        </template>

        <template #body>

            <div class="peopleContainer">

                <div @click="activation(index)" :class="{active: index===activeItem}" v-for="(item,index) in items" :key="index" class="person">

                    <span class="name">{{ item }}</span>

                    <img class="hidden" src="~/assets/images/cemetery/tick-circle.svg" alt="">

                </div>

            </div>

        </template>
    
    </BaseDialog>

    
</template>

<script lang="ts" setup>

import BaseDialog from "~/components/global/BaseDialog.vue"

import {useReservationStore} from "~/stores/graveRequest-store";

const reservationStore=useReservationStore();

defineComponent({BaseDialog})

const items=['همسر','فرزند','پدر','مادر','برادر','خواهر']

const activeItem=ref(0)

let selectedPerson=items[0]

reservationStore.setPerson(selectedPerson)


const activation=(index:number)=>{
    activeItem.value=index
    selectedPerson=items[index]
    reservationStore.setPerson(selectedPerson)
}

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color:$surface-on
}

.peopleContainer{
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    height: auto;
    padding-top: 26px;
    padding-bottom: 30px;

    .person{
        width: 100%;
        align-items: center;
        padding: 12px;
        height: 44px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 8px;
        color: var(--Key-Surface-On-Surface, #0B0B0B);
        text-align: right;
        font-family: "Yekan Bakh FaNum";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}

.active{
    background-color: $secondary-container;
    img{
        display: flex;
    }
}
</style>