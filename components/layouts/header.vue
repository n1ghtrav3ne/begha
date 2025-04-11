<template>
  <div>
    <nav>
      <div class="container flex items-center justify-between flex-row-reverse">
        <div @click="$router.push('/')">
          <img src="~/assets/images/logo/layout-logo.png" alt="" />
        </div>
        <div class="flex itmes-center">
          <span @click="drawer = true" class="icon-Menu-Iran"> </span>
          <location-picker></location-picker>
        </div>
      </div>
    </nav>
    <ClientOnly>
      <Sidebar v-model="drawer" />
    </ClientOnly>
  </div>
</template>

<script  setup>
import Sidebar from "./Sidebar.vue";
import locationPicker from "../pickers/locationPicker.vue";
defineComponent({ Sidebar, locationPicker });

const drawer = ref(false);
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
.icon-Menu-Iran {
  font-size: 30px;
  font-weight: 500;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transition: all ease-in-out 0.15ms;
}
.icon-Arrow-Bottom-Iran {
  font-size: 18px;
}
</style>
