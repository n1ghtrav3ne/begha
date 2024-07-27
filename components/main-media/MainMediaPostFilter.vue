<template>
  <div>
        <div class="filter-modal-body">
          <div class="flex items-center justify-between">
            <div class="search-box-input">
              <input class="search-input" type="text" placeholder="نام رسانه" />
              <span class="material-symbols-outlined search-input-icon">
                search
              </span>
            </div>
            <span
              class="material-symbols-outlined back-icon"
            >
              arrow_left_alt
            </span>
          </div>

          <div class="search-result">
            <ul class="result-items">
              <li
                class="result-item"
              >
                <div class="item-content flex items-center">
                  <span class="result-item-icon">
                    <span class="material-symbols-outlined"> tag </span>
                  </span>
                  <div class="result-title flex flex-col justify-center">
                    <span class="title">بهشت</span>
                    <span class="media-count">۲۱۳ رسانه</span>
                  </div>
                </div>
              </li>
              <li
                class="result-item"
              >
                <div class="item-content flex items-center">
                  <span class="result-item-icon">
                    <span class="material-symbols-outlined"> tag </span>
                  </span>
                  <div class="result-title flex flex-col justify-center">
                    <span class="title">بهشت</span>
                    <span class="media-count">۲۱۳ رسانه</span>
                  </div>
                </div>
              </li>
              <li
                class="result-item"
              >
                <div class="item-content flex items-center">
                  <span class="result-item-icon">
                    <span class="material-symbols-outlined"> tag </span>
                  </span>
                  <div class="result-title flex flex-col justify-center">
                    <span class="title">بهشت</span>
                    <span class="media-count">۲۱۳ رسانه</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
  </div>
</template>

<script lang="ts" setup>
let selectedEvents = ref<{ isChecked: boolean; label: string; id: number }[]>(
  []
);
const cities = ref<{ begha: string; iconClass: string; isActive: boolean }[]>([
  {
    begha: "همه",
    isActive: true,
    iconClass: "apps",
  },
  {
    begha: "امام زاده صالح",
    isActive: false,
    iconClass: "location_on",
  },
  {
    begha: "امام زاده صالح",
    isActive: false,
    iconClass: "location_on",
  },
  {
    begha: "امام زاده صالح",
    isActive: false,
    iconClass: "location_on",
  },
]);
const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: "بقاع دنبال شده",
    isChecked: false,
  },
]);

const selectedEventsFilter = (emited: any) => {
  selectedEvents.value = emited;
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.back-icon {
  font-size: 25px;
}
.search-box-input {
  background-color: $surface;
  width: 88% !important;
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
            font-weight: 400;
            color: $surface-on;
            text-align: right;
          }
          .media-count {
            margin-top: 4px;
            font-size: 11px;
            font-weight: 400;
            color: $surface-on-variant;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
