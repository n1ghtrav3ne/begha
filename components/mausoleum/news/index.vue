<template>
  <div>
    <!-- page header  -->
    <div class="page-header">
      <div class="flex items-center text-white text-base">
        <span
          @click="useRouter().push('/mausoleum')"
          class="material-symbols-outlined back-icon"
        >
          arrow_right_alt
        </span>
        <span class="mr-4">اخبار</span>
      </div>
      <div>
        <img
          src="~/assets/images/icons/search-normal.svg"
          alt=""
          @click="searchDialog = true"
        />
      </div>
    </div>

    <!-- body -->
    <div class="p-4">
      <template v-if="news?.length">
        <div class="mb-8">
          <text-field placeholder="عنوان خبر، نام امام زاده و ...">
            <template #prepend>
              <div class="cursor-pointer ml-2">
                <img src="~/assets/images/icons/search-black.svg" alt="" />
              </div>
            </template>
          </text-field>
        </div>

        <div
          v-for="(item, i) in news"
          :key="i"
          class="bg-white box-shadow my-4 rounded-2xl py-4"
        >
          <list
            :title="item.title"
            :subtitle="item.description"
            titleClass="text-sm"
            subtitleClass="text-xs mt-2"
            class="px-2"
            @pressClick="useRouter().push(`news/${item.id}`)"
          >
            <template #prepend>
              <img
                class="size-14 rounded-lg mr-2"
                src="~/assets/images/one-begha/begha-profile.png"
                alt=""
              />
            </template>
            <template #append>
              <img
                src="/assets/images/icons/dots.svg"
                class="mr-3 cursor-pointer"
                @click="
                  selected = item;
                  newsDialog = true;
                "
              />
            </template>
          </list>
          <div class="divider my-3"></div>
          <div class="px-4 dlex items-center flex justify-between">
            <span class="text-tiny text-neutral-500">{{ item.date }}</span>
            <div
              class="bg-secondary-200 rounded-lg centered px-3 py-2 text-tiny"
            >
              <img src="/assets/images/icons/masque.svg" class="ml-1" />
              {{ item.place }}
            </div>
          </div>
        </div>
        <NuxtLink to="news/create">
          <button
            class="size-11 bg-primary-700 rounded-lg absolute bottom-4 right-0 left-0 mx-auto text-white text-3xl"
          >
            +
          </button>
        </NuxtLink>
      </template>
      <template v-else>
        <NotDefined title="مورد" btnTitle="خبر" link="news/create" />
      </template>

      <BottomSheets v-model="newsDialog" :title="selected.title">
        <div>
          <list title="ویرایش" class="my-3 cursor-pointer">
            <template #prepend>
              <img src="/assets/images/icons/Edit.svg" />
            </template>
          </list>
          <list
            title="حذف"
            class="mt-3 cursor-pointer"
            @click="
              deleteDialog = true;
              newsDialog = false;
            "
          >
            <template #prepend>
              <img src="/assets/images/icons/trash-fild.svg" />
            </template>
          </list>
        </div>
      </BottomSheets>

      <!-- delete dialog  -->
      <DeleteSheet v-model="deleteDialog" text="خبر"> </DeleteSheet>

      <!-- search dialog  -->
      <BottomSheets v-model="searchDialog" fullscreen :empty="true">
        <div class="flex items-center">
          <span
            @click="searchDialog = false"
            class="material-symbols-outlined back-icon ml-2"
          >
            arrow_right_alt
          </span>
          <div class="w-full">
            <text-field placeholder="عنوان خبر، نام امام زاده و ...">
              <template #append>
                <div class="cursor-pointer ml-2">
                  <img src="~/assets/images/icons/search-black.svg" alt="" />
                </div>
              </template>
            </text-field>
          </div>
        </div>
        <search />
      </BottomSheets>
    </div>
  </div>
</template>

<script setup>
import search from "./search.vue";
const selected = ref({});
const newsDialog = ref(false);
const deleteDialog = ref(false);

const searchDialog = ref(false);
const news = ref([
  {
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    date: "۲۲ بهمن ساعت ۱۹:۰۰",
    place: "امام زاده صالح (ع)",
    id: 1,
  },
  {
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    date: "۲۲ بهمن ساعت ۱۹:۰۰",
    place: "امام زاده صالح (ع)",
    id: 1,
  },
  {
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    date: "۲۲ بهمن ساعت ۱۹:۰۰",
    place: "امام زاده صالح (ع)",
    id: 1,
  },
]);
</script>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 3px 4px 19px 0px #0000000f;
}
</style>