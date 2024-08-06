<template>

  <div class="flex flex-row items-center justify-between w-[90%] mx-auto">

    <div @click="selectIndex(index)" v-for="index in 5" :key="index" class="flex flex-col items-center mt-2 gap-2">

      <div :class="{'bg-secondary-700 text-secondary-50' : selectedIndex===index}" class="p-3 flex justify-center items-center rounded-lg h-[54px] w-[54px] bg-neutral-200">

        <span class="icon-House-Iran text-2xl"></span>

      </div>

      <span class="text-tiny font-normal">سالن مراسم</span>

    </div>

  </div>

  <div class="w-full h-1 bg-secondary-200 my-6">

  </div>

  <div class="w-full flex flex-col gap-3">

    <CustomCheckbox class="text-success-700" :item="{label:'تائيد شده ها'}" />

    <CustomCheckbox class="text-error-700" :item="{label:'رد شده ها '}" />

    <CustomCheckbox class="text-error-700" :item="{label:'رد شده ها توسط شما '}" />

  </div>

  <button type="button" class="bg-primary-700 text-primary-50 text-xs rounded-xl w-full p-2 mt-8 h-11">اعمال فیلتر</button>
  
</template>

<script setup lang="ts">

const active=ref(false)

const selectedIndex=ref()

const selectIndex=(index:number)=>{
  selectedIndex.value=index
}

</script>