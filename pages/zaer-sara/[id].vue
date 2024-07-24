<template>
    <div>
    <div class="back-navbar container flex items-center justify-between">
      <span
        ><span @click="$router.go(-1)" class="material-symbols-outlined back-icon ml-2">
          trending_flat </span
        ><span class="back-title">زائر سرا</span></span
      >
      <div
        class=" flex items-center mr-3"
      >
      <span
      
            class="material-symbols-outlined nav-icon"
          >
            tune
          </span>
          <span class="zaersara-icon flex items-center justify-center ms-3">
            <span class="nav-icon material-symbols-outlined"> local_library </span>
          </span>
      </div>
    </div>
    <div class="date-card ">


<div   class="date-title">

    <span >تاریخ ورود و خروج</span>
    <span class="material-symbols-outlined">
    arrow_drop_down
</span>
</div>
<span class="date-sub-title">۲۰ اردیبهشت ۱۴۰۳ تا ۲۳ اردیبهشت ۱۴۰۳</span>
</div>
    </div>
</template>
<script lang="ts" setup>
 const route = useRoute()
 const id = route.params.id
 definePageMeta({
  layout:  'empty-layout'
})
</script>
<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.back-navbar {
  height: 48px;
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
  .choose-location{
    font-size: 150px;
  }
  .nav-icon{
    background-color: #ffff;
    border-radius: 15px;
    padding: 6px;
  }
}
.date-card {
  margin-top: 20px;
  box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  border: 1px solid $outline-variant;
  padding: 16px 24px;
  .date-title{
    cursor: pointer;
    display: flex;
    align-items: center;
    color:$secondary;
    font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;

margin-bottom: 4px;
  }
  .date-sub-title{
    font-size: 12px;

font-style: normal;
font-weight: 400;
line-height: normal;

  }
 
}
</style>