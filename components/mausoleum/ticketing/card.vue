<template>
  <div class="w-full border border-neutral-200 rounded-2xl px-3 py-4">
    <div class="flex items-center">
      <div class="size-11 rounded-full mt-">
        <img
          class="size-11 rounded-full"
          src="/assets/images/one-begha/begha-profile.png"
        />
      </div>
      <div class="mr-2 w-full">
        <div class="flex justify-between w-full">
          <span class="font-bold">{{ item?.title }}</span>
          <div
            v-if="item?.new"
            class="bg-error-700 text-white px-2 rounded-3xl"
          >
            جدید
          </div>
        </div>
        <div class="flex justify-between w-full mt-1">
          <span class="text-tiny text-neutral-500">
            آخرین پیغام در {{ item?.date }}
          </span>
          <span class="mt-1 text-tiny text-neutral-500">
            {{ item?.time }}
          </span>
        </div>
      </div>
    </div>
    <div class="divider my-4"></div>
    <div>
      <list :title="item?.role">
        <template #prepend>
          <div class="size-6 bg-secondary-200 rounded-full">
            <img src="/assets/images/icons/account.svg" />
          </div>
        </template>
        <template #append>
          <div
            class="flex items-center px-2 border py-1 border-success-700 rounded-[4px] text-tiny"
          >
            {{ item?.status }}
          </div>
        </template>
      </list>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
</script>

<style lang="scss" scoped>
</style>