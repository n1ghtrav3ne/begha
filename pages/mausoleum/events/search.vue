<template>

    <div class="container h-full w-full">

        <div class="search-container centered w-full">
            <svg @click="$router.push('./list')" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M19.8337 9.33334L24.2573 14.5832L19.8337 19.8333M4.66699 14.5832H24.0755" stroke="#0B0B0B"
                    stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <img class="icon" src="@/assets/images/icons/Search.png" alt="">
            <input v-model="searchValue" @click="$router.push('./search')" class="custom-input ms-4"
                placeholder="نام رویداد و .." type="text">
        </div>
        <div v-if="!searchValue" class=" mt-8">
            <div class="flex items-center justify-between pb-5 seprate-border">
                <span>بازدید های اخیر</span>
                <span class="text-primary ">حذف همه</span>
            </div>
            <!-- search items -->
            <div v-for="i in 3" class="history-resualt flex justify-between items-center m-4 mt-7">
                <div class="flex">
                    <img class="event-img" src="@/assets/images/event/pray.jfif" alt="">
                    <div class="flex flex-col justify-between ms-2">
                        <span class="font-bold">جشن ۲۲ بهمن</span>
                        <span class="date">۲۲ بهمن ۱۴۰۲</span>

                    </div>
                </div>
                <div>X</div>
            </div>

        </div>
        <div v-else-if="searchValue == 'aa'" class=" mt-8">
            <div class="flex items-center justify-between pb-5 seprate-border">
                <span>بازدید های اخیر</span>
                <span class="text-primary ">حذف همه</span>
            </div>
            <!-- search items -->
            <div v-for="i in 2" class="search-resualt seprate-border flex justify-between items-center m-4">
                <div class="flex">
                    <img class="event-img" src="@/assets/images/event/pray.jfif" alt="">
                    <div class="flex flex-col justify-between ms-2">
                        <span>جشن بزرگ عید <span class="text-secondary bg-secondary-400">فطر</span> </span>
                        <span class="date">۲۲ بهمن ۱۴۰۲</span>

                    </div>
                </div>

            </div>

        </div>
        <div v-else class=" h-full w-full centered">
            <div class="centered flex-col">
                <img src="@/assets/images/search.svg" alt="">
                <span class="mt-3 font-bold">موردی یافت نشد!</span>
            </div>

        </div>
    </div>

</template>
<script lang="ts" setup>
const searchValue = ref("");
definePageMeta({
    layout: 'empty-layout'
})
</script>
<style scoped lang="scss">
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.search-container {
    position: relative;

    .icon {
        position: absolute;
        left: 16px;
    }

    .calendar {
        cursor: pointer;
        padding: 8px;
        background-color: $secondary-s-400;
        border-radius: 16px;
        position: absolute;
        left: 16px;
    }

    .custom-input {
        background-color: red;
        padding: 16px;
        width: 100%;
        border-radius: 16px;
        border: 1px solid $outline;
        background: $surface;

    }
}

.history-resualt {
    .event-img {
        width: 48px;
        height: 48px;
        border-radius: 12px;
    }

    .date {
        color: $surface-on-variant;
    }
}

.search-resualt {
    padding-bottom: 12px;

    .event-img {
        width: 89px;
        height: 60px;
        border-radius: 12px;
    }

    .date {
        color: $surface-on-variant;
    }
}
</style>
