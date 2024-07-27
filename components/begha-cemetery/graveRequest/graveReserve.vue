<template>

    <div class="gravePage">

        <div class="greenBox container">

        <div class="firstItem">

            <span @click="$emit('close')" class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span>آرامستان</span>

        </div>    


        </div>

        <div class="container">

            <div  class="formContainer">

                <div  class="w-full" v-for="(item,index) in inputItems" :key="index">
                    
                    <inputOnes class="theInputs" :class="{active: uploadCheck && index===4}" @click="showInputValues(index)" :id="index":item="item" />

                </div>


            </div>

             <div class="facilitiesContainer">

                    <span>انتخاب امکانات</span>

                    <div  class="facilitieOnes">

                        <div v-for="(item,index) in facilitieItems" :key="index">

                            <facilities :item="item" />


                        </div>

                    </div>


                </div>

                <div class="terms">
                   
                    <BaseCheckbox class="pt-3" :items="checkboxes" />
                    <span @click="termsSheet=true" class="txt">را مطالعه کرده و آن را می پذیرم.</span>
                </div>

                <button>پرداخت بیعانه (۴۰٬۰۰۰٬۰۰۰ تومان)</button>

                

        </div>

        <BottomSheets :line="true" title="مطالعه قوانین و مقررات" v-model="termsSheet">

            <terms />

        </BottomSheets>


        <BottomSheets title="تاریخ فوت متوفی را انتخاب کنید." :line="true" v-model="dateOfDeathSheet">

            <dateOfDeath />

        </BottomSheets>

        <BottomSheets title="نسبت شما با متوفی" :line="true" v-model="personalRatioSheet">

            <personalRatio />

        </BottomSheets>


        <BottomSheets :line="true" title="قطعه مورد نظر خود را انتخاب کنید."  v-model="graveSectionSheet">

            <graveSection />

        </BottomSheets>
        
        <input class="hidden" ref="fileInput" @change="uploadFile" type="file" accept=".pdf,.jpg,.png">
    </div>

</template>
<script setup lang="ts">

import inputOnes from "./inputOnes.vue"

import facilities from "./facilities.vue"

import BaseCheckbox from '~/components/global/BaseCheckbox.vue';

import terms from "./inputValues/terms.vue"

import dateOfDeath from "./inputValues/dateOfDeath.vue";

import personalRatio from "./inputValues/personalRatio.vue"

import graveSection from "./inputValues/graveSection.vue"

import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

const dateOfDeathSheet=ref(false)

const personalRatioSheet=ref(false)

const graveSectionSheet=ref(false)

defineComponent({inputOnes,facilities,BaseCheckbox,terms,dateOfDeath,personalRatio,graveSection})

const termsSheet=ref(false)

const inputItems=ref<{name:string;val:string;txt:string;type:string;iconClass:string;iconName:string;warning:string}[]
>([
    {
        name:'نام و نام خانوادگی متوفی',
        val:'',
        txt:'نام و نام خانوادگی متوفی را وارد کنید',
        type:'text',
        iconClass:'',
        iconName:'',
        warning:''
    },
    {
        name:'نام و نام خانوادگی درخواست دهنده',
        val:'',
        txt:'نام و نام خانوادگی خود را وارد کنید',
        type:'text',
        iconClass:'',
        iconName:'',
        warning:''
    },
    {
        name:'تاریخ فوت',
        val:'انتخاب کنید',
        txt:'',
        iconClass:'material-symbols-rounded',
        type:'button',
        iconName:'arrow_drop_down',
        warning:''
    },
    {
        name:'نسبت فرد درخواست دهنده با متوفی',
        val:'انتخاب کنید',
        txt:'',
        type:'button',
        iconClass:'material-symbols-rounded',
        iconName:'arrow_drop_down',
        warning:'جهت ثبت درخواست می‌بایست از اقوام درجه یک متوفی باشید.'
    },
    {
        name:'گواهی فوت',
        val:'گواهی فوت متوفی را آپلود کنید.',
        txt:'گواهی فوت متوفی را آپلود کنید.',
        type:'button',
        iconClass:'material-symbols-rounded',
        iconName:'book_5',
        warning:''
    },
    {
        name:'انتخاب قطعه',
        val:'قطعه موردنظر خود را انتخاب کنید',
        txt:'',
        type:'button',
        iconClass:'material-symbols-rounded',
        iconName:'arrow_drop_down',
        warning:'برای انتخاب به ظرفیت قطعه توجه داشته باشید.'
    },
    
])

const facilitieItems=ref<{title:string,price:number}[]>
([
    {
        title:'قاری',
        price:500
    },
    {
        title:'قاری',
        price:500
    },
    {
        title:'قاری',
        price:500
    },
    {
        title:'قاری',
        price:500
    },
    {
        title:'قاری',
        price:500
    },

])

const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: "",
    isChecked: false,
  },
]);

const chosenDate=ref()


const fileInput=ref()

const showInputValues=(index:number)=>{
    if(index===2){
        dateOfDeathSheet.value=true  
    }
    if(index===3){
        personalRatioSheet.value=true
    }
    if(index===4){
        fileInput.value.click()
    }
    if(index===5){
        graveSectionSheet.value=true
    }
}

watch(()=>dateOfDeathSheet.value,(newValue)=>{
    if(!newValue){
        chosenDate.value = modalStore.modals.Date;  
        inputItems.value[2].val=chosenDate.value.join(' ')
    }
})

const chosenPerson=ref()
watch(()=>personalRatioSheet.value,(newValue)=>{
    if(!newValue){
        chosenPerson.value=modalStore.modals.theChosenPerson;
        inputItems.value[3].val=chosenPerson.value        
    }
})

const chosenSection=ref()

watch(()=>graveSectionSheet.value,(newValue)=>{
    if(!newValue){
        chosenSection.value=modalStore.modals.sectionName
        inputItems.value[5].val=chosenSection.value
    }
})

const uploadCheck=ref(false)

const uploadFile=()=>{
    if (fileInput.value?.files && fileInput.value.files.length > 0) {
        inputItems.value[4].val='مشاهده فایل'
        uploadCheck.value=true
    }
}


</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.gravePage{
    width: 100%;
    position: fixed;
    background: $surface;
    max-width: 600px;
    top: 0;
    overflow: scroll !important;
    height: 100%;
    margin: 0 auto;
    right: 0;
    left: 0;

    .greenBox{
    background-color: $primary;
    height:48px;
    display:flex;
    align-items: center;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 11px;
    padding-right: 16px;
    color: $primary-on;
    

    .firstItem{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

   
}

    .formContainer{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 24px;
        gap: 24px;

        .theInputs{
            color:$surface-on;
        }

    }

    .facilitiesContainer{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 36px;
        height: 290px;

        span{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$secondary;
            margin-left: auto;
            margin-bottom: 16px;
        }

        .facilitieOnes{
            display: flex;
            flex-direction: column;
            width: 100%;
            height:auto;
            gap: 24px;
        }
    }

    .terms{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 98px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .txt::before{
            color: $secondary;
            content: 'قوانین و مقررات ';
        }
    }

    button{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color:$primary-on;
        background: $primary;
        width: 100%;
        padding: 8px;
        border-radius: 8px;
        height: 44px;
        margin-bottom: 10px;
    }
}
.active{
    color: $secondary !important;
}

.gravePage::-webkit-scrollbar{
    display: none;
}
</style>