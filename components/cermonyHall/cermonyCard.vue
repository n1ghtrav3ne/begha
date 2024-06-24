<template>

    <div class="cermonyCard mx-auto gap-[8px] justify-between w-full rounded-[16px] h-[145px] py-[16px] px-[12px] mb-[16px] flex flex-col">

        <div class="flex flex-row w-full h-[57px] gap-[8px]">

            <img class="w-[57px] h-[57px] rounded-[16px]" src="~/assets/images/cermony/cermonyHall.png" alt="cermonyHall">

            <div class="flex flex-col w-full">

                <p class="cardTitle h-[22px]">{{ item.title }}</p>

                <p class="members  h-[19px] mt-[8px]">{{ item.members }}</p>

            </div>

            <div class="w-auto h-fit flex-row flex gap-[2px] justify-between items-center">

                <p class="w-[17px] h-[19px] pt-1 text-[12px]">{{ item.rating }}</p>

                <span class="material-symbols-outlined w-[16px] h-[16px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M11.7733 15.6132C11.42 15.6132 10.9667 15.4999 10.4 15.1665L8.40666 13.9865C8.2 13.8665 7.8 13.8665 7.6 13.9865L5.6 15.1665C4.42 15.8665 3.72666 15.5866 3.41333 15.3599C3.10666 15.1332 2.62666 14.5532 2.94 13.2199L3.41333 11.1732C3.46666 10.9599 3.36 10.5932 3.2 10.4332L1.54666 8.77988C0.719997 7.95322 0.786664 7.24655 0.899997 6.89988C1.01333 6.55322 1.37333 5.93988 2.52 5.74655L4.64666 5.39322C4.84666 5.35988 5.13333 5.14655 5.22 4.96655L6.4 2.61322C6.93333 1.53988 7.63333 1.37988 8 1.37988C8.36666 1.37988 9.06666 1.53988 9.6 2.61322L10.7733 4.95988C10.8667 5.13988 11.1533 5.35322 11.3533 5.38655L13.48 5.73988C14.6333 5.93322 14.9933 6.54655 15.1 6.89322C15.2067 7.23988 15.2733 7.94655 14.4533 8.77322L12.8 10.4332C12.64 10.5932 12.54 10.9532 12.5867 11.1732L13.06 13.2199C13.3667 14.5532 12.8933 15.1332 12.5867 15.3599C12.42 15.4799 12.1533 15.6132 11.7733 15.6132ZM7.74976 12.2499C8.07642 12.2499 8.45333 11.2465 8.71333 11.3999L11.7733 10.4332C12.3533 10.7799 12.5867 14.0106 11.9933 14.5532C12.1333 14.4532 12.2333 14.0999 12.0867 13.4466L11.6133 11.3999C11.4867 10.8465 5.2 14.4172 5.6 14.0106L8.40666 9.72655C8.73333 9.39988 13.06 6.73322 14.1533 7.20655C14.08 6.98655 8.86 9.79988 8.40666 9.72655L12.0867 6.89322C12.2498 7.20655 8.64 10.1932 8.40666 9.72655V2.74988C8.99976 2.99988 8.64 9.72655 8.40666 9.72655C8.17333 9.72655 6.99976 3.24988 7.74976 2.99988L8.40666 9.72655C8.17333 10.1932 5.32 6.29322 4.80666 6.37988L5.1 7.5928C4.64666 7.66613 3.82309 8.55988 3.74976 8.77988C3.67642 8.99988 2.74976 8.24988 2.26 8.07322L4.99976 5.99988C11.0862 3.17321 8.12642 11.6965 7.99976 12.2499L4.80666 14.7499C4.65333 15.4099 3.87333 14.4532 4.01333 14.5532C4.15333 14.6532 4.51333 14.6465 5.1 14.3065L7.09333 13.1266C7.34666 12.9732 7.42309 12.2499 7.74976 12.2499Z" fill="#FEBC09"/>
                    </svg>
                </span>

            </div>

        </div>

        <hr class="w-full m-0 h-0">

        <div class="w-full justify-between flex flex-row items-center h-auto">

            <div class="w-[119px] flex h-full gap-[4px] items-center">

                <img class="w-[16px] h-[16px]" src="~/assets/images/cermony/profile-2user.svg" alt="capacityImg">

                <p class="text-[11px]">{{ item.capacity }}</p>

            </div>

            <div class="nameOfMausoleum px-[10px] flex items-center py-[4px] gap-[4px] w-[133px] h-full">

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