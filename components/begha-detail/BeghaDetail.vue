<template>
  <div>
    <div  class="begha-banner-page-container">
      <img 

        class="begha-page-banner"
        src="https://s3-alpha-sig.figma.com/img/406f/c25b/55c068e0ec6af795f540ce9e7f947d19?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jACxSiy4b~cC3MHfc1tXnNemMMYQqV~aJ4V~DoKT8N8jQcjPSd3cCMfxv~ZhtXouNiwu0fVpX2gj9rMm0Q2KNgPcYhbbuwM8UCnEwdZVd6DajvyL-lO6ZRayqONJUX5CXOP8NYLlx-9~jgLgc-23oV7NXuKGll7mJBVxFwWR6PMeYZ2PC79vJsdFKMGzvfuAWOTo2cftFALdv~jdsD4lz8LzLtUe~V8Xt4zYX22SDSppdXR5o0PN1anEIlptzqQs6FfjPyhRLc2w87c6gXoBLuEHLRxjhniEzPnVBkI6AK0FYhyiUBwVTHbbHXhAr~5xqt7Hxb75nj37~b1vuLmMxg__"
        alt=""
        
      />
  
    </div>

    <div :class="{'fixed max-w-[600px] m-auto top-0  bg-neutral-50 right-0 left-0':scrollTop>=160}" class="z-[99] duration-500 h-[153px] border-neutral-100 border-b">

      <div :class="{ 'opacity-100':scrollTop>=150}" class="w-full duration-1000 fixed right-0 left-0 max-w-[600px] m-auto opacity-0 h-[52px] bg-primary-700"></div>

    <div :class="{'w-[86px] h-[86px] translate-y-[65px] !p-[3px]':scrollTop>=150}" class="w-[120px] p-1 duration-500 bg-white relative bottom-[60px] right-4 h-[120px] rounded-full">
        <img
          class="w-full rounded-full h-full"
          src="~/assets/images/one-begha/begha-profile.png"
          alt=""
        />
      </div>

    <div class="container begha-page-content relative bottom-[120px]">

      <div :class="{'top-7':scrollTop>=150}" class="begha-profile-status duration-500 flex items-center relative justify-end">
        <div class="notif-status-icons flex items-center">

          <span  class="border border-error-700 bg-error-200 rounded-full w-[75px] justify-center flex flex-row gap-1 text-error-700 text-xs items-center">
            <span class="status-icon icon-Mosque-Iran bg-error-300 rounded-full p-1 text-lg flex justify-center items-center"></span>
            <span class="status-text">بسته</span>
          </span>

          <span
            @click="$router.push('/begha-news/1')"
            class="begha-notif centered mr-3"
          >

          <div class="flex justify-center items-center">
            <span class="material-symbols-rounded  !text-secondary-700">
            notifications
            </span>
            <div class="p-1 mb-5 ml-6 bg-error-700 rounded-full absolute"></div>
          </div>
                

      </span>
        </div>
      </div>


      <div :class="{'top-[60px]':scrollTop>=95}" class="begha-profile-info duration-500 flex items-center relative justify-between">
        <div class="flex gap-1 flex-col">
          <span class="begha-name">حرم امام زاده صالح (ع)</span>
          <span class="begha-followers">۳۴۹ نفر دنبال کننده</span>
        </div>
        <div>
          <span class="begha-follow-btn centered">دنبال کردن</span>
        </div>
      </div>
    </div>


    </div>




    <div class="container begha-profile-content relative ">
      <div class="begha-work-banner">
        <BeghaWorkEventBanner />
      </div>
      <div class="begha-content">
        <div class="begha-description">
          <span class="begha-description-title">درباره امام زاده</span>
          <p>
            در داخل حریم وسیع امامزاده صالح، صندوقی چوبین وجود دارد که احتمالاً
            به دوران اواخر صفوی یا افشار تعلق دارد و ضریح ممتاز نقره‌ای آن که
            اضلاع شرقی و شمال شرقی و غربی آن دارای محفظه مشبک مزین به نقره و ضلع
            جنوبی آن مشبک چوبی است از وقفیات میرزا سعیدخان، وزیر امور خارجه
            اواخر قاجار است.
          </p>
        </div>
        <div class="begha-contact-info flex items-center flex-col">
          <div class="begha-address flex items-center justify-between">
            <div class="flex flex-col">
              <span class="address-title">آدرس</span>
              <span class="address-text"
                >تهران، میدان تجریش، حرم امامزاده صالح (ع)</span
              >
            </div>
            <span class="address-icon-bg centered">
              <span class="material-symbols-outlined"> notifications </span>
            </span>
          </div>
          <div class="begha-contact flex items-center justify-between">
            <div class="flex flex-col">
              <span class="contact-title">اطلاعات تماس</span>
              <span class="contact-numbers">۰۹۱۲۳۴۵۶۷۸۹ و ۰۹۱۳۱۹۴۰۴۰۴۹۴</span>
            </div>
            <span class="contact-icon-bg centered">
              <span @click="callSheet=true" class="material-symbols-outlined"> call </span>
            </span>
          </div>
        </div>
        <div>
          <NextPlans />
        </div>
      </div>
    </div>
  </div>

  <BottomSheets title="تماس با دفتر بقعه" v-model="callSheet">

    <CallSheet />

  </BottomSheets>

