<template>
  <div>
    <div class="slider-container">
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
            <div class="card-info">
              <div class="card-title-head flex items-center justify-between">
                <div>
                  <span class="flex items-center">
                    <span
                      class="service-btn btn-bg-navy-blue flex flex-col items-center justify-center"
                    >
                      <span class="icon-Education-Iran">  </span>
                    </span>
                   <div class="flex flex-col">
                    <span class="event-head-title mr-2"
                      >دعای ندبه</span
                    >
                    <span class="event-title mr-2"
                      >پنجشنبه شب ها ساعت ۱۸ تا ۲۰</span
                    >
                   </div>
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
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 75%;
  border-radius: 16px;
  border: 1px solid $outline-variant;
}

.swiper-wrapper{
  background-color: $surface !important;
  border-radius: 16px !important;
}

.swiper-backface-hidden{
  background-color: transparent !important;
  // padding: 14px 15px !important;
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
  border-radius: 8px !important;
  background: var(--Key-Surface-Surface-Container-Lowest, #F1F1F1);
  
  .card-image {
    img {
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      max-width: 400px;
      width: 100%;
    }
  }
  .card-info {
    padding: 8px 12px;
    border-bottom-right-radius: 16px !important;
    border-bottom-left-radius: 16px !important;
    box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.01);
  }
  .event-title {
    font-family: "yekan-regular";
    font-size: 11px;
    color: $surface-on;
    display: flex;
    font-weight: 400;
  }
  .event-head-title {
    font-family: "yekan-regular";
    font-size: 14px;
    color: $surface-on;
    display: flex;
    font-weight: 400;
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
  .icon-Education-Iran{
    font-size: 20px;
  }
}

.slider-container {
  width: 100%;
  margin-bottom: 120px !important;
  margin-top: 32px;
  .new-events {
    margin-bottom: 16px;

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
  width: 30px;
  height: 30px;
  border-radius: 8px;
  padding: 4.5px 5px 4.816px 4.5px;
  color: #fff;
}
.btn-bg-navy-blue {
  background: linear-gradient(180deg, #8AC6FD 0%, #6BB3F5 100%);
}
</style>
