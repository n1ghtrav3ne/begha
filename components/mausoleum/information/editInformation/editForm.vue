<template>
    
    <div class="greenBox container">

    <div class="firstItem">

        <span class="material-symbols-outlined ">
        arrow_right_alt
    </span>

    <span>ویرایش اطلاعات</span>

    </div>    

    </div>

    <div class="container">

          <div class="profileDetail">

            <div class="profileImage">
                <img :src="imageUrl || defaultImage" ref="currentImage"  alt="">
            </div>

            <div class="imageStatus">

            <span class="first">تصویر پروفایل شما</span>

            <span class="second">حذف تصویر</span>

            </div>

            <div @click="fileInput.click()" class="iconContainer">

                <img src="~/assets/images/completeProfile/edit.svg" alt="">

            </div>

        </div>

        <input ref="fileInput" @change="handleFileChange" class="hidden" type="file" accept=".jpg,.png">


        <div class="explanationContainer">

            <span>توضیحات (۱۰۰۰/{{ charNumber.toLocaleString('fa-IR')  }})</span>

            <textarea v-model="text" placeholder="متن مورد نظر خود را وارد کنید" maxlength="1000"></textarea>

        </div>

        <div class="phoneNumberContainer">

            <span>شماره تماس</span>

            <div class="inputsContainer">

                <input type="number" placeholder="شماره تماس بقعه را وارد کنید">

                <hr class="my-[16px]">

                <input type="number" placeholder="شماره تماس بقعه را وارد کنید">


            </div>

        </div>

        <div class="addressContainer">

            <span>آدرس</span>

            <div class="inputContainer">

                <input value="از روی نقشه انتخاب کنید" type="button">

                <div class="iconContainer">

                    <span class="icon-Location-Iran"></span>

                </div>

            </div>


        </div>

        <div class="weeklyPlans">

            <span>برنامه های هفتگی بقعه</span>

            <div @click="mausoleumStore.changeWeeklyCermony('active')" class="inputContainer">

                <input value="انتخاب کنید" type="button">


                    <span class="icon-Arrow-Bottom-Iran"></span>

            </div>

            <div class="chosenItems">

                <div v-for="(item , index) in weekPrograms" :key="index" class="item">

                    <div class="info">

                        <span class="cermony">{{ item.name }}</span>

                        <div class="time">

                            <!-- <span v-if="!programCheck" @click="mausoleumStore.changeCermonyTime('active')">ساعت شروع و پایان</span> -->

                            <span>{{ item.startTime }}</span>

                            <span @click="mausoleumStore.changeCermonyTime('active'),deleteCermony(index)" class="mx-[4px]">{{ item.text }}</span>

                            <span>{{ item.endTime }}</span>

                        </div>


                    </div>

                    <span @click="deleteCermony(index)" class="material-symbols-outlined">
                    delete
                    </span>

                </div>



                 <!-- <div v-if="programCheck" v-for="(item , index) in completeWeekPrograms" :key="index" class="item">

                    <div class="info">

                        <span class="cermony">{{ item.name }}</span>

                        <div class="time">

                            <span>{{ item.startTime }}</span>

                            <span class="mx-[4px]">الی</span>

                            <span>{{ item.endTime }}</span>

                        </div>

                    </div>

                    <span @click="deleteCompleteCermony(index)" class="material-symbols-outlined">
                    delete
                    </span>

                </div> -->

            </div>


        </div>

        <div class="prayPlans">

            <span>اوقات برگزاری نماز</span>

            <div class="inputContainer">

                <input value="انتخاب کنید" type="button">


                    <span class="icon-Arrow-Bottom-Iran"></span>


            </div>


        </div>

        <button class="setUpChanges">اعمال تغییرات</button>


    </div>

    <weeklyCermony v-if="mausoleumStore.isOpenWeeklyCermony" />

    <cermonyTime v-if="mausoleumStore.isOpenCermonyTime" />

</template>

<script setup lang="ts">

import defaultImage from "~/assets/images/mausoleumInformation/frame.svg"

import weeklyCermony from "./inputValues/weeklyCermony.vue"

import cermonyTime from "./inputValues/cermonyTime.vue"

import {useMausoleumStore} from "~/stores/m-modals-store"

const mausoleumStore=useMausoleumStore()

defineComponent({weeklyCermony,cermonyTime})

const fileInput = ref();
const currentImage = ref();
const imageUrl = ref('');

const handleFileChange = (event:any) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event:any) => {
    imageUrl.value = event.target.result;
  };

  reader.readAsDataURL(file);
};

const text=ref('')

const charNumber=ref(0)

