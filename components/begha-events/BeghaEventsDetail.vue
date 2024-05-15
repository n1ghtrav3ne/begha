<template>
  <div>
    <div class="begha-banner-page-container">
      <div class="begha-page-banner">
        <div class="flex items-center justify-end p-2 pl-4">
          <BaseToggleButton
            @changeToggleBtn="sendNewsNotification"
            class="flex items-center"
          />
        </div>
      </div>
      <div class="begha-profile-image">
        <img
          class="begha-profile-img"
          src="https://s3-alpha-sig.figma.com/img/fd22/a092/cee2d180b364fceb40ac8cee8fac63ed?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZExyHDipIQuow0IG~GyRNzoYJZ7CMazEfY7toj-U3WH0v5nz7bDQp48MbBbYwSBMaN0Eu2oos8teKL3nAM69Ngm1b3j7D3nOY55zkf4~dwp42PLUPEAl1Dgg44OdgnWcWN1BQz85pTRGWijq7JKGDFFKtU-f1azHb0mEd2-mlXBRzGa-ijbHHz0JNJV9qsI1ympG6LCVsidbxzn~hIFimVSKdP1Lw9~9XvtQCmyHbsE1ZEtTyK16T9KU-qd1uHcUQaB-pLiZtypx75vwme5e1PxnTKf-M9RPbSJOEUCf6ULEqvfCpwqk2sFO1UNX688AVm9Mb1wEq9RNByVtX70SZA__"
          alt=""
        />
      </div>
    </div>

    <div class="container begha-events-detail">
      <div class="flex items-center justify-between mb-4">
          <span class="begha-profile-name">حرم امام زاده صالح (ع)</span>
          <span class="score-btn">امتیاز شما</span>
        </div>
      <div class="page-image-banner">
        <img
          src="https://s3-alpha-sig.figma.com/img/7c63/dfd8/1a1d080913720fe29a79311a56cd7ab3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JICfUNn1MmRF0RAOa46bmeVBFiCu7w8SPIEBKc1so3iT3kMhhiBhVHBf6Gn2Kj4R7CNGpCL6r04wFWruQwyo8uu3cvJr8FmnbR7MRhWQyo01zjIDwt9hfRVnmza5IXrPhyY~khO7iEPIymlvNhkXTI1ICJH77jmNso0B5F5pSh3uDhkJp85yLf0-ouFt8Y9CZBV9R5zCaeGFRxhanYTPmqwYW~pPgVUmJPU4hU6Wc8EmA1Fq0SxGUAPPk4Le8pjMbvc-8brWFv4lRMMS1kAfENymcqH-LZYTE~vrpwdIThNll7XaVfntUG5CaELd8~GzEgpUuRLvXJ6QHN4wqEAToQ__"
          alt=""
        />
      </div>
      <div class="news-detail-title flex items-center">
        <span
          class="icon-Mosque-Iran btn-bg-navy-blue flex justify-center pb-1 flex-col items-center"
        ></span>
        <span class="news-title">حضور آیت الله خامنه ای</span>
      </div>
      <div class="news-detail-desc-container">
        <p class="news-detail-description">
          برگزاری مراسم ترحیم در بقعه متبرکه از دیرباز جزیی از این اجرای مراسم
          ترحیم میباشد.رزرو بقعه متبرکه مراسم ترحیم پس از خاکسپاری و تهیه اقلام
          پذیرایی.
        </p>
      </div>
      <div class="card-footer flex items-center justify-between">
        <div class="news-card-boghe flex items-end justify-center">
          <span class="icon-Mosque-Iran"></span>
          <span class="boghe-name mr-1">امام زاده صالح (ع)</span>
        </div>
        <div class="news-card-time">
          <span>۲۲ بهمن ساعت ۱۹:۰۰</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EventsItem from "./EventsItem.vue";
const beghaNews = ref<
  {
    id: number;
    title: string;
    description: string;
    time: string;
    bogheName: string;
  }[]
>([
  {
    id: 1,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 1,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 1,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 1,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
  {
    id: 1,
    title: "حضور آیت الله خامنه ای ",
    description: "این متن دارای توضیح است. این متن دارای ....",
    time: "۲۲ بهمن ساعت ۱۹:۰۰",
    bogheName: "امام زاده صالح (ع)",
  },
]);
defineComponent([EventsItem]);
const sendNewsNotification = (emited: boolean) => {
  console.log(emited, "tooooogle");
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.begha-banner-page-container {
  position: relative;
  .begha-page-banner {
    height: 48px;
    width: 100%;
    background-color: $primary;
  }
  .begha-profile-img {
    height: 86px;
    width: 86px;
    border-radius: 120px;
    border: 4px solid $surface;
    position: absolute;
    bottom: -101%;
    right: 16px;
  }
}

.begha-events-detail{
  margin-top: 36px !important;
}

.begha-profile-name{
  color: $surface-on;
  font-size: 16px;
  font-weight: 700;
  font-family: 'yekan-regular';
}

.score-btn{
  background-color: $primary;
  color: $primary-on;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: 'yekan-regular';
  font-weight: 400;
}

.page-image-banner {
  width: 100%;
  padding: 8px;
  padding-bottom: 20px;
  border-bottom: 1px solid $outline-variant;

  img {
    width: 100%;
    border-radius: 8px;
  }
}

.news-detail-title {
  padding-top: 22px;
  margin-bottom: 10px;
  .news-title {
    margin-right: 8px;
    font-size: 16px;
    font-family: "yekan-regular";
    color: $surface-on;
  }
  span.icon-Mosque-Iran {
    width: 24px;
    height: 24px;
    color: #fff;
    font-size: 22px;
    border-radius: 4px;
  }
}

.news-detail-desc-container {
  padding-bottom: 15px;
  border-bottom: 1px solid $outline-variant;
  .news-detail-description {
    font-size: 14px;
    font-family: "yekan-regular";
    color: $surface-on;
    text-align: justify;
  }
}

.card-footer {
  padding-top: 12px;
  width: 100%;
  .news-card-time {
    span {
      color: $surface-on-variant;
      font-family: "yekan-regular";
      font-size: 11px;
    }
  }
  .news-card-boghe {
    padding: 4px 10px;
    background-color: $secondary-container;
    border-radius: 8px;
    span.boghe-name {
      color: $secondary-on-container;
      font-size: 11px;
      font-family: "yekan-regular";
    }
    span.icon-Mosque-Iran {
      color: $primary;
      font-size: 23px;
    }
  }
}
.btn-bg-navy-blue {
  background: linear-gradient(180deg, #b2dffe 0%, #5aabe4 100%);
}
</style>
