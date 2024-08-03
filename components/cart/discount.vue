<template>
  <div>
    <!-- discount btn  -->
    <select-input text="طرح های تخفیفی" @click="emit('openDialog', true)" />
    <!-- discount description  -->
    <p class="text-tiny text-justify text-neutral-500 my-3">
      توجه داشته باشید که جهت استفاده از طرح های تخفیفی لازم است مدارک لازم به
      مسئول پدیرش ارائه شود. در غیر این صورت رزرو شما لغو خواهد شد.
    </p>

    <div>
      <text-field placeholder="کد تخفیف">
        <template #append>
          <button class="w-20 h-[38px] rounded-xl bg-secondary-700 text-white">
            اعمال
          </button>
        </template>
      </text-field>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../global/button.vue";
defineComponent([BaseButton]);
const emit = defineEmits(["openDialog"]);
</script>

<style lang="scss" scoped>
</style>