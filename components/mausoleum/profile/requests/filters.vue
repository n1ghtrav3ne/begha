<template>
  <div>
    <div class="w-full flex justify-between my-3 text-center">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="cursor-pointer"
        @click="activeItemHandle(item.value)"
      >
        <div class="flex justify-center mb-3">
          <div class="relative">
            <div
              class="size-10 rounded-lg centered"
              :class="getActive(item.value) ? 'bg-blue' : 'bg-surface-50'"
            >
              <img
                :src="
                  getActive(item.value)
                    ? `/icons/${item.icon}-active.svg`
                    : `/icons/${item.icon}.svg`
                "
              />
            </div>
            <div
              v-if="getActive(item.value)"
              class="absolute size-4 bg-blue rounded-full -top-1 -left-1 border-[1px] border-white"
            >
              <div class="w-full h-full centered">
                <img src="/icons/check.svg" />
              </div>
            </div>
          </div>
        </div>
        <span class="text-[11px]">{{ item.title }}</span>
      </div>
    </div>
    <div class="divider h-1 my-3"></div>
    <div>
      <checkbox :items="checkboxItems"></checkbox>
    </div>
  </div>
</template>

<script setup>
import Checkbox from "~/components/global/BaseCheckbox.vue";

const items = [
  { title: "سالن مراسم", value: "hall", icon: "hall" },
  { title: "زائرسرا", value: "pilgrimage", icon: "pilgrimage" },
  { title: "کتابخانه", value: "library", icon: "library" },
  { title: "قبور", value: "graves", icon: "graves" },
  { title: "برنامه آموزشی", value: "learning", icon: "learning" },
];

const activeItems = ref([]);

function checkActiveItem(item) {
  return activeItems.value.findIndex((value) => value == item);
}

function getActive(item) {
  const checked = checkActiveItem(item);
  if (checked !== -1) return true;
  else return false;
}

function activeItemHandle(item) {
  const checkActive = checkActiveItem(item);
  if (checkActive !== -1) activeItems.value.splice(checkActive, 1);
  else activeItems.value.push(item);
}

const checkboxItems = [
  {
    id: 1,
    label: "تائيد شده ها",
    isChecked: false,
    textColor: "green",
  },
  {
    id: 1,
    label: "رد شده ها ",
    isChecked: false,
    textColor: "red",
  },
  {
    id: 1,
    label: "رد شده ها توسط کاربر ",
    isChecked: false,
    textColor: "red",
  },
];
</script>

<style lang="scss" scoped>
</style>