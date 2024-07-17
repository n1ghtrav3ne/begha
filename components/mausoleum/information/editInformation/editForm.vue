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

    </div>


</template>

<script setup lang="ts">

import defaultImage from "~/assets/images/mausoleumInformation/frame.svg"

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

</style>