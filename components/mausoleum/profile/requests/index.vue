<template>
  <div>
    <!-- page header  -->
    <div
      class="w-full bg-primary-700 h-12 flex justify-between items-center p-3"
    >
      <!-- header title and back btn -->
      <div class="flex items-center text-white text-base">
        <span
          @click="searchBox ? getSearch(false) : useRouter().go(-1)"
          class="material-symbols-outlined back-icon"
        >
          arrow_right_alt
        </span>
        <span class="mr-4">درخواست ها</span>
      </div>
      <!-- header search icon -->
      <NuxtLink
        v-if="requestsData?.length > 0 && !searchBox"
        @click="getSearch(true)"
      >
        <div class="cursor-pointer">
          <img src="~/assets/images/icons/search-normal.svg" alt="" />
        </div>
      </NuxtLink>
    </div>

    <!-- search box -->
    <div v-if="searchBox" class="p-4">
      <search-box v-model="search"></search-box>
    </div>

    <!-- show requests data -->
    <div v-if="requestsData?.length" class="p-4">
      <!-- select request type in toggle btn -->
      <toggleBtn
        v-if="!searchBox"
        v-model="selectedItem"
        first=" کاربر عادی"
        secend="کاربر بقعه"
      >
        <template #append-first>
          <div
            class="size-5 bg-error-700 rounded-full mr-2 centered text-white"
          >
            1
          </div>
        </template>
        <template #append-secend>
          <div
            class="size-5 bg-error-700 rounded-full mr-2 centered text-white"
          >
            1
          </div>
        </template>
      </toggleBtn>

      <!-- show requests items  -->
      <div class="my-8" v-if="getRequestsItems.length">
        <items :data="getRequestsItems"> </items>
      </div>

      <!-- show empty data for search -->
      <div v-else class="w-full flex justify-center mt-24">
        <div class="text-center">
          <img
            src="~/assets/images/icons/search-black.svg"
            class="w-12 h-12 left-0 right-0 mx-auto mb-2"
          />
          <span>موردی یافت نشد !</span>
        </div>
      </div>
    </div>

    <!-- show empty data -->
    <div v-else class="w-full flex justify-center mt-44">
      <div class="text-center">
        <img
          src="~/assets/images/empty-data.png"
          class="w-24 h-[90px] left-0 right-0 mx-auto mb-2"
        />
        <span>موردی موجود نیست!</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import items from "./items.vue";
import SearchBox from "./search.vue";
const selectedItem = ref("first");
const search = ref("");

const requestsData = ref([
  {
    title: "درخواست فرش",
    from: "امام زاده صالح (ع)",
    status: "new",
    type: "secend",
    date: "2017-10-04T20:24:30+00:00",
  },
  {
    title: "درخواست مصالح ساختمانی",
    from: "امام زاده صالح (ع)",
    status: "pending",
    type: "secend",
    date: "2017-10-04T20:24:30+00:00",
  },
  {
    title: "درخواست زائرسرا",
    from: "محمدحسین قربانی",
    status: "new",
    image: "/userRequest.png",
    type: "first",
    date: "2017-10-04T20:24:30+00:00",
  },
  {
    title: "درخواست سالن مراسم",
    from: "محمدحسین قربانی",
    status: "pending",
    image: "/userRequest.png",
    type: "first",
    date: "2017-10-04T20:24:30+00:00",
  },
  {
    title: "درخواست کتاب",
    from: "کاربر ۰۹۱۲۳۴۵۶۷۸۹",
    status: "failed",
    image: "/userRequest.png",
    date: "2017-10-04T20:24:30+00:00",
    type: "first",
  },

  {
    title: "درخواست فرش",
    from: "امام زاده صالح (ع)",
    status: "success",
    type: "secend",
    date: "2017-10-03T20:24:30+00:00",
  },
  {
    title: "درخواست منبر",
    from: "امام زاده صالح (ع)",
    status: "success",
    type: "secend",
    date: "2017-10-03T20:24:30+00:00",
  },
  {
    title: "درخواست صندوق نذورات",
    from: "امام زاده صالح (ع)",
    status: "failed-user",
    type: "secend",
    date: "2017-10-03T20:24:30+00:00",
  },
]);

const searchBox = ref(false);

function getSearch(item) {
  searchBox.value = item;
  if (item) selectedItem.value = null;
  else selectedItem.value = "first";
}

const getRequestsItems = computed(() => {
  if (selectedItem.value) {
    return requestsData.value.filter(
      (value) => value.type == selectedItem.value
    );
  } else {
    if (search.value) {
      return requestsData.value.filter((value) => {
        if (value.title.indexOf(search.value) != -1) {
          return true;
        } else return false;
      });
    }
    return requestsData.value;
  }
});
</script>

<style lang="scss" scoped>
</style>