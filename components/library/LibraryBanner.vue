<template>
  <div>
    <div class="pray-banner flex items-center justify-between">
      <div class="pray-words-daily">
        <div class="pray-word mr-1">کتابخانه امام زاده صالح (ع)</div>
        <div class="do-pray">
          <span class="do-pray-word">
            رفتن به لیست همه کتاب ها<span class="material-symbols-outlined">
              keyboard_backspace
            </span>
          </span>
        </div>
      </div>
      <div class="quran-image flex items-center justify-start">
        <img
          class="al-quran"
          src="~/assets/images/library/library-banner.svg"
          alt=""
        />
        <img
          class="bg-ellipse-dot-4"
          src="~/assets/images/home/ellipse-1.svg"
          alt=""
        />
        <img
          class="bg-ellipse-dot-2"
          src="~/assets/images/home/ellipse-1.svg"
          alt=""
        />
        <img
          class="bg-ellipse-dot-3"
          src="~/assets/images/home/ellipse-1.svg"
          alt=""
        />
        <img
          class="bg-ellipse-dot-1"
          src="~/assets/images/home/ellipse-1.svg"
          alt=""
        />
        <img
          class="bg-ellipse"
          src="~/assets/images/home/ellipse-2.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/css/icons.scss";
@import "../../assets/css/colors.scss";
.pray-banner {
  cursor: pointer;
  background-color: $secondary;
  border-radius: 12px;
  width: 100%;
  padding: 15px;
  position: relative;
  .pray-word {
    font-size: 16px;
    font-family: "peyda-bold";
    color: $secondary-on;
  }
  .do-pray {
    background: $secondary-container;
    border-radius: 25px;
    max-width: 200px;
    width: fit-content !important;
    .do-pray-word {
      margin-top: 20px;
      font-size: 12px;
      font-family: "peyda-bold";
      color: $secondary-on-container;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 22px;
        vertical-align: -9px;
        margin-right: 8px;
      }
    }
  }
  .quran-image {
    .bg-ellipse {
      position: absolute;
      top: 0;
      left: 0;
    }
    .bg-ellipse-dot-1 {
      position: absolute;
      top: 5px;
      left: 20px;
    }
    .bg-ellipse-dot-2 {
      position: absolute;
      top: 20px;
      left: 100px;

      filter: blur(1px);
      -webkit-filter: blur(1px);
    }
    .bg-ellipse-dot-3 {
      position: absolute;
      top: 50px;
      left: 100px;
    }
    .bg-ellipse-dot-4 {
      position: absolute;
      top: 5px;
      left: 80px;
      filter: blur(1px);
      -webkit-filter: blur(1px);
    }
  }
  .al-quran {
    position: absolute;
    top: 5px;
    left: 7px;
  }
}
</style>
