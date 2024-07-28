<template>
  <div>
    <div class="slider-container mt-10">
      <div class="new-events">
        <span class="flex items-center"
          ><img
            class="new-events-shape ml-2"
            src="~/assets/images/home/new-events-shape.png"
            alt="new events"
          />رویداد های پیش رو</span
        >
        <span class="see-all">مشاهده همه</span>
      </div>
      <Swiper
        class=""
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slidesPerView="'auto'"
        :spaceBetween="25"
        :loop="false"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="slide in 3" :key="slide">
          <div class="card-box !w-full">
            <div class="!w-full card-image">
              <img class="!w-full" src="~/assets/images/home/eid-fetr.jpg" alt="" />
            </div>
            <div class="card-info">
              <div class="card-title-head">
                <div>
                  <span class="flex items-center mb-3">
                    <span
                      class="service-btn btn-bg-blue flex flex-col items-center justify-center"
                    >
                      <span class="icon-Prayer-Iran"> </span>
                    </span>
                    <span class="event-title mr-2"> جشن بزرگ عید فطر</span>
                  </span>
                </div>
                <div class="event-location">
                  <span class="flex items-center">
                    <span class="icon-Mosque-Iran event-location-icon"> </span>
                    <span class="event-location-title">امام زاده صالح</span>
                  </span>
                </div>
              </div>
              <div class="card-footer mt-2 flex items-center justify-between">
                <span class="event-time">۲۲ بهمن ساعت ۱۹:۰۰</span>
                <span class="event-see-more">مشاهده</span>
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
.see-all{
  color: $secondary;
}
.swiper {
  width: 100%;
  height: 100%;
  background-color: $surface !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: $surface;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  margin-left: 16px !important;
  width: 75%;
  border-radius: 16px;
  border: 1px solid $outline-variant;
}

.swiper-wrapper {
  background-color: $surface !important;
  border-radius: 16px !important;
}

.swiper-backface-hidden {
  background-color: transparent !important;
  // padding: 14px 15px !important;
}

@media (max-width: 375px) {
  .card-box {
    width: 250px !important;
  }
}

.card-box {
  cursor: pointer;
  width: 350px;
  border-radius: 16px !important;
  background-color: #fff;
  .card-image {
    border-top-right-radius: 16px !important;
    border-top-left-radius: 16px !important;
    background-image: url('~/assets/images/home/eid-fetr.jpg');
    background-size: contain;
    background-position: 100%;
    background-repeat: no-repeat;
    img {
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
      width: 100% !important;
    }
  }
  .card-info {
    padding: 20px 20px 20px 20px;
    border-bottom-right-radius: 16px !important;
    border-bottom-left-radius: 16px !important;
    box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.01);
  }
  .event-title {
    font-family: "yekan-bold";
    font-size: 14px;
    color: $surface-on;
  }
  .event-title-icon {
    color: blue;
  }
  .icon-Prayer-Iran {
    font-size: 24px;
  }
  .event-location {
    margin-bottom: 12px;
    .event-location-title {
      font-size: 11px;
      font-family: "yekan-regular";
      color: $surface-on;
      background-color: $surface-container-lowest;
      padding: 5px 12px;
      border-radius: 8px;
      margin-right: 10px;
    }
    .event-location-icon {
      color: $primary;
      font-size: 30px;
    }
  }
  .card-footer {
    border-top: 1px solid $outline-variant;
    padding-top: 23px;
    .event-time {
      color: $surface-on-variant;
      font-size: 11px;
      font-family: "yekan-regular";
    }
    .event-see-more {
      font-size: 11px;
      font-family: "yekan-regular";
      color: $primary;
      cursor: pointer;
    }
  }
}

.slider-container {
  width: 100%;
  margin-bottom: 40px;
  .new-events {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .new-events-shape {
      width: 28px !important;
      height: 12px !important;
    }
    // span {
    //   color: $surface-on;
    //   font-size: 14px;
    //   font-family: "yekan-regular";
    // }
  }
}
.service-btn {
  // padding: 5px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  color: #fff;
}
.btn-bg-blue-light {
  background: linear-gradient(
    0deg,
    rgba(32, 198, 188, 1) 0%,
    rgba(59, 235, 221, 1) 100%
  );
}
.btn-bg-blue {
  background: linear-gradient(180deg, #8ac6fd 0%, #49a2f5 100%);
}
</style>
