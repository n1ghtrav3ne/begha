<template>
    
    <BaseDialog :modalHeight="401">

        <template #headerText>

            <span class="headerText">اوقات برگزاری نماز</span>

        </template>

        <template #body>

            <BaseCheckbox class="pt-3 text-[14px] font-normal" :items="checkboxes" />

            <button  @click="mausoleumStore.changePrayTimes('deactive')" class="finish">تمام</button>

        </template>
    
    </BaseDialog>


</template>

<script lang="ts" setup>

import BaseDialog from "~/components/global/mBaseDialog.vue"

import BaseCheckbox from '~/components/global/BaseCheckbox.vue';

import {useMausoleumStore} from "~/stores/m-modals-store"

const mausoleumStore=useMausoleumStore()


defineComponent({BaseDialog,BaseCheckbox})

const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: 'نماز صبح',
    isChecked: false,
  },
  {
    id: 2,
    label: 'نماز ظهر و عصر',
    isChecked: false,
  },
  {
    id: 3,
    label: 'نماز مغرب و عشاء',
    isChecked: false,
  },
]);

watchEffect(() => {  
  const checkedLabels = checkboxes.value  
    .filter((checkbox) => checkbox.isChecked)  
    .map((checkbox) => {  
      const value = checkbox.label;  
      const startIndex = value.indexOf('(');  
      const endIndex = value.indexOf(')');  
      if (startIndex !== -1 && endIndex !== -1) {  
        return value.slice(0, startIndex).trim();  
      }  
      return value;  
    });  

  if (checkedLabels.length > 0) {  
    mausoleumStore.setPray(checkedLabels);      
  }   
});

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

.finish{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: $primary;
    color: $primary-on;
    border-radius: 12px;
    margin-top: 37px;
    width: 100%;
    height: 44px;
    margin-bottom: 44px;
}
</style>