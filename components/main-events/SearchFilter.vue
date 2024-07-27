<template>
    
    <div class="search">

            <div class="searchBox">

                <img src="~/assets/images/cermony/search-normal.svg" alt="">

                <input type="text" placeholder="جستجوی شهر یا استان">

            </div>

    </div>

      <div class="cityContainer">

                <div @click="selectAll" :class="{active:selected ==true && typeof selected !=='number'}" class="all">

                    <img src="~/assets/images/cermony/menu.svg" alt="">

                    <div class="text">

                        <span class="everyOne">همه</span>

                        <span class="followedOnes">همه بقعه های دنبال کرده</span>

                    </div>

                    <span v-if="selected && typeof selected!=='number'" class="material-symbols-outlined check-icon mr-auto">
                        check_circle
                    </span>

                </div>

                <div @click="selectItem(index)" :class="{active:selected===index}" v-for="index in 8" :key="index" class="item">

                    <img src="~/assets/images/cemetery/cemetery.png" alt="">

                    <div class="information">

                        <span class="name">امام زاده صالح</span>

                        <span class="location">تهران، تهران</span>

                    </div>

                    <span v-if="selected===index" class="material-symbols-outlined check-icon mr-auto">
                        check_circle
                    </span>

                </div>

        </div>

</template>

<script lang="ts" setup>

const selected =ref<number | boolean>(0)

const selectItem=(index:number)=>{
    selected.value=index
}

const selectAll=()=>{
    selected.value=true
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.search{
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 48px;
    padding: 16px;
    border-radius: 16px;
    background-color: $surface;

    .searchBox{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        width: 100%;
        font-weight: normal;

        input{
            outline: 0;
            background-color: transparent;
            width: 100%;

        }
    }

}

.cityContainer{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 24px;

    .all{
        gap: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 12px;
        padding-left: 12px;
        padding-top: 8px;
        padding-bottom: 8px;
        border-radius: 8px;
        height: 55px;

        .text{
            display: flex;
            flex-direction: column;

            .everyOne{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on;
            }

            .followedOnes{
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on-variant;
            }
        }
    }

    .item{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding-right: 12px;
        padding-left: 12px;
        padding-top: 8px;
        padding-bottom: 8px;
        border-radius: 8px;
        height: 55px;

        img{
            width: 40px;
            height: 40px;
            border-radius: 100%;
        }

        .information{
            display: flex;
            flex-direction: column;
            
            .name{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on;
            }

            .location{
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-on-variant;
            }
        }
    }
}

.active{
    background: $secondary-container;
}

</style>