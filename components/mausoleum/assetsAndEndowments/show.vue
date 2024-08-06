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
        <span class="mr-4">{{
          link == "assets" ? "دارایی ها" : "موقوفات"
        }}</span>
      </div>
    </div>

    <!-- body -->
    <div class="p-4">
      <!-- banner -->
      <div>
        <img :src="data?.image" class="aspect-video" />
      </div>

      <div class="divider my-5"></div>
      <!-- descriptions  -->
      <div>
        <div class="flex justify-between">
          <h1 class="text-base">{{ data?.title }}</h1>
          <img
            src="/assets/images/icons/dots.svg"
            class="mr-3 cursor-pointer"
          />
        </div>
        <p class="mt-3 text-justify text-sm">{{ data?.description }}</p>
      </div>

      <!-- endowment information  -->
      <div class="my-5" v-if="link !== 'assets'">
        <list
          title="اطلاعات واقف "
          title-class="text-tiny text-neutral-500"
          :subtitle="data?.user?.name"
          subtitle-class="text-xs text-neutral-800"
        >
          <template #prepend>
            <img src="/assets/images/icons/account.svg" />
          </template>
        </list>
        <list
          title="تاریخ وقف"
          title-class="text-tiny text-neutral-500"
          :subtitle="data?.user?.date"
          subtitle-class="text-xs text-neutral-800"
        >
          <template #prepend>
            <img src="/assets/images/icons/date.svg" />
          </template>
        </list>
        <list
          title="کد تفضیلی"
          title-class="text-tiny text-neutral-500"
          :subtitle="data?.user?.code"
          subtitle-class="text-xs text-neutral-800"
        >
          <template #prepend>
            <img src="/assets/images/icons/date.svg" />
          </template>
          <template #append>
            <div
              class="flex items-center cursor-pointer"
              @click="copyNumber($event)"
            >
              <img
                src="/assets/images/icons/document-copy.svg"
                class="mx-2 size-4"
              />
              <span class="text-xs">کپی</span>
            </div>
          </template>
        </list>

        <list
          title="فایل ضمیمه"
          title-class="text-tiny text-neutral-500"
          subtitle="مشاهده فایل ضمیمه"
          subtitle-class="text-xs text-secondary-700 cursor-pointer"
          class=""
        >
          <template #prepend>
            <img src="/assets/images/icons/file.svg" />
          </template>
        </list>
      </div>

      <div class="divider my-5"></div>

      <div class="flex justify-between items-center">
        <div class="bg-secondary-200 h-9 flex items-center px-3 rounded-lg">
          <img src="/assets/images/icons/masque.svg" />
          <span>امام زاده صالح (ع)</span>
        </div>
        <span class="text-neutral-500 text-tiny">ثبت شده در۱۴۰۲/۱۲/۱۲</span>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
const props = defineProps(["link", "data"]);
const id = useRoute().params.id;

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