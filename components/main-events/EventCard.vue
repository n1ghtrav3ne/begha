<template>

    <div class="cermonyCard">

        <div class="firstPart">

            <img class="mausoleumImg" src="~/assets/images/cermony/cermonyHall.png" alt="cermonyHall">

            <div class="explanation">

                <p class="cardTitle">{{ item.title }}</p>

                <p class="members">{{ item.date }}</p>

            </div>

            <div class="rating">

                <p class="ratingNumber">{{ item.rating.toLocaleString('fa-IR') }}</p>

                <img class="ratingImg" src="~/assets/images/cermony/ant-design_star-filled.png" alt="">

            </div>

        </div>

        <hr>

        <div class="lastPartContainer">

                 <div class="lastItem">

            
                 <div class="nameOfMausoleum">

                    <img src="~/assets/images/cermony/holyBegha.svg" alt="mosque">

                    <p>{{ item.mausoleum }}</p>


            </div>

                 </div>

                <span class="material-symbols-outlined">
                arrow_back
                </span>

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

    .lastPartContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .lastItem{
    
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 
    width: 100%; 
    height: auto; 

    .nameOfMausoleum{
        background-color: $secondary-container;
        display: flex; 
        align-items: center; 
        justify-content: center;
        height: 100%; 
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

        .material-symbols-outlined{
            display: flex;
            align-items: center;
            justify-content: center;
            color: $secondary-on;
            background: $secondary;
            border-radius: 100%;
            padding: 2px;
            font-size: large;
        }

    }

    

   

}
</style>