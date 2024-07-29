<template>
  <div>
    <div class="app-home">
      <div class="container">
        <div class="h-14">
          <baseInput
            color="surface-30"
            :border="true"
            placeholder="جستجو اماکن متبرکه"
            :primary="true"
          >
            <template #append>
              <div
                class="size-8 bg-blue/15 rounded-full flex items-center justify-center text-blue"
              >
                <span
                  @click="BeghaEventFilterModalSheet = true"
                  class="material-symbols-outlined search-input-icon"
                >
                  tune
                </span>
              </div>
            </template>
          </baseInput>
        </div>

        <!-- begha list items  -->
        <div class="mt-8" v-if="beghaItems.length">
          <template v-for="(item, i) in beghaItems" :key="i">
            <list
              :title="item.name"
              :subtitle="item.location"
              title-class="font-bold"
              subtitle-class="text-xs text-surface-500"
              class="p-3"
              :bordered="i + 1 < beghaItems.length"
            >
              <template #prepend>
                <div
                  class="size-12 rounded-full flex items-center justify-center"
                >
                  <img :src="item.image" class="w-full h-full rounded-full" />
                </div>
              </template>
              <template #append>
                <button
                  class="border-[1px] border-surface-100 rounded-lg p-2 text-xs text-surface-600 min-w-28"
                >
                  لغو دنبال کردن
                </button>
              </template>
            </list>
          </template>
        </div>
        <div v-else class="w-full flex justify-center mt-44">
          <div class="text-center">
            <img
              src="~/assets/images/empty-data.png"
              class="w-24 h-[90px] left-0 right-0 mx-auto mb-2"
            />
            <span> بقعه ای را دنبال نمی کنید. </span>
            <br />
            <NuxtLink to="/begha/list">
              <button class="text-primary mt-5">رفتن به لیست بقاع</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <BottomSheets
      v-model="filterDialog"
      title="جستجو بر اساس خدمات و مراسمات جاری"
    >
      <BeghaEventFilterModal />
    </BottomSheets>
  </div>
</template>

<script lang="ts" setup>
import PopularBegha from "~/components/home/PopularBegha.vue";
import BeghaListItems from "~/components/home/BeghaListItems.vue";
import BeghaProvinceFilterModal from "./BeghaProvinceFilterModal.vue";
import BeghaEventFilterModal from "./BeghaEventFilterModal.vue";
import BaseInput from "~/components/global/input.vue";
import list from "~/components/global/list.vue";
import { useModalStore } from "~/stores/modals-store";
defineNuxtComponent({
  PopularBegha,
  BeghaListItems,
  BeghaProvinceFilterModal,
  BeghaEventFilterModal,
});

const filterDialog = ref(true);
const beghaItems = ref<{ name: string; location: string; image: string }[]>([
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
]);

const modalStore = useModalStore();

const BeghaProvinceFilterModalSheet = ref(false);

const BeghaEventFilterModalSheet = ref(true);
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
</style>
