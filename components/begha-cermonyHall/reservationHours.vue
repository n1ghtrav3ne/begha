<template>
  <div class="hoursContainer">
    <div v-for="(item, index) in items" :key="String(index)" class="item">
      <span v-if="item.available" class="day">{{ item.day }}</span>

      <span v-if="item.available" class="time"
        >ساعت {{ item.start }} تا {{ item.end }}</span
      >

      <span v-if="!item.available" class="unavailableDay">{{ item.day }}</span>

      <span v-if="!item.available" class="cross">- - -</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    day: "شنبه",
    start: "8:00",
    end: "16:00",
    available: true,
  },
  {
    day: "یکشنبه",
    start: "8:00",
    end: "16:00",
    available: false,
  },
  {
    day: "دوشنبه",
    start: "8:00",
    end: "16:00",
    available: true,
  },
  {
    day: "سه شنبه",
    start: "8:00",
    end: "16:00",
    available: true,
  },
  {
    day: "چهارشنبه",
    start: "8:00",
    end: "16:00",
    available: true,
  },
  {
    day: "پنجشنبه",
    start: "8:00",
    end: "16:00",
    available: true,
  },
  {
    day: "جمعه",
    start: "8:00",
    end: "16:00",
    available: true,
  },
]);
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: $surface-on;
}

.hoursContainer {
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 24px;

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .day {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $surface-on;
    }

    .time {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $secondary;
    }
  }
}
.unavailableDay {
  color: $surface-container-highest;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 14px;
}
.cross {
  color: $surface-container-highest;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 14px;
}
</style>