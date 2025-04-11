<template>
  <div>
    <services-filter v-model="services"></services-filter>

    <div class="divider h-1 my-3"></div>
    <div>
      <checkbox :items="checkboxItems"></checkbox>
    </div>
  </div>
</template>

<script setup>
import Checkbox from "~/components/global/BaseCheckbox.vue";
const services = ref([]);

const checkboxItems = [
  {
    id: 1,
    label: "تائيد شده ها",
    isChecked: false,
    textColor: "green",
  },
  {
    id: 1,
    label: "رد شده ها ",
    isChecked: false,
    textColor: "red",
  },
  {
    id: 1,
    label: "رد شده ها توسط کاربر ",
    isChecked: false,
    textColor: "red",
  },
];
</script>

<style lang="scss" scoped>
</style>