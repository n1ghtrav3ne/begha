<template>
    <div class="greenBox container">

        <div class="firstItem">

            <span @click="$router.push('../')" class="material-symbols-outlined ">
            arrow_right_alt
        </span>

        <span>تکمیل پروفایل</span>

        </div>    

        </div>

    <div class="container">

        <div class="profileDetail">

            <div class="profileImage">
                <img :src="imageUrl" ref="currentImage"  alt="">
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

        <div class="inputsContainer">


            <div class="numberContainer">

                <span>شماره همراه</span>

                <input type="text" placeholder="شماره همراه خود را وارد کنید">

            </div>

            <div class="nameHolder">

                <span>نام و نام خانوادگی</span>

                <input type="text" placeholder="نام و نام خانوادگی خود را وارد کنید">

            </div>

            <div class="cityHolder">

                <span>شهر</span>

                <div @click="modalStore.changeProfileSearchCities('active')" class="cityInput">

                    <input type="button" value="انتخاب کنید">

                    <span class="material-symbols-rounded icon">
                    arrow_drop_down
                    </span>

                </div>

            </div>

        </div>

        <button class="confirm">اعمال</button>

    </div>

    <searchCities v-if="modalStore.isOpenProfileSearchCities" />

    <gallery v-if="modalStore.isOpenImagePicker" />

</template>

<script setup lang="ts">

import searchCities from "./searchCities.vue"

import gallery from "./gallery.vue"

import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

defineComponent({searchCities})

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

        img{
            border-radius: 100%;
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
.inputsContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    margin-top: 32px;

    .numberContainer{
        display: flex;
        flex-direction: column;
        gap: 8px;

        span{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$surface-on;
        }

        input{
            background: transparent;
            border-radius: 8px;
            border: 1px solid $outline-variant;
            padding: 12px;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
            outline: 0;
        }
    }

    .nameHolder{
        display: flex;
        flex-direction: column;
        gap: 8px;

        span{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$surface-on;
        }

        input{
            background: transparent;
            border-radius: 8px;
            border: 1px solid $outline-variant;
            padding: 12px;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
            outline: 0;
        }
    }

    .cityHolder{
        display: flex;
        flex-direction: column;
        gap: 8px;

        span{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color:$surface-on;
        }

        .cityInput{

            display: flex;
            flex-direction: row;
            align-items: center;
            border: 1px solid $outline-variant;
            border-radius: 8px;
            padding: 12px;


            input{
            background: transparent;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on-variant;
            outline: 0;
            display:flex;
            width: 100%;
            display:flex;
            text-align:start;
        }

        .icon{
            transform: scale(3);
            color: $secondary;
        }

        }

   
    }

}

.confirm{
    display: flex;
    justify-content: center;
    align-items: center;
    background: $primary;
    color:$primary-on;
    width:100%;
    padding:8px;
    border-radius:8px;
    margin-top: 95%;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

</style>