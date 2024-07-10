<template>

<div class="greenBox container">

<div class="firstItem">

    <span class="material-symbols-outlined ">
    arrow_right_alt
</span>

<span>آرامستان</span>

</div>    

<div class="secondItem">
    <img src="~/assets/images/cermony/arrow-down.svg" alt="">

<span>
    اصفهان، نجف اباد
</span>

<img src="~/assets/images/cermony/Location copy.svg" alt="">

</div>

</div>

    <div class="container">

        <div class="beghaSearch">

            <input placeholder="جستجو اماکن متبرکه، نام آرامستان" type="text">

            <div class="searchIconContainer">
                <img src="~/assets/images/cemetery/search-normal.svg" alt="img">
            </div>

        </div>

        <div class="cemeteryTitle">

            <img src="~/assets/images/home/popular-begha-shape.png" alt="">

            <span>آرامستان</span>
        </div>

        <div class="cemeteryCardContainer grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

                <NuxtLink to="begha-cemetery/3242" class="card md:mt-[16px]" v-for="(item,index) in cemeteryInfo" :key="index">

                    <cemeteryCard :item="item" />

                </NuxtLink>

        </div>


    </div>

</template>
<script setup lang="ts">
import cemeteryCard from "./cemeteryCard.vue"

defineComponent({cemeteryCard})

const cemeteryInfo=ref<{name:string}[]
>([
    {
        name:'آرامستان امام زاده محسن'
    },
    {
        name:'آرامستان امام زاده محسن'
    },
    {
        name:'آرامستان امام زاده محسن'
    },
    {
        name:'آرامستان امام زاده محسن'
    },
    {
        name:'آرامستان امام زاده محسن'
    },
])
</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.greenBox{
    background-color: $primary;
    height:48px;
    display:flex;
    align-items: center;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 11px;
    padding-right: 16px;
    color: $primary-on;
    

    .firstItem{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .secondItem{
        width: 142px;
        font-weight: 400;
        display:flex;
        flex-direction: row;
        align-items: center;
        margin-right: auto;
        justify-content: space-between;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

    }
}

.container{

    .beghaSearch{
    border: 1px solid $outline;
    font-family: 'yekan-regular';
    font-size: 12px;
    padding: 16px;
    align-items: center;
    border-radius: 16px;
    flex-direction: row;
    display: flex;
    justify-content:space-between;
    height: 52px;
    width: 100%;

    input{
        outline: 0;
        background-color: $surface;
        font-size: 12px;
        width:90%;
    }

    img{
        width: 24px;
        height: 24px;
    }

}

.cemeteryTitle{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
    height: 12px;
    gap: 8px;
    span{
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}

.cemeteryCardContainer{
    height: fit-content;
    margin-top: 24px;
    width: 100%;  
    gap: 16px;
    gap: 16px;

    .card{
        width: fit-content;
        height: fit-content;
    }
}

}


</style>