<template>
  <div class="h-96 w-full centered">
    <div class="centered flex-col">
      <img class="notfound-img" src="@/assets/images/no-item.svg" />
      <span class="mt-3">{{ title }}ی تعریف نشده است.</span>
      <NuxtLink :to="link">
        <button
          class="bg-primary-700 text-white mt-3 flex justify-center items-center gap-2 py-2 px-4 w-full h-11 rounded-lg"
        >
          <img src="@/assets/images/icons/add-square.svg" />
          {{ btnTitle || title }} جدید
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  btnTitle: {
    type: String,
  },
  link: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
</style>