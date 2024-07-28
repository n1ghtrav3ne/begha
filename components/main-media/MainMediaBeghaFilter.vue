<template>
  <div>
    <div class="filter-modal-body">
      <div class="selected-filters">
        <div class="filter-province">
          <span class="material-symbols-outlined search-filter-icon">
            search
          </span>
          <input type="text" placeholder="جستجوی مراسم" />
        </div>
      </div>

      <div class="selectable-provinces mt-6">
        <div class="filters-checkboxes">
          <label class="flex">
            <BaseCheckbox
              fns="14px"
              @updateCheckBoxes="selectedEventsFilter"
              :items="checkboxes"
            />
          </label>
        </div>
      </div>
      <div class="selectable-begha mt-4">
        <div
          v-for="(item, index) in cities"
          :key="index"
          :class="item.isActive ? 'selected' : ''"
          class="select-item available-province mt-3 flex items-center justify-between"
        >
          <div class="flex items-center">
            <span class="selectable-begha-icon"
              ><span class="icon-Mosque-Iran"></span
            ></span>
            <div class="flex flex-col">
              <span
                :class="item.begha === 'همه' ? 'all-title' : ''"
                class="province-name mt-1"
                >{{ item.begha }}</span
              >
            </div>
          </div>
          <div v-if="item.isActive">
            <span
              class="material-symbols-outlined flex check-icon items-center"
            >
              check_circle
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PopularBegha from "~/components/home/PopularBegha.vue";
import BeghaListItems from "~/components/home/BeghaListItems.vue";

defineNuxtComponent({ PopularBegha, BeghaListItems });
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
  border-bottom: 2px solid $secondary-container;
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
    .selectable-begha-icon {
      background-color: $secondary-container;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 8px;
      padding-bottom: 3px;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        color: $secondary;
        font-size: 18px;
      }
    }
  }
}
.selectable-begha {
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
    .selectable-begha-icon {
      background-color: $secondary-container;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 8px;
      padding-bottom: 3px;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        color: $secondary;
        font-size: 18px;
      }
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
