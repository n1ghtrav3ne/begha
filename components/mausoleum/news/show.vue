<template>
  <div>
    <!-- page header  -->
    <div class="page-header">
      <div class="flex items-center text-white text-base">
        <span
          @click="useRouter().go(-1)"
          class="material-symbols-outlined back-icon"
        >
          arrow_right_alt
        </span>
        <span class="mr-4">اخبار</span>
      </div>
      <div>
        <img src="~/assets/images/icons/share2.svg" alt="" />
      </div>
    </div>

    <!-- body -->
    <div class="p-4">
      <div>
        <img src="/assets/images/Rectangle 2737.jpg" class="aspect-video" />
      </div>

      <div class="divider my-6"></div>

      <div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div
              class="size-6 rounded-lg centered bg-gradient-to-t from-secondary-600 to-secondary-400"
            >
              <img src="/assets/images/icons/sound.svg" />
            </div>
            <span class="mr-2 text-base">حضور آیت الله خامنه ای</span>
          </div>
          <img
            src="/assets/images/icons/dots.svg"
            class="mr-3 cursor-pointer"
          />
        </div>
        <p class="text-justify mt-4">
          برگزاری مراسم ترحیم در بقعه متبرکه از دیرباز جزیی از این اجرای مراسم
          ترحیم میباشد.رزرو بقعه متبرکه مراسم ترحیم پس از خاکسپاری و تهیه اقلام
          پذیرایی.
        </p>
        <div class="divider my-6"></div>
        <div class="dlex items-center flex justify-between">
          <div class="bg-secondary-200 rounded-lg centered px-3 py-2 text-tiny">
            <img src="/assets/images/icons/masque.svg" class="ml-1" />
            امام زاده صالح (ع)
          </div>
          <span class="text-tiny text-neutral-500">۲۲ بهمن ساعت ۱۹:۰۰</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>