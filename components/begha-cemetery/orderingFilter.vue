<template>
  <div class="sectionContainer">
    <div
      @click="selectItem(0)"
      :class="{ active: selectedIndex === 0 }"
      class="mainItem px-[12px] py-[8px]"
    >
      <span class="all">همه</span>

      <span class="material-symbols-outlined hidden check-icon">
        check_circle
      </span>
    </div>

    <div
      class="item px-[12px] py-[8px]"
      v-for="index in 4"
      :key="index"
      @click="selectItem(index)"
      :class="{ active: selectedIndex === index }"
    >
      <span class="sectionName">قطعه شهدا</span>

      <span class="material-symbols-outlined hidden check-icon">
        check_circle
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
const selectedIndex = ref(0);

const selectItem = (index: number) => {
  selectedIndex.value = index;
};
</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.header {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: $surface-on;
}
.sectionContainer {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .mainItem {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 8px;
    align-items: center;
    height: 40px;

    .all {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $surface-on;
    }

    .check-icon {
      color: $secondary;
    }
  }
}

.item {
  width: 100%;
  display: flex;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  align-items: center;

  .sectionName {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
  }

  .check-icon {
    color: $secondary;
  }
}

.active {
  background: $secondary-container;

  span {
    display: flex;
  }
}
</style>