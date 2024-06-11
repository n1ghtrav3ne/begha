<template>
  <div>
    <div class="container">
      <div class="search-box-input">
        <span
          @click="modalStore.changeMediaBeghaFilterActive('active')"
          class="select-begha-filter flex items-center"
        >
          <span class="filter-title">انتخاب بقعه</span>
          <span class="material-symbols-outlined chevron-down">
            keyboard_arrow_down
          </span>
        </span>
        <input
          @click="modalStore.changeMainMediaPostFilterActive('active')"
          class="search-input"
          type="text"
          placeholder="نام رسانه"
        />
        <span class="material-symbols-outlined search-input-icon">
          search
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
      <div class="begha-media mt-6">
        <div class="flex items-center">
          <img
            class="begha-profile-image"
            src="~/assets/images/one-begha/begha-profile.png"
            alt=""
          />
          <span class="begha-profile-name">امام زاده صالح</span>
        </div>
        <div class="begha-media-posts">
          <MainMediaPostItem />
          <MainMediaPostItem />
          <MainMediaPostItem />
          <MainMediaPostItem />
        </div>
      </div>
    </div>
    <MainMediaBeghaFilter v-if="modalStore.isOpenMediaBeghaFilterModal" />
    <MainMediaPostFilter v-if="modalStore.isOpenMainMediaPostFilter" />
  </div>
</template>

<script lang="ts" setup>
import "swiper/css";
import "swiper/css/pagination";
import MainMediaPostItem from "./MainMediaPostItem.vue";
import MainMediaBeghaFilter from "./MainMediaBeghaFilter.vue";
import MainMediaPostFilter from "./MainMediaPostFilter.vue";
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
defineComponent([MainMediaPostItem, MainMediaBeghaFilter, MainMediaPostFilter]);
const sendNewsNotification = (emited: boolean) => {
  console.log(emited, "tooooogle");
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.container {
  .search-box-input {
    background-color: $surface;
    width: 100% !important;
    border: 2px solid $outline;
    padding: 8px 13px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:focus-within {
      border: 2px solid $primary !important;
    }
    .search-province {
      border-left: 2px solid $outline;
      display: flex;
      align-items: center;
      .arrow-down {
        color: $surface-on;
      }
      .province-title {
        color: $surface-on;
        font-size: 14px;
        font-family: "yekan-regular";
      }
    }

    .select-begha-filter {
      .filter-title {
        color: $surface-on;
        font-size: 14px;
        font-weight: 400;
        font-family: "yekan-regular";
      }
      .chevron-down {
        font-size: 18px;
        margin-right: 4px;
      }
    }
    .search-input-icon {
      color: $surface-on;
      font-size: 23px;
      padding: 5px;
      border-radius: 50%;
    }
    .search-input {
      background-color: transparent;
      outline: none;
      padding: 2px 10px;
      width: 59%;
      border-right: 1px solid $outline-variant;
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
      &::placeholder {
        color: $surface-on-variant;
        font-size: 14px;
        font-family: "yekan-regular";
      }
      &:focus {
        caret-color: $primary;
      }
    }
  }
}

.begha-media {
  .media-count-icon {
    padding: 6px;
    border-radius: 50%;
    background-color: #bee0ff;
  }
  .begha-profile-image {
    border-radius: 40px;
    width: 40px;
    height: 40px;
    margin-left: 8px;
  }
  .begha-profile-name {
    color: $surface-on;
    font-family: "yekan-regular";
    font-size: 14px;
    font-weight: 400;
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
