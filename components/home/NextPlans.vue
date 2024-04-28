<template>
  <div>
    <div class="slider-container mt-5">
      <div class="new-events">
        <span class="flex items-center"
          ><img
            class="new-events-shape ml-2"
            src="~/assets/images/home/popular-begha-shape.png"
            alt="new events"
          />برنامه های پیش رو</span
        >
      </div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slidesPerView="'auto'"
        :spaceBetween="10"
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
              <div class="card-title-head flex items-center justify-between">
                <div>
                  <span class="flex items-center">
                    <span
                      class="service-btn btn-bg-green-light flex flex-col items-center justify-center"
                    >
                      <span class="material-symbols-outlined"> school </span>
                    </span>
                    <span class="event-title mr-2"
                      >آموزش رایگان اذان گویی از مقدماتی تا پیشرفته</span
                    >
                  </span>
                </div>
                <div class="plan-join">
                  <span>ثبت نام</span>
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
  width: 90%;
}

@media (max-width: 375px) {
  .card-box {
    width: 350px !important;
    .card-image {
      img {
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        max-width: 350px !important;
        width: 100% !important;
      }
    }

  }
}

.card-box {
  cursor: pointer;
  width: 400px;
  border-radius: 10px !important;
  background-color: #fff;
  .card-image {
    img {
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      max-width: 400px;
      width: 100%;
    }
  }
  .card-info {
    padding: 10px;
  }
  .event-title {
    font-family: "yekan-regular";
    font-size: 11px;
    color: $surface-on;
    width: 70%;
  }
  .event-title-icon {
    color: blue;
  }

  .plan-join {
    span {
      width: 63px;
      height: 32px;
      background-color: transparent;
      border: 2px solid $primary;
      font-size: 12px;
      font-family: "yekan-regular";
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: $primary;
      cursor: pointer;
      transition: all ease-in 0.13s;
      &:hover {
        background-color: $primary;
        border-color: #fff;
        color: #fff;
      }
    }
  }
}

.slider-container {
  width: 100%;
  margin-bottom: 150px;
  .new-events {
    margin-bottom: 20px;
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
.service-btn {
  // padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  color: #fff;
}
.btn-bg-green-light {
  background: linear-gradient(
    0deg,
    rgba(9, 197, 108, 1) 0%,
    rgba(39, 228, 135, 1) 100%
  );
}
</style>
