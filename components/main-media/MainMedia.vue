<template>
  <div class="p-4">
    <div>
      <searchAndFilters> </searchAndFilters>
    </div>
    <div class="my-3">
      <NuxtLink :to="`/begha-media/${i}`">
        <div class="flex items-center my-3">
          <img
            class="size-10 rounded-full"
            src="~/assets/images/one-begha/begha-profile.png"
            alt=""
          />
          <span class="mr-2">امامزاده صالح</span>
        </div>
      </NuxtLink>

      <slider :data="medias" />

      <div class="flex justify-between my-3">
        <div
          class="h-9 p-2 rounded-3xl flex items-center justify-between"
          :class="like && 'border border-error-700 bg-error-100'"
        >
          <span class="ml-1 text-xs">هزار 109</span>
          <span
            @click="like = true"
            class="material-symbols-outlined heart-icon"
            v-if="!like"
          >
            favorite
          </span>
          <img
            v-else
            @click="like = false"
            src="/assets/images/icons/heart.svg"
          />
        </div>
        <div class="flex justify-between items-center">
          <img src="/assets/images/icons/shareMedia.svg" class="size-8" />
          <img src="/assets/images/icons/saveMedia.svg" class="size-8 mr-2" />
        </div>
      </div>
      <div class="mt-4">
        <h2 class="font-bold text-base">بهشت از آن شماست.</h2>
        <p class="text-justify text-sm leading-6 my-3">
          متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم
          متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم
        </p>
        <span class="text-neutral-500 text-tiny">
          # امامـزاده #قرآن #دعا # قرآن #بهشت #امامـزاده
        </span>
      </div>
    </div>
    <div class="divider my-7"></div>
    <div class="mt-5">
      <NuxtLink :to="`/begha-media/${i}`">
        <div class="flex items-center my-3">
          <img
            class="size-10 rounded-full"
            src="~/assets/images/one-begha/begha-profile.png"
            alt=""
          />
          <span class="mr-2">امامزاده صالح</span>
        </div>
      </NuxtLink>

      <slider :data="medias" />

      <div class="flex justify-between my-3">
        <div
          class="h-9 p-2 rounded-3xl flex items-center justify-between"
          :class="like && 'border border-error-700 bg-error-100'"
        >
          <span class="ml-1 text-xs">هزار 109</span>
          <span
            @click="like = true"
            class="material-symbols-outlined heart-icon"
            v-if="!like"
          >
            favorite
          </span>
          <img
            v-else
            @click="like = false"
            src="/assets/images/icons/heart.svg"
          />
        </div>
        <div class="flex justify-between items-center">
          <img src="/assets/images/icons/shareMedia.svg" class="size-8" />
          <img src="/assets/images/icons/saveMedia.svg" class="size-8 mr-2" />
        </div>
      </div>
      <div class="mt-4">
        <h2 class="font-bold text-base">بهشت از آن شماست.</h2>
        <p class="text-justify text-sm leading-6 my-3">
          متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم
          متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم
        </p>
        <span class="text-neutral-500 text-tiny">
          # امامـزاده #قرآن #دعا # قرآن #بهشت #امامـزاده
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import searchAndFilters from "./searchAndFilters.vue";
import slider from "./slider.vue";
const like = ref(false);

const medias = ref([
  {
    image: "/assets/images/one-begha/post-img.png",
  },
  {
    image: "/assets/images/one-begha/post-img.png",
  },
  {
    image: "/assets/images/one-begha/post-img.png",
  },
  {
    image: "/assets/images/one-begha/post-img.png",
  },
]);
</script>

<style lang="scss" scoped>
</style>