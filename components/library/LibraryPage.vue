<template>
  <div>
    <div class="begha-banner-page-container">
      <div class="begha-page-banner">
        <div class="flex items-center justify-between p-2 pt-3 pl-4">
          <div class="flex items-center">
            <span
              @click="$router.go(-1)"
              class="library-page-icon material-symbols-outlined ml-2"
            >
              arrow_right_alt
            </span>
            <span class="library-page-title">کتابخانه</span>
          </div>
          <div @click="seachCitiesSheet=true"
            class="choose-location flex items-center mr-3"
          >
            <span class="icon-Arrow-Bottom-Iran ml-1"> </span>
            <span class="location-title-text">اصفهان، نجف آباد</span>
            <span class="icon-Location-Iran location-choose-icon mr-1"> </span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="flex items-center justify-between mt-2">
        <div class="search-box-input">
          <input
            class="search-input"
            type="text"
            placeholder="نام کتاب، دسته بندی و بقعه متبرکه"
          />
          <span
            class="material-symbols-outlined search-input-icon"
          >
            search
          </span>
        </div>
        <div @click="$router.push('/library/basket')" class="library-reserve">
          <span class="library-icon centered">
            <span class="material-symbols-outlined"> local_library </span>
          </span>
        </div>
      </div>

      <div class="books-heading flex items-center justify-between">
        <div class="books-title flex items-center">
          <img src="~/assets/images/home/popular-begha-shape.png" alt="" />
          <span> لیست کتاب‌ها </span>
        </div>
        <div @click="orderFilter=true" class="books-filter flex items-center">
          <span class="filter-base-text"> ترتیب بر اساس </span>
          <span class="flex items-center">
            <span class="active-filter"> محبوب ترین </span>
            <span class="icon-Arrow-Bottom-Iran filter-choose-icon mr-1">
            </span>
          </span>
        </div>
      </div>

      <div class="books-container">
        <BookItem v-for="index in 3" @click="$router.push('/library/book/1')" />
      </div>
    </div>
  </div>

  <BottomSheets title="ترتیب نمایش بر اساس" v-model="orderFilter">

    <div class="flex w-full flex-col gap-3 pt-2">

      <div @click="selectIndex(index)" :class="{'bg-secondary-200':index===selectedIndex}" v-for="(item , index) in itemText" :key="index" class="flex h-[44px] items-center w-full p-4 rounded-xl flex-row justify-between">

        <span>{{ item.text }}</span>

        <span v-if="index===selectedIndex" class="material-symbols-outlined text-secondary-700">
        check_circle
        </span>

      </div>


    </div>

  </BottomSheets>

  <BottomSheets v-model="emptyBasket">

    <div class="flex flex-col items-center gap-2">
      <img class="w-[116px] mt-4" src="~/assets/images/empty-data.png" alt="">
      <span class="text-sm">کتابی برای رزرو انتخاب نشده است!!</span>
    </div>

  </BottomSheets>

  <BottomSheets :search="{ placeholder: 'جستجوی شهر یا استان' }" title="شهر مورد نظر خود را انتخاب کنید" v-model="seachCitiesSheet">

    <SearchCities />

  </BottomSheets>

</template>

<script lang="ts" setup>

import BookItem from "./BookItem.vue";

const seachCitiesSheet=ref(false)

const orderFilter=ref(false)

const emptyBasket=ref(false)

const selectedIndex=ref()

const selectIndex=(index:number)=>{
  selectedIndex.value=index
}

const itemText=ref([{text:'همه'},{text:'پربازدیدترین‌ها'},{text:'کتاب‌های موجود'}])
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

    .library-page-title {
      font-family: "yekan-regular";
      font-size: 12px;
      color: $primary-on;
      font-weight: 400;
    }
    .library-page-icon {
      font-size: 22px;
      color: $primary-on;
    }
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

.container {
  .books-heading {
    margin-top: 32px;
    .books-title {
      span {
        color: $surface-on;
        text-align: right;
        font-family: "yekan-regular";
        font-size: 16px;
        font-weight: 700;
        margin-right: 8px;
      }
    }
    .books-filter {
      .filter-base-text {
        color: $surface-on;
        text-align: right;
        font-family: "yekan-regular";
        font-size: 11px;
        font-weight: 400;
        margin-right: 8px;
      }
      .active-filter {
        color: $secondary;
        text-align: right;
        font-family: "yekan-regular";
        font-size: 11px;
        font-weight: 400;
        margin-right: 5px;
      }
    }
  }
  .search-box-input {
    width: 83% !important;
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
      width: 100%;
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
      &::placeholder {
        color: $surface-on-variant;
        font-size: 12px;
        font-weight: 400;
        font-family: "yekan-regular";
      }
      &:focus {
        caret-color: $primary;
      }
    }
  }
  .library-reserve {
    .library-icon {
      padding: 12px;
      border-radius: 16px;
      background-color: $primary;
      span {
        font-size: 22px;
        color: $primary-on;
      }
    }
  }

  .books-container {
    margin-top: 24px;
  }
}

.choose-location {
  cursor: pointer;
  .icon-Arrow-Bottom-Iran {
    color: $primary-on;
  }
}
.location-choose-icon {
  font-size: 20px;
  color: $primary-on;
}
.filter-choose-icon {
  font-size: 17px;
  color: $secondary;
}
.location-title-text {
  font-family: "yekan-regular";
  font-size: 12px;
  color: $primary-on;
}
</style>
