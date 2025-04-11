<template>
  <div>
    <label class="switch">
      <input type="checkbox" @click="toggleCheckbox" />
      <div class="slider round icon-Mosque-Iran"></div>
    </label>
  </div>
</template>

<script lang="ts" setup>
let checkbox = ref<boolean>(false);
const emit = defineEmits(["changeToggleBtn"]);
const toggleCheckbox = () => {
  checkbox.value = !checkbox.value;
  emit("changeToggleBtn", checkbox.value);
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.switch {
  position: relative;
  display: inline-block;
  width: 57px;
  height: 32px;
  border: 1px solid $primary-on;
  border-radius: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $primary;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "\e90b";
  color: #fff;
  left: 3px;
  font-size: 20px;
  bottom: 6px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: $primary;
}

input:focus + .slider {
  box-shadow: 0 0 1px $primary;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  background-color: $primary-on;
  bottom: 3px;
  left: 2px;
  padding: 2px;
  color: $primary;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
