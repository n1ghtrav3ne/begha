<template>

    <div class="gravePage">

        <div class="greenBox container">

        <div class="firstItem">

            <span class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span>آرامستان</span>

        </div>    


        </div>

        <div class="container">

            <div class="formContainer">

                <div class="w-full" v-for="(item,index) in inputItems" :key="index">
                    
                    <inputOnes :id="index" :item="item" />

                </div>

                <div class="facilitiesContainer h-[400px] ">

                    <span>انتخاب امکانات</span>

                    <p>رفتار مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند.
رفتار مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند.
رفتار مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند.
رفتار مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند.
رفتار مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند.
رفتار مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند.</p>

                </div>


            </div>

        </div>

        
    </div>

</template>
<script setup lang="ts">
import inputOnes from "./inputOnes.vue"


defineComponent({inputOnes})

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
</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.gravePage{
    width: 100%;
    position: fixed;
    background: $surface;
    z-index: 50;
    top: 0;
    overflow: scroll !important;
    height: 100%;

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

    }

    .facilitiesContainer{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;

        span{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$secondary;
            margin-left: auto;
            margin-bottom: 16px;
        }
    }
}

</style>