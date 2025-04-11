<template>
  <div>
    <div class="back-navbar container flex items-center justify-between">
      <div @click="$router.go(-1)">
        <span
        ><span class="material-symbols-outlined back-icon ml-2">
          trending_flat </span
        ><span class="back-title">اخبار</span></span
      >
        </div>
      <div class="choose-location flex items-center mr-3">
        <span class="material-symbols-outlined"> share </span>
      </div>
    </div>

    <div class="container">
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
import NewsItem from "./NewsItem.vue";
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
defineComponent([NewsItem]);
const sendNewsNotification = (emited: boolean) => {
  console.log(emited, "tooooogle");
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.back-navbar {
  height: 52px;
  background: $primary;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  .choose-location {
    span {
      color: $primary-on;
    }
  }
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
