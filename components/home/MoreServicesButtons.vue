<template>
  <div>
    <BaseDialog :modalHeight="189">
      <template #headerText>
        <span class="modal-head-title">سایر خدمات</span>
      </template>
      <template #body>
        <div class="services-container grid grid-rows-1">
          <div class="grid grid-cols-4 flex">
            <div
              v-for="(item, index) in servicesList"
              :key="index"
              class="flex mt-5 flex-col items-center justify-center"
            >
              <span
                :class="`${item.colorClass}`"
                class="service-btn flex flex-col items-center justify-center"
              >
                <span :class="`${item.badgeColorClass}`" class="btn-badge"
                  >جدید</span
                >
                <span class="service-btn-icons" :class="item.iconClass"> </span>
              </span>
              <span class="service-title mt-2">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </template>
    </BaseDialog>
  </div>
</template>

<script lang="ts" setup>
const servicesList = ref<
  {
    title: string;
    iconClass: string;
    colorClass: string;
    badgeColorClass: string;
  }[]
>([
  
  {
    title: "سالن مراسم",
    iconClass: "icon-Hall-Iran",
    colorClass: "btn-bg-green-light",
    badgeColorClass: "success-bg-color",
  },
  {
    title: "آموزشی",
    iconClass: "icon-Education-Iran",
    colorClass: "btn-bg-yellow",
    badgeColorClass: "success-bg-color",
  },
  {
    title: "رویداد ها",
    iconClass: "icon-Event-Iran",
    colorClass: "btn-bg-blue-kind",
    badgeColorClass: "error-bg-color",
  },
  {
    title: "حمایت مالی",
    iconClass: "icon-Donate-Iran",
    colorClass: "btn-bg-navy-blue",
    badgeColorClass: "error-bg-color",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../assets/css/icons.scss";
@import "../../assets/css/colors.scss";
.service-btn {
  // padding: 5px;
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 15px;
  color: #fff;
}

.btn-badge {
  position: absolute;
  bottom: -5px;
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
  font-size: 32px;
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
.error-bg-color {
  background-color: $error !important;
}

.success-bg-color {
  background-color: $primary !important;
}
</style>
