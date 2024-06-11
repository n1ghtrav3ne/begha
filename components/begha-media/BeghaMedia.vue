<template>
  <div>
    <div class="begha-banner-page-container">
      <div class="begha-page-banner">
        <div class="flex items-center justify-end p-2 pt-3 pl-4">
          <span
            @click="modalStore.changeBeghaMediaPostFilterActive('active')"
            class="material-symbols-outlined flex items-center justify-center"
          >
            search
          </span>
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
              <span
                class="icon-Calender-Iran flex items-center justify-center"
              ></span>
            </span>
            <span>23 رسانه</span>
          </span>
        </div>
        <div class="search-result">
          <ul class="result-items">
            <li class="result-item">
              <div class="item-content flex items-center">
                <span class="result-item-icon">
                  <span class="material-symbols-outlined"> tag </span>
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
          <MediaPostItem />
          <MediaPostItem />
          <MediaPostItem />
          <MediaPostItem />
        </div>
      </div>
    </div>
    <BeghaMediaPostFilter v-if="modalStore.isOpenBeghaMediaPostFilter" />
  </div>
</template>

<script lang="ts" setup>
import "swiper/css";
import "swiper/css/pagination";
import MediaPostItem from "./MediaPostItem.vue";
import BeghaMediaPostFilter from "./BeghaMediaPostFilter.vue";
import { useModalStore } from "~/stores/modals-store";
const modalStore = useModalStore();
const beghaNews = ref<
  {
    id: number;
    title: string;
    description: string;
    time: string;
    bogheName: string;
  }[]
>([
  {
    id: 1,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 2,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 3,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 4,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 5,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 6,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 7,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 8,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
]);
defineComponent([MediaPostItem, BeghaMediaPostFilter]);
const sendNewsNotification = (emited: boolean) => {
  console.log(emited, "tooooogle");
};
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
  .media-count-icon {
    padding: 6px;
    border-radius: 50%;
    background-color: #bee0ff;
  }
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
