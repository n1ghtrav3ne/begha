<template>
    
    <img class="image" src="~/assets/images/cemetery/cemetery.png" alt="">

    <hr>

    <div class="options">

        <div class="item">

            <span class="material-symbols-outlined">
            image
            </span>

            <span>تصویر جدید</span>

        </div>

           <div class="item">

            <span class="material-symbols-outlined">
            delete
            </span>

            <span>حذف تصویر</span>

        </div>

    </div>

</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.image{
    margin-top: 24px;
    border-radius: 100%;
    width: 149px;
    height: 149px;
    margin-right: auto;
    margin-left: auto;
}

hr{
    margin-top: 12px;
    margin-bottom: 12px;
    color: $outline-variant;
}

.options{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    justify-content: center;

    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
}
</style>