<template>

    <div class="flex flex-col items-center gap-12 pt-6">

        <span class="font-normal text-sm">آیا از تائید درخواست قبر با موقعیت درخواستی (قطعه شهدا، شماره ۱۲، طبقه ۲) اطمینان دارید؟</span>

        <div  class="flex flex-row items-center h-11 gap-4 w-full">

            <Button @click="$emit('gravePosition')" class="bg-primary-700 p-2 h-11 text-primary-50" type="button">تعیین موقعیت نهایی و تائيد</Button>

            <Button @click="$emit('close')" class="border w-[40%] p-2 h-11" type="button">خیر</Button>

        </div>

    </div>


</template>

<script setup lang="ts">

</script>