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
      </div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slidesPerView="'auto'"
    :spaceBetween="20"
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
                  <span class="flex items-center mb-3">
                    <span
                      class="service-btn btn-bg-blue-light flex flex-col items-center justify-center"
                    >
                      <span class="material-symbols-outlined">
                        prayer_times
                      </span>
                    </span>
                    <span class="event-title mr-2"> جشن بزرگ عید فطر</span>
                  </span>
                </div>
                <div class="event-location">
                  <span class="flex items-center">
                    <span class="material-symbols-outlined event-location-icon"> mosque </span>
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
import 'swiper/css';

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
  width: 70%;
}



.card-box {
  cursor: pointer;
  width: 250px;
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
  .card-info{
    padding: 20px;
  }
  .event-title {
    font-family: "yekan-bold";
    font-size: 14px;
    color: $surface-on;
  }
  .event-title-icon {
    color: blue;
  }
  .event-location{
    margin-bottom: 25px;
    .event-location-title{
      font-size: 11px;
      font-family: 'yekan-regular';
      color: $surface-on;
      background-color: $surface-container-lowest;
      padding: 5px 12px;
      border-radius: 20px;
      margin-right: 10px;
    }
    .event-location-icon{
      color: $primary;

    }
  }
  .card-footer{
    border-top: 1px solid $outline-variant;
    padding-top: 23px;
    .event-time{
      color: $surface-on-variant;
      font-size: 11px;
      font-family: 'yekan-regular';
    }
    .event-see-more{
      font-size: 11px;
      font-family: 'yekan-regular';
      color: $primary;
      cursor: pointer;
    }
  }
}

.slider-container {
  width: 100%;
  margin-bottom: 150px;
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
</style>
