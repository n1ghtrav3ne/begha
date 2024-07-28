<template>
  <div
    class="border-[1px] border-surface-100 rounded-2xl card-shadow bg-white px-8 py-3"
  >
    <div class="h-[132px] w-[172px] left-0 right-0 mx-auto">
      <img src="~/assets/images/payment.svg" alt="" />
    </div>
    <div class="w-full text-center text-blue">
      <span class="text-[22px] font-bold">
        {{ converPrice(data.orginal_price) || 0 }} تومان
      </span>
      <br />
      <span class="text-xs font-normal"> مبلغ قابل پرداخت </span>
    </div>
    <!-- divider -->
    <div class="divider my-6"></div>

    <!-- show price and discount price  -->
    <div>
      <div class="flex justify-between text-sm text-surface-600">
        <span>مبلغ کل</span>
        <span>{{ converPrice(data?.price) }} تومان</span>
      </div>
      <div class="flex justify-between text-sm text-red mt-3">
        <span>مبلغ کل</span>
        <span>{{ converPrice(data?.price) }} تومان</span>
      </div>
    </div>

    <div class="w-full h-11 my-4">
      <button class="w-full h-11 rounded-xl p-2 bg-primary text-white">
        پرداخت
      </button>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "../global/button.vue";
defineComponent([BaseButton]);
const { converPrice } = mixin;
const props = defineProps({
  data: {
    type: Object,
  },
});
</script>

<style scoped>
.card-shadow {
  box-shadow: -1px 2px 4px 0px #0000000f, -3px 7px 7px 0px #00000008,
    -7px 15px 10px 0px #00000000, -12px 27px 12px 0px #00000003,
    -19px 43px 13px 0px #00000000;
}
</style>