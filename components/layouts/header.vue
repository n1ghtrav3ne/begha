<template>
  <div>
    <nav>
      <div class="container flex items-center justify-between flex-row-reverse">
        <div @click="$router.push('/')">
          <img src="~/assets/images/logo/layout-logo.png" alt="" />
        </div>
        <div class="flex itmes-center">
          <span
            @click="appSidebar.changeSidebarStateActive('active')"
            class="icon-Menu-Iran"
          >
            
          </span>
          <div class="choose-location flex items-center mr-3">
            <span class="icon-Location-Iran location-choose-icon ml-1">
            </span>
            <span class="location-title-text">اصفهان، نجف آباد</span>
            <span class="icon-Arrow-Bottom-Iran mr-1" >
              
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
.icon-Menu-Iran{
  font-size: 30px;
  font-weight: 500;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transition: all ease-in-out 0.15ms;
}
.icon-Arrow-Bottom-Iran{
  font-size: 18px;
}
</style>
