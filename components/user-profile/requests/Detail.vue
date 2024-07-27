<template>
  <div>
    <div class="back-navbar container flex items-center justify-between">
      <span
        ><span @click="$router.push('../')" class="material-symbols-outlined back-icon ml-2">
          trending_flat </span
        ><span class="back-title">درخواست های من</span></span
      >
    </div>

    <div class="container pos-fix">
      <div class="heading-info">
        <div class="flex items-center justify-between title-state">
          <span class="request-title">اتاق ۱۲ نفره</span>
          <span class="status-badge success flex items-center justify-center"
            >تایید شده</span
          >
        </div>
        <div class="request-location">
          <span class="location">
            <span class="icon-Mosque-Iran"></span>
            <span class="location-title">امام زاده صالح (ع)</span>
          </span>
        </div>
        <div class="request-address">
          <span>اصفهان، خیابان مصلی، لورم ایپسوم، روبروی لورم</span>
        </div>
        <div class="request-result flex items-center accepted">
          <div class="result-img">
            <img src="~/assets/images/user/accepted.svg" alt="" />
          </div>
          <div class="flex flex-col mr-2">
            <span class="result-status-text"> پذیرش موفق </span>
            <span class="result-status-desc">
              درخواست شما در تاریخ ۱۴۰۲/۱۲/۱۲ ساعت ۱۲:۳۴ تائید شد.
            </span>
          </div>
        </div>
        <hr class="border-bottom" />

        <div class="request-payment">
          <div class="scrollable-content">
            <ul class="payment-detail">
              <li class="detail-item flex items-center justify-between">
                <span class="detail-title">مبلغ پرداختی</span>
                <span class="detail-text">۱٬۲۰۰٬۰۰۰ تومان</span>
              </li>
              <li class="detail-item flex items-center justify-between">
                <span class="detail-title">تاریخ ارسال درخواست</span>
                <span class="detail-text">۱۲ اردیبهشت ۱۴۰۳، ۱۴:۳۲</span>
              </li>
              <li class="detail-item flex items-center justify-between">
                <span class="detail-title">شماره پیگیری</span>
                <span class="detail-text">۷۴۸۴۹۳</span>
              </li>
              <li class="detail-item flex items-center justify-between">
                <span class="detail-title">نام متوفی</span>
                <span class="detail-text">سید احمد موسوی</span>
              </li>
              <li class="detail-item flex items-center justify-between">
                <span class="detail-title">قبر درخواستی</span>
                <span class="detail-text">قطعه شهدا، شماره ۱۲، طبقه ۲</span>
              </li>
              <li class="detail-item flex items-center justify-between">
                <span class="detail-title">شماره سفارش</span>
                <span class="detail-text">۹۴۵۰۰۳۲۴</span>
              </li>
              <hr class="border-bottom" />
            </ul>
          </div>
        </div>
      </div>
      <div class="back-support flex flex-col items-center">
        <span class="flex items-center justify-center support-btn"
          >ارتباط با پشتیبانی</span
        >
        <span
          @click="CancelRequestModalSheet=true"
          class="flex items-center justify-center cancel-btn"
          >لغو درخواست</span
        >
        <span class="flex items-center justify-center back-btn"
          >رفتن به صفحه زائرسرا</span
        >
      </div>
    </div>
    <BottomSheets v-model="CancelRequestModalSheet">

      <CancelRequestModal @close="CancelRequestModalSheet=false"  />

    </BottomSheets>
  </div>
</template>

<script lang="ts" setup>
import CancelRequestModal from "./CancelRequestModal.vue";
import BottomSheets from "~/components/global/bottomSheets.vue";
defineComponent([CancelRequestModal]);

const CancelRequestModalSheet=ref(false)

</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.pos-fix {
  position: relative !important;
}

.back-navbar {
  height: 48px;
  background: $primary;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  span.back-title {
    font-size: 16px;
    font-family: "yekan-regular";
    color: $primary-on;
  }
  span.back-icon {
    color: $primary-on;
    font-size: 25px;
    vertical-align: -10px;
  }
}

