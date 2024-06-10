<template>
  <div>
    <div class="container">
      <div class="search-box-input">
        <span class="select-begha-filter flex items-center">
          <span class="filter-title">انتخاب بقعه</span>
          <span class="material-symbols-outlined chevron-down">
            keyboard_arrow_down
          </span>
        </span>
        <input class="search-input" type="text" placeholder="نام رسانه" />
        <span class="material-symbols-outlined search-input-icon">
          search
        </span>
      </div>
      <div class="begha-media mt-11">
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
  </div>
</template>

<script lang="ts" setup>
import "swiper/css";
import "swiper/css/pagination";
import MainMediaPostItem from "./MainMediaPostItem.vue";
import moment from "jalali-moment";
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
defineComponent([MainMediaPostItem]);
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
</style>
