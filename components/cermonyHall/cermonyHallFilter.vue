<template>


        <BaseDialog
        :modalHeight="302"
        >

        <template #headerText>
        <span class="modal-head-title">ترتیب نمایش براساس</span>
        </template>

        <template #body>

            <div class="itemsContainer flex flex-col w-full h-[156px] mt-[16px]  gap-[12px]">

                <div @click="activateItem(0)" :class="{'active':selectedItem===0}" class="itemOne w-full h-[44px] px-[12px] py-[16px] flex flex-row justify-between items-center">

                    <p>همه</p>

                    <span class="material-symbols-outlined hidden check-icon items-center">
                        check_circle
                    </span>               

                </div>

                <div @click="activateItem(2)" :class="{'active':selectedItem===2}" class="itemTwo w-full h-[44px] px-[12px] py-[16px] flex flex-row justify-between items-center">

                    <p>محبوب ترین ها</p>

                    <span class="material-symbols-outlined hidden check-icon items-center">
                        check_circle
                    </span>               

                </div>

                <div @click="activateItem(3)" :class="{'active':selectedItem===3}" class="itemThree w-full h-[44px] px-[12px] py-[16px] flex flex-row justify-between items-center">

                    <p>ظرفیت خالی</p>

                    <span class="material-symbols-outlined hidden check-icon items-center">
                        check_circle
                    </span>               

                </div>

            </div>
            

        </template>
        
        </BaseDialog>

    

</template>
<script lang="ts" setup>

import BaseDialog from "~/components/global/BaseDialog.vue"
import { useModalStore } from "~/stores/modals-store";
const modalStore = useModalStore();

defineComponent({BaseDialog})

const selectedItem=ref(0)
const activateItem=(index:number)=>{
    selectedItem.value=index;
    if(selectedItem.value!==0){
        modalStore.changeCermonyHallRequestFilterActive        
    }
}

</script>
<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.active{

    background-color: $secondary-container;
    border-radius:8px;

    span{
        display: flex;
        color: $secondary;
    
    }

}

</style>