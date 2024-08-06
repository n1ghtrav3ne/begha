<template>
  <div>
    <assetsShow :data="assets" link="assets" />
  </div>
</template>

<script setup>
import assetsShow from "../assetsAndEndowments/show.vue";
const assets = ref({
  image: "/carpet2.png",
  title: "فرش ۱۲ متری (۴ تخته) ",
  description:
    "برگزاری مراسم ترحیم در بقعه متبرکه از دیرباز جزیی از این اجرای مراسم ترحیم میباشد.رزرو بقعه متبرکه مراسم ترحیم پس از خاکسپاری و تهیه اقلام پذیرایی.",
});
</script>

<style lang="scss" scoped>
</style>