<template>
  <div>
    <div class="back-navbar container flex items-center justify-between">
      <span
        ><span @click="$router.push('/begha-detail/1')" class="material-symbols-outlined back-icon ml-2">
          trending_flat </span
        ><span class="back-title">اخبار</span></span
      >
      <div class="choose-location flex items-center mr-3">
        <BaseToggleButton
          @changeToggleBtn="sendNewsNotification"
          class="flex items-center"
        />
      </div>
    </div>

    <div class="container">
      <div v-for="(item, index) in beghaNews" :key="index" class="news-items">
        <NewsItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NewsItem from "./NewsItem.vue";
const beghaNews = ref<
  { id: number; title: string; description: string; time: string , bogheName:string }[]
>([
  {
    id: 1,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName : 'امام زاده صالح (ع)'
  },
  {
    id: 2,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName : 'امام زاده صالح (ع)'
  },
  {
    id: 3,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName : 'امام زاده صالح (ع)'
  },
  {
    id: 4,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName : 'امام زاده صالح (ع)'
  },
  {
    id: 5,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName : 'امام زاده صالح (ع)'
  },
  {
    id: 6,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName : 'امام زاده صالح (ع)'
  },
  {
    id: 7,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName : 'امام زاده صالح (ع)'
  },
  {
    id: 8,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName : 'امام زاده صالح (ع)'
  },

]);
defineComponent([NewsItem]);
const sendNewsNotification = (emited: boolean) => {
  console.log(emited, "tooooogle");
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.back-navbar {
  height: 52px;
  background: $primary;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  span.back-title {
    font-size: 16px;
    font-family: "yekan-regular";
    color: $primary-on;
  }
  span.back-icon {
    color: $primary-on;
    font-size: 25px;
    vertical-align: -10px;
  }
}
</style>
