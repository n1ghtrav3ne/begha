<template>
  <div>
    <div class="begha-banner-page-container">
      <div class="begha-page-banner">
        <div class="flex items-center justify-end p-2 pt-3 pl-4">
        
          <img @click="searchSheet=true" src="~/assets/images/cemetery/search-normal copy.svg" alt="">

        </div>
      </div>
      <div class="begha-profile-image">
        <img
          class="begha-profile-img"
          src="~/assets/images/one-begha/begha-profile.png"
          alt=""
        />
      </div>
    </div>

    <div class="container">
      <div class="begha-media mt-11">
        <div class="flex flex-col">
          <span class="begha-profile-name">حرم امام زاده صالح (ع)</span>
          <span class="flex items-center mt-2">
            <span class="media-count-icon ml-2">

              <span class="material-symbols-outlined text-secondary-700 bg-secondary-200 rounded-full p-1 scale-75">
              add_photo_alternate
              </span>

            </span>
            <span>23 رسانه</span>
          </span>
        </div>
        <div class="search-result">
          <ul class="result-items">
            <li class="result-item">
              <div class="item-content flex items-center">
                <span class="result-item-icon">

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M8.68359 11.1833H11.0503L11.3169 8.81665H8.95026L8.68359 11.1833Z" fill="#429FF5"/>
                      <path d="M13.492 1.66669H6.50866C3.47533 1.66669 1.66699 3.47502 1.66699 6.50835V13.4834C1.66699 16.525 3.47533 18.3334 6.50866 18.3334H13.4837C16.517 18.3334 18.3253 16.525 18.3253 13.4917V6.50835C18.3337 3.47502 16.5253 1.66669 13.492 1.66669ZM15.6837 8.81669H12.542L12.2753 11.1917H15.0837C15.417 11.1917 15.692 11.4667 15.692 11.8C15.692 12.1334 15.417 12.4084 15.0837 12.4084H12.142L11.8003 15.4584C11.767 15.7667 11.5003 16 11.192 16C11.167 16 11.1503 16 11.1253 16C10.792 15.9667 10.5503 15.6584 10.5837 15.325L10.9087 12.4084H8.54199L8.20033 15.4584C8.16699 15.7667 7.90033 16 7.59199 16C7.56699 16 7.55033 16 7.52533 16C7.19199 15.9667 6.95033 15.6584 6.98366 15.325L7.30866 12.4084H4.31699C3.98366 12.4084 3.70866 12.1334 3.70866 11.8C3.70866 11.4667 3.98366 11.1917 4.31699 11.1917H7.45866L7.72533 8.81669H4.91699C4.58366 8.81669 4.30866 8.54169 4.30866 8.20835C4.30866 7.87502 4.58366 7.60002 4.91699 7.60002H7.85866L8.20033 4.55002C8.23366 4.21669 8.54199 3.97502 8.87533 4.00835C9.20866 4.04169 9.45033 4.35002 9.41699 4.68335L9.09199 7.60002H11.4587L11.8003 4.55002C11.842 4.21669 12.142 3.97502 12.4753 4.00835C12.8087 4.04169 13.0503 4.35002 13.017 4.68335L12.692 7.60002H15.7003C16.0337 7.60002 16.3087 7.87502 16.3087 8.20835C16.3087 8.54169 16.017 8.81669 15.6837 8.81669Z" fill="#429FF5"/>
                    </svg>
                  </div>

                </span>
                <div class="result-title flex flex-col justify-center">
                  <span class="title">جستجو برای «بهشت»</span>
                  <span class="media-count">۲۱۳ رسانه</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="begha-media-posts">

          <div v-for="(item , index) in mediaItems" :key="index">

            <MediaPostItem :item="item" />

          </div>
       
        </div>
      </div>

      <NotDefined v-if="mediaItems.length===0" :active="false" title="موردی موجود نیست!!" />

    </div>

    <BottomSheets :fullscreen="true" v-model="searchSheet">

      <div class="flex flow-row items-center gap-4">

        <span @click="searchSheet=false" class="material-symbols-outlined pb-2">
        east
        </span>

        <TextField :primary="true" class="w-full" placeholder="عنوان رسانه">

          <template #append>

            <img src="~/assets/images/cermony/search-normal.svg" alt="">

          </template>

        </TextField>

      </div>


    </BottomSheets>

  </div>
</template>

<script lang="ts" setup>
import "swiper/css";
import "swiper/css/pagination";
import BottomSheets from "../global/bottomSheets.vue";
import MediaPostItem from "./MediaPostItem.vue";
import BeghaMediaPostFilter from "./BeghaMediaPostFilter.vue";
import NotDefined from "~/components/global/notDefined.vue"


const searchSheet = ref(false);


const mediaItems=ref<{title:string ; text:string ; hashtag:string}[]>
([
  {
    title:'دیدار آیت الله خمینی با مردم ',
    text:'متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم',
    hashtag:'امامزاده'
  },
  {
    title:'دیدار آیت الله خمینی با مردم ',
    text:'متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم',
    hashtag:'امامزاده'
  },
  {
    title:'دیدار آیت الله خمینی با مردم ',
    text:'متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم متن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوممتن توضیحات لورم ایپسوم',
    hashtag:'امامزاده'
  },
])

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.begha-banner-page-container {
  position: relative;
  .begha-page-banner {
    height: 48px;
    width: 100%;
    background-color: $primary;
  }
  .begha-profile-img {
    height: 86px;
    width: 86px;
    border-radius: 120px;
    border: 4px solid $surface;
    position: absolute;
    bottom: -101%;
    right: 16px;
  }
}

.begha-media {

  .begha-profile-name {
    color: $surface-on;
    font-family: "yekan-regular";
    font-size: 16px;
    font-weight: 700;
  }
}

.begha-media-posts {
  margin-bottom: 120px;
}

.search-result {
  margin-top: 16px;
  .result-items {
    .result-item {
      border-bottom: 1px solid $outline-variant;
      padding: 8px;
      .item-content {
        .result-item-icon {
          margin-left: 8px;
          background-color: $secondary-container;
          display: flex;
          width: 40px;
          height: 40px;
          padding: 10.5px 10px 9.5px 10px;
          justify-content: center;
          align-items: center;
          border-radius: 32px;
          span {
            color: $secondary;
            font-size: 25px;
          }
        }
        .result-title {
          .title {
            font-size: 14px;
            font-weight: 700;
            color: $surface-on;
            text-align: right;
          }
          .media-count {
            margin-top: 4px;
            font-size: 11px;
            font-weight: 700;
            color: $surface-on-variant;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
