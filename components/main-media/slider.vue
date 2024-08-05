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
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style lang="scss" scoped>
</style>