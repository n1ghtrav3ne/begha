<template>
  <div>
    <nav>
      <div class="container flex items-center justify-between flex-row-reverse">
        <div>
          <img src="~/assets/images/logo/layout-logo.png" alt="" />
        </div>
        <div class="flex itmes-center">
          <span
            @click="appSidebar.changeSidebarState()"
            class="material-symbols-outlined"
          >
            menu
          </span>
          <div class="choose-location flex items-center mr-3">
            <span class="material-symbols-outlined location-choose-icon ml-1">
              location_on
            </span>
            <span class="location-title-text">اصفهان، نجف آباد</span>
            <span class="material-symbols-outlined mr-1">
              arrow_drop_down
            </span>
          </div>
        </div>
      </div>
    </nav>
    <Transition name="slide-fade">
      <Sidebar v-if="appSidebar.isOpenAppSidebar" />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "./Sidebar.vue";
import { useAppSidebar } from "~/stores/layout-store";
defineComponent({ Sidebar });
const appSidebar = useAppSidebar();
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
.choose-location {
  cursor: pointer;
}
.location-choose-icon {
  font-size: 20px;
}
.location-title-text {
  font-family: "yekan-regular";
  font-size: 12px;
  color: $surface-on;
}
.slide-fade-enter-active {
  opacity: 1;
  transition: all ease-in-out 0.15ms;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transition: all ease-in-out 0.15ms;
}
</style>
