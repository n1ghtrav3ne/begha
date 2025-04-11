<template>
  <div>
    <div class="begha-banner-page-container">
      <div class="begha-page-banner">
        <div class="flex items-center justify-end p-2 pl-4">
          <BaseToggleButton
            @changeToggleBtn="sendNewsNotification"
            class="flex items-center"
          />
        </div>
      </div>
      <div class="begha-profile-image">
        <img
          class="begha-profile-img"
          src="~/assets/images/one-begha/begha-profile.png"
          alt=""
        />
      </div>
    </div>

    <div class="container">
      <div class="begha-events mt-11">
        <div>
          <span class="begha-profile-name">حرم امام زاده صالح (ع)</span>
        </div>
        <div class="event-calendar">
          <BaseEventCalendar />
        </div>
        <div>
          <FollowEvents />
        </div>
        <div>
          <NextCelebrates />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EventsItem from "./EventsItem.vue";
import BaseEventCalendar from "~/components/global/BaseEventCalendar.vue";
import FollowEvents from "./FollowEvents.vue";
import NextCelebrates from "./NextCelebrates.vue";
import moment from "jalali-moment";
const beghaNews = ref<
  {
    id: number;
    title: string;
    description: string;
    time: string;
    bogheName: string;
  }[]
>([
  {
    id: 1,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 2,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 3,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 4,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 5,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 6,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 7,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 8,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
]);
defineComponent([EventsItem, BaseEventCalendar , FollowEvents , NextCelebrates]);
const sendNewsNotification = (emited: boolean) => {
  console.log(emited, "tooooogle");
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.begha-banner-page-container {
  position: relative;
  .begha-page-banner {
    height: 48px;
    width: 100%;
    background-color: $primary;
  }
  .begha-profile-img {
    height: 86px;
    width: 86px;
    border-radius: 120px;
    border: 4px solid $surface;
    position: absolute;
    bottom: -101%;
    right: 16px;
  }
}

.begha-events {
  margin-bottom: 140px;
  .begha-profile-name {
    color: $surface-on;
    font-family: "yekan-regular";
    font-size: 16px;
    font-weight: 700;
  }
  .event-calendar {
    margin-top: 24px !important;
  }
}
</style>
