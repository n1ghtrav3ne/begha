<template>
    <div class="back-navbar container flex items-center justify-between">
        <span><span @click="$router.push('/')" class="material-symbols-outlined back-icon ml-2">
                trending_flat </span><span class="back-title">افزودن رویداد جدید</span></span>

    </div>
    <div class="container">
        <div class="upload-picture d-flex ">
            <div class="upload-img-cn">

                <img src="@/assets/images/icons/upload.svg" alt="">
            </div>
            <div class="flex flex-col  justify-around ms-3">
                <span class="font-bold">تصویر کاور رویداد</span>
                <span class="text-secondary">انتخاب عکس</span>
            </div>

        </div>
        <div class="mt-6">
            <div>
                <p>عنوان رویداد</p>
                <input class="custom-input " placeholder="عنوان را وارد کنید" type="text">

            </div>
        </div>
        <div class="mt-6">
            <div>
                <p>تاریخ </p>
                <div style="position: relative">
                    <svg style="position: absolute; left: 12px;top: 22px;" xmlns="http://www.w3.org/2000/svg" width="20"
                        height="21" viewBox="0 0 20 21" fill="none">
                        <path
                            d="M8.97721 13.3835L13.1855 10.2251V5.55015C13.1855 4.75015 12.2189 4.35015 11.6522 4.91681L7.33555 9.23348C6.64388 9.92515 6.64388 11.0501 7.33555 11.7418L8.97721 13.3835Z"
                            fill="#429FF5" />
                        <path
                            d="M13.1855 15.4166V10.2249L8.97721 13.3832L11.6522 16.0582C12.2189 16.6166 13.1855 16.2166 13.1855 15.4166Z"
                            fill="#429FF5" />
                    </svg>
                    <input @click="showDatePicker = true" readonly class="custom-input fade-input "
                        placeholder="تاریخ مورد نظر را انتخاب کنید." type="text">
                </div>

            </div>
        </div>
        <div class="mt-6">
            <div>
                <p>ساعت شروع</p>
                <div style="position: relative">

                    <svg style="position: absolute; left: 12px;top: 22px;" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="25" viewBox="0 0 24 25" fill="none">
                        <path
                            d="M12 2.48358C6.49 2.48358 2 6.97358 2 12.4836C2 17.9936 6.49 22.4836 12 22.4836C17.51 22.4836 22 17.9936 22 12.4836C22 6.97358 17.51 2.48358 12 2.48358ZM16.35 16.0536C16.21 16.2936 15.96 16.4236 15.7 16.4236C15.57 16.4236 15.44 16.3936 15.32 16.3136L12.22 14.4636C11.45 14.0036 10.88 12.9936 10.88 12.1036V8.00358C10.88 7.59358 11.22 7.25358 11.63 7.25358C12.04 7.25358 12.38 7.59358 12.38 8.00358V12.1036C12.38 12.4636 12.68 12.9936 12.99 13.1736L16.09 15.0236C16.45 15.2336 16.57 15.6936 16.35 16.0536Z"
                            fill="#429FF5" />
                    </svg>
                    <input class="custom-input fade-input " readonly @click="showTime = true"
                        placeholder="ساعت را انتخاب کنید" type="text">
                </div>

            </div>
        </div>
        <div class="mt-6">
            <div>
                <p>توضیحات (۱۰۰۰/۰)</p>
                <input class="custom-input rich-box " placeholder="عنوان را وارد کنید" type="text">

            </div>
        </div>
        <div class="action">

            <button
                class="bg-primary text-white mt-3 flex justify-center items-center gap-2 py-2 px-4 w-full h-11 rounded-lg">
                تکمیل رزرو
            </button>
        </div>
    </div>

    <BottomSheets :title="'تاریخ مورد نظر را انتخاب کنید.'" v-model="showDatePicker">
        <DatePicker :show="true" :mode="'range'" :column="1" @close="showDatePicker = false" />
    </BottomSheets>

    <BottomSheets title="ساعت مورد نظر را انتخاب کنید." v-model="showTime">
        <DatePicker :show="true" :mode="'single'" @close="showDatePicker = false" type="time" />
    </BottomSheets>
</template>
<script lang="ts" setup>
const showDatePicker = ref(false);
const showTime = ref(false);
definePageMeta({
    layout: 'empty-layout'
})
</script>
<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.container {
    .upload-picture {
        background-color: $surface-variant;
        padding: 12px;
    }

    .upload-img-cn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $secondary-s;
        cursor: pointer;
    }

    .text-secondary {
        color: $secondary;
    }

    .custom-input {
        margin-top: 8px;
        height: 48px;
        width: 100%;
        border-radius: 8px;
        border: 1px solid var(--Key-Outline-Outline-Variant, rgba(223, 223, 223, 0.50));
        text-indent: 12px;
    }

    .fade-input {
        background-color: $surface-variant;
    }

    .rich-box {
        height: 100px;
    }
}

.action {
    position: fixed;
    bottom: 10px;
    left: 5px;
    padding: 24px;
    width: 100%;
}
</style>