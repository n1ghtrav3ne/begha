<template>
  <div>
        <div class="filter-modal-body">
          <div class="services-container pb-5 grid grid-rows-1">
            <div class="grid grid-cols-5 flex">
              <div
                v-for="(item, index) in servicesList"
                :key="index"
                class="flex mt-5 flex-col items-center justify-center"
              >
                <span
                  :class="`${item.colorClass}`"
                  class="service-btn flex flex-col items-center justify-center"
                >
                  <span class="material-symbols-outlined">
                    {{ item.iconClass }}
                  </span>
                </span>
                <span class="service-title mt-2">{{ item.title }}</span>
              </div>
            </div>
          </div>
          <div class="selected-filters">
            <div class="filter-province mt-5">
              <span class="material-symbols-outlined search-filter-icon">
                search
              </span>
              <input type="text" placeholder="جستجوی مراسم" />
            </div>
            <div class="current-location mt-4 flex items-center">
              <div class="grid grid-rows-1">
                <div class="grid grid-cols-3 sm:grid-cols- md:grid-cols-4 flex">
                  <span
                    class="mt-2"
                    v-for="(badgeItem, index) in selectedEvents"
                    :key="index"
                    v-show="badgeItem.isChecked"
                  >
                    <span
                      class="filtered-badge ml-2 flex items-center justify-between"
                    >
                      <span
                        class="filter-badge-text ml-3"
                        v-if="badgeItem.isChecked"
                        >{{ badgeItem.label }}</span
                      >
                      <span
                        class="material-symbols-outlined delete-filter-icon"
                      >
                        close
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="selectable-provinces mt-8">
            <div class="filters-checkboxes">
              <!-- <label class="input-container"
              ><span class="checkbox-label"></span>
              <input type="checkbox" :checked="true" />
              <span class="checkmark"></span>
            </label> -->
              <label class="flex">
                <BaseCheckbox
                  @updateCheckBoxes="selectedEventsFilter"
                  :items="checkboxes"
                />
              </label>
            </div>
          </div>
        </div>
  </div>
</template>

<script lang="ts" setup>
import PopularBegha from "~/components/home/PopularBegha.vue";
import BeghaListItems from "~/components/home/BeghaListItems.vue";
import BaseDialog from "~/components/global/BaseDialog.vue";
import { useModalStore } from "~/stores/modals-store";
defineNuxtComponent({ PopularBegha, BeghaListItems, BaseDialog });
const modalStore = useModalStore();
let selectedEvents = ref<{ isChecked: boolean; label: string; id: number }[]>(
  []
);
const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: "دعای ختم",
    isChecked: false,
  },
  {
    id: 2,
    label: "دعای ندبه",
    isChecked: false,
  },
  {
    id: 3,
    label: "دعای کمیل",
    isChecked: false,
  },
  {
    id: 4,
    label: "دعای ختم",
    isChecked: false,
  },
  {
    id: 5,
    label: "دعای ندبه",
    isChecked: false,
  },
  {
    id: 6,
    label: "دعای کمیل",
    isChecked: false,
  },
]);
const servicesList = ref<
  { title: string; iconClass: string; colorClass: string }[]
>([
  {
    title: "سالن مراسم",
    iconClass: "cancel",
    colorClass: "btn-bg-gray",
  },
  {
    title: "زائر سرا",
    iconClass: "cancel",
    colorClass: "btn-bg-gray",
  },
  {
    title: "کتابخانه",
    iconClass: "cancel",
    colorClass: "btn-bg-gray",
  },
  {
    title: "قبور",
    iconClass: "cancel",
    colorClass: "btn-bg-gray",
  },
  {
    title: "برنامه آموزشی",
    iconClass: "cancel",
    colorClass: "btn-bg-gray",
  },
]);

const selectedEventsFilter = (emited: any) => {
  selectedEvents.value = emited;
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

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
    .filtered-badge {
      background-color: $secondary-container;
      padding: 4px 8px;
      border-radius: 24px;
      border: 1px solid $secondary;
      .filter-badge-text {
        font-size: 11px;
        font-family: "yekan-regular";
        color: $secondary-on-container;
      }
      .delete-filter-icon {
        font-size: 18px;
      }
    }
    border-bottom: 2px solid $outline-variant;
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


.services-container {
  border-bottom: 3px solid $secondary-container;
  .service-btn {
    width: 48px;
    height: 48px;
    border-radius: 15px;
    color: $surface-on;
  }
  .service-title {
    font-size: 12px;
    color: $surface-on;
  }

  .btn-bg-gray {
    background-color: $surface-container-lowest;
  }
}
</style>
