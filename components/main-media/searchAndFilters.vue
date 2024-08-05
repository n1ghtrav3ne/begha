<template>
  <div>
    <!-- search box and search value  -->
    <div v-if="!searchStatus">
      <div
        class="w-full h-14 border bg-white border-neutral-200 rounded-xl flex items-center px-3"
      >
        <div class="flex-none">
          <div
            class="flex items-center justify-center border-l border-neutral-200 pl-2 ml-2 cursor-pointer"
            @click="filterDialog = true"
          >
            <span>انتخاب بقعه</span>
            <span class="icon-Arrow-Bottom-Iran mr-1 text-2xl"> </span>
          </div>
        </div>
        <div
          class="grow cursor-pointer h-full flex items-center"
          @click="searchStatus = true"
        >
          <span class="text-neutral-500">{{ search || "نام رسانه" }}</span>
        </div>
        <div class="flex-none">
          <img src="~/assets/images/icons/search-black.svg" alt="" />
        </div>
      </div>

      <div class="my-4" v-if="search">
        <list
          :title="`جستجو برای ((${searchObject.title}))`"
          :subtitle="searchObject.number"
          subtitle-class="text-neutral-500 text-tiny"
          title-class="font-bold"
        >
          <template #prepend>
            <div class="size-10 bg-secondary-200 rounded-full centered">
              <div
                class="size-5 bg-secondary-700 rounded-md text-white text-center"
              >
                <span class="text-[16px]">#</span>
              </div>
            </div>
          </template>
        </list>
      </div>
      <BottomSheets
        v-model="filterDialog"
        title="بقعه مورد نظر خود را انتخاب کنید"
        :search="{ placeholder: 'جستجو بقعه' }"
        @updateSearch="(event) => (searchFilter = event)"
      >
        <div class="py-4">
          <div class="mt-2 flex items-center">
            <CustomCheckbox
              label="بقاع دنبال شده"
              v-model="tombFollowers"
            ></CustomCheckbox>
          </div>
          <div class="h-1 bg-secondary-200 my-3"></div>
          <div>
            <list
              title="همه"
              @click="selectedItem = []"
              class="my-2"
              :class="!selectedItem.length && 'bg-secondary-200 p-3 rounded-lg'"
            >
              <template #prepend>
                <img src="/assets/images/icons/menu.svg" />
              </template>
              <template v-if="!selectedItem.length" #append>
                <div class="bg-secondary-700 size-6 centered rounded-full p-1">
                  <img src="/icons/check.svg" class="w-full h-full" />
                </div>
              </template>
            </list>
            <list
              v-for="(item, i) in listItems"
              :key="i"
              :title="item.title"
              @click="selectedItemHandller(item)"
              class="my-2 cursor-pointer"
              :class="
                checkItemHandller(item) && 'bg-secondary-200 p-3 rounded-lg'
              "
            >
              <template #prepend>
                <div class="centered bg-secondary-200 size-7 rounded-full">
                  <img src="/assets/images/icons/Vector.svg" />
                </div>
              </template>
              <template v-if="checkItemHandller(item)" #append>
                <div class="bg-secondary-700 size-6 centered rounded-full p-1">
                  <img src="/icons/check.svg" class="w-full h-full" />
                </div>
              </template>
            </list>
          </div>
        </div>
      </BottomSheets>
    </div>

    <!-- search page , show after click search box (media name ) -->
    <div v-else class="bg-white w-full z-[99] h-screen absolute top-0 right-0">
      <div class="p-4">
        <text-field :focus="true" v-model="search">
          <template #append>
            <img src="~/assets/images/icons/search-black.svg" alt="" />
          </template>
        </text-field>

        <div class="mt-2">
          <template
            v-for="(item, i) in mediase.filter((x) => x.title.includes(search))"
            :key="i"
          >
            <list
              v-if="mediase.filter((x) => x.title.includes(search)).length"
              :title="item.title"
              :subtitle="item.number"
              class="py-2 my-2 cursor-pointer"
              subtitle-class="text-tiny text-neutral-500"
              @click="
                searchStatus = false;
                search = item.title;
                searchObject = item;
              "
            >
              <template #prepend>
                <div class="size-10 bg-secondary-200 rounded-full centered">
                  <div
                    class="size-5 bg-secondary-700 rounded-md text-white text-center"
                  >
                    <span class="text-[16px]">#</span>
                  </div>
                </div>
              </template>
            </list>
          </template>
          <div
            v-if="!mediase.filter((x) => x.title.includes(search)).length"
            class="w-full flex justify-center mt-32"
          >
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
      </div>
    </div>
  </div>
</template>

<script setup>
const filterDialog = ref(false);
const searchFilter = ref("");
const tombFollowers = ref(false);
const searchStatus = ref(null);
const selectedItem = ref([]);

const search = ref("");
const searchObject = ref({});

const listItems = [
  { title: "امام زاده صالح (ع)", payload: "saleh" },
  { title: "امام زاده صالح (ع)", payload: "saleh2" },
  { title: "امام زاده صالح (ع)", payload: "saleh3" },
  { title: "امام زاده صالح (ع)", payload: "saleh4" },
  { title: "امام زاده صالح (ع)", payload: "saleh5" },
];

const mediase = [
  { title: "بهشت", number: "۲۱۳ رسانه" },
  { title: "مسجد", number: "۲۱۳ رسانه" },
  { title: "طوبی", number: "۲۱۳ رسانه" },
  { title: "بهشت", number: "۲۱۳ رسانه" },
  { title: "بهشت", number: "۲۱۳ رسانه" },
  { title: "بهشت", number: "۲۱۳ رسانه" },
];

const checkItemHandller = (item) => {
  const result = selectedItem.value.find((x) => x.payload == item.payload);
  return result ? true : false;
};

const selectedItemHandller = (item) => {
  if (checkItemHandller(item)) {
    const index = selectedItem.value.findIndex(
      (x) => x.payload == item.payload
    );
    selectedItem.value.splice(index, 1);
  } else {
    selectedItem.value.push(item);
  }
};

const emit = defineEmits(["search"]);
watch(search, (newValue) => {
  emit("search", newValue);
});
</script>

<style lang="scss" scoped>
</style>