</template>

<script lang="ts" setup>

import BeghaWorkEventBanner from "./BeghaWorkEventBanner.vue";

import NextPlans from "../home/NextPlans.vue";

import CallSheet from "./CallSheet.vue";

const callSheet=ref(false)

const scrolled = ref(false);

const poster=ref(false)

const scrollAmount=ref()

let scrollTop=ref()

watchEffect(() => {
  if (process.client) {
    window.addEventListener("scroll", () => {
      scrollTop.value = window.pageYOffset;
      scrollAmount.value=scrollTop.value
      if(scrollTop.value>=85){
        scrolled.value=true
      }
    });
  }
});


</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.begha-banner-page-container {
  
  .begha-page-banner {
    height: 140px;
    width: 100%;
  }
  .begha-profile-img {
    height: 120px;
    width: 120px;
    border-radius: 120px;
    border: 4px solid $surface;
    position: absolute;
    bottom: -41%;
    right: 16px;
  }
}

.begha-contact-info {
  align-items: stretch;
  .begha-contact {
    .contact-icon-bg {
      padding: 8px;
      color: $secondary-on;
      border-radius: 50%;
      background-color: $secondary;
      width: 36px;
      height: 36px;
      span {
        font-size: 20px;
      }
    }
    border-bottom: 1px solid $outline-variant;
    padding-bottom: 30px;
    margin-top: 16px;
    .contact-title {
      color: $surface-on-variant;
      font-size: 12px;
      font-family: "yekan-regular";
    }
    .contact-numbers {
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
      text-align: justify;
    }
  }
  .begha-address {
    .address-icon-bg {
      padding: 8px;
      color: $secondary-on;
      border-radius: 50%;
      background-color: $secondary;
      width: 36px;
      height: 36px;
      span {
        font-size: 20px;
      }
    }
    .address-title {
      color: $surface-on-variant;
      font-size: 12px;
      font-family: "yekan-regular";
    }
    .address-text {
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
      text-align: justify;
    }
  }
}

.begha-profile-info {
  margin-top: 20px;
  .begha-name {
    color: $surface-on;
    font-family: "yekan-regular";
    font-size: 16px;
    font-weight: 700;
  }
  .begha-followers {
    color: $surface-on-variant;
    font-family: "yekan-regular";
    font-size: 12px;
    font-weight: 700;
  }
  .begha-follow-btn {
    height: 32px;
    padding: 8px;
    background-color: $primary;
    color: $primary-on;
    border-radius: 8px;
    font-family: "yekan-regular";
    font-size: 12px;
  }
}

.begha-page-content {
  .begha-profile-info {
    padding-bottom: 15px;
  }
  .notif-status-icons {
    .begha-status {
      width: 75px;
      height: 28px;
      padding: 8px;
      border-radius: 24px;
      border: 1px solid $error;
      background-color: #fdf2f2;
      .status-text {
        color: $error;
        font-family: "yekan-regular";
        font-size: 12px;
        font-weight: 400;
        vertical-align: 2px;
        margin-top: 3px;
      }
      .status-icon {
        color: $error;
        font-size: 21px;
        margin-left: 5px;
      }
    }
    .begha-notif {
      background-color: #cfe8ff;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      span {
        font-size: 20px;
        color: #fff;
      }
    }
  }
}
.begha-content {
  .begha-description {
    margin-bottom: 12px;
    .begha-description-title {
      color: $surface-on-variant;
      font-family: "yekan-regular";
      font-size: 12px;
    }
    p {
      color: #000;
      text-align: justify;
      font-family: "yekan-regular";
      font-size: 14px;
    }
  }
}
.begha-profile-content {
  margin-bottom: 150px !important;
}
</style>

<style lang="scss">
.slider-container {
  margin-bottom: 0 !important;
}
</style>
