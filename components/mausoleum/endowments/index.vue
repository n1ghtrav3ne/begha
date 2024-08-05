<template>
  <div>
    <div class="page-header">
      <div class="flex items-center text-white text-base">
        <span
          @click="useRouter().go(-1)"
          class="material-symbols-outlined back-icon"
        >
          arrow_right_alt
        </span>
        <span class="mr-4">موقوفات</span>
      </div>
    </div>

    <div class="w-full p-4" v-if="endowments?.length">
      <div class="mb-7">
        <text-field placeholder="جستجو" v-model="search">
          <template #prepend>
            <div class="cursor-pointer ml-2">
              <img src="~/assets/images/icons/search-black.svg" alt="" />
            </div>
          </template>
        </text-field>
      </div>
      <template v-for="item in endowments" :key="item.id">
        <list
          :title="item.title"
          :subtitle="item.subtitle"
          class="list-shadow p-3 rounded-lg my-3 cursor-pointer"
          titleClass="font-bold"
          subtitleClass="text-tiny text-neutral-500"
          @pressClick="useRouter().push({ path: `endowments/${id}` })"
        >
          <template #prepend>
            <img :src="item.image" class="size-[50px]" />
          </template>
          <template #append>
            <img
              src="/assets/images/icons/dots.svg"
              class="mr-3 cursor-pointer"
              @click="
                itemDialog = true;
                selectedItem = item;
              "
            />
          </template>
        </list>
      </template>
      <NuxtLink to="endowments/create">
        <button
          class="size-11 bg-primary-700 rounded-lg absolute bottom-4 right-0 left-0 mx-auto text-white text-3xl"
        >
          +
        </button>
      </NuxtLink>
    </div>
    <div v-else>
      <NotDefined title="موقوفه ا" btnTitle="موقوفه" link="endowments/create" />
    </div>

    <BottomSheets
      v-model="itemDialog"
      :title="`${selectedItem?.title} (${selectedItem?.subtitle})`"
    >
      <div>
        <list
          title="ویرایش"
          class="my-3 cursor-pointer"
          @click="useRouter().push({ path: `endowments/${id}` })"
        >
          <template #prepend>
            <img src="/assets/images/icons/Edit.svg" />
          </template>
        </list>
        <list
          title="حذف"
          class="mt-3 cursor-pointer"
          @click="
            deleteDialog = true;
            itemDialog = false;
          "
        >
          <template #prepend>
            <img src="/assets/images/icons/trash-fild.svg" />
          </template>
        </list>
      </div>
    </BottomSheets>

    <!-- delete dialog  -->
    <DeleteSheet v-model="deleteDialog" text="موقوفه"></DeleteSheet>
  </div>
</template>

<script setup>
const itemDialog = ref(false);
const selectedItem = ref(null);
const deleteDialog = ref(false);
const search = ref("");

const endowments = ref([
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 1,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 2,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 4,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 5,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 6,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 7,
  },
]);
</script>

<style lang="scss" scoped>
.list-shadow {
  box-shadow: 3px 4px 19px 0px #0000000f;
}
</style>