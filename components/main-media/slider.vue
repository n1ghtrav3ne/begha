<template>
  <div>
    <div>
      <Swiper
        :modules="[SwiperPagination, SwiperEffectCreative]"
        :slidesPerView="'auto'"
        :spaceBetween="25"
        :loop="false"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="(slide, i) in data" :key="i">
          <NuxtLink :to="`/begha-media/${i}`">
            <div class="flex items-center my-3">
              <img
                class="size-10 rounded-full"
                src="~/assets/images/one-begha/begha-profile.png"
                alt=""
              />
              <span class="mr-2">{{ slide.name }}</span>
            </div>
          </NuxtLink>
          <div class="w-full relative">
            <img
              class="aspect-video rounded-xl"
              src="~/assets/images/one-begha/post-img.png"
            />
            <div
              class="absolute top-2 left-2 bg-neutral-700/40 px-2 h-6 rounded-3xl"
            >
              <div
                class="w-full h-full flex items-center justify-center text-white text-tiny"
              >
                {{ data.length }} / {{ i + 1 }}
              </div>
            </div>
          </div>
          <div class="flex justify-between my-3">
            <div
              class="border border-error-700 h-9 p-2 rounded-3xl flex items-center justify-between"
            >
              <span class="ml-1 text-xs">هزار {{ slide.like }}</span>

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
              <img
                src="/assets/images/icons/saveMedia.svg"
                class="size-8 mr-2"
              />
            </div>
          </div>
          <div class="mt-4">
            <h2 class="font-bold text-base">{{ slide.title }}</h2>
            <p class="text-justify text-sm leading-6 my-3">
              {{ slide.description }}
            </p>
            <span class="text-neutral-500 text-tiny">{{ slide.hashtag }}</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const like = ref(false);
</script>

<style lang="scss" scoped>
</style>