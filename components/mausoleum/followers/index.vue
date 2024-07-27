<template>
  <div>
    <!-- loading handle -->
    <div v-if="loading"></div>
    <!-- show followers data  -->
    <div v-else-if="followersData?.data?.length"></div>
    <!-- empty followers handle -->
    <div v-else class="w-full text-center h-[70vh] centered">
      <div>
        <div class="w-full centered">
          <img src="~/assets/images/emptyFollowers.png" class="size-24" />
        </div>
        <span>دنبال‌کننده ای موجود نیست.</span>
        <div class="centered mt-6">
          <button class="bg-blue p-2 min-w-[130px] text-white rounded-lg">
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
const followersData = ref({});
</script>

<style lang="scss" scoped>
</style>