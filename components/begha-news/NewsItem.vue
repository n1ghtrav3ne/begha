<template>
  <div>
    <NuxtLink :to="`/begha-news/detail/${item.id}`">
      <div class="news-card ">
      <div class="card-header flex items-center">
        <div class="news-img">
          <img
            src="https://s3-alpha-sig.figma.com/img/7c63/dfd8/1a1d080913720fe29a79311a56cd7ab3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JICfUNn1MmRF0RAOa46bmeVBFiCu7w8SPIEBKc1so3iT3kMhhiBhVHBf6Gn2Kj4R7CNGpCL6r04wFWruQwyo8uu3cvJr8FmnbR7MRhWQyo01zjIDwt9hfRVnmza5IXrPhyY~khO7iEPIymlvNhkXTI1ICJH77jmNso0B5F5pSh3uDhkJp85yLf0-ouFt8Y9CZBV9R5zCaeGFRxhanYTPmqwYW~pPgVUmJPU4hU6Wc8EmA1Fq0SxGUAPPk4Le8pjMbvc-8brWFv4lRMMS1kAfENymcqH-LZYTE~vrpwdIThNll7XaVfntUG5CaELd8~GzEgpUuRLvXJ6QHN4wqEAToQ__"
            alt=""
          />
        </div>
        <div class="card-head-title flex items-start justify-between flex-col">
          <span class="card-title">{{item.title}}</span>
          <span class="card-description"
            >{{item.description}}
          </span>
        </div>
      </div>
      <div class="card-footer flex items-center justify-between">
        <div class="news-card-time">
          <span>{{item.time}}</span>
        </div>
        <div class="news-card-boghe flex items-end justify-center">
          <span class="icon-Mosque-Iran"></span>
          <span class="boghe-name mr-1">{{item.bogheName}}</span>
        </div>
      </div>
    </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['item'])
const sendNewsNotification = (emited: boolean) => {
  console.log(emited, "tooooogle");
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.news-card {
  margin-top: 24px;
  display: flex;
  width: 100%;
  padding: 16px 12px;
  background-color: $surface;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px;
  box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.06);

  .news-img {
    width: 57px;
    height: 57px;
    img {
      height: 57px;
      width: 57px;
      border-radius: 8px;
    }
    border-radius: 8px;
  }
  .card-header {
    padding-bottom: 12px;
    border-bottom: 1px solid $outline-variant;
    width: 100%;
    .card-head-title {
      margin-right: 8px;
      .card-title {
        color: $surface-on;
        font-family: "yekan-regular";
        font-size: 14px;
        margin-bottom: 8px;
      }
      .card-description {
        color: $surface-on;
        font-family: "yekan-regular";
        font-size: 14px;
      }
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
      span.boghe-name{
        color: $secondary-on-container;
        font-size: 11px;
        font-family: 'yekan-regular';
      }
      span.icon-Mosque-Iran{
        color: $primary;
        font-size: 23px;
      }
    }
  }
}
</style>
