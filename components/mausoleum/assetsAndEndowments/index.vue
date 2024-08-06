<template>
  <div>
    <div class="page-header">
      <div class="flex items-center text-white text-base">
        <span
          @click="useRouter().push('/mausoleum')"
          class="material-symbols-outlined back-icon"
        >
          arrow_right_alt
        </span>
        <span class="mr-4">{{
          link == "assets" ? "دارایی ها" : "موقوفه ها"
        }}</span>
      </div>
      <div v-if="data.length">
        <img
          src="~/assets/images/icons/search-normal.svg"
          alt=""
          @click="searchDialog = true"
        />
      </div>
    </div>

    <div class="w-full p-4" v-if="data?.length">
      <template v-for="item in data" :key="item.id">
        <list
          :title="item.title"
          :subtitle="item.subtitle"
          class="list-shadow p-3 rounded-lg my-3 cursor-pointer"
          titleClass="font-bold"
          subtitleClass="text-tiny text-neutral-500"
          @pressClick="useRouter().push({ path: `${link}/${id}` })"
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
      <NuxtLink :to="`${link}/create`">
        <button
          class="size-11 bg-primary-700 rounded-lg absolute bottom-4 right-0 left-0 mx-auto text-white text-3xl"
        >
          +
        </button>
      </NuxtLink>
    </div>
    <div v-else>
      <NotDefined
        title="مورد ا"
        :btnTitle="link == 'assets' ? 'دارایی' : 'موقوفه'"
        :link="`${link}/create`"
      />
    </div>

    <BottomSheets
      v-model="itemDialog"
      :title="`${selectedItem?.title} (${selectedItem?.subtitle})`"
    >
      <div>
        <list
          title="ویرایش"
          class="my-3 cursor-pointer"
          @click="useRouter().push({ path: `${link}/${id}` })"
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
    <DeleteSheet
      v-model="deleteDialog"
      :text="link == 'assets' ? 'دارایی' : 'موقوفه'"
    ></DeleteSheet>

    <BottomSheets v-model="searchDialog" :fullscreen="true" :empty="true">
      <div class="flex items-center">
        <span
          @click="searchDialog = false"
          class="material-symbols-outlined back-icon ml-2"
        >
          arrow_right_alt
        </span>
        <div class="w-full">
          <text-field
            variant="filled"
            :placeholder="`نام ${link == 'assets' ? 'دارایی' : 'موقوفه'}`"
          >
            <template #append>
              <div class="cursor-pointer ml-2">
                <img src="~/assets/images/icons/search-black.svg" alt="" />
              </div>
            </template>
          </text-field>
        </div>
      </div>
    </BottomSheets>
  </div>
</template>
  
  <script setup>
const props = defineProps(["data", "link"]);
const itemDialog = ref(false);
const selectedItem = ref(null);
const deleteDialog = ref(false);
const searchDialog = ref(false);
</script>
  
  <style lang="scss" scoped>
.list-shadow {
  box-shadow: 3px 4px 19px 0px #0000000f;
}
</style>