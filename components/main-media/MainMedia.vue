<template>
  <div class="p-4">
    <div>
      <searchAndFilters> </searchAndFilters>
    </div>
    <div class="divider my-3"></div>
    <div class="my-3">
      <slider :data="medias" />
    </div>
    <div class="my-3">
      <slider :data="medias" />
    </div>
  </div>
</template>

<script setup>
import searchAndFilters from "./searchAndFilters.vue";
import slider from "./slider.vue";

const medias = ref([
  {
    name: "امامزاده صالح",
    image: "/assets/images/one-begha/post-img.png",
    like: "109",
    title: "بهشت از آن شماست.",
    description:
      "متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم",
    hashtag: "# امامـزاده #قرآن #دعا # قرآن #بهشت #امامـزاده",
  },
  {
    name: "امامزاده صالح",
    image: "/assets/images/one-begha/post-img.png",
    like: "109",
    title: "بهشت از آن شماست.",
    description:
      "متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم",
    hashtag: "# امامـزاده #قرآن #دعا # قرآن #بهشت #امامـزاده",
  },
  {
    name: "امامزاده صالح",
    image: "/assets/images/one-begha/post-img.png",
    like: "109",
    title: "بهشت از آن شماست.",
    description:
      "متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم",
    hashtag: "# امامـزاده #قرآن #دعا # قرآن #بهشت #امامـزاده",
  },
  {
    name: "امامزاده صالح",
    image: "/assets/images/one-begha/post-img.png",
    like: "109",
    title: "بهشت از آن شماست.",
    description:
      "متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم",
    hashtag: "# امامـزاده #قرآن #دعا # قرآن #بهشت #امامـزاده",
  },
]);
</script>

<style lang="scss" scoped>
</style>