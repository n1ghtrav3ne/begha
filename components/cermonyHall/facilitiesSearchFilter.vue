<template>

    <BaseDialog :modalHeight="394">

        <template #headerText>

            <span class="text-[14px]">جستجو بر اساس امکانات</span>

        </template>

        <template #body>

            <div class="facilitiesContainer">

                <div class="iconContainer">

                    <div class="imgContainer">

                        <img src="~/assets/images/cermony/Ghari.svg" alt="">

                    </div>

                    <span>پذیرایی</span>

                </div>

            </div>


        </template>

    </BaseDialog>

</template>
<script lang="ts" setup>

import BaseDialog from "~/components/global/BaseDialog.vue"
defineComponent({BaseDialog})


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
        gap: 8px;

        

    }

}
</style>