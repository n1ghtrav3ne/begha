<template>
  <nuxt-link to="./room/12">
    <div class="info-container blue mt-4">
      <div class="top-section">
        <img class="room-img" src="@/assets/images/zaersara/room.jpg" />
        <div class="room-info w-full">
          <div class="flex justify-between">
            <span class="capacity">اتاق ۱۲ نفره</span>
            <div class="ms-3">
              <div class="stepper-container flex justify-between align-middle">
                <button
                  class="w-20 border-2 border-primary rounded outline-none flex justify-center items-center stepper"
                >
                  <span class="text-primary text-2xl">+</span>
                </button>
                <span class="mx-3 text-lg">0</span>
                <button
                  class="w-20 border-2 border-primary rounded outline-none flex justify-center items-center stepper"
                >
                  <span class="text-primary text-2xl">-</span>
                </button>
              </div>
            </div>
          </div>
          <span style="color: #7e7e7e">امام زاده صالح(ع)</span>
          <div v-if="!fromCheckout" class="rating">
            <img
              v-for="i in 4"
              class="star"
              src="@/assets/images/icons/star.svg"
            />
            <span class="ms-2">5</span>
          </div>
          <div class="flex justify-between align-middle" v-else>
            <span class="text-error">حذف از لیست رزرو</span>
            <span class="text-error">
              <img
                src="@/assets/images/icons/trash-error.png"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="flex justify-between align-middle">
          <div>مبلغ کل</div>
          <div class="price-cn">
            <span class="price">۲٬۰۰۰٬۰۰۰ تومان</span>
            <span class="per-night">/هر شب</span>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
defineProps({
  fromCheckout: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.info-container {
  border-radius: 12px;
  border: 2px solid $outline-variant;
  padding: 12px;
  .top-section {
    display: flex;
    gap: 12px;
    padding-bottom: 12px;
    border-bottom: 2px solid $outline-variant;

    .room-img {
      width: 119px;
      height: 110px;
      flex-shrink: 0;
    }
    .room-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .rating {
      display: flex;
      align-items: center;
      .star {
        width: 20px;

        height: 20px;
      }
    }
    .stepper-container {
      .stepper {
        width: 25px;
        height: 25px;
      }
    }
  }
  .price-cn {
    .price {
      color: $secondary;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .per-night {
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
