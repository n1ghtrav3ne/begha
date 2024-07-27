<template>

            <div class="sectionContainer">

                <div @click="selectItem(index)" :class="{active:index===activeItem && !section.capacity}" v-for="(section,index) in sections" :key="index" class="section">


                        <img  v-if="!section.capacity" src="~/assets/images/cemetery/grave-stone copy 2.svg" alt="">

                        <img  v-else src="~/assets/images/cemetery/grave-stone (1).svg" alt="">

                        <div class="status">

                            <span class="name">{{ section.name }}</span>

                            <span v-if="!section.capacity" class="capacity"> ظرفیت خالی دارد.</span>

                            <span class="capacityFull" v-else>ظرفیت پر</span>

                        </div>


                    <img class="mr-auto hidden" src="~/assets/images/cemetery/tick-circle.svg" alt="">
                   

                </div>

            </div>

</template>

<script setup lang="ts">
import BaseDialog from "~/components/global/BaseDialog.vue"

import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

defineComponent({BaseDialog})

const sections=ref<{name:string;capacity:boolean}[]
>([
    {
        name:'قطعه شهدا',
        capacity:false
    },
    {
        name:'قطعه شهدا',
        capacity:false
    },
    {
        name:'قطعه شهدا',
        capacity:false
    },
    {
        name:'قطعه شهدا',
        capacity:true
    },
    {
        name:'قطعه شهدا',
        capacity:false
    },
])

const activeItem=ref(0)

const selectedSection=ref()



const selectItem=(index:number)=>{
    activeItem.value=index
    selectedSection.value=sections.value[index].name
    modalStore.setSection(selectedSection)
}

onMounted(()=>{
    selectItem(0)
})

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

.sectionContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 100%;
    height: auto;
    .section{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        width:100%;
        height: 55px;
        padding: 12px;

        .status{
            display: flex;
            flex-direction: column;

            .name{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color:$surface-on;
            }

            .capacity{
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color:  $success;
            }

            .capacityFull{
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $error;
                pointer-events: none;
            }
            
        }
    }
}

.active{
    background: $secondary-container;
    border-radius: 8px;

    img{
        display: flex;
    }
}
</style>