<template>

    <div class="cermonyCard">

        <div class="firstPart">

            <img class="mausoleumImg" src="~/assets/images/cermony/cermonyHall.png" alt="cermonyHall">

            <div class="explanation">

                <p class="cardTitle">{{ item.title }}</p>

                <p class="members">{{ item.members }}</p>

            </div>

            <div class="rating">

                <p class="ratingNumber">{{ item.rating.toLocaleString('fa-IR') }}</p>

                <img class="ratingImg" src="~/assets/images/cermony/ant-design_star-filled.png" alt="">

            </div>

        </div>

        <hr>

        <div class="lastItem">

            <div class="capacityHolder">

                <div class="capacityIconHolder">

                    <img src="~/assets/images/cermony/profile-2user copy.svg" alt="capacityImg">

                </div>

                <p class="pt-1">ظرفیت {{ item.capacity.toLocaleString('fa-IR') }} نفر</p>

            </div>

            <div class="nameOfMausoleum">

                    <img src="~/assets/images/cermony/holyBegha.svg" alt="mosque">

                    <p>{{ item.mausoleum }}</p>


            </div>

        </div>
        

    </div>

</template>

<script setup lang="ts">

    const props=defineProps(['item'])

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";


.cermonyCard{
    font-family: 'yekan-regular';
    border: 1px solid $outline-variant;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 145px;
    padding: 16px 12px;
    margin-bottom: 16px;
    border-radius: 16px;

    .firstPart{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 57px;
        gap: 8px;

        .mausoleumImg{
            width: 57px;
            height: 57px;
            border-radius: 8px;
        }

        .explanation{
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 8px;
            color: $surface-on;
             .cardTitle{
                font-weight: 400;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                }
    
            .members{
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                }
        }

        .rating{
            display: flex; 
            flex-direction: row; 
            justify-content: space-between; 
            align-items: center; 
            height: fit-content; 
            width: fit-content;
            margin-left: 12px;
            gap: 3px;
            margin-bottom: auto;
            .ratingNumber{
                display: flex; 
                padding-top: 3px; 
                align-items: center; 
                width: 17px;
                height: 19px;
                color: 12px;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            .ratingImg{
                width: 16px;
                height: 16px;
            }
        }
    }

   

    hr{
        color: $outline-variant;
        width: 100%;
        margin-bottom: 12px;
        margin-top: 12px;
    }

    .lastItem{
    
        display: flex; 
        flex-direction: row; 
        justify-content: space-between; 
        align-items: center; 
        width: 100%; 
        height: auto; 

        .capacityHolder{
            display: flex; 
            align-items: center; 
            flex-direction: row;
            height: 100%; 
            width: 119px;
            font-size: 11px;
            gap: 4px;

            .capacityIconHolder{

                display: flex;
                justify-content: center;
                width: 24px;
                height: 24px;
                background: $secondary-container;
                border-radius: 100%;
                align-items: center;

                img{
                width: 16px;
                height: 16px;
            }

            }


        }

        .nameOfMausoleum{
            background-color: $secondary-container;
            display: flex; 
            align-items: center; 
            justify-content: center;
            height: 100%; 
            width: 133px;
            border-radius: 8px;
            padding-bottom: 4px;
            padding-top: 4px;
            padding-right: 10px;
            padding-left: 10px;
            p{
                color: $secondary-on-container;
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px;
            }
            img{
                padding-bottom: 5px;
            }
    }
    }

   

}
</style>