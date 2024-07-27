<template>
<data class="container">

    <div class="facility-container grid grid-cols-5 gap-4">
        <div class="facility-item">
            <div class="facility-img">
                <img src="@/assets/images/icons/sofa.svg" >
            </div>
            <span class="facility-title">مبلمان</span>
        </div>
        <div class="facility-item">
            <div class="facility-img">
                <img src="@/assets/images/icons/sofa.svg" >
            </div>
            <span class="facility-title">مبلمان</span>
        </div>
        <div class="facility-item">
            <div class="facility-img">
                <img src="@/assets/images/icons/sofa.svg" >
            </div>
            <span class="facility-title">مبلمان</span>
        </div>
        <div class="facility-item">
            <div class="facility-img">
                <img src="@/assets/images/icons/sofa.svg" >
            </div>
            <span class="facility-title">مبلمان</span>
        </div>

        
    </div>
    <div class="select-room">
        <div class="room-switch">
            <div class="switch-item active-switch">اتاق</div>
            <div class="switch-item">سوئیت</div>
        </div>
        <div class="room-options mt-4 ">
            <BaseCheckbox :items="checkboxes" />


        </div>
    </div>
    <div class="confirm mt-5">
        اعمال فیلتر
    </div>
</data>
</template>
<script lang="ts" setup>
const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: "اتاق 3 نفره",
    isChecked: false,
  },
  {
    id: 2,
    label: "اتاق ۵ نفره",
    isChecked: false,
  },
  {
    id: 3,
    label: "اتاق ۱۰ نفره",
    isChecked: false,
  },
  {
    id: 3,
    label: "اتاق ۷ نفره",
    isChecked: false,
  },
  {
    id: 3,
    label: "اتاق ۱۲ نفره",
    isChecked: false,
  },
]);
</script> 
<style scoped lang="scss">
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.container{
.facility-container{
    border-bottom: 4px solid $secondary-container;


    .facility-item{

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 24px;
        .facility-img{
border-radius: 8px;
padding: 8px;
width: 40px;
height: 40px;
background-color:   $surface-container-lowest;
        display: flex;
        align-items: center;
        justify-content: center;
        }
        .facility-title{
            margin-top: 8px;
            font-size: 11px;

        }
    }
    
}
.select-room{
        margin-top: 20px;
        
        .room-switch{   
            display: flex;
height: 36px;
padding: 2px;
justify-content: center;
align-items: center;
align-self: stretch;
.switch-item{
    width: 50%;
    display: flex;
height: 36px;
padding: 2px;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 8px;
color: #7E7E7E;


}
.active-switch{
    color: #0B0B0B;
    border: 0.5px solid  rgba(223, 223, 223, 0.50);
background: $surface;
box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.04);
}
.room-options{
    margin-top: 18px !important;
    display: flex;
    flex-direction: column;
}
        }
    }
}
</style>