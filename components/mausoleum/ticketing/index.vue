<template>
  <div>
    <!-- page header  -->
    <div class="page-header">
      <div class="flex items-center text-white text-base">
        <span
          @click="useRouter().push('/mausoleum')"
          class="material-symbols-outlined back-icon"
        >
          arrow_right_alt
        </span>
        <span class="mr-4">ارتباط با پشتیبانی</span>
      </div>
    </div>

    <!-- body  -->
    <div class="p-4">
      <template v-if="tickets?.length">
        <div>
          <selecteType />
        </div>
        <div class="my-6" v-for="(item, i) in tickets" :key="i">
          <card :item="item"></card>
        </div>
        <NuxtLink to="ticketing/create">
          <button
            class="size-11 bg-primary-700 rounded-lg absolute bottom-4 right-0 left-0 mx-auto text-white text-3xl"
          >
            +
          </button>
        </NuxtLink>
      </template>
      <template v-else>
        <NotDefined title="مورد" btnTitle="پیغام" />
      </template>
    </div>
  </div>
</template>

<script setup>
import card from "./card.vue";
import selecteType from "./selecteType.vue";
const tickets = ref([
  {
    title: "عنوان لورم ایپسوم",
    new: true,
    date: "۱۴۰۲/۱۲/۰۲",
    time: "14:32",
    role: "ادمین کل",
    status: "پاسخ داده شده",
  },
  {
    title: "عنوان لورم ایپسوم",
    new: true,
    date: "۱۴۰۲/۱۲/۰۲",
    time: "14:32",
    role: "ادمین کل",
    status: "پاسخ داده شده",
  },
  {
    title: "عنوان لورم ایپسوم",
    new: true,
    date: "۱۴۰۲/۱۲/۰۲",
    time: "14:32",
    role: "ادمین کل",
    status: "پاسخ داده شده",
  },
  {
    title: "عنوان لورم ایپسوم",
    new: true,
    date: "۱۴۰۲/۱۲/۰۲",
    time: "14:32",
    role: "ادمین کل",
    status: "پاسخ داده شده",
  },
  {
    title: "عنوان لورم ایپسوم",
    new: true,
    date: "۱۴۰۲/۱۲/۰۲",
    time: "14:32",
    role: "ادمین کل",
    status: "پاسخ داده شده",
  },
]);
</script>

<style lang="scss" scoped>
</style>