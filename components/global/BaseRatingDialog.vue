<template>
  <div v-if="props.modelValue">
    <div
      :style="`height: ${props.modalHeight + 'px !important'};`"
      class="base-modal"
    >
      <div class="base-modal-header centered">
        <img src="~/assets/images/rating/rating-img.svg" alt="" />
      </div>
      <div
        :style="`padding: ${props.modalPadding} !important`"
        class="base-modal-body flex items-center flex-col"
      >
        <span class="modal-text-content">امتیاز شما به این رویداد</span>
        <div class="rating-stars flex items-center">
          <!-- <span class="fill-star material-symbols-rounded"> kid_star </span> -->
          <span
            @click="setStars(star)"
            v-for="(star, index) in stars"
            :key="index"
            class="empty-star"
            :class="
              star <= rate
                ? 'material-symbols-rounded fill-star'
                : 'material-symbols-outlined'
            "
          >
            kid_star
          </span>
        </div>
      </div>
      <div class="base-modal-footer">
        <span class="register-rate">ثبت امتیاز</span>
      </div>
    </div>
    <div @click="close" class="base fixed base top-0   h-screen bg-surface-400/40 overflow-auto"></div>
  </div>
</template>

<script lang="ts" setup>
import { useModalStore } from "~/stores/modals-store";
const props = defineProps(["modalHeight", "modalPadding","modelValue"]);
const modalStore = useModalStore();
let rate = ref(0);
let stars = ref([1, 2, 3, 4, 5]);

const emit = defineEmits(['update:modelValue']);

const close = () => {
  emit('update:modelValue', false);
};


const setStars = (star: number) => {
  if (star <= rate.value) {
    rate.value = star - 1;
  } else {
    rate.value = star;
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.base{
  max-width: 600px;
  width: 100% !important;
  right: 0;
  left: 0;
  margin: 0 auto;
  
}
.base-modal {
  margin: 16px 12px;
  background-color: #fff;
  z-index: 99999;
  border-radius: 16px;
  width: 94%;
  position: fixed;
  right: 0;
  left:0;
  margin: 0 auto;
  max-width: 600px;
  bottom: 0;
  padding: 16px 35px;
  overflow: initial !important;
  .base-modal-header {
    padding-bottom: 20px;
    position: relative;
    width: 100%;
    .base-modal-stick {
      width: 75px;
      height: 6px;
      background-color: $primary;
      position: absolute;
      top: 5px;
      right: 40%;
      margin-top: -29px;
      border-radius: 20px;
    }
    .close-modal-icon {
      font-size: 20px;
    }
  }
  .base-modal-body {
    height: 100%;

    .modal-text-content {
      font-size: 14px;
      font-family: "yekan-regular";
      font-weight: 400;
      color: $surface-on;
      margin-bottom: 16px;
    }
    .empty-star {
      color: $surface-on-variant;
      font-size: 30px;
      margin: 3px;
    }
    .fill-star {
      color: $warning;
      font-size: 36px;
      margin: 3px;
    }
  }
  .base-modal-footer {
    .register-rate {
      width: 100%;
      background-color: $primary;
      color: $primary-on;
      font-size: 12px;
      font-family: "yekan-regular";
      font-weight: 400;
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      margin-top: 32px;
    }
  }
}
</style>
