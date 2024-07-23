<template>
<div>
    <div class="zaer-card">
<img class="zaer-img" src="@/assets/images/zaersara/zaersara.png" >
<div class="title ">
    <div class="line flex justify-between">
        
        <span>زائرسرا امام زاده محسن اصفهان</span>
        <div class="rating ">
            
            <span>4.2</span>
            <img class="zaer-img" src="@/assets/images/icons/star.svg" >
        </div>
</div>

</div>
<div class="location">
    <img src="@/assets/images/icons/location.svg"  alt="">
</div>
    </div>
    </div>

</template>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.zaer-card {
  margin-top: 24px;
  box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  border: 2px solid $outline-variant;
  .zaer-img{
    height: 130px;
  align-self: stretch;
  width: 100%;
  border-radius: 12px 12px 0px 0px;
  }
  .title{
    padding: 12px;
    text-align: right;
  
    font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
.line{
    border-bottom: 1px solid $outline-variant;
    margin-bottom: 12px;
    margin-bottom: 12px;
}
  }
  .rating{
    display: flex;
    align-items: center;
    padding-bottom: 12px;
    span{
        color: #000;

text-align: right;

font-family: "Yekan Bakh FaNum";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
      img{
          margin-right: 4px;
          width: 16px;
        height: 16px;
}

  }
}
</style>