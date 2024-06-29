<template>

    <div class="cermonyCard mx-auto gap-[8px] justify-between w-full rounded-[16px] h-[145px] py-[16px] px-[12px] mb-[16px] flex flex-col">

        <div class="flex flex-row w-full h-[57px] gap-[8px]">

            <img class="w-[57px] h-[57px] rounded-[16px]" src="~/assets/images/cermony/cermonyHall.png" alt="cermonyHall">

            <div class="flex flex-col w-full">

                <p class="cardTitle h-[22px]">{{ item.title }}</p>

                <p class="members  h-[19px] mt-[8px]">{{ item.members }}</p>

            </div>

            <div class="w-fit h-fit flex-row flex gap-[2px] justify-center items-center">

                <p class="w-[17px] flex items-center h-[19px] pt-1 text-[12px]">{{ item.rating }}</p>

                <img class="w-[16px] h-[16px]" src="~/assets/images/cermony/ant-design_star-filled.png" alt="">

            </div>

        </div>

        <hr class="w-full m-0 h-0">

        <div class="w-full justify-between flex flex-row items-center h-auto">

            <div class="w-[119px] flex h-full gap-[4px] items-center">

                <img class="w-[16px] h-[16px]" src="~/assets/images/cermony/profile-2user.svg" alt="capacityImg">

                <p class="text-[11px]">{{ item.capacity }}</p>

            </div>

            <div class="nameOfMausoleum rounded-[8px] px-[10px] flex items-center py-[4px] gap-[4px] w-[133px] h-full">

                <span class="w-[24px] h-[24px] flex items-center justify-center">

                    <img src="~/assets/images/cermony/holyBegha.svg" alt="mosque">

                </span>

                <p class="text-[11px]">{{ item.mausoleum }}</p>


            </div>

        </div>
        

    </div>

</template>

<script setup lang="ts">

    const props=defineProps(['item'])

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

@font-face {
    font-family: yekanBakh;
    src: url("~/assets/fonts/yekanBakh/YekanBakh-Regular.woff");
}

.cermonyCard{
    font-family: yekanBakh;
    border: 1px solid $outline-variant;

    .cardTitle{
        font-weight: 400;
        font-size: 14px;
    }
    
    .members{
        font-weight: 400;
        font-size: 12px;
    }

    hr{
        color: $outline-variant;
    }

    .nameOfMausoleum{
        background-color: $semantic-success;

        p{
            font-weight: 400;
            color: $secondary-on-container;
            line-height: 16px;
        }
    }

}
</style>