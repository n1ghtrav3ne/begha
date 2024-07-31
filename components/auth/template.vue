<template>
  <div>
    <div class="w-full h-screen relative">
      <div class="bg-primary-700 w-full h-64 rounded-b-2xl">
        <div class="absolute w-[105px] h-28 mx-auto right-0 left-0 top-14">
          <img src="/assets/images/logo/home-logo.png" />
        </div>
      </div>
    </div>
    <div
      class="absolute top-[200px] w-10/12 bg-neutral-50 border border-neutral-200/50 mx-auto left-0 right-0 rounded-2xl p-6"
    >
      <slot></slot>
    </div>
    <div class="absolute bottom-5 mx-auto left-0 right-0 text-center text-xs">
      <span class="text-neutral-800"
        >با ورود / ثبت نام تمامی
        <span class="bg-primary-700">قوانین و شرایط</span> را میپذیرم .</span
      >
    </div>
  </div>
</template>
  
  <script setup>
</script>
  
  <style lang="scss" scoped>
</style>