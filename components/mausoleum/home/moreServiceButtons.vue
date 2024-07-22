<template>
    
    <SimpleBaseDialog :modalHeight="139">

        <template #body>

            <div class="buttonsContainer">

                <div  class="icon">

                <div class="moreIcon">

                    <img src="~/assets/images/mausoleumHome/serviceButton/box-tick.svg" alt="">

                </div>

                <span class="name">موقوفات</span>


                </div>

                 <div  class="icon2">

                <div class="moreIcon2">

                    <img src="~/assets/images/mausoleumHome/serviceButton/clipboard-tick.svg" alt="">

                </div>

                <span class="name">دارایی‌ها</span>


                </div>

            </div>

        </template>
    
    </SimpleBaseDialog>

</template>

<script lang="ts" setup>
import SimpleBaseDialog from "~/components/global/SimpleBaseDialog.vue"

defineComponent({SimpleBaseDialog})
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.buttonsContainer{

    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 65%;

    
    .icon{
        height: 75px;
        width: 62px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        margin-right: auto;
        margin-left: auto;
        position: relative;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;

        
    .moreIcon{
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background:  linear-gradient(180deg, #3BEBDD 0%, #20C6BC 100%);
            position: relative;
        }
    }

    .icon2{
        height: 75px;
        width: 62px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        margin-right: auto;
        margin-left: auto;
        position: relative;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;

        
    .moreIcon2{
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background:  linear-gradient(180deg, #F8E895 0%, #F4C82A 100%);
            position: relative;
        }
    }

}


</style>