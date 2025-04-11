<template>

  <div class="flex flex-col">

    <div class="flex flex-row items-center justify-between">

    <div @click="selectIndex(index)" v-for="index in 5" :key="index" class="flex flex-col items-center mt-3 gap-2">

      <span :class="{'bg-secondary-700 text-secondary-50' : index===selectedIndex}" class="icon-Hall-Iran bg-neutral-200 w-11 h-11 p-1 flex justify-center items-center text-2xl rounded-full"></span>

      <span>پذیرایی</span>

    </div>

  </div>


  <span class="mt-8">ظرفیت</span>


  <div class="capacityContainer"> 

    <div class="flex flex-row-reverse w-[95%]">
      <label  :style="`left:${inputValue/10}%`" class="rangeLabel">

        {{ inputValue }}

      </label>

    </div>

            <input type="range" min="0" max="1000" list="numbers" v-model="inputValue" />

            <hr class="fill" :style="`width: ${inputValue/10}%`">

            <datalist id="numbers" class="w-full flex flex-row-reverse justify-between text-tiny relative bottom-2 text-neutral-500">
                <option value="0"></option>
                <option value="100"></option>
                <option value="200"></option>
                <option value="300"></option>
                <option value="400"></option>
                <option value="5000"></option>
                <option value="600"></option>
                <option value="700"></option>
                <option value="800"></option>
                <option value="900"></option>
                <option value="1000"></option>
              </datalist>

              <div class="w-full flex flex-row-reverse justify-between text-tiny ml-2 relative bottom-2 text-neutral-500">

                <span class="text-tiny relative text-neutral-500 right-2.5">0</span>
                <span class="text-tiny relative text-neutral-500 ">200</span>
                <span class="text-tiny relative text-neutral-500 ">400</span>
                <span class="text-tiny relative text-neutral-500 ">600</span>
                <span class="text-tiny relative text-neutral-500 ">800</span>
                <span class="text-tiny relative text-neutral-500 ">1000</span>

              </div>


        </div>

        <div class="rounded-lg bg-primary-700 text-primary-50 mt-7 text-xs w-full flex justify-center items-center h-11 p-2 cursor-pointer">اعمال فیلتر</div>

      </div>

</template>
<script lang="ts" setup>

const inputValue=ref(0)

const selectedIndex=ref()

const selectIndex=(index:number)=>{
  selectedIndex.value=index
}

</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.capacityContainer{
  display: flex;
  flex-direction: column;
  width: 90%;
  direction: ltr;
  margin-right: auto;
  margin-left: auto;
      
      .rangeLabel{
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 11px;
          font-weight: 400;
          position: relative;
          bottom: 0;
          color: $secondary-on;
          width: 26px;
          background-image: url('~/assets/images/cermony/bg.svg');
      }
  


  }
    
      
.fill{
  position: relative;
  right: 0;
  left: 0;
  width: 100%;
  bottom: 13px;
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
  background: $surface;
  fill: var(--Key-Surface-Surface, #FBFBFB);
  stroke: var(--Key-Surface-Surface, #FBFBFB);
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.10));
}
input{
  accent-color: $secondary;
  -webkit-appearance: none;
  appearance: none;
  width:100%;
  position: relative;
  right: 0;
  left: 0;
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
  
option{
  height: 1px;
  background: $surface-on;
  opacity: 0.6;
  width: 1px;
  border-radius: 30%;
}


</style>