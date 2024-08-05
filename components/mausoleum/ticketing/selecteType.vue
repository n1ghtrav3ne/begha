<template>
  <div class="w-full bg-neutral-100 flex justify-evenly rounded-md">
    <div class="w-full">
      <Swiper
        :modules="[SwiperPagination, SwiperEffectCreative]"
        :slidesPerView="3.5"
        :breakpoints="breakpoints"
        :spaceBetween="5"
        :loop="false"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="(item, i) in items" :key="i">
          <div
            class="m-1 rounded-lg h-11 flex items-center justify-center"
            @click="selected = item"
            :class="
              selected.payload == item.payload
                ? 'bg-white px-3 text-neutral-800'
                : 'text-neutral-500'
            "
          >
            {{ item?.name }}
            <div
              class="size-4 bg-error-700 text-white rounded-full text-center text-tiny mr-2"
            >
              {{ item.number }}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  { name: "همه", payload: "all", number: 3 },
  { name: "کاربر عادی", payload: "normal", number: 3 },
  { name: "عوامل", payload: "agents", number: 3 },
  { name: "بسیج", payload: "basij", number: 3 },
]);

const selected = ref({ name: "همه", payload: "all" });

const breakpoints = {
  769: { slidesPerView: 4, slidesPerGroup: 4 },
  1500: { slidesPerView: 4, slidesPerGroup: 4 },
};
</script>

<style lang="scss" scoped>
</style>