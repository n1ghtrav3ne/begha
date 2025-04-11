<template>

    <div @click="toggleCheckbox" class="facilityContainer">

        <div class="facilityIcon">

            <div class="icon">

                <img src="~/assets/images/cermony/Ghari copy.svg" alt="">

            </div>

            <div>

            </div>

        </div>

        <div class="explanation">

            <span>{{ item.title }}</span>

            <p>{{ item.price }}هزار تومان به ازای هر یک ساعت</p>

        </div>


            <BaseCheckbox class="checkBox" :items="checkboxes" />

        
    </div>


</template>
<script setup lang="ts">
import BaseCheckbox from '~/components/global/BaseCheckbox.vue';

defineComponent({BaseCheckbox})

const props=defineProps(['item'])

const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: "",
    isChecked: false,
  },
]);

const toggleCheckbox=()=>{
    checkboxes.value[0].isChecked=!checkboxes.value[0].isChecked
}

</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.facilityContainer{
    height: 45px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    .facilityIcon{
        width: 40px;
        height: 100%;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon{
        background-color: $surface-container-lowest;
        width: 32px;
        height: 32px;
        border-radius: 100%;

        img{
            width: 100%;
            height: 100%;
        }

    }

    .explanation{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
        }

        p{
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
        }
    }

    .checkBox{
       margin-right: auto;
       padding-top: auto;
       height: 100%;
    }

}
</style>