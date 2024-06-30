<template>

    <BaseDialog :modalHeight="394">

        <template #headerText>

            <span class="text-[14px]">جستجو بر اساس امکانات</span>

        </template>

        <template #body>

            <div class="facilitiesContainer">

                <div @click="()=> itemOne=!itemOne" class="iconContainer">

                    <span :class="{active:itemOne}" class="material-symbols-outlined hidden check-icon">
                        check_circle
                    </span>

                    <div class="imgContainer">

                        <img src="~/assets/images/cermony/Ghari.svg" alt="">

                    </div>

                    <span>پذیرایی</span>

                </div>

                
                <div @click="()=> itemTwo=!itemTwo" class="iconContainer">

                    <span :class="{active:itemTwo}" class="material-symbols-outlined hidden check-icon ">
                        check_circle
                    </span>

                    <div class="imgContainer">

                        <img src="~/assets/images/cermony/Ghari.svg" alt="">

                    </div>

                    <span>قاری</span>

                </div>

                
                <div @click="()=> itemThree=!itemThree" class="iconContainer">

                    <span :class="{active:itemThree}" class="material-symbols-outlined hidden check-icon ">
                        check_circle
                    </span>

                    <div class="imgContainer">

                        <img src="~/assets/images/cermony/Ghari.svg" alt="">

                    </div>

                    <span>مداح</span>

                </div>

                
                <div @click="()=> itemFourth=!itemFourth "class="iconContainer">

                    <span :class="{active:itemFourth}" class="material-symbols-outlined hidden check-icon ">
                        check_circle
                    </span>

                    <div class="imgContainer">

                        <img src="~/assets/images/cermony/Ghari.svg" alt="">

                    </div>

                    <span>سخنران</span>

                </div>

                
                <div @click="()=> itemFifth=!itemFifth" class="iconContainer">

                    <span :class="{active:itemFifth}" class="material-symbols-outlined hidden check-icon ">
                        check_circle
                    </span>

                    <div class="imgContainer">

                        <img src="~/assets/images/cermony/Ghari.svg" alt="">

                    </div>

                    <span>عکاسی</span>

                </div>

            </div>

            <div class="capacityTitle">
                <span>ظرفیت</span>
            </div>
            
            <div class="sliderContainer">

                <vuetifySlider />
                

            </div>
            

        </template>

    </BaseDialog>

</template>
<script lang="ts" setup>
import vuetifySlider from "~/components/layouts/vuetifySlider.vue"
import BaseDialog from "~/components/global/BaseDialog.vue"
defineComponent({BaseDialog,vuetifySlider})

const itemOne=ref(false)
const itemTwo=ref(false)
const itemThree=ref(false)
const itemFourth=ref(false)
const itemFifth=ref(false)

</script>
<style lang="scss" scoped>

@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";


.facilitiesContainer{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    margin-top: 21px;
    .iconContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 46px;
        height: 100%;
        gap: 8px;

        .check-icon{
            position: absolute;
            color: $secondary;
            margin-right: 30px;
        }

        span{
            font-size: 14px;
            font-weight: 400;
        }

        .imgContainer{
            background-color: $secondary-container;
            border-radius: 100%;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

           
        }

    }

}

.active{
    display: flex;
}

.capacityTitle{
    margin-top: 32px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.sliderContainer{
    margin-top: 12px;
    height: 25px;
    width: 100%;
    
}


</style>