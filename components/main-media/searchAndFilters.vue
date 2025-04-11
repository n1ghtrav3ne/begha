<template>
  <div>
    <!-- search box and search value  -->
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
        @click="searchDialog = true"
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
            @update:model-value="
              tombFollowers ? (selectedItem = 'folowers') : null;
              filterDialog = false;
            "
          ></CustomCheckbox>
        </div>
        <div class="h-1 bg-secondary-200 my-3"></div>
        <div>
          <list
            title="همه"
            @click="
              selectedItem = null;
              filterDialog = false;
              tombFollowers = false;
            "
            class="my-2 p-2"
            :class="!selectedItem && 'bg-secondary-200 rounded-lg'"
          >
            <template #prepend>
              <img src="/assets/images/icons/menu.svg" />
            </template>
            <template v-if="!selectedItem" #append>
              <div class="bg-secondary-700 size-6 centered rounded-full p-1">
                <img src="/icons/check.svg" class="w-full h-full" />
              </div>
            </template>
          </list>
          <list
            v-for="(item, i) in listItems"
            :key="i"
            :title="item.title"
            @click="
              selectedItem = item;
              filterDialog = false;
              tombFollowers = false;
            "
            class="my-2 p-2 cursor-pointer"
            :class="
              selectedItem?.payload == item?.payload &&
              'bg-secondary-200  rounded-lg'
            "
          >
            <template #prepend>
              <div class="centered bg-secondary-200 size-7 rounded-full">
                <img src="/assets/images/icons/Vector.svg" />
              </div>
            </template>
            <template v-if="selectedItem?.payload == item?.payload" #append>
              <div class="bg-secondary-700 size-6 centered rounded-full p-1">
                <img src="/icons/check.svg" class="w-full h-full" />
              </div>
            </template>
          </list>
        </div>
      </div>
    </BottomSheets>

    <!-- search page , show after click search box (media name ) -->
    <BottomSheets v-model="searchDialog" :fullscreen="true" empty>
      <div class="p-4">
        <div class="flex items-center">
          <span
            @click="searchDialog = false"
            class="material-symbols-outlined back-icon ml-2"
          >
            arrow_right_alt
          </span>
          <div class="w-full">
            <text-field placeholder="جستجوی بقعه">
              <template #append>
                <div class="cursor-pointer ml-2">
                  <img src="~/assets/images/icons/search-black.svg" alt="" />
                </div>
              </template>
            </text-field>
          </div>
        </div>
        <div class="mt-2">
          <template
            v-for="(item, x) in mediase.filter((x) => x.title.includes(search))"
            :key="x"
          >
            <list
              v-if="mediase.filter((x) => x.title.includes(search)).length"
              :title="item.title"
              :subtitle="item.number"
              class="py-2 my-2 cursor-pointer"
              subtitle-class="text-tiny text-neutral-500"
              @click="
                searchDialog = false;
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
    </BottomSheets>
  </div>
</template>

<script setup>
const filterDialog = ref(false);
const searchFilter = ref("");
const tombFollowers = ref(false);
const searchDialog = ref(null);
const selectedItem = ref(null);

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