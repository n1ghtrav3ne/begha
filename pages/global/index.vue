<template>
  <div>
    <div class="my-3 bg-primary-100 p-5">
      <text-field
        label="initial input"
        placeholder="متن برای نمایش , متن برای نمایش , متن برای نمایش"
        v-model="name"
        message="این یک پیام است"
      >
        <template #prepend>
          <div class="size-5 bg-secondary-700 rounded-full ml-2"></div>
        </template>
        <template #append>
          <div class="size-5 bg-secondary-700 rounded-full mr-2"></div>
        </template>
      </text-field>

      <text-field
        label="filled input"
        placeholder="متن برای نمایش"
        variant="filled"
        v-model="name"
        message="این یک پیام برای نمایش است"
      >
        <template #prepend>
          <div class="size-5 bg-secondary-700 rounded-full ml-2"></div>
        </template>
        <template #append>
          <div class="size-5 bg-secondary-700 rounded-full mr-2"></div>
        </template>
      </text-field>
      <text-field
        label="این یک عنوان است"
        variant="bordered"
        placeholder="متن برای نمایش"
        v-model="name"
        error="این یک خطا برای نمایش است"
      >
      </text-field>
    </div>
    <div class="my-6 bg-error-100 p-5">
      <div>
        <base-btn>
          لیبل دکمه
          <template #prepend>
            <div class="size-5 bg-secondary-700 rounded-full ml-2"></div>
          </template>
          <template #append>
            <div class="size-5 bg-secondary-700 rounded-full mr-2"></div>
          </template>
        </base-btn>
      </div>
      <div class="my-3">
        <base-btn color="secondary-500">
          لیبل دکمه
          <template #prepend>
            <div class="size-5 bg-secondary-700 rounded-full ml-2"></div>
          </template>
          <template #append>
            <div class="size-5 bg-secondary-700 rounded-full mr-2"></div>
          </template>
        </base-btn>
      </div>
      <div class="my-3">
        variant outlined
        <base-btn color="secondary-500" variant="outlined">
          لیبل دکمه
          <template #prepend>
            <div class="size-5 bg-secondary-700 rounded-full ml-2"></div>
          </template>
          <template #append>
            <div class="size-5 bg-secondary-700 rounded-full mr-2"></div>
          </template>
        </base-btn>
      </div>
      variant link
      <div class="my-3">
        <base-btn color="secondary-500" variant="link">
          لیبل دکمه
          <template #prepend>
            <div class="size-5 bg-secondary-700 rounded-full ml-2"></div>
          </template>
          <template #append>
            <div class="size-5 bg-secondary-700 rounded-full mr-2"></div>
          </template>
        </base-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
const name = ref("");
</script>

<style lang="scss" scoped>
</style>