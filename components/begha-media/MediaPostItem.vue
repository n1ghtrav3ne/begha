<template>
  <div>
    <div class="post-card">
      <Swiper
        :modules="[SwiperPagination, SwiperEffectCreative]"
        :slidesPerView="'auto'"
        :pagination="{
          type: 'fraction',
        }"
        :spaceBetween="25"
        :loop="false"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="slide in 3" :key="slide">
          <img
            class="post-images"
            src="~/assets/images/one-begha/post-img.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div class="bost-buttons flex items-center justify-between">
        <div class="flex items-center justify-between">
          <span class="like-count flex items-center justify-between">
            <span class="like-count-text">109 K</span>
            <span class="material-symbols-outlined heart-icon"> favorite </span>
          </span>
        </div>
        <div class="share-save-icons flex items-center justify-between">
          <span class="share-icon material-symbols-outlined"> send </span>
          <span class="save-icon material-symbols-outlined"> bookmark </span>
        </div>
      </div>
      <div class="post-content">
        <div class="post-head-title">
          <span>دیدار آیت الله خمینی با مردم</span>
        </div>
        <div class="post-description">
          <p>
            متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم
          </p>
        </div>
        <div class="post-tags">
          <span v-for="(tag , index) in 6">
            #امامزاده
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";



  .swiper{
    direction: ltr !important;
  }
    :deep(.swiper-wrapper){
      direction: ltr !important;
    }

    .swiper-slide {
      position: relative !important;
      direction: ltr !important;
    }
  


.post-images {
  border-radius: 8px;
  max-height: 207px;
  width: 100% !important;
}

.post-card{
  padding-top: 32px;
  .bost-buttons{
  margin-top: 12px;
  .like-count{
    padding: 2px 8px;
    border: 1px solid $outline;
    border-radius: 24px;
    .like-count-text{
      margin-left: 4px;
      font-size: 12px;
      font-family: 'yekan-regular';
      font-weight: 400;
      color: $surface-on;
    }
    .heart-icon{
      font-size: 18px ;
    }
  }
  .share-save-icons{
    .share-icon{
      font-size: 22px;
      transform: rotate(-45deg);
      margin-left: 8px;
    }
    .save-icon{
      font-size: 22px;
    }
  }
}

.post-content{
  margin-top: 12px;
  .post-head-title{
    span{
      color: $surface-on;
      font-family: 'yekan-regular';
      font-weight: 700;
      font-size: 14px;
    }
  }
  .post-description{
    margin-top: 12px;
    P{
      font-size: 11px;
      color: $surface-on;
      font-family: 'yekan-regular';
      font-weight: 400;
      text-align: justify;

    }
  }
  .post-tags{
    margin-top: 12px;
    padding-bottom: 32px;
    border-bottom: 1px solid $outline-variant;
    span{
      color: $surface-on;
      font-size: 11px;
      font-family: 'yekan-regular';
      font-weight: 400;
      text-align: justify;
    }
  }
}
}
</style>

<style lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.swiper-pagination{
    position: absolute !important;
    top: 8px !important;
    left: 8px !important;
    width: 44px;
    height: 20px;
    background: rgba(26, 26, 26, 0.40);
    border-radius: 24px;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 11px;
    direction: ltr !important;
    color: $surface;

  }
</style>
