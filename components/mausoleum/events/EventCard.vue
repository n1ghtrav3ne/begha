<template>

    <div class="card">

        <img :src="item.image" alt="">

        <div class="infoContainer">

            <div class="nameContainer">

                <span class="name">{{ item.name }}</span>

                <span class="material-symbols-outlined">
                more_vert
                </span>

            </div>

            <div class="dateContainer">

                <span class="date">{{ item.date }}</span>

                <div class="ratingContainer">

                    <span class="number">{{ item.number }}</span>

                    <span :class="{active:item.hasRating===true}" class="material-symbols-outlined">
                    kid_star
                    </span>

                </div>
                
            </div>

        </div>
        
    </div>

</template>

<script lang="ts" setup>

const props=defineProps(['item'])

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.card{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    background: $surface;
    padding: 8px;
    box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.06);
    height: 76px;
    border-radius: 8px;

    img{
        height: 100%;
        width: 89px;
        border-radius: 8px;
    }

    .infoContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        .nameContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .name{
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            color: $surface-on;
        }

    }

    .dateContainer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .date{
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
        }

        .ratingContainer{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;

            .number{
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $surface-container-high ; 
            }

            .material-symbols-outlined{
                color: $surface-container-high ; 
            }
        }
    }

    }


}

.active{
    color: $warning !important;
}

</style>