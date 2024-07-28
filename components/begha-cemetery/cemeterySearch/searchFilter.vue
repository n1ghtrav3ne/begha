<template>
  <div class="sectionContainer">
    <div class="section">
      <BaseCheckbox :items="checkboxes" />
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseCheckbox from "~/components/global/BaseCheckbox.vue";

defineComponent({ BaseCheckbox });

const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: "قطعه شهدا",
    isChecked: false,
  },
  {
    id: 2,
    label: "قطعه شهدا",
    isChecked: false,
  },
  {
    id: 3,
    label: "قطعه شهدا",
    isChecked: false,
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
}
.sectionContainer {
  display: flex;
  flex-direction: column;
  padding-top: 16px;

  .section {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
  }
}
</style>