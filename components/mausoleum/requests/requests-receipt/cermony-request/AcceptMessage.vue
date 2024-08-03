<template>

    <div class="flex flex-col items-center w-full pt-6">

        <span class="font-normal text-sm">آیا از تائید درخواست سالن مراسم اطمینان دارید؟</span>

        <div @click="$emit('close')" class="flex flex-row w-full gap-4 justify-between mt-9">

            <button type="button" class="bg-primary-700 w-full h-[44px] text-primary-50 p-2 rounded-lg">بله</button>

            <button type="button" class="w-full border p-2 h-[44px] rounded-lg">خیر</button>

        </div>

    </div>

</template>

<script setup>

</script>