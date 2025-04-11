<template>
    
    <div class="flex flex-row border-b mt-4 border-b-secondary-200 w-full items-center pb-[11px] gap-2">

        <img class="w-11 h-11 rounded-xl" src="~/assets/images/cemetery/cemetery.png" alt="">

        <div class="flex flex-col gap-1">

            <span class="text-sm font-normal">{{ item.text }}</span>

            <span class="text-xs text-neutral-500 font-normal">{{ item.name }}</span>

        </div>
        
        <span v-if="item.new" class="text-secondary-50 rounded-xl bg-secondary-700 mr-auto px-[12px] py-[8px]">جدید</span>

        <span v-if="item.inProgress" class="rounded-xl bg-warning-300 text-warning-600 mr-auto px-[12px] py-[8px]">در حال بررسی</span>

        <span v-if="item.denied" class="rounded-xl bg-error-100 text-error-700 mr-auto px-[12px] py-[8px]">رد شده</span>

        <span v-if="item.confirmed" class="rounded-xl bg-primary-200 text-primary-700 mr-auto px-[12px] py-[8px]">تائید شده</span>
        
    </div>

</template>

<script setup lang="ts">

const props=defineProps(['item'])

</script>