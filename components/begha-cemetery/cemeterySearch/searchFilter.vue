<template>

    <BaseDialog :modalHeight="329"> 

        <template #headerText>

            <span class="headerText">جستجو بر اساس قطعات</span>

        </template>

        <template #body>

            <div class="sectionContainer">

                <div class="section">

                    <BaseCheckbox :items="checkboxes" />

                </div>


            </div>

        </template>
    
    </BaseDialog>

</template>
<script setup lang="ts">
import BaseDialog from "~/components/global/BaseDialog.vue"

import BaseCheckbox from '~/components/global/BaseCheckbox.vue';

defineComponent({BaseDialog,BaseCheckbox})

const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: "قطعه شهدا",
    isChecked: false,
  },
  {
    id: 2,
    label: "قطعه شهدا",
    isChecked: false,
  },
  {
    id: 3,
    label: "قطعه شهدا",
    isChecked: false,
  },
]);

</script>
<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.sectionContainer{
    display: flex;
    flex-direction: column;
    padding-top: 16px;

    .section{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color:$surface-on;
    }
}

</style>