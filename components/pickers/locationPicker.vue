<template>
  <div>
    <div
      class="choose-location flex items-center mr-3 cursor-pointer"
      @click="locationDialog = true"
    >
      <span class="icon-Location-Iran location-choose-icon ml-1 text-xl">
      </span>
      <span class="location-title-text">اصفهان، نجف آباد</span>
      <span class="icon-Arrow-Bottom-Iran mr-1 text-2xl"> </span>
    </div>
    <bottom-sheets
      v-model="locationDialog"
      title="شهر مورد نظر خود را انتخاب کنید"
      :search="{ placeholder: 'جستجوی شهر یا استان' }"
      @updateSearch="getSearch($event)"
    >
      <div>
        <!-- your location -->
        <div class="flex items-center h-10 mt-3">
          <div class="size-8 bg-secondary-200 centered rounded-full">
            <img src="~/assets/images/icons/gps.svg" />
          </div>
          <div class="mr-2">
            <span>مکان فعلی شما</span>
            <br />
            <span class="text-tiny">اصفهان ، اصفهان</span>
          </div>
        </div>

        <div class="w-full h-1 bg-secondary-200 my-4"></div>

        <div v-if="locations?.filter((x) => x.city == search)">
          <div>
            <list
              title="همه"
              @click="selectedItem = null"
              :class="!selectedItem ? '  bg-secondary-200 rounded-lg' : ''"
              class="h-14"
            >
              <template #prepend>
                <img src="~/assets/images/icons/menu.svg" />
              </template>
              <template v-if="!selectedItem" #append>
                <div class="bg-secondary-700 size-6 centered rounded-full p-1">
                  <img src="/icons/check.svg" class="w-full h-full" />
                </div>
              </template>
            </list>
          </div>
          <list
            v-for="(item, i) in getLocations"
            :key="i"
            :title="item.city"
            :subtitle="item.state"
            class="h-14"
            subtitle-class=" text-tiny"
            :class="
              selectedItem?.city == item?.city
                ? '  bg-secondary-200 rounded-lg'
                : ''
            "
            @click="selectedItem = item"
          >
            <template #prepend>
              <img src="~/assets/images/icons/location2.svg" alt="" />
            </template>
            <template v-if="selectedItem?.city == item?.city" #append>
              <div class="bg-secondary-700 size-6 centered rounded-full p-1">
                <img src="/icons/check.svg" class="w-full h-full" />
              </div>
            </template>
          </list>
        </div>
        <div v-else class="w-full flex justify-center mt-32">
          <div class="text-center">
            <div class="text-center">
              <img
                src="~/assets/images/icons/search-black.svg"
                class="w-12 h-12 left-0 right-0 mx-auto mb-2"
              />
              <span>موردی یافت نشد !</span>
            </div>
          </div>
        </div>
      </div>
    </bottom-sheets>
  </div>
</template>
  
  <script setup>
const locationDialog = ref(false);
const selectedItem = ref({});
const locations = ref([
  { state: "اصفهان", city: "شاهین شهر" },
  { state: "تهران", city: "ولنجک" },
  { state: "اصفهان", city: "زرین شهر" },
  { state: "آذربایجان شرقی", city: "مراغه" },
  { state: "خوزستان", city: "مسجد سلیمان" },
]);

const search = ref("");
const getSearch = (e) => {
  search.value = e;
};

const getLocations = computed(() => {
  if (search?.value?.length) {
    return locations.value.filter((item) => item.city.includes(search.value));
  } else return locations.value;
});
</script>
  
  <style lang="scss" scoped>
</style>