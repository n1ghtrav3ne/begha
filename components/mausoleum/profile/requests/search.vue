<template>
  <div>
    <base-input
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
            class="cursor-pointer size-8 bg-blue-light/30 rounded-full centered"
            @click="filtersDialog = true"
          >
            <img src="~/assets/images/icons/filter.svg" alt="" />
          </div>
          <div class="size-3 bg-blue rounded-full absolute -top-1 -left-1">
            <div class="w-full h-full text-white centered text-[11px]">2</div>
          </div>
        </div>
      </template>
    </base-input>

    <bottom-sheets
      v-model="filtersDialog"
      closable
      title="جستجو درخواست"
      class="font-normal text-sm text-surface-600"
    >
      <div class="divider mt-6"></div>
      <div class="px-6 py-4">
        <filters></filters>
      </div>
    </bottom-sheets>
  </div>
</template>


<script setup>
import BaseInput from "~/components/global/input.vue";
import BottomSheets from "~/components/global/bottomSheets.vue";
import filters from "./filters.vue";
const search = ref("");
const emit = defineEmits(["update:modelValue"]);

const filtersDialog = ref(false);
</script>

<style lang="scss" scoped>
</style>