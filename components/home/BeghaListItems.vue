<template>
  <div>
    <div class="begha-list">
      <ul class="begha-items">
        <li v-for="(item , index) in beghaItems" :key="index" class="begha-item flex items-center justify-between">
          <div class="begha-info flex">
            <div class="begha-image">
              <img
                :src="item.image"
                alt=""
              />
            </div>
            <div class="begha-head-text flex flex-col">
              <span class="begha-title">{{item.name}}</span>
              <span class="begha-subtitle">{{item.location}}</span>
            </div>
          </div>
          <div class="begha-follow">
            <span class="begha-follow-text">دنبال کردن</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const beghaItems = ref<{name: string , location: string , image: string}[]>([
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
  {
    name: "امام زاده صالح",
    location: "تهران،تهران",
    image:
      "https://www.gonbadepars.ir/wp-content/uploads/IMG_20151213_222114.jpg",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../assets/css/icons.scss";
@import "../../assets/css/colors.scss";
.begha-list {
  .begha-items {
    .begha-item {
      padding: 20px 15px;
      border-bottom: 1px solid $outline-variant;
      .begha-image {
        img {
          margin-left: 10px;
          border-radius: 50%;
          height: 51px;
          width: 54px;
        }
      }
      .begha-title {
        font-size: 14px;
        font-family: "yekan-bold";
        color: $surface-on;
      }
      .begha-subtitle {
        font-size: 12px;
        font-family: "yekan-regular";
        color: $surface-on-variant;
      }
      .begha-follow-text {
        margin-top: 15px;
        background-color: transparent;
        border: 2px solid $secondary;
        border-radius: 10px;
        color: $secondary;
        font-size: 12px;
        font-family: "yekan-regular";
        padding: 5px 16px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
