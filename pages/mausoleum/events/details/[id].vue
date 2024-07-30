<template>
    <div class="back-navbar container flex items-center justify-between">
        <span><span @click="$router.go(-1)" class="material-symbols-outlined back-icon ml-2">
                trending_flat </span><span class="back-title">رویداد‌ها</span></span>

    </div>
    <div class="container">
        <div class="w-full mt-6">

            <img class="w-full main-img" src="@/assets/images/event/empty-data.png" alt="">
        </div>
        <div class=" mt-12">
            <div class="flex justify-between items-center">
                <span class="text-[16px]">جشن بزرگ عید فطر </span>
                <div class="rating flex ">
                    <span class="mt-1">4</span>
                    <img class="star ms-1" src="@/assets/images/icons/star.svg" />

                </div>

            </div>
            <div class="mt-3 description">
                برگزاری مراسم ترحیم در بقعه متبرکه از دیرباز جزیی از این اجرای مراسم ترحیم میباشد.رزرو بقعه
                متبرکه مراسم ترحیم پس از خاکسپاری و تهیه اقلام پذیرایی.
            </div>
            <div class="mt-3 flex justify-between items-center">
                <div class="boghe-name">
                    <img src="@/assets/images/icons/Mosque.png">
                    امام زاده صالح (ع)
                </div>
                <div class="event-date">۲۲ بهمن ساعت ۱۹:۰۰</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'empty-layout'
})
</script>
<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.back-navbar {
    height: 48px;
    background: $primary;
    display: flex;
    align-items: center;
    padding: 5px 10px;

    span.back-title {
        font-size: 16px;
        font-family: "yekan-regular";
        color: $primary-on;
    }

    span.back-icon {
        color: $primary-on;
        font-size: 25px;
        vertical-align: -10px;
    }
}

.main-img {
    border-radius: 8px;
}

.description {
    padding-bottom: 20px;
    border-bottom: 1px solid $outline-variant;
    ;
}

.boghe-name {
    display: flex;
    padding: 4px 10px;

    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    background: $secondary-container;
}

.event-date {
    font-size: 11px;
    color: $surface-on-variant;
}
</style>