watch(text, (newValue) => {
    charNumber.value = newValue.length;
  });

  const selectedCermony=ref()

  const selectedStartTime=ref()

  const selectedEndTime=ref()

  watch(()=>mausoleumStore.isOpenWeeklyCermony,(newValue=>{
    if(!newValue && !!mausoleumStore.modals.setWeekCermony){
        selectedCermony.value=mausoleumStore.modals.setWeekCermony; 
        selectedCermony.value.forEach((cermony:any) => {
      if (!weekPrograms.value.find((program) => program.name === cermony)) {
        addCermonyToWeekPrograms(cermony)
      }
    })}
  }))

  const programCheck=ref(false)

  watch(() => mausoleumStore.isOpenCermonyTime, (newValue) => {
  if (!newValue && !!mausoleumStore.modals.setStartTime && !!mausoleumStore.modals.setEndTime) {

    selectedStartTime.value = mausoleumStore.modals.setStartTime.toString().replace(/[\[\],]/g, ':');

    selectedEndTime.value=mausoleumStore.modals.setEndTime.toString().replace(/[\[\],]/g, ':')

    weekPrograms.value.push({
        name:selectedCermony.value.toString().replace(/[\[\],]/g, ':'),
        hasTime:true,
        text:'الی',
        startTime:selectedStartTime.value,
        endTime:selectedEndTime.value
    })    

    
  }
  weekPrograms.value.forEach(program => {  
  if (!program.hasTime) {  
    programCheck.value=true   
  }  
})
})

  const weekPrograms=ref<{name:any ; hasTime:boolean ; text:string ; startTime:any ; endTime:any}[]
  >([])


  const addCermonyToWeekPrograms=(cermony:any)=>{
    weekPrograms.value.push({
        name:cermony,
        hasTime:false,
        text:'ساعت شروع و پایان',
        startTime:'',
        endTime:''
    })
  }

  const deleteCermony=(index:number)=>{
    if(programCheck){

        weekPrograms.value.splice(weekPrograms.value.length - 1, 1)

    }
  }

//   const deleteCompleteCermony = (index: number) => {
//   completeWeekPrograms.value = completeWeekPrograms.value.filter((item, idx) => idx!== index);
//   mausoleumStore.modals.setStartTime  =  ref()
//   mausoleumStore.modals.setEndTime = ref()
//   if (!!completeWeekPrograms) {
//     programCheck.value = false;
//   }
// }

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.greenBox{
    background-color: $primary;
    height:48px;
    display:flex;
    align-items: center;
    flex-direction: row;
    padding-top: 12px;
    padding-bottom: 11px;
    padding-right: 16px;
    color: $primary-on;
    

    .firstItem{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

   
}

.profileDetail{
    display: flex;
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    background: $surface-container-lowest;
    flex-direction:row;
    gap:12px;
    align-items:center;

    .profileImage{
        width: 56px;
        height: 56px;
        border-radius: 100%;
        display: flex;

        img{
            border-radius: 100%;
            background: $surface;
        }
    }

    .imageStatus{
        display: flex;
        flex-direction: column;
        gap: 4px;

        .first{
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            color:$surface-on;
        }

        .second{
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$error;
        }
    }

    .iconContainer{
        display: flex;
        padding: 8px;
        background: $secondary;
        justify-content:center;
        align-items:center;
        border-radius:100%;
        margin-right: auto;
    }
}

.explanationContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 26px;
    gap: 8px;

    span{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
    }

    textarea{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        background: transparent;
        padding: 12px;
        border: 1px solid $outline-variant;
        border-radius: 8px;
        height: 130px;
        outline: 0;
        padding-bottom: 23%;
    }

    textarea:focus{
        border: 1px solid var(--Secondary-S-400, #B5D9FB);
        box-shadow: 0px 1px 8px 0px rgba(66, 159, 245, 0.45);
    }
}

.phoneNumberContainer{
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;

    span{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
    }

    .inputsContainer{
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        border: 1px solid $outline-variant;
        padding: 12px;

        hr{
            color: $outline-variant;
        }

        input{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
            background: transparent;
            outline: 0;
        }
    }
}

.addressContainer{
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;

    span{
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
    }

    .inputContainer{
        border: 1px solid $outline-variant;
        padding: 12px;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        input{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on-variant;
        background: transparent;
    }

    .iconContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        background: $secondary-container;
        border-radius: 100%;

        span{
            color: $secondary;
        }
    }

    }
 


}

.weeklyPlans{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 42px;

    span{
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: $surface-on;
    }

    .inputContainer{
        border: 1px solid $outline-variant;
        padding: 12px;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        input{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on-variant;
        background: transparent;
    }

  

        span{
            color: $secondary;
            transform: rotate(90deg);
            font-size: 20px;
        }
    

    }
 
    .chosenItems{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        .item{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-right: 16px;
            padding-left: 16px;
            padding-top: 8px;
            padding-bottom: 8px;
            justify-content: space-between;
            background: $surface-variant;
            border-radius: 8px;

            .info{
                display: flex;
                flex-direction: column;
                gap: 4px;

                .cermony{
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    color: $surface-on;
                }

                .time{
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    span{
                        color: $secondary;
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;
                    }
                }

            }

            .material-symbols-outlined{
                color: $error;
                transform: scale(1.5);
                margin-bottom: 5%;
            }
        }
    }

}

.prayPlans{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 42px;

    span{
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: $surface-on;
    }

    .inputContainer{
        border: 1px solid $outline-variant;
        padding: 12px;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        input{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on-variant;
        background: transparent;
    }

  

        span{
            color: $secondary;
            transform: rotate(90deg);
            font-size: 20px;
        }
    

    }
 


}

.setUpChanges{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 12px;
    background: $primary;
    color: $primary-on;
    width: 100%;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 64px;
}
</style>