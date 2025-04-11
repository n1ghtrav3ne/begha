<template>
  <hr class="firstLine" />

  <div class="serviceButtonContainer mx-auto">
    <div
      @click="$router.push(item.link)"
      v-for="(item, index) in items"
      :key="index"
      class="icon"
    >
      <div :style="`background:${item.backColor}`" class="iconHolder">
        <img ref="myImage" :src="item.image" alt="" />
      </div>

      <span class="name">{{ item.name }}</span>

      <span :class="`${item.badgeColorClass}`" class="btn-badge">جدید</span>
    </div>

    <div @click="$emit('close')" class="icon">
      <div class="moreIcon">
        <img
          src="~/assets/images/mausoleumHome/serviceButton/more-square.svg"
          alt=""
        />
      </div>

      <span class="name">بیشتر</span>

      <span class="btn-badge-more">. . .</span>
    </div>
  </div>

  <hr class="secondLine" />
</template>

<script lang="ts" setup>
import hollyBegha from "~/assets/images/mausoleumHome/serviceButton/hollyBegha.svg";

import graves from "~/assets/images/mausoleumHome/serviceButton/graves.svg";

import media from "~/assets/images/mausoleumHome/serviceButton/gallery.svg";

import notification from "~/assets/images/mausoleumHome/serviceButton/sms-notification.svg";

import vector from "~/assets/images/mausoleumHome/serviceButton/vector.svg";

import cermonyHall from "~/assets/images/mausoleumHome/serviceButton/cermonyHall.svg";

import message from "~/assets/images/mausoleumHome/serviceButton/message-text.svg";

import plans from "~/assets/images/mausoleumHome/serviceButton/plans.svg";

import news from "~/assets/images/mausoleumHome/serviceButton/note-text.svg";

import memebers from "~/assets/images/mausoleumHome/serviceButton/profile-tick.svg";

import services from "~/assets/images/mausoleumHome/serviceButton/forward-item.svg";

const items = ref<
  {
    backColor: string;
    image: any;
    name: string;
    badgeColorClass: string;
    link: string;
  }[]
>([
  {
    backColor: "linear-gradient(180deg, #27E487 0%, #09C56C 100%)",
    image: hollyBegha,
    name: "اطلاعات",
    badgeColorClass: "success-bg-color",
    link: "/mausoleum/information",
  },
  {
    backColor: "linear-gradient(180deg, #89CEFE 0%, #259CF0 100%)",
    image: graves,
    name: "آرامستان",
    badgeColorClass: "error-bg-color",
    link: "",
  },
  {
    backColor: "linear-gradient(180deg, #27E487 0%, #09C56C 100%)",
    image: media,
    name: "رسانه",
    badgeColorClass: "success-bg-color",
    link: "/mausoleum/media",
  },
  {
    backColor: "linear-gradient(180deg, #F8E895 0%, #F4C82A 100%)",
    image: notification,
    name: "پیغام ها",
    badgeColorClass: "success-bg-color",
    link: "/mausoleum/ticketing",
  },
  {
    backColor: "linear-gradient(180deg, #F8E895 0%, #F4C82A 100%)",
    image: vector,
    name: "رویدادها",
    badgeColorClass: "success-bg-color",
    link: "/mausoleum/events",
  },
  {
    backColor: " linear-gradient(180deg, #83F7BE 0%, #2CD685 100%)",
    image: cermonyHall,
    name: "پذیرش",
    badgeColorClass: "success-bg-color",
    link: "",
  },
  {
    backColor: "linear-gradient(180deg, #B2DFFE 0%, #5AABE4 100%)",
    image: message,
    name: "گزارشات",
    badgeColorClass: "error-bg-color",
    link: "",
  },
  {
    backColor: "linear-gradient(180deg, #3BEBDD 0%, #20C6BC 100%)",
    image: plans,
    name: "برنامه ها",
    badgeColorClass: "error-bg-color",
    link: "",
  },
  {
    backColor: "linear-gradient(180deg, #83F7BE 0%, #2CD685 100%)",
    image: news,
    name: "اخبار",
    badgeColorClass: "error-bg-color",
    link: "/mausoleum/news",
  },
  {
    backColor: "linear-gradient(180deg, #3BEBDD 0%, #20C6BC 100%)",
    image: memebers,
    name: "عوامل بقعه",
    badgeColorClass: "error-bg-color",
    link: "/mausoleum/tomb/agents",
  },
  {
    backColor: "linear-gradient(180deg, #F8E895 0%, #F4C82A 100%)",
    image: services,
    name: "خدمات",
    badgeColorClass: "error-bg-color",
    link: "",
  },
]);
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.serviceButtonContainer {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 95%;
  margin-top: 24px;

  .icon {
    height: 75px;
    width: 62px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-right: auto;
    margin-left: auto;
    position: relative;

    .iconHolder {
      border-radius: 12px;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
    }

    .name {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $surface-on;
    }

    .btn-badge {
      position: absolute;
      top: 50%;
      right: 60%;
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
  }
}
.error-bg-color {
  background-color: $error !important;
}

.success-bg-color {
  background-color: $primary !important;
}

.moreIcon {
  border-radius: 12px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(180deg, #b2dffe 0%, #5aabe4 100%);
  position: relative;
}

.btn-badge-more {
  position: absolute;
  top: 50%;
  right: 60%;
  color: #fff;
  border-radius: 9px;
  border: 2px solid $surface;
  font-family: "yekan-regular";
  width: 25px;
  height: 14px;
  font-size: 12px;
  padding-bottom: 2px;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #b2dffe 0%, #5aabe4 100%);
}

.firstLine {
  width: 100%;
  height: 0;
  color: $outline-variant;
  background: $outline-variant;
  margin-top: 24px;
}

.secondLine {
  width: 100%;
  height: 0;
  color: $outline-variant;
  background: $outline-variant;
  margin-bottom: 24px;
}
</style>