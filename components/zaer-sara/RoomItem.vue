<template>
 <nuxt-link to="./room/12">
    <div class="info-container">
        <img class="room-img" src="@/assets/images/zaersara/room.jpg"/>
        <div class="room-info">
            <div class="flex">
                <span class="capacity">اتاق ۱۲ نفره</span>
                <div class="ms-3">

                    <span class="price  ">۲٬۰۰۰٬۰۰۰ تومان</span>
                <span class="per-night">/هر شب</span>
                </div>

            </div>
            <span style="color: #7E7E7E;">امام زاده صالح(ع)</span>
            <div class="rating">
                <img class="star" src="@/assets/images/icons/star.svg"/>
                <img class="star" src="@/assets/images/icons/star.svg"/>
                <img class="star" src="@/assets/images/icons/star.svg"/>
                <span class="ms-2">5</span>
            </div>
        </div>
    </div>
 </nuxt-link>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";


.info-container{
    display: flex;
padding: 12px;

gap: 12px;
border-radius: 12px;
border: 2px solid $outline-variant;
.room-img{
    width: 119px;
height: 110px;
flex-shrink: 0;
}   
.room-info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .price{
        color:$secondary ;
        font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
    }
    .per-night{

font-size: 11px;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
}
.rating{
    display: flex;
    align-items: center;
.star{
    width: 20px;

height: 20px;
}
}

}
</style>