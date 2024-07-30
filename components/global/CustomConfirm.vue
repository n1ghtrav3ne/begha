<template>
  <div class="w-full flex flex-col delete-container">
    <div class="flex flex-col justify-center items-center trash-cn mt-3">
      <img class="w-8 h-8 flex-shrink-0" src="@/assets/images/icons/trash.svg" />
      <span class="mt-3 mb-10">{{ title }}</span>
    </div>
    <div class="flex justify-between mb-4">
      <button type="button" :class="`bg-${color}`"
        class="me-2 w-1/2 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mr-2">
        بله
      </button>
      <button type="button"
        class="ms-2 w-1/2 inline-block rounded border border-gray-500 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-gray-500 hover:border-gray-700 hover:text-gray-700 focus:border-gray-700 focus:text-gray-700 focus:outline-none focus:ring-0 active:bg-gray-600 active:border-gray-600 active:text-gray-600">
        بله
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "error",
  },
});
</script>
