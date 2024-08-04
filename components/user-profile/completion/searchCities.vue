<template>

  <div class="citiesContainer">
    <div
      @click="chooseCity(index)"
      :class="{ active: index === selectedCity }"
      class="cities px-3 py-2"
      v-for="index in 4"
      :key="index"
    >
      <img src="~/assets/images/cermony/location.svg" alt="" />

      <div class="cityName">
        <span class="state">نجف آباد</span>

        <span class="city">اصفهان</span>
      </div>

      <img
        class="mr-auto hidden tickImg"
        src="~/assets/images/cemetery/tick-circle.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>

const selectedCity = ref();

const chooseCity = (index: number) => {
  selectedCity.value = index;
};

const increaseHeight=ref(true)

</script>
    <style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.search {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  padding: 16px;
  border-radius: 8px;
  background-color: $surface-container-lowest;

  .searchBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    width: 100%;
    font-weight: normal;

    input {
      outline: 0;
      background-color: transparent;
      width: 100%;
    }
  }
}

.filter {
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 16px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background-color: $secondary-container;

  .material-symbols-outlined {
    height: 24px;
    width: 24px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .material-symbols-outlined {
      color: $secondary;
    }
  }
}

.deactive {
  background-color: transparent;
  .material-symbols-outlined {
    display: none;
  }
}

.citiesContainer {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 12px;

  .cities {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    gap: 8px;

    .cityName {
      display: flex;
      flex-direction: column;

      .state {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      .city {
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}

.active {
  background: $secondary-container;
  border-radius: 8px;

  .tickImg {
    display: flex;
  }
}
</style>