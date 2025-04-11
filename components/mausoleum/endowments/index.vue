<template>
  <div>
    <endowmentsCart :data="endowments" link="endowments" />
  </div>
</template>

<script setup>
import endowmentsCart from "../assetsAndEndowments/index.vue";
const endowments = ref([
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 1,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 2,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 4,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 5,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 6,
  },
  {
    title: "فرش ۱۲ متری",
    subtitle: "۵ تخته",
    image: "/carpet.png",
    id: 7,
  },
]);
</script>

<style lang="scss" scoped>
.list-shadow {
  box-shadow: 3px 4px 19px 0px #0000000f;
}
</style>