<template>
  <div>
    <text-field
      placeholder="جستجو بر اساس نام خدمت"
      v-model="search"
      @update:model-value="emit('update:modelValue', search)"
    >
      <template #prepend>
        <div class="cursor-pointer ml-2">
          <img src="~/assets/images/icons/search-black.svg" alt="" />
        </div>
      </template>
      <template #append>
        <div class="relative">
          <div
            class="cursor-pointer size-8 bg-secondary-700/30 rounded-full centered"
            @click="filtersDialog = true"
          >
            <img src="~/assets/images/icons/filter.svg" alt="" />
          </div>
          <div
            class="size-3 bg-secondary-700 rounded-full absolute -top-1 -left-1"
          >
            <div class="w-full h-full text-white centered text-tiny">2</div>
          </div>
        </div>
      </template>
    </text-field>

    <bottom-sheets
      v-model="filtersDialog"
      closable
      title="جستجو درخواست"
      class="font-normal text-sm text-neutral-800"
    >
      <div class="divider mt-6"></div>
      <div class="px-6 py-4">
        <filters></filters>
      </div>
    </bottom-sheets>
  </div>
</template>


<script setup>
import BottomSheets from "~/components/global/bottomSheets.vue";
import filters from "./filters.vue";
const search = ref("");
const emit = defineEmits(["update:modelValue"]);

const filtersDialog = ref(false);
</script>

<style lang="scss" scoped>
</style>