.heading-info {
  .title-state {
    margin-bottom: 15px;
    .request-title {
      font-size: 16px;
      font-weight: 700;
      font-family: "yekan-regular";
      text-align: justify;
    }
    .status-badge {
      padding: 8px 12px;
      text-align: right;
      font-family: "yekan-regular";
      font-size: 11px;
      font-weight: 400;
      height: 32px;
      border-radius: 12px;
    }
    .status-badge.success {
      background-color: #d8fdec;
      color: $primary;
    }
    .status-badge.warning {
      background-color: #fff5dc;
      color: $warning;
    }
    .status-badge.error {
      background-color: #fdf2f2;
      color: $error;
    }
  }
  .request-location {
    margin-bottom: 12px;
    .location {
      background-color: $secondary-container;
      padding: 4px 10px;
      border-radius: 8px;
      .location-title {
        font-size: 11px;
        font-weight: 400;
        font-family: "yekan-regular";
        text-align: right;
        margin-right: 4px;
      }
      .icon-Mosque-Iran {
        color: $secondary;
        vertical-align: -3px;
      }
    }
  }
  .request-address {
    margin-bottom: 16px;
    span {
      font-size: 11px;
      font-weight: 400;
      font-family: "yekan-regular";
      text-align: right;
    }
  }

  .request-result.accepted {
    padding: 16px 14px;
    border-radius: 12px;
    border: 0.6px solid #9fedb1;
    background-color: #f0fcf3;
    .result-status-text {
      font-size: 14px;
      font-weight: 700;
      font-family: "yekan-regular";
      text-align: right;
      color: $success;
      margin-bottom: 4px;
    }
    .result-status-desc {
      font-size: 11px;
      color: $success;
      font-weight: 400;
      font-family: "yekan-regular";
      text-align: right;
    }
  }
  .request-result.waiting {
    padding: 16px 14px;
    border-radius: 12px;
    border: 0.6px solid #fee59e;
    background-color: #fffbf0;
    .result-status-text {
      font-size: 14px;
      font-weight: 700;
      font-family: "yekan-regular";
      text-align: right;
      color: $warning;
      margin-bottom: 4px;
    }
    .result-status-desc {
      font-size: 11px;
      color: $warning;
      font-weight: 400;
      font-family: "yekan-regular";
      text-align: right;
    }
  }
  .request-result.rejected {
    padding: 16px 14px;
    border-radius: 12px;
    border: 0.6px solid #f1acac;
    background-color: #fdf2f2;
    .result-status-text {
      font-size: 14px;
      font-weight: 700;
      font-family: "yekan-regular";
      text-align: right;
      color: $error;
      margin-bottom: 4px;
    }
    .result-status-desc {
      font-size: 11px;
      color: $error;
      font-weight: 400;
      font-family: "yekan-regular";
      text-align: right;
    }
  }

  .request-payment {
    .scrollable-content {
      max-height: 380px;
      overflow-y: scroll;
    }
    .payment-detail {
      height: auto;
      .detail-item {
        padding: 16px 0;
        .detail-title {
          font-size: 12px;
          color: $surface-on-variant;
          font-weight: 400;
          font-family: "yekan-regular";
          text-align: right;
        }
        .detail-text {
          font-size: 14px;
          color: $surface-on;
          font-weight: 700;
          font-family: "yekan-regular";
          text-align: right;
        }
      }
    }
  }
  .border-bottom {
    height: 1px;
    color: $outline-variant;
    margin: 16px 0;
  }
}

.back-support {
  padding: 16px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  .support-btn {
    padding: 8px;
    color: $primary-on;
    background-color: $primary;
    font-size: 12px;
    font-weight: 400;
    font-family: "yekan-regular";
    border-radius: 8px;
    width: 100% !important;
  }
  .cancel-btn {
    padding: 8px;
    color: $primary-on;
    background-color: $error;
    font-size: 12px;
    font-weight: 400;
    font-family: "yekan-regular";
    border-radius: 8px;
    width: 100% !important;
  }
  .back-btn {
    width: 100% !important;
    padding: 8px;
    color: $primary;
    font-size: 12px;
    font-weight: 400;
    font-family: "yekan-regular";
  }
}
</style>
