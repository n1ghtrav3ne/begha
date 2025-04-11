<template>

            <div class="itemsContainer">

                <div @click="activateItem(0)" :class="{'active':selectedItem===0}" class="item">

                    <p>همه</p>

                    <span class="material-symbols-outlined hidden check-icon">
                        check_circle
                    </span>               

                </div>

                <div @click="activateItem(2)" :class="{'active':selectedItem===2}" class="item">

                    <p>محبوب ترین ها</p>

                    <span class="material-symbols-outlined hidden check-icon">
                        check_circle
                    </span>               

                </div>

                <div @click="activateItem(3)" :class="{'active':selectedItem===3}" class="item">

                    <p>ظرفیت خالی</p>

                    <span class="material-symbols-outlined hidden check-icon">
                        check_circle
                    </span>               

                </div>

            </div>
             

</template>
<script lang="ts" setup>

const selectedItem=ref(0)
const activateItem=(index:number)=>{
    selectedItem.value=index;
}

</script>
<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.itemsContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 156px;
    margin-top: 16px;
    justify-content: space-between;

    .item{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 44px;
        padding: 16px 12px;
    }
}

.active{

    background-color: $secondary-container;
    border-radius:8px;

    span{
        display: flex;
        color: $secondary;
    
    }

}

</style>