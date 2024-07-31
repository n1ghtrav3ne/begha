<template>
  <div>
    <div class="filter-modal-body p-4">
      <services-filter v-model="services"></services-filter>
      <div class="w-full h-1 bg-secondary-200 my-4"></div>
      <div class="h-12">
        <baseInput
          placeholder="جستجوی مراسم"
          primary
          @status="screenSizeHandler($event)"
        >
          <template #prepend>
            <div class="cursor-pointer ml-2">
              <img src="~/assets/images/icons/search-black.svg" alt="" />
            </div>
          </template>
        </baseInput>
      </div>
      <div>
        <checkbox-items :items="checkBoxItems" />
      </div>

      <div class="mt-8">
        <button class="w-full bg-primary-700 h-11 rounded-lg text-white">
          اعمال فیلتر
        </button>
      </div>
    </div>
  </div>
</template>

<script  setup>
import BaseInput from "~/components/global/input.vue";
import chipItems from "./chipItems.vue";
import checkboxItems from "./checkboxItems.vue";

const emit = defineEmits(["screenMode"]);
defineNuxtComponent({ BaseInput, chipItems, checkboxItems });

const services = ref([]);
const checkBoxItems = ref([
  { label: "دعا کمیل", value: "komeil", status: false },
  { label: "دعا ندبه", value: "nodbe", status: false },
  { label: "زیارت عاشورا", value: "ashora", status: false },
  { label: "نماز میثم طیار", value: "tayar", status: false },
]);

const screenSizeHandler = (e) => {
  if (e) emit("screenMode", true);
  else {
    emit("screenMode", false);
  }
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
