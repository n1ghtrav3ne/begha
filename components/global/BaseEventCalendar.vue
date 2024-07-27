<template>
  <div>
    <div class="event-calendar">
      <div v-if="calendarView" class="calendar-view">
        <div class="calendar-navigation">
          <div class="centered">
            <span
              @click="changeWeek(-1)"
              class="icon-Arrow-Bottom-Iran navigate-right"
            ></span>
            <span @click="showAllMonths()" class="month-title ml-2">{{
              monthTitle
            }}</span>
            <span @click="showAllYears()" class="month-title">{{
              yearTitle
            }}</span>
            <span
              @click="changeWeek(1)"
              class="icon-Arrow-Bottom-Iran navigate-left"
            ></span>
          </div>
        </div>
        <div class="calendar-dates flex items-center justify-between">
          <span
            @click="makeActive(day)"
            v-for="day in weekDays"
            :key="day"
            :class="day.active ? 'active' : ''"
            class="calendar-date"
          >
            <span class="week-day flex flex-col items-center justify-center">
              {{ day.dayOfWeek }}
            </span>
            <span class="month-day flex flex-col items-center justify-center">
              {{ day.date.split("/")[2] }}
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
      <div v-if="selectMonthView" class="all-month-view">
        <ul class="">
          <li class="grid grid-cols-3 flex">
            <span
              @click="updateCalendar(month, selectedYear)"
              v-for="(month, index) in months"
              :key="index"
              class="centered p-2"
              >{{ month }}</span
            >
          </li>
        </ul>
      </div>
      <div v-if="selectYearView" class="all-month-view">
        <ul>
          <li
            v-for="(year, index) in years"
            :key="index"
            @click="updateCalendar(selectedMonth, year)"
            class="centered flex-col p-2"
          >
            <span>{{ year }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import moment from "jalali-moment";

export default {
  setup() {
    const currentDate = ref(moment().locale("fa"));
    const selectedYear = ref(currentDate.value.jYear());
    const selectedMonth = ref(currentDate.value.jMonth());
    const weekDays = ref([]);
    const calendarView = ref(true);
    const selectMonthView = ref(false);
    const selectYearView = ref(false);
    const today = moment().locale("fa");
    const months = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const years = Array.from({ length: 7 }, (_, i) => 1400 + i);

    let monthTitle = ref(months[selectedMonth.value]);
    let yearTitle = ref(selectedYear.value);

    const updateCalendar = (month, year) => {
      if (month) {
        selectedMonth.value = month;
        monthTitle.value = months[month];
      }
      if (year) {
        selectedYear.value = year;
        yearTitle.value = year;
      }
      currentDate.value.jYear(selectedYear.value).jMonth(selectedMonth.value);
      const weekStart = currentDate.value.clone().startOf("week");

      weekDays.value = Array.from({ length: 7 }, (_, i) => {
        const date = weekStart.clone().add(i, "day");
        return {
          date: date.format("jYYYY/jM/jD"),
          dayOfWeek: date.format("dddd"),
          active: date.isSame(today, "day"),
        };
      });
      selectedMonth.value = currentDate.value.jMonth();
      selectMonthView.value = false;
      selectYearView.value = false;
      calendarView.value = true;
    };

    const changeWeek = (weeks) => {
      currentDate.value.add(weeks, "week");
      selectedYear.value = currentDate.value.jYear();
      selectedMonth.value = currentDate.value.jMonth();
      updateCalendar();
    };

    const showAllMonths = () => {
      calendarView.value = false;
      selectMonthView.value = true;
    };

    const showAllYears = () => {
      calendarView.value = false;
      selectYearView.value = true;
    };

    const makeActive = (clickedDay) => {
      weekDays.value.forEach((day) => {
        day.active = day.date === clickedDay.date;
      });
    };

    watch(selectedMonth, (newVal) => {
      monthTitle.value = months[newVal];
    });

    watch(selectedYear, (newVal) => {
      yearTitle.value = newVal;
    });

    onMounted(() => {
      updateCalendar();
    });

    return {
      selectedYear,
      selectedMonth,
      weekDays,
      months,
      years,
      monthTitle,
      yearTitle,
      updateCalendar,
      changeWeek,
      calendarView,
      selectMonthView,
      showAllMonths,
      showAllYears,
      selectYearView,
      makeActive,
    };
  },
};
</script>

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
      width: 27px;
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
