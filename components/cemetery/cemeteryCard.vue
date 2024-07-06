<template>

    <div class="cardContainer">

        <div>

            <img src="~/assets/images/cemetery/cemetery.png" alt="">

        </div>

        <span>{{ item.name }}</span>

    </div>

</template>
<script setup lang="ts">
const props =defineProps(['item'])

</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.cardContainer{
    display: flex;
    flex-direction: column;
    height: 189px;
    padding-bottom: 24px;
    width: 100%;
    gap: 16px;
    background: $surface;
    align-items: center;
    border:1px solid $outline-variant;
    justify-content: center;
    border-radius: 12px;

    img{
        width: 100%;
        height: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;

    }

    span{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}

</style>