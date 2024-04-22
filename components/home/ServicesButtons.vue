<template>
  <div>
    <div class="mt-5 services-container grid grid-rows-1">
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
            <span class="material-symbols-outlined">
              {{ item.iconClass }}
            </span>
          </span>
          <span class="service-title mt-2">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const servicesList = ref<
  { title: string; iconClass: string; colorClass: string }[]
>([
  {
    title: "بقاع متبرکه",
    iconClass: "cancel",
    colorClass: "btn-bg-green",
  },
  {
    title: "زائر سرا",
    iconClass: "cancel",
    colorClass: "btn-bg-blue",
  },
  {
    title: "کتابخانه",
    iconClass: "cancel",
    colorClass: "btn-bg-green",
  },
  {
    title: "قبور",
    iconClass: "cancel",
    colorClass: "btn-bg-yellow",
  },
  {
    title: "سالن مراسم",
    iconClass: "cancel",
    colorClass: "btn-bg-green-light",
  },
  {
    title: "آموزشی",
    iconClass: "cancel",
    colorClass: "btn-bg-yellow",
  },
  {
    title: "رویداد ها",
    iconClass: "cancel",
    colorClass: "btn-bg-blue-kind",
  },
  {
    title: "حمایت مالی",
    iconClass: "cancel",
    colorClass: "btn-bg-navy-blue",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../assets/css/icons.scss";
@import "../../assets/css/colors.scss";
.service-btn {
  // padding: 5px;
  width: 48px;
  height: 48px;
  border-radius: 15px;
  color: #fff;
}
.service-title {
  font-size: 12px;
  color: $surface-on;
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
  background: linear-gradient(
    0deg,
    rgba(32, 198, 188, 1) 0%,
    rgba(59, 235, 221, 1) 100%
  );
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
  background: linear-gradient(
    0deg,
    rgba(32, 198, 188, 1) 0%,
    rgba(59, 235, 221, 1) 100%
  );
}
.btn-bg-yellow {
  background: linear-gradient(
    0deg,
    rgba(244, 200, 42, 1) 0%,
    rgba(248, 232, 149, 1) 100%
  );
}
</style>
