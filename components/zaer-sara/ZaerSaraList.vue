<template>
  <div>
    <div class="back-navbar container flex items-center justify-between">
      <span><span @click="$router.push('/')" class="material-symbols-outlined back-icon ml-2">
          trending_flat </span><span class="back-title">زائر سرا</span></span>
      <div @click="showProvince = true" class="choose-location flex items-center mr-3">
        <span class="icon-Location-Iran location-choose-icon ml-1"> </span>
        <span class="location-title-text">اصفهان، نجف آباد</span>
        <span class="icon-Arrow-Bottom-Iran mr-1"> </span>
      </div>
    </div>
    <div class="app-home">
      <div class="container">
        <div class="flex items-center justify-between mt-2">
          <div class="search-box-input">
            <input class="search-input" type="text" placeholder="جستجو اماکن متبرکه" />
            <span @click="showSelectedSort = true" class="material-symbols-outlined search-input-icon">
              tune
            </span>
          </div>
          <div @click="showSearch = true" class="zaersara-reserve">
            <span class="zaersara-icon flex items-center justify-center">
              <span class="material-symbols-outlined"> local_library </span>
            </span>
          </div>
        </div>
        <div>
          <div class="date-card">
            <div @click="showSelectDate = true" class="date-title">
              <span>تاریخ ورود و خروج</span>
              <span class="material-symbols-outlined"> arrow_drop_down </span>
            </div>
            <span class="date-sub-title">{{ dateText }}</span>
          </div>
          <div class="zaer-heading flex items-center justify-between">
            <div class="zaer-title flex items-center">
              <img src="~/assets/images/home/popular-begha-shape.png" alt="" />
              <span> زائرسرا ها</span>
            </div>
            <div class="zaer-filter flex items-center">
              <span class="filter-base-text"> ترتیب بر اساس </span>
              <span class="flex items-center">
                <span @click="showMap = true" class="active-filter"> محبوب ترین </span>
                <span class="icon-Arrow-Bottom-Iran filter-choose-icon mr-1">
                </span>
              </span>
            </div>
          </div>
          <div>
            <ZaerSaraItem @click="dateText ? $router.push('./12') : showSelectDate = true" />
            <ZaerSaraItem @click="dateText ? $router.push('./12') : showSelectDate = true" />
            <ZaerSaraItem @click="dateText ? $router.push('./12') : showSelectDate = true" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <BottomSheets v-model="showSelectDate">
    <DatePicker :show="true" :mode="'range'" :column="1" @close="showSelectDate = false"
      @update:model-value="updateDate($event)" />
  </BottomSheets>
  <BottomSheets :title="'ترتیب نمایش بر اساس'" v-model="showSelectedSort">
    <ZaerSaraSort />
  </BottomSheets>
  <BottomSheets :title="'شهر مورد نظر خود را انتخاب کنید'" v-model="showProvince">
    <Provinces />
  </BottomSheets>
  <BottomSheets :title="'جستجو بر اساس امکانات'" v-model="showSearch">
    <ZaerSaraFacilitiesSearch />
  </BottomSheets>
  <BottomSheets v-model="showMap">
    <Map />
  </BottomSheets>
</template>

<script lang="ts" setup>
import { useModalStore } from "~/stores/modals-store";
import ZaerSaraFacilitiesSearch from "./ZaerSaraFacilitiesSearch.vue";
import ZaerSaraItem from "./ZaerSaraItem.vue";
import ZaerSaraSort from "./ZaerSaraSort.vue";
const { getDateWithMounthName } = mixin;

defineComponent([ZaerSaraItem]);
const modalStore = useModalStore();
const showSelectDate = ref(false);
const showMap = ref(false);
const showSelectedSort = ref(false);
const showProvince = ref(false);
const showSearch = ref(false);
const dateText = ref('');

function updateDate(date: string[]) {
  const firstDate = getDateWithMounthName(date[0]);
  const secondDate = getDateWithMounthName(date[1]);
  dateText.value = `${firstDate} تا ${secondDate}`;

}

</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.back-navbar {
  height: 48px;
  background: $primary;
  display: flex;
  align-items: center;
  padding: 5px 10px;

  span.back-title {
    font-size: 16px;
    font-family: "yekan-regular";
    color: $primary-on;
  }

  span.back-icon {
    color: $primary-on;
    font-size: 25px;
    vertical-align: -10px;
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
    color: $secondary;
    font-size: 23px;
    padding: 5px;
    background-color: #e5f0fb;
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
      font-size: 14px;
      font-family: "yekan-regular";
    }

    &:focus {
      caret-color: $primary;
    }
  }
}

