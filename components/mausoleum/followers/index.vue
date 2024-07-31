<template>
  <div>
    <!-- loading handle -->
    <div v-if="loading"></div>
    <!-- show followers data  -->
    <div v-else-if="followersData?.data?.length" class="p-4">
      <!-- search text field -->
      <div class="mb-8 h-12">
        <base-input
          v-model="search"
          placeholder="جستجو بر اساس نام، شماره همراه"
          primary
        >
          <template #prepend>
            <div class="cursor-pointer ml-2">
              <img src="~/assets/images/icons/search-black.svg" alt="" />
            </div>
          </template>
        </base-input>
      </div>
      <!-- list for show followers data -->
      <div v-for="(item, i) in followersData?.data" :key="i">
        <list
          :title="item.number"
          :subtitle="item.name"
          class="mt-3"
          :bordered="i + 1 < followersData?.data?.length"
          subtitleClass="text-neutral-100 text-xs"
        >
          <template #prepend>
            <div class="size-10 bg-secondary-200 rounded-full centered">
              <img :src="item.image || '/icons/profile.svg'" />
            </div>
          </template>
          <template #append>
            <img
              src="/icons/dots.svg"
              class="size-6"
              @click="showUserDialog(item)"
            />
          </template>
        </list>
      </div>

      <!-- bottom sheet for show user options after click user  -->
      <bottom-sheets
        v-model="userDialog"
        closable
        :title="`کاربر (${user.name})`"
      >
        <div class="px-6 py-4">
          <div class="flex items-center py-3" @click="copyNumber($event)">
            <img src="~/assets/images/icons/document-copy.svg" alt="" />
            <span class="mr-2" ref="numberText">کپی شماره همراه</span>
          </div>
          <div class="flex items-center py-3 mt-2">
            <img src="~/assets/images/icons/message-text.svg " alt="" />
            <span class="mr-2">ارسال پیام</span>
          </div>
        </div>
      </bottom-sheets>
    </div>
    <!-- empty followers handle -->
    <div v-else class="w-full text-center h-[70vh] centered">
      <div>
        <div class="w-full centered">
          <img src="~/assets/images/emptyFollowers.png" class="size-24" />
        </div>
        <span>دنبال‌کننده ای موجود نیست.</span>
        <div class="centered mt-6">
          <button
            class="bg-secondary-700 p-2 min-w-[130px] text-white rounded-lg"
          >
            <div class="centered">
              <img src="~/assets/images/icons/share.svg" class="ml-1" />
              اشتراک گذاری
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const loading = ref(false);
const followersData = ref({
  data: [
    {
      number: "۰۹۱۲۳۴۵۶۷۸۹",
      name: "ارسلان پور عبادی",
      image: "/icons/followers.png",
    },
    {
      number: "۰۹۱۲۳۴۵۶۷۸۹",
      name: "ارسلان پور عبادی",
    },
    {
      number: "۰۹۱۲۳۴۵۶۷۸۹",
      name: "ارسلان پور عبادی",
    },
    {
      number: "۰۹۱۲۳۴۵۶۷۸۹",
      name: "ارسلان پور عبادی",
    },
    {
      number: "۰۹۱۲۳۴۵۶۷۸۹",
      name: "ارسلان پور عبادی",
    },
    {
      number: "۰۹۱۲۳۴۵۶۷۸۹",
      name: "ارسلان پور عبادی",
    },
    {
      number: "۰۹۱۲۳۴۵۶۷۸۹",
      name: "ارسلان پور عبادی",
    },
  ],
});

import BaseInput from "~/components/global/input.vue";
import List from "~/components/global/list.vue";

const search = ref("");

const userDialog = ref(false);
const user = ref({});
import bottomSheets from "~/components/global/bottomSheets.vue";
function showUserDialog(item) {
  user.value = item;
  userDialog.value = true;
}

const numberText = ref();
function copyNumber(e) {
  // Create a temporary input element to hold the number
  const input = document.createElement("input");
  input.value = user.value.number;
  document.body.appendChild(input);

  // Select the input value and copy it to the clipboard
  input.select();
  document.execCommand("copy");

  // Remove the temporary input element from the DOM
  document.body.removeChild(input);
}
</script>

<style lang="scss" scoped>
</style>