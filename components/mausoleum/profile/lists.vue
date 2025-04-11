<template>
  <div>
    <template v-for="(list, l) in lists" :key="l">
      <list :title="list?.title" @click="getHandleList(list?.click)">
        <template #prepend>
          <div
            class="relative size-9 bg-secondary-200 rounded-full"
            :class="list?.color && 'bg-error-200'"
          >
            <div class="w-full h-full centered">
              <img :src="list?.icon" class="size-5" />
            </div>
            <div
              v-if="list?.new"
              class="absolute size-2 bg-error-700 rounded-full top-0"
            ></div>
          </div>
        </template>
        <template #append>
          <span class="text-tiny" :class="`text-${list?.descriptionColor}`">
            {{ list?.description }}
          </span>
        </template>
      </list>
    </template>
  </div>
</template>

<script setup>
import List from "~/components/global/list.vue";
const lists = ref([
  {
    icon: "/icons/requests.svg",
    title: "درخواست ها",
    description: "۳ مورد جدید",
    new: true,
    descriptionColor: "red",
    click: {
      url: "/mausoleum/profile/requests",
    },
  },
  {
    icon: "/icons/bookmark.svg",
    title: "ذخیره شده ها",
  },
  {
    icon: "/icons/notification-bing.svg",
    title: "اعلانات",
    new: true,
  },
  {
    icon: "/icons/frame.svg",
    title: "تکمیل پروفایل",
    description: "تکمیل نشده",
    descriptionColor: "neutral-500",
    click: {
      url: "/mausoleum/profile/update",
    },
  },
  {
    icon: "/icons/profile-add.svg",
    title: "تغییر نوع کاربری",
  },
  {
    icon: "/icons/logout.svg",
    title: "خروج",
    color: "red",
  },
]);

const getHandleList = (item) => {
  if (item?.url) useRouter().push(item.url);
  else if (item?.function) {
    console.log("function");
  }
};
</script>

<style lang="scss" scoped>
</style>