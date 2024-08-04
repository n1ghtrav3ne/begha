<template>
  <div>
    <!-- create agent page header -->
    <div class="page-header">
      <NuxtLink to="/mausoleum/tomb/agents">
        <div class="flex items-center text-white text-base">
          <span class="material-symbols-outlined back-icon">
            arrow_right_alt
          </span>
          <span class="mr-4">ایجاد نقش</span>
        </div>
      </NuxtLink>
    </div>

    <div class="py-4 px-6">
      <form>
        <text-field
          label="عنوان نقش"
          placeholder="عنوان مورد نظر را وارد کنید"
        />
        <h4 class="my-3 text-secondary-700">سطوح دسترسی</h4>
        <list
          v-for="(item, i) in items"
          :key="item.id"
          :title="item.title"
          :subtitle="item.subtitle"
          subtitle-class="text-xs text-neutral-500"
          class="my-3"
        >
          <template #append>
            <customCheckbox v-model="item.isChecked" />
          </template>
        </list>
        <div class="absolute bottom-6 w-full">
          <div class="w-[90%]">
            <base-btn type="submit"> اعمال </base-btn>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    title: "ویرایش اطلاعات بقعه متبرکه",
    subtitle: "پنل ادمین و اپلیکیشن",
    value: "",
    isChecked: false,
  },
  {
    title: "ویرایش اطلاعات بقعه متبرکه",
    subtitle: "پنل ادمین و اپلیکیشن",
    value: "",
    isChecked: false,
  },
  {
    title: "ویرایش اطلاعات بقعه متبرکه",
    subtitle: "پنل ادمین و اپلیکیشن",
    value: "",
    isChecked: true,
  },
  {
    title: "ویرایش اطلاعات بقعه متبرکه",
    subtitle: "پنل ادمین و اپلیکیشن",
    value: "",
    isChecked: true,
  },
]);
</script>

<style lang="scss" scoped>
</style>