.filter-province-modal {
  .modal-head-title {
    font-size: 14px;
    font-family: "yekan-regular";
    color: $surface-on;
  }

  .filter-province {
    position: relative;
    width: 100%;
    background: $surface-variant;
    padding: 15px;
    border-radius: 10px;

    input {
      width: 100%;
      padding: 0 25px;
      background: transparent;
      outline: none;
      border: none;

      &::placeholder {
        color: $surface-on-variant;
        font-size: 14px;
        font-family: "yekan-regular";
      }

      &:focus {
        caret-color: $primary;
      }
    }

    .search-filter-icon {
      position: absolute;
      top: 15px;
      right: 10px;
    }
  }

  .current-location {
    width: 100%;
    padding: 10px 0 15px 0;

    .current-location-text {
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
    }

    .current-location-province {
      color: $surface-on;
      font-size: 11px;
      font-family: "yekan-regular";
    }

    .cerrent-location-icon {
      color: $secondary;
      background: #d7ecff;
      border-radius: 50%;
      padding: 8px;
    }

    border-bottom: 3px solid $secondary-container;
  }

  .selectable-provinces {
    .selected {
      background: $secondary-container !important;

      .check-icon {
        color: $secondary;
      }
    }

    .select-item {
      padding: 12px 15px;
      background: #fff;
      border-radius: 10px;

      .all-icon {
        font-size: 25px;
        color: $surface-on-variant;
      }

      .all-title {
        color: $surface-on;
        font-size: 14px !important;
        font-family: "yekan-regular";
      }

      .city-name {
        color: $surface-on;
        font-size: 14px;
        font-family: "yekan-regular";
      }

      .province-name {
        color: $surface-on;
        font-size: 11px;
        font-family: "yekan-regular";
      }

      .selectable-location-icon {
        font-size: 30px;
        color: $surface-on-variant;
        margin-left: 5px;
      }
    }
  }
}

.filter-event-modal {
  .modal-head-title {
    font-size: 50px;
    font-family: "yekan-regular";
    color: $surface-on;
  }

  .filter-province {
    position: relative;
    width: 100%;
    background: $surface-variant;
    padding: 15px;
    border-radius: 10px;

    input {
      width: 100%;
      padding: 0 25px;
      background: transparent;
      outline: none;
      border: none;

      &::placeholder {
        color: $surface-on-variant;
        font-size: 14px;
        font-family: "yekan-regular";
      }

      &:focus {
        caret-color: $primary;
      }
    }

    .search-filter-icon {
      position: absolute;
      top: 15px;
      right: 10px;
    }
  }

  .current-location {
    width: 100%;
    padding: 10px 0 15px 0;

    .current-location-text {
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
    }

    .current-location-province {
      color: $surface-on;
      font-size: 11px;
      font-family: "yekan-regular";
    }

    .cerrent-location-icon {
      color: $secondary;
      background: #d7ecff;
      border-radius: 50%;
      padding: 8px;
    }

    border-bottom: 3px solid $secondary-container;
  }

  .selectable-provinces {
    .selected {
      background: $secondary-container !important;

      .check-icon {
        color: $secondary;
      }
    }

    .select-item {
      padding: 12px 15px;
      background: #fff;
      border-radius: 10px;

      .all-icon {
        font-size: 25px;
        color: $surface-on-variant;
      }

      .all-title {
        color: $surface-on;
        font-size: 14px !important;
        font-family: "yekan-regular";
      }

      .city-name {
        color: $surface-on;
        font-size: 14px;
        font-family: "yekan-regular";
      }

      .province-name {
        color: $surface-on;
        font-size: 11px;
        font-family: "yekan-regular";
      }

      .selectable-location-icon {
        font-size: 30px;
        color: $surface-on-variant;
        margin-left: 5px;
      }
    }
  }
}

.zaersara-reserve {
  .zaersara-icon {
    padding: 12px;
    border-radius: 16px;
    background-color: $primary;

    span {
      font-size: 22px;
      color: $primary-on;
    }
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

.location-title-text {
  font-family: "yekan-regular";
  font-size: 12px;
  color: $primary-on;
}

.slide-enter-active {
  opacity: 1;
  transition: all ease-in-out 0.03s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transition: all ease-in-out 0.03s;
}

.date-card {
  margin-top: 20px;
  box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  border: 1px solid $outline-variant;
  padding: 16px 24px;

  .date-title {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: $secondary;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 4px;
  }

  .date-sub-title {
    font-size: 12px;

    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.zaer-heading {
  margin-top: 40px;

  .zaer-title {
    span {
      color: $surface-on;
      text-align: right;
      font-family: "yekan-regular";
      font-size: 16px;
      font-weight: 700;
      margin-right: 8px;
    }
  }

  .zaer-filter {
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

    .icon-Arrow-Bottom-Iran {
      color: $secondary;
    }
  }
}
</style>
