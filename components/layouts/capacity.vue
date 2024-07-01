<template>
    <div  :style="`height: ${props.modalHeight + 'px !important'};`" class="capacityContainer">

        <div dir="ltr" class="labelContainer">

            <label class="rangeLabel" :style="`left: ${inputValue / 10}%`">

            {{ inputValue }}

        </label>

        </div>

        <input type="range" min="0" max="1000" list="numbers" v-model="inputValue" />

        <datalist id="numbers">
            <div value="0"></div>
            <div value="100"></div>
            <div value="200"></div>
            <div value="300"></div>
            <div value="400"></div>
            <div value="500"></div>
            <div value="600"></div>
            <div value="700"></div>
            <div value="800"></div>
            <div value="900"></div>
            <div value="1000"></div>

        </datalist>

        <div class="numbersContainer">

            <div>0</div>
            <div>200</div>
            <div>400</div>
            <div>600</div>
            <div>800</div>
            <div>1000</div>

        </div>

    </div>
</template>
<script lang="ts" setup>

const props=defineProps(["modalHeight"])

const inputValue=ref(0)


</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.capacityContainer{
    
    display: flex;
    flex-direction: column;
    width: 100%;
    direction: ltr;

    .labelContainer{
        height: 10px;
        position: absolute;
        right: 11%;
        width: 84%;
        @apply sm:w-[90%] sm:right-[7%];

        .rangeLabel{
            height: 24px;
            display: flex;
            bottom: 10px;
            justify-content: center;
            align-items: center;
            position: absolute;
            font-size: 11px;
            font-weight: 400;
            color: $secondary-on;
            width: 26px;
            background-image: url('~/assets/images/cermony/bg.svg');
        }

    }
        
    #numbers{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        height: 8px;
        padding-right: 13px;
        padding-left: 2px;

        div{
            opacity: 0.6;
            background: $surface-on;
            width: 1px;
            height: 50%;
        }

    }
        
    .numbersContainer{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color:$surface-on;
        opacity: 0.6;
    }
    

}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  box-shadow: -2010px 0 0 2000px $secondary;
  position: relative;
  background: $surface;
}
input{
    accent-color: $secondary;
    -webkit-appearance: none;
    appearance: none;
    width:100%;
    direction:ltr;
    height: 100%;
    overflow-y: hidden;
    height: 12px;
    border-radius: 100px;
}
input[type=range]::-webkit-slider-runnable-track  {
    background: $secondary-container;
    height: 100%;
}

</style>