<template>
  <div>
        <span class="modal-head-title"
          >درخواست شما در حال بررسی می‌باشد. آیا می خواهید آن را لغو کنید؟</span
        >
        <div class="services-container grid grid-rows-1">
          <div class="grid grid-cols-2 flex mt-6">
            <span class="cancel-request-btn"> لغو درخواست </span>
            <span @click="$emit('close')" class="cancel-btn"> انصراف </span>
          </div>
        </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.modal-head-title {
  color: $surface-on;
  text-align: right;
  font-family: "yekan-regular";
  font-weight: 400;
  font-size: 14px;
}

.cancel-request-btn {
  padding: 8px;
  font-family: "yekan-regular";
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  background-color: $error;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cancel-btn {
  padding: 8px;
  margin-right: 16px;
  font-family: "yekan-regular";
  font-weight: 400;
  font-size: 12px;
  color: $surface-on;
  background-color: transparent;
  border: 1px solid $surface-on;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
