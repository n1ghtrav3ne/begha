<template>
   
   <div class="greenBox container">

<div class="firstItem">

    <span @click="$router.go(-1)" class="material-symbols-outlined ">
    arrow_right_alt
</span>

<span>افزودن رسانه جدید</span>

</div>    

    <span @click="exitStatus=true" class="quit">انصراف</span>


    </div>

    <div class="container">


        <div class="newItems">

            <div class="item">

                <div class="iconContainer">

                    <img src="~/assets/images/mausoleum-media/gallery.svg" alt="">

                    <span class="material-symbols-outlined">
                    add
                    </span>

                </div>

                <span>تصویر جدید</span>

            </div>

            <div class="item">

                <div @click="uploadVideoPage=true" class="iconContainer">

                    <img src="~/assets/images/mausoleum-media/video.svg" alt="">

                    <span class="material-symbols-outlined">
                    add
                    </span>

                </div>

                <span>ویدیو جدید</span>

            </div>

           <div class="item">

                <div @click="uploadAudioPage=true" class="iconContainer">

                    <img src="~/assets/images/mausoleum-media/microphone.svg" alt="">

                    <span class="material-symbols-outlined">
                    add
                    </span>

                </div>

                <span>صوت جدید</span>

            </div>

        </div>

        <Swiper
          :modules="[SwiperPagination, SwiperEffectCreative]"
          :slidesPerView="'auto'"
          :pagination="{
            type: 'fraction',
          }"
          :spaceBetween="25"
          :loop="false"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
        >
          <SwiperSlide >
          

          </SwiperSlide>

        </Swiper>

        <div class="inputContainer">

            <div class="title">

                <span>عنوان رسانه</span>

                <input placeholder="عنوان مورد نظر را وارد کنید" type="text">

            </div>


        </div>

        <div class="explanationContainer">
      <span>توضیحات (۱۰۰۰/{{ charNumber }})</span>

      <textarea
        v-model="text"
        placeholder="متن مورد نظر خود را وارد کنید"
        maxlength="1000"
      ></textarea>
    </div>

    <div class="inputContainer">

            <div class="title">

                <span>کلیدواژه‌های مربوطه</span>

                <input placeholder="موضوعات را وارد کنید" type="text">

                <span class="warning">لطفاً از کاراکترهای هشتگ (#) و زیرخط (_) استفاده کنید.</span>

            </div>


        </div>

        <button class="upload">بارگذاری</button>

    </div>

    <UploadVideo @close="uploadVideoPage=false" v-if="uploadVideoPage" />

    <UploadAudio @close="uploadAudioPage=false" v-if="uploadAudioPage" />

    <BottomSheets v-model="exitStatus">

        <DeleteConfirm color="primary" title="با خروج تغییرات اعمال‌شده ذخیره نخواهند شد. آیا می خواهید ادامه دهید؟" />

    </BottomSheets>

    <BottomSheets v-model="ChangeImageSheet">

        <ChangeImage />

    </BottomSheets>
   
</template>

<script setup lang="ts">

import UploadVideo from './UploadVideo.vue';

import UploadAudio from './UploadAudio.vue';

import ChangeImage from './ChangeImage.vue';

const text = ref("");

const uploadVideoPage=ref(false)

const uploadAudioPage=ref(false)

const exitStatus=ref(false)

const ChangeImageSheet=ref(false)

const charNumber = ref(0);

watch(text, (newValue) => {
  charNumber.value = newValue.length;
});

const mediaFiles=ref<{image?:any ; video?:any ; audio?:any}[]>
([
    
])

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

    .quit{
        margin-right: auto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

    }
   
}

.newItems{
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 98px;

    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;

        .iconContainer{
            background: $secondary-container;
            padding: 14px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .material-symbols-outlined{
                background: $secondary;
                position: absolute;
                color: $surface;
                width: 20px;
                height: 20px;
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 8%;
                margin-left: 7%;
                font-size: 20px;
            }
        }
    }
}

.inputContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;

    .title{
        display: flex;
        gap: 8px;
        flex-direction: column;

        span{
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: $surface-on;
        }

        input{
            background: transparent;
            padding: 12px;
            border: 1px solid $outline-variant;
            border-radius: 8px;
        }

        .warning{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $secondary;
    }
    }

}

.explanationContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 26px;
  gap: 8px;

  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
  }

  textarea {
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

  textarea::-webkit-scrollbar {
    display: none;
  }

  textarea:focus {
    border: 1px solid var(--Secondary-S-400, #b5d9fb);
    box-shadow: 0px 1px 8px 0px rgba(66, 159, 245, 0.45);
  }
}

.upload{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $secondary-on;
    background: $primary;
    width:100%;
    margin-top: 71px;
    border-radius:12px;
    height:44px;
}

input{
    outline: 0;
}
</style>