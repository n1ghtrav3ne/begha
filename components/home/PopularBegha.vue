<template>
  <div>
    <div class="slider-container mt-8">
      <div class="new-events">
        <span class="flex items-center"
          ><img
            class="new-events-shape ml-2"
            src="~/assets/images/home/popular-begha-shape.png"
            alt="new events"
          />محبوب ترین بقعه ها</span
        >
      </div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slidesPerView="'auto'"
        :spaceBetween="8"
        :loop="false"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="slide in 3" :key="slide">
          <div class="card-box">
            <div class="card-image">
              <img src="~/assets/images/home/eid-fetr.jpg" alt="" />
            </div>
            <div class="card-info mt-3">
              <div class="card-title-head">
                <div>
                  <span class="flex flex-col items-center mb-3">
                    <span class="begha-title">امام زاده محسن اصفهان</span>
                    <span class="begha-follow-text">دنبال کردن</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Import Swiper styles
import "swiper/css";

const servicesList = ref<
  { title: string; iconClass: string; colorClass: string }[]
>([
  {
    title: "بقاع متبرکه",
    iconClass: "cancel",
    colorClass: "btn-bg-green",
  },
  {
    title: "زائر سرا",
    iconClass: "cancel",
    colorClass: "btn-bg-blue",
  },
  {
    title: "کتابخانه",
    iconClass: "cancel",
    colorClass: "btn-bg-green",
  },
  {
    title: "قبور",
    iconClass: "cancel",
    colorClass: "btn-bg-yellow",
  },
  {
    title: "سالن مراسم",
    iconClass: "cancel",
    colorClass: "btn-bg-green-light",
  },
  {
    title: "آموزشی",
    iconClass: "cancel",
    colorClass: "btn-bg-yellow",
  },
  {
    title: "رویداد ها",
    iconClass: "cancel",
    colorClass: "btn-bg-blue-kind",
  },
  {
    title: "حمایت مالی",
    iconClass: "cancel",
    colorClass: "btn-bg-navy-blue",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../assets/css/icons.scss";
@import "../../assets/css/colors.scss";

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 45%;
}

@media (max-width: 375px) {
  .card-box {
    width: 250px !important;
  }
}

.card-box {
  cursor: pointer;
  width: 350px;
  border-radius: 10px !important;
  background-color: #fff;
  .card-image {
    img {
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      max-width: 350px !important;
      width: 100% !important;
    }
  }
  .card-info {
    padding: 10px;
    .begha-title{
      color: $surface-on;
      font-size: 12px;
      font-family: 'yekan-regular';
    }
    .begha-follow-text{
      margin-top: 15px;
      background-color: transparent;
      border: 2px solid $secondary;
      border-radius: 10px;
      color: $secondary;
      font-size: 12px;
      font-family: 'yekan-regular';
      padding: 8px 12px;
    }
  }
 

}

.slider-container {
  width: 100%;
  margin-bottom: 40px;
  .new-events {
    margin-bottom: 15px;
    .new-events-shape {
      width: 28px !important;
      height: 12px !important;
    }
    span {
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
    }
  }
}

</style>
