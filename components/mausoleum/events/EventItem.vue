<template>
    <NuxtLink to="./details/12">
        <div class="event-item ">
            <img src="@/assets/images/event/pray.jfif" alt="">
            <div class="flex  justify-between w-full ">
                <div class="info-container">
                    <span class="title">جشن بزرگ عید فطر </span>
                    <span class="date">۲۲ بهمن ساعت ۱۹:۰۰ </span>
                </div>
                <div class="info-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path
                            d="M12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8Z"
                            fill="#0B0B0B" />
                        <path
                            d="M12 14C12.8284 14 13.5 13.3284 13.5 12.5C13.5 11.6716 12.8284 11 12 11C11.1716 11 10.5 11.6716 10.5 12.5C10.5 13.3284 11.1716 14 12 14Z"
                            fill="#0B0B0B" />
                        <path
                            d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z"
                            fill="#0B0B0B" />
                    </svg>

                    <div class="flex">
                        <span>4</span>
                        <img class="star ms-1" src="@/assets/images/icons/star.svg" />
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>

</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.event-item {
    display: flex;
    padding: 8px;
    background-color: rebeccpurple !important;
    gap: 8px;
    border-radius: 8px;
    background: $surface;
    height: 80px;
    box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.06);

    img {
        width: 89px;
        height: 60px;
        border-radius: 8px;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;



        .title {
            font-size: 14px;
            font-weight: 700;
        }

        .date {
            font-size: 11px;
            color: $surface-on-variant ;
        }
    }

    .star {
        height: 16px;
        width: 16px;
    }

}
</style>