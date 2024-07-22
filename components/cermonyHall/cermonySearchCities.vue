<template>

<BaseDialog :modalHeight="523">

    <template #headerText>

        <span class="modal-head-title text-[14px]">شهر مورد نظر خود را انتخاب کنید</span>

    </template>


    <template #body>


        <div class="search">

            <div class="searchBox">

                <img src="~/assets/images/cermony/search-normal.svg" alt="">

                <input type="text" placeholder="جستجوی شهر یا استان">

            </div>

        </div>

        <div class="currentLocation">

            <div class="iconHolder">

                <img src="~/assets/images/cermony/gps.svg" alt="">

            </div>

            <div class="city">

                <span>مکان فعلی شما</span>

                <p>اصفهان, اصفهان</p>

            </div>

        </div>


        <hr class="w-full h-[4px]">

        <div @click="deactiveFilter" :class="{deactive:filterCheck===false}" class="filter">

            <img src="~/assets/images/cermony/menu.svg" alt="">

            <div>

                <span class="text-[14px] font-normal">همه</span>
                
                <span class="material-symbols-outlined check-icon">
                        check_circle
                </span> 

            </div>

        </div>

        <div class="citiesContainer">

            <div class="cities" v-for="index in 4" :key="index">
      
                

                    <img src="~/assets/images/cermony/location.svg" alt="">

                    <div class="cityName">

                        <span class="text-[14px] font-normal">نجف آباد</span>

                        <span class="text-[11px] font-normal">اصفهان</span>

                    </div>

            </div>

        </div>

        

    </template>
</BaseDialog>

</template>
<script lang="ts" setup>
import BaseDialog from "~/components/global/BaseDialog.vue"
import { useModalStore } from "~/stores/modals-store";
const modalStore = useModalStore();

defineComponent({BaseDialog})

const filterCheck=ref(true);
const deactiveFilter=()=>{
    filterCheck.value=!filterCheck.value;
    modalStore.changeCermonyHallSearchFilterActive('deactive')
    if(filterCheck){
        modalStore.changeCermonyHallSearchFilterActive('active')
    }
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

.currentLocation{
    display: flex;
    flex-direction: row;
    gap: 8px;
    height: 40px;
    margin-top: 20px;

    .iconHolder{
        background: $secondary-container;
        height: 32px;
        width: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .city{
        display: flex;
        flex-direction: column;

        span{
            font-size: 14px;
            font-weight: 400;
        }

        p{
            font-size: 11px;
            font-weight: 400;
        }

    }
}

hr{
    margin-top: 16px;
    background-color: $secondary-container;
    color:$secondary-container
}

.filter{
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

    .material-symbols-outlined{
        height: 24px;
        width: 24px;
    }

    div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

       .material-symbols-outlined{
            color: $secondary;
       }
    }

}

.deactive{
    background-color: transparent;
    .material-symbols-outlined{
        display: none;
    }
}

.citiesContainer {

    display: flex;
    flex-direction: column;
    margin-top: 16px;
    gap: 12px;

    .cities{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        height: 47px;
        gap: 8px;

        .cityName{
            display: flex;
            flex-direction: column;
        }

}

}


</style>