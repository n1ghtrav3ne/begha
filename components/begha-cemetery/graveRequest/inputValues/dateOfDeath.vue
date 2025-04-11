<template>
  <div class="swiperContainer">
    <Swiper
      :modules="[SwiperPagination, SwiperEffectCreative]"
      :slidesPerView="3"
      :loop="true"
      direction="vertical"
      :centeredSlides="true"
      class="daySlider"
      @touchstart="activeBars(1)"
      :initial-slide="initialSlide"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        :class="{
          activeText: index === activeSlide - 1,
          selectedText: index === activeSlide - 1 && barsStyle != 1,
        }"
        v-for="(day, index) in days"
        :key="index"
      >
        {{ day.toLocaleString("fa-IR") }}
      </SwiperSlide>
    </Swiper>

    <Swiper
      :modules="[SwiperPagination, SwiperEffectCreative]"
      :slidesPerView="3"
      :loop="true"
      direction="vertical"
      :centeredSlides="true"
      @touchstart="activeBars(2)"
      ref="swiper"
      class="monthSlider"
      @slideChange="onMonthChange"
    >
      <SwiperSlide
        :class="{
          activeText: index === activeMonthSlide,
          selectedText: index === activeMonthSlide && barsStyle != 2,
        }"
        v-for="(month, index) in months"
        :key="index"
      >
        {{ month }}
      </SwiperSlide>
    </Swiper>

    <Swiper
      :modules="[SwiperPagination, SwiperEffectCreative]"
      :slidesPerView="3"
      :loop="true"
      :centeredSlides="true"
      direction="vertical"
      :initial-slide="years.length - 1"
      ref="swiper"
      class="yearSlider"
      @slideChange="onYearChange"
      @touchstart="activeBars(3)"
    >
      <SwiperSlide
        :class="{
          activeText: index === activeYearSlide,
          selectedText: index === activeYearSlide && barsStyle != 3,
        }"
        v-for="(year, index) in years"
        :key="index"
      >
        {{ new Intl.NumberFormat("fa", { useGrouping: false }).format(year) }}
      </SwiperSlide>
    </Swiper>
  </div>

  <div class="bars">
    <div
      :class="{ active: index === barsStyle }"
      class="bar"
      v-for="index in 3"
      :key="index"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

const initialSlide = ref(0);
const activeSlide = ref(1);

const onSlideChange = (event: any) => {
  activeSlide.value = (event.realIndex % days.value.length) + 1;
};

const activeMonthSlide = ref(0);

const onMonthChange = (event: any) => {
  activeMonthSlide.value = event.realIndex;
  const year = years.value[activeYearSlide.value];
  const daysInMonth = getDaysInMonth(activeMonthSlide.value, year);
  days.value = Array.from({ length: daysInMonth }, (_, i) => i + 1);
};
const activeYearSlide = ref(0);

const onYearChange = (event: any) => {
  activeYearSlide.value = event.realIndex;
  const year = years.value[activeYearSlide.value];
  const daysInMonth = getDaysInMonth(activeMonthSlide.value, year);
  days.value = Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const getDaysInMonth = (monthIndex: number, year: number) => {
  if (monthIndex < 6) {
    return 31;
  } else if (monthIndex < 11) {
    return 30;
  } else {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return isLeapYear ? 30 : 29;
  }
};

const days: Ref<number[]> = ref([]);

for (let i = 1; i <= 31; i++) {
  days.value.push(i);
}

let months: string[] = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const startYear = ref(1340);
const maxYear = ref(1403);

const years = ref(
  Array.from(
    { length: maxYear.value - startYear.value + 1 },
    (_, i) => startYear.value + i
  )
);

const barsStyle = ref(0);

const activeBars = (index: number) => {
  barsStyle.value = index;
};

const selectedDay = computed(() => days.value[activeSlide.value - 1]);
const selectedMonth = computed(() => months[activeMonthSlide.value]);
const selectedYear = computed(() => years.value[activeYearSlide.value]);

const selectedDate = computed(() => [
  selectedDay.value,
  selectedMonth.value,
  selectedYear.value,
]);

modalStore.setDate(selectedDate);
</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: $surface-on;
}
.swiperContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 132px;
  gap: 12px;
  margin-top: 16px;
}
.swiper {
  height: 100% !important;
  width: 40%;
}

.swiper-slide {
  position: relative !important;
  direction: ltr !important;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $surface-container-high;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 30%;
}

.monthSlider {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: $surface-on;
}
.daySlider {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: $surface-on;
}

.bars {
  display: flex;
  flex-direction: row;
  gap: 12px;
  position: relative;
  height: 37px;
  width: 100%;
  right: 0;
  bottom: 5.3rem;

  .bar {
    border-top: 1px solid $outline-variant;
    border-bottom: 1px solid $outline-variant;
    height: 100%;
    width: 100%;
  }
}
.bar.active {
  border-top: 1px solid $secondary-s-400;
  border-bottom: 1px solid $secondary-s-400;
}

.activeText {
  color: $secondary;
  font-size: 14px;
}
.selectedText {
  font-size: 14px;
  color: $surface-on;
}
</style>