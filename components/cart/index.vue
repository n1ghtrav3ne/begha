<template>
  <div>
    <!-- page header component -->
    <cart-header></cart-header>
    <!-- page body -->
    <div class="p-6">
      <!-- description  -->
      <p class="text-sm text-justify text-neutral-800">
        {{ data.description }}
      </p>

      <!-- divider -->
      <div class="divider my-6"></div>

      <!-- discount section component -->
      <discount @open-dialog="getOpenDialog($event)" />
    </div>

    <div class="p-3">
      <price :data="data"></price>
    </div>

    <bottomSheets v-model="discountPlans">
      <plans />
    </bottomSheets>
  </div>
</template>

<script setup>
const discountPlans = ref(false);
import discount from "./discount.vue";
import price from "./price.vue";
import plans from "./plans.vue";
import bottomSheets from "../global/bottomSheets.vue";

const data = {
  description:
    "این متن دارای توضیح است. این متن دارای توضیح است. این متن دارای توضیح است.",
  orginal_price: "2000000",
  price: "2500000",
  discount_price: "500000",
};

const getOpenDialog = (e) => (discountPlans.value = e);
</script>

<style lang="scss" scoped>
</style>