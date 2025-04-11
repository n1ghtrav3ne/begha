<template>
  <Swiper
    :modules="[SwiperPagination, SwiperEffectCreative]"
    :slidesPerView="5"
    :breakpoints="breakpoints"
    :loop="false"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="(item, i) in items" :key="i">
      <div
        class="cursor-pointer text-center py-2"
        @click="activeItemHandle(item.value)"
      >
        <div class="flex justify-center mb-3">
          <div class="relative">
            <div
              class="size-[54px] rounded-lg centered"
              :class="
                getActive(item.value) ? 'bg-secondary-700' : 'bg-neutral-100'
              "
            >
              <img
                class="size-8"
                :src="
                  getActive(item.value)
                    ? `/icons/${item.icon}-active.svg`
                    : `/icons/${item.icon}.svg`
                "
              />
            </div>
            <div
              v-if="getActive(item.value)"
              class="absolute size-6 bg-secondary-700 rounded-full -top-2 -left-2 border border-white"
            >
              <div class="w-full h-full centered">
                <img src="/icons/check.svg" />
              </div>
            </div>
          </div>
        </div>
        <span class="text-tiny">{{ item.title }}</span>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
const props = defineProps(["modelValue"]);
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
const items = [
  { title: "سالن مراسم", value: "hall", icon: "hall" },
  { title: "زائرسرا", value: "pilgrimage", icon: "pilgrimage" },
  { title: "کتابخانه", value: "library", icon: "library" },
  { title: "قبور", value: "graves", icon: "graves" },
  { title: "برنامه آموزشی", value: "learning", icon: "learning" },
  { title: "برنامه آموزشی", value: "learning", icon: "learning" },
];

const activeItems = ref([]);

function checkActiveItem(item) {
  return activeItems.value.findIndex((value) => value == item);
}

function getActive(item) {
  const checked = checkActiveItem(item);
  if (checked !== -1) return true;
  else return false;
}

function activeItemHandle(item) {
  const checkActive = checkActiveItem(item);
  if (checkActive !== -1) activeItems.value.splice(checkActive, 1);
  else activeItems.value.push(item);
}

const emit = defineEmits(["update:modelValue"]);
watch(
  activeItems,
  () => {
    emit("update:modelValue", activeItems.value);
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
</style>