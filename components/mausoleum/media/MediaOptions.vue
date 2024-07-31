<template>

    <div class="itemContainer">
        
        <div class="item">

            <span class="material-symbols-outlined pb-2">
            ios_share
            </span>

            <span>اشتراک‌ گذاری</span>

        </div>

          <div class="item">

            <span class="material-symbols-outlined">
            edit
            </span>

            <span>ویرایش</span>

        </div>

          <div @click="$emit('delete')" class="lastItem">

            <span class="material-symbols-outlined">
            delete
            </span>

            <span>حذف</span>

        </div>

    </div>

</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.itemContainer{
    width: 100%;

    .item{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        border-bottom: 1px dashed $outline-variant;
        padding-top: 12px;
        padding-bottom: 12px;
    }

    .lastItem{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding-top: 12px;
        padding-bottom: 12px;
    }
}
</style>