<template>
  <div>
    <div class="mt-5">
      <Swiper
        :modules="[SwiperPagination, SwiperEffectCreative]"
        :slidesPerView="3.3"
        :breakpoints="breakpoints"
        :loop="false"
        :autoplay="{ delay: 8000, disableOnInteraction: true }"
      >
        <SwiperSlide
          v-for="(item, i) in items.filter((x) => x.status)"
          :key="i"
        >
          <div
            class="h-8 mx-1 bg-[#E4F1FE] border-[1px] border-blue rounded-2xl py-1 px-2 flex items-center justify-between"
          >
            <span class="text-[11px]">{{ item.label }}</span>
            <img
              src="~/assets/images/icons/close.svg"
              class="size-5"
              @click="(event) => clearItem(event, item)"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="divider my-2"></div>
    <div v-for="(item, i) in items" :key="i" class="mt-2">
      <div class="inline-flex items-center p-2">
        <div
          class="size-5 border-[1px] border-surface-100 rounded-[4px]"
          @click="(event) => activeCheckbox(event, i)"
        >
          <div
            v-show="item.status"
            class="size-full bg-blue rounded-[4px] flex items-center justify-center"
          >
            <img src="~/assets/images/icons/check-done.svg" />
          </div>
        </div>
        <span class="mr-2 text-xs">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array,
  modelValue: Boolean, // Remove if not used
});
const emit = defineEmits(["update:modelValue"]);

const items = ref([]);

const breakpoints = {
  769: { slidesPerView: 4, slidesPerGroup: 4 },
  1500: { slidesPerView: 4, slidesPerGroup: 4 },
};

const activeCheckbox = (event, index) => {
  event.stopPropagation();
  items.value[index].status = !items.value[index].status;
};

const clearItem = (event, item) => {
  event.stopPropagation();
  const index = items.value.findIndex((x) => x.value === item.value);
  items.value[index].status = false;
};

watch(
  () => props.items,
  (newItems) => {
    items.value = newItems;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
/* Add your styles here */
</style>
