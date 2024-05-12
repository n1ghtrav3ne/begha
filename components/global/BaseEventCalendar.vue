<template>
  <div>
    <div class="event-calendar">
      <div class="calendar-navigation">
        <div class="flex items-center justify-center">
          <span class="icon-Arrow-Bottom-Iran navigate-right"></span>
          <span class="month-title">فروردین</span>
          <span class="icon-Arrow-Bottom-Iran navigate-left"></span>
        </div>
      </div>
      <div class="calendar-dates flex items-center justify-between">
        <span
          v-for="i in 7"
          :key="i"
          :class="i == 4 ? 'active' : ''"
          class="calendar-date"
        >
          <span class="week-day flex flex-col items-center justify-center">
            3 شنبه
          </span>
          <span class="month-day flex flex-col items-center justify-center">
            04
          </span>
        </span>
      </div>
      <div class="calendar-event-text">
        <span class="flex items-center">
          <span class="material-symbols-outlined ml-2"> apps </span>
          <span class="event-text">ولادت حضرت علی، روز مرد</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.event-calendar {
  background: linear-gradient(180deg, #30df8c 0%, #2cc079 153.02%);
  border-radius: 12px;
  color: $primary-on;
  padding: 16px;
  .calendar-navigation {
    .month-title {
      color: $primary-on;
      font-family: "yekan-regular";
      font-size: 14px;
      font-weight: 400;
    }
    .navigate-right {
      color: $primary-on;
      margin-left: 16px;
      transform: rotate(-90deg);
      font-size: 20px;
    }
    .navigate-left {
      font-size: 20px;
      color: $primary-on;
      margin-right: 16px;
      transform: rotate(90deg);
    }
  }
  .calendar-dates {
    padding: 16px 0;
    border-bottom: 1px solid #ffffff26;
    .calendar-date.active {
      background-color: $primary-container;
      padding: 12px 4px;
      border-radius: 40px;
      span.week-day {
        color: $primary-on-container !important;
      }
      span.month-day {
        border-top: 1px solid $primary-on-container !important;
        color: $primary-on-container !important;
      }
    }
    .week-day {
      padding-bottom: 8px;
      color: $primary-on;
      font-family: "yekan-regular";
      font-size: 11px;
      font-weight: 400;
    }
    .month-day {
      border-top: 1px solid $outline-variant;
      padding-top: 8px;
      margin: 0 auto;
      width: fit-content;
      color: $primary-on;
      font-family: "yekan-regular";
      font-size: 12px;
      font-weight: 400;
    }
  }
  .calendar-event-text {
    padding-top: 18px;
    .event-text {
      font-size: 12px;
      font-weight: 400;
      font-family: "yekan-regular";
    }
  }
}
</style>
