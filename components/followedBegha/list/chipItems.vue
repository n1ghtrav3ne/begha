<template>
  <div>
    <Swiper
      :modules="[SwiperPagination, SwiperEffectCreative]"
      :slidesPerView="3.3"
      :breakpoints="breakpoints"
      :loop="false"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide
        v-for="(item, i) in props.items.filter((x) => x.status)"
        :key="i"
      >
        <div
          v-if="item.status"
          class="h-8 mx-1 bg-secondary-200 border border-blue rounded-2xl py-1 px-2 flex items-center justify-between"
        >
          <span class="text-tiny">{{ item.label }}</span>
          <img
            src="~/assets/images/icons/close.svg"
            class="size-5"
            @click="clearItem(item)"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
const props = defineProps(["items"]);
const breakpoints = ref({
  769: {
    slidesPerView: 4,
    slidesPerGroup: 4,
  },
  1500: {
    slidesPerView: 4,
    slidesPerGroup: 4,
  },
});
const clearItem = (item) => {
  const index = props.items.findIndex((x) => x.value === item.value);
  props.items[index].status = false;
};
</script>

<style lang="scss" scoped>
</style>