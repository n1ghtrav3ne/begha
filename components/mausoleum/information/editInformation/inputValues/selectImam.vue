<template>

    <BaseDialog :modalHeight="163">

        <template #headerText>

            <span class="headerText">نام امام جماعت را وارد کنید.</span>

        </template>

        <template #body>


                <input placeholder="نام و نام خانوادگی امام جماعت" v-model="imam" type="text" >


        </template>
    
    </BaseDialog>
    
</template>

<script lang="ts" setup>
import BaseDialog from "~/components/global/mBaseDialog.vue"
defineComponent({BaseDialog})


import {useMausoleumStore} from "~/stores/m-modals-store"

const mausoleumStore=useMausoleumStore()

const imam=ref()

watch(imam,()=>{
    if(!!imam.value){
        mausoleumStore.settingImamName(imam)        
    }
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
    color: $surface-on;
}

input{
    padding: 16px;
    color: $surface-on;
    outline: 0;
    width:100%;
    margin-top: 16px;
    border-radius: 8px;
    background: #F1F1F1;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

</style>