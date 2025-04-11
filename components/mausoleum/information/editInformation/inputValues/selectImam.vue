<template>

                <input placeholder="نام و نام خانوادگی امام جماعت" v-model="imam" type="text" >
    
</template>

<script lang="ts" setup>

import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

const imam=ref()

watch(imam,()=>{
    if(!!imam.value){
        modalStore.settingImamName(imam)        
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
    border-radius: 8px;
    background: #F1F1F1;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

</style>