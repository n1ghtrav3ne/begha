<template>
  <div class="back-navbar container flex items-center justify-between">
    <span
      ><span
        @click.="$router.push('/')"
        class="material-symbols-outlined back-icon ml-2"
      >
        trending_flat </span
      ><span class="back-title">رویداد‌ها</span></span
    >
  </div>
  <div class="container">
    <div v-if="noItem" class="h-full w-full centered">
      <div class="centered flex-col">
        <img class="notfound-img" src="@/assets/images/no-item.svg" />
        <span class="mt-3">رویدادی تعریف نشده است.</span>
        <button
          class="bg-primary-700 text-white mt-3 flex justify-center items-center gap-2 py-2 px-4 w-full h-11 rounded-lg"
        >
          <img src="@/assets/images/icons/add-square.svg" />
          رویداد جدید
        </button>
      </div>
    </div>
    <div v-else>
      <div class="search-container centered w-full">
        <img class="icon" src="@/assets/images/icons/Search.png" alt="" />
        <img
          @click.stop="showSelectDate = true"
          class="calendar"
          src="@/assets/images/icons/calendar.svg"
          alt=""
        />
        <input
          @click="$router.push('./search')"
          class="custom-input"
          placeholder="جستجو"
          type="text"
        />
      </div>
      <div class="swipper-container">
        <div class="event-list w-full mt-10">
          <p>امروز</p>
          <Swiper
            class="mt-3"
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slidesPerView="'auto'"
            :spaceBetween="8"
            :loop="false"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide
              v-for="slide in 3"
              :key="slide"
              style="margin-left: 16px"
            >
              <EventItem />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="event-list w-full mt-10">
          <p>دوشنبه ۲۲ اردیبهشت</p>
          <Swiper
            class="mt-3"
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slidesPerView="'auto'"
            :spaceBetween="8"
            :loop="false"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide
              v-for="slide in 3"
              :key="slide"
              style="margin-left: 16px"
            >
              <EventItem />
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="x w-full mt-10">
          <p>یکشنبه ۲۱ اردیبهشت</p>
          <Swiper
            class="mt-3"
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slidesPerView="'auto'"
            :spaceBetween="8"
            :loop="false"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide
              v-for="slide in 3"
              :key="slide"
              style="margin-left: 16px"
            >
              <EventItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <button></button>
    </div>
    <div class="add-container">
      <button
        @click="$router.push('./create')"
        class="bg-primary-700 text-white mt-3 flex justify-center items-center gap-2 py-2 px-4 h-11 rounded-lg"
      >
        <img src="@/assets/images/icons/add-square.svg" />
      </button>
    </div>
  </div>

  <BottomSheets v-model="showSelectDate">
    <DatePicker
      :show="true"
      :mode="'range'"
      :column="1"
      @close="showSelectDate = false"
    />
  </BottomSheets>
  <BottomSheets :title="'رویدادعید فطر'" v-model="showSelectDate">
    <EventSort />
  </BottomSheets>
</template>
<script lang="ts" setup>
const noItem = ref(false);
import EventItem from "@/components/mausoleum/events/EventItem.vue";
import EventSort from "@/components/mausoleum/events/EventSort.vue";
defineComponent({ EventItem, EventSort });
const showSelectDate = ref(false);
const showAction = ref(false);
const showSearch = ref(false);
definePageMeta({
  layout: "empty-layout",
});
</script>
<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.back-navbar {
  height: 48px;
  background: $primary;
  display: flex;
  align-items: center;
  padding: 5px 10px;

  span.back-title {
    font-size: 16px;
    font-family: "yekan-regular";
    color: $primary-on;
  }

  span.back-icon {
    color: $primary-on;
    font-size: 25px;
    vertical-align: -10px;
  }
}

.notfound-img {
  width: 75px;
  height: 75px;
}

.search-container {
  position: relative;

  .icon {
    position: absolute;
    right: 16px;
  }

  .calendar {
    cursor: pointer;
    padding: 8px;
    background-color: $secondary-s-400;
    border-radius: 16px;
    position: absolute;
    left: 16px;
  }

  .custom-input {
    background-color: red;
    padding: 16px;
    width: 100%;
    border-radius: 16px;
    border: 1px solid $outline;
    background: $surface;
    text-indent: 32px;
  }
}

.swiper-slide {
  width: 80%;
}

.add-container {
  position: absolute;
  bottom: 30px;

  right: 44%;
}
</style>