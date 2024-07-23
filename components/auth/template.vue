<template>
  <div>
    <div class="w-full h-screen relative">
      <div class="bg-primary w-full h-[254px] rounded-b-2xl">
        <div
          class="absolute w-[105px] h-[114px] mx-auto right-0 left-0 top-[54px]"
        >
          <img src="/assets/images/logo/home-logo.png" />
        </div>
      </div>
    </div>
    <div
      class="absolute top-[200px] w-10/12 bg-surface-30 border-[1px] border-surface-100/50 mx-auto left-0 right-0 rounded-2xl p-6"
    >
      <slot></slot>
    </div>
    <div class="absolute bottom-5 mx-auto left-0 right-0 text-center text-xs">
      <span class="text-surface-600"
        >با ورود / ثبت نام تمامی
        <span class="text-primary">قوانین و شرایط</span> را میپذیرم .</span
      >
    </div>
  </div>
</template>
  
  <script setup>
</script>
  
  <style lang="scss" scoped>
</style>