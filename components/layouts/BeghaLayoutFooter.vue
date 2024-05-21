<template>
  <div>
    <div class="footer-menu">
      <div class="footer-menu-buttons-container">
        <div class=" services-container grid grid-rows-1">
      <div class="grid grid-cols-4 flex">
        <div
          v-for="(item, index) in servicesList"
          :key="index"
          class="flex  flex-col items-center justify-center"
        >
          <span
          @click="$router.push(item.link)"
            :class="`${item.colorClass}`"
            class="service-btn flex flex-col items-center justify-center"
          >
            <span :class="`${item.badgeColorClass}`" class="btn-badge">جدید</span>
            <span class="service-btn-icons" :class="item.iconClass"> </span>
          </span>
          <span class="service-title mt-2">{{ item.title }}</span>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const servicesList = ref<
  { title: string; iconClass: string; colorClass: string; badgeColorClass : string; link:string}[]
>([
  {
    title: "درباره بقعه",
    iconClass: "icon-Mosque-Iran",
    colorClass: "btn-bg-green",
    badgeColorClass : 'success-bg-color' , 
    link : '/begha-detail/asdasd'
  },
  {
    title: "خدمات",
    iconClass: "icon-House-Iran",
    colorClass: "btn-bg-blue",
    badgeColorClass : 'error-bg-color' , 
    link : '/begha-media/asdasd'
  },
  {
    title: "رسانه",
    iconClass: "icon-Book-Iran",
    colorClass: "btn-bg-green",
    badgeColorClass : 'success-bg-color' , 
    link : '/begha-media/asdasd'
  },
  {
    title: "رویداد ها",
    iconClass: "icon-Ghabr-Iran",
    colorClass: "btn-bg-yellow",
    badgeColorClass : 'error-bg-color' , 
    link : '/begha-events/'
  },
]);
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.footer-menu{
  width: 100%;
  position: fixed;
  bottom: 0;
  flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 12px 16px;
    z-index: 9999;
  .footer-menu-buttons-container {
    width: 275px;
    border-radius: 12px;
    border: 1px solid $outline-variant;
    background: $surface;
    padding: 10px;
    margin-bottom: 16px;
    box-shadow: 5px 11px 12px 0px rgba(0, 0, 0, 0.05);
  }
}

.service-btn {
  // padding: 5px;
  position: relative;
  width: 36px;
  margin: 0 4px;
  height: 36px;
  border-radius: 8px;
  color: #fff;
}

.btn-badge {
  position: absolute;
  top: -5px;
  left: -13px;
  color: #fff;
  border-radius: 9px;
  border: 2px solid $surface;
  font-family: "yekan-regular";
  width: 25px;
  height: 14px;
  font-size: 6px;
  text-align: center;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.service-title {
  font-size: 12px;
  color: $surface-on;
}
.service-btn-icons {
  font-size: 25px;
}

.btn-bg-green {
  background: linear-gradient(
    0deg,
    rgba(9, 197, 108, 1) 0%,
    rgba(39, 228, 135, 1) 100%
  );
}
.btn-bg-green-light {
  background: linear-gradient(
    0deg,
    rgba(9, 197, 108, 1) 0%,
    rgba(39, 228, 135, 1) 100%
  );
}
.btn-bg-blue-kind {
  background: linear-gradient(180deg, #3bebdd 0%, #20c6bc 100%);
}
.btn-bg-blue {
  background: linear-gradient(
    0deg,
    rgba(37, 156, 240, 1) 0%,
    rgba(137, 206, 254, 1) 100%
  );
}
.btn-bg-blue-light {
  background: linear-gradient(
    0deg,
    rgba(32, 198, 188, 1) 0%,
    rgba(59, 235, 221, 1) 100%
  );
}
.btn-bg-navy-blue {
  background: linear-gradient(180deg, #b2dffe 0%, #5aabe4 100%);
}
.btn-bg-yellow {
  background: linear-gradient(
    0deg,
    rgba(244, 200, 42, 1) 0%,
    rgba(248, 232, 149, 1) 100%
  );
}
.error-bg-color{
  background-color: $error !important;
}

.success-bg-color{
  background-color: $primary !important;
}
</style>
