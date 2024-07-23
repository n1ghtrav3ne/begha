<template>
  <div>
    <!-- discount btn  -->
    <div
      @click="useStore.changeDialogStatus(true)"
      class="w-full h-[54px] border-[1px] py-4 px-3 border-surface-100 rounded-2xl flex items-center justify-between"
    >
      <span class="text-sm text-surface-600">طرح‌های تخفیفی</span>
      <!-- icon -->
      <div class="size-6 flex items-center justify-center">
        <img src="~/assets/images/icons/arrow-left.svg" alt="" />
      </div>
    </div>
    <!-- discount description  -->
    <p class="text-[11px] text-justify text-surface-500 my-3">
      توجه داشته باشید که جهت استفاده از طرح های تخفیفی لازم است مدارک لازم به
      مسئول پدیرش ارائه شود. در غیر این صورت رزرو شما لغو خواهد شد.
    </p>

    <div class="w-full h-[54px]">
      <base-input
        placeholder="کد تخفیف"
        :border="true"
        rounded="2xl"
        color="white"
      >
        <template #append>
          <button class="w-20 h-[38px] rounded-xl p-2 bg-blue text-white">
            اعمال
          </button>
        </template>
      </base-input>
    </div>
  </div>
</template>

<script setup>
const useStore = useDefaultStore();
import BaseInput from "../global/input.vue";
import BaseButton from "../global/button.vue";
defineComponent([BaseInput, BaseButton]);
</script>

<style lang="scss" scoped>
</style>