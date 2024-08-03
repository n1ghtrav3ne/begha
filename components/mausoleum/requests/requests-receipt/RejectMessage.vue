<template>

    <div class="flex flex-col gap-6 items-center w-full pt-6">

        <span class="text-xs font-normal text-error-700">با رد درخواست مبلغ پرداخت شده توسط کاربر عودت داده خواهد شد. جهت اطلاع بیشتر کاربر دلیل رد درخواست را وارد کنید.</span>

        <textarea placeholder="متن مورد نظر خود را وارد کنید" class="w-full border text-neutral-500 p-3 outline-none h-[178px] rounded-lg border-neutral-200">

        </textarea>

        <div @click="$emit('close')" class="flex flex-row w-full justify-between  gap-4">

            <button type="button" class="w-full rounded-lg bg-secondary-700 text-secondary-50 text-xs font-normal h-11 p-2">ارسال</button>

            <button type="button" class="w-full rounded-lg border text-xs font-normal h-11 p-2 gap-4">انصراف</button>

        </div>

    </div>

</template>

<script setup>

</script>