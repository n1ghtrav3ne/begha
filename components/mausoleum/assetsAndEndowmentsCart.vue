<template>
  <div>
    <list
      :title="item?.title"
      :subtitle="item?.subtitle"
      class="list-shadow p-3 rounded-lg my-3 cursor-pointer"
      titleClass="font-bold"
      subtitleClass="text-tiny text-neutral-500"
      @pressClick="useRouter().push({ path: `${link}/${item?.id}` })"
    >
      <template #prepend>
        <img :src="item?.image" class="size-[50px]" />
      </template>
      <template #append>
        <img
          src="/assets/images/icons/dots.svg"
          class="mr-3 cursor-pointer"
          @click="itemDialog = true"
        />
      </template>
    </list>

    <NuxtLink :to="`${link}/create`">
      <button
        class="size-11 bg-primary-700 rounded-lg absolute bottom-4 right-0 left-0 mx-auto text-white text-3xl"
      >
        +
      </button>
    </NuxtLink>

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
    <DeleteSheet v-model="deleteDialog" :text="title"></DeleteSheet>
  </div>
</template>

<script setup>
const props = defineProps(["item", "link", "title"]);
const itemDialog = ref(false);
const deleteDialog = ref(false);
</script>

<style lang="scss" scoped>
.list-shadow {
  box-shadow: 3px 4px 19px 0px #0000000f;
}
</style>