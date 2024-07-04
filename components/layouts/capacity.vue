<template>
    <div  :style="`height: ${props.modalHeight + 'px !important'};`" class="capacityContainer">

        <div dir="ltr" class="labelContainer">

            <div :style="`width: ${inputValue/10}%`" class="effectingLable">

            </div>

            <label class="rangeLabel">

            {{ inputValue }}

        </label>

        </div>


            <input type="range" min="0" max="1000" list="numbers" v-model="inputValue" />




        <hr class="fill" :style="`width: ${inputValue/10}%`">
<!-- 
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

        </div> -->

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
        height: fit-content;
        position: relative;
        width: 100%;
        height: 24px;
        direction: ltr;
        display: flex;
        flex-direction: row;
        bottom: 5px;
        .effectingLable{
            height: 100%;
        }
        .rangeLabel{
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 11px;
            font-weight: 400;
            position: relative;
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
.fill{
    position: relative;
    bottom: 4px;
    border: 2px solid $secondary;
    height: 4px;
    border-radius: 100px;
}
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    z-index: 9999;
    position: relative;
    bottom: 4px;
    background: blue;
}
input{
    accent-color: $secondary;
    -webkit-appearance: none;
    appearance: none;
    width:100%;
    direction:ltr;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
}
input[type=range]::-webkit-slider-runnable-track  {
    background: $secondary-container;
    height: 4px;
    border-radius: 100px;
    width: 100%;
}

</style>