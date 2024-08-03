<template>

    <div class="w-full h-full fixed top-0 m-auto left-0 right-0 bg-neutral-50 max-w-[600px]"> 
            
        <div class="greenBox flex flex-row pt-[12px] pb-[11px] px-[16px] bg-primary-700 w-full items-center">

            <div class="firstItem flex flex-row items-center gap-4 text-primary-50">

                <span @click="$emit('close')" class="material-symbols-outlined ">
                arrow_right_alt
            </span>

            <span class="text-[16px]">تعیین موقعیت درخواست قبر</span>

            </div>   
            
        </div>
            
        <div class="container">

            <TextFeild @click="sectionSheet=true" :modelValue="selectedSection || 'قطعه'" type="button" label="قطعه">

                <template #append>

                    <span class="icon-Arrow-Bottom-Iran text-secondary-700 rotate-90 scale-150"></span>

                </template>

            </TextFeild>            

              <TextFeild @click="GraveNumberSheet=true" :modelValue="chosenNumber || 'شماره قبر را انتخاب کنبد'" type="button" label="شماره قبر">

                <template #append>

                    <span class="icon-Arrow-Bottom-Iran text-secondary-700 rotate-90 scale-150"></span>

                </template>

            </TextFeild>

                <TextFeild @click="ChooseFloorSheet=true" :modelValue="chosenFloor || 'طبقه را انتخاب کنید'" type="button" label="طبقه">

                <template #append>

                    <span class="icon-Arrow-Bottom-Iran text-secondary-700 rotate-90 scale-150"></span>

                </template>

            </TextFeild>

            <button class="w-full mt-[80%] bg-primary-700 rounded-lg p-2 text-primary-50 h-11 font-normal text-xs" type="button">اعمال و ثبت درخواست</button>

        </div>

    </div>

    <BottomSheets title="انتخاب قطعه" v-model="sectionSheet">

        <Section @update:selected="showSection" />

    </BottomSheets>

    <BottomSheets title="انتخاب شماره" v-model="GraveNumberSheet">

        <GraveNumber @selectedNumber="showNumber" />

    </BottomSheets>

    <BottomSheets title="انتخاب طبقه" v-model="ChooseFloorSheet">

        <ChooseFloor @selectedFloor="showFloor" />

    </BottomSheets>

</template>

<script setup lang="ts">

import TextFeild from "~/components/global/textField.vue"

import Section from "./input-values/Section.vue";

import GraveNumber from "./input-values/GraveNumber.vue";

import ChooseFloor from "./input-values/ChooseFloor.vue";

const sectionSheet=ref(false)

const GraveNumberSheet=ref(false)

const ChooseFloorSheet=ref(false)

const selectedSection=ref()

const showSection=(selectedItem:any)=>{
    selectedSection.value=selectedItem    
}

const chosenNumber=ref()

const showNumber=(selectNumber:any)=>{
    chosenNumber.value=selectNumber
}

const chosenFloor=ref()

const showFloor=(selectFloor:any)=>{
    chosenFloor.value=selectFloor
}
</script>