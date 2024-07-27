<template>

            <div class="peopleContainer">

                <div @click="activation(index)" :class="{active: index===activeItem}" v-for="(item,index) in items" :key="index" class="person">

                    <span class="name">{{ item }}</span>

                    <img class="hidden" src="~/assets/images/cemetery/tick-circle.svg" alt="">

                </div>

            </div>

    
</template>

<script lang="ts" setup>

import BaseDialog from "~/components/global/BaseDialog.vue"

import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

defineComponent({BaseDialog})

const items=['همسر','فرزند','پدر','مادر','برادر','خواهر']

const activeItem=ref(0)

let selectedPerson=items[0]

modalStore.setPerson(selectedPerson)


const activation=(index:number)=>{
    activeItem.value=index
    selectedPerson=items[index]
    modalStore.setPerson(selectedPerson)
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