<template>
  <div>
    <!-- page header -->
    <div class="page-header">
      <div class="flex items-center text-white text-base">
        <span
          @click="useRouter().go(-1)"
          class="material-symbols-outlined back-icon"
        >
          arrow_right_alt
        </span>
        <span class="mr-4">عوامل بقعه</span>
      </div>
    </div>

    <div class="px-6 py-4">
      <toggleBtn v-model="selectedItem" first="اعضای بقعه" secend="نقش ها">
      </toggleBtn>

      <tombAgents
        v-if="selectedItem == 'first'"
        :data="agentsData.data"
        @openDialog="optionsDialogHandller($event)"
      />

      <tombRoles
        v-else
        :data="roleData"
        @openDialog="optionsDialogHandller($event)"
      />

      <!-- go to create page btn -->
      <div
        v-if="
          selectedItem === 'first' ? agentsData?.data.length : roleData?.length
        "
        class="absolute size-11 bottom-6 right-0 left-0 mx-auto"
      >
        <NuxtLink
          :to="
            selectedItem === 'first' ? 'agents/create' : 'agents/role/create'
          "
        >
          <button
            class="bg-primary-700 w-full h-full rounded-lg text-white text-3xl"
          >
            +
          </button>
        </NuxtLink>
      </div>

      <!-- show options dialog for items  -->
      <BottomSheets
        v-model="optionsDialog"
        :title="
          selectedItem == 'first'
            ? selectedAgent.subtitle + ' ' + selectedAgent.title
            : selectedAgent.title
        "
      >
        <div>
          <list
            v-if="selectedItem == 'first'"
            title="تماس"
            class="mb-3 cursor-pointer"
          >
            <template #prepend>
              <span class="icon-call-calling text-2xl"> </span>
            </template>
          </list>
          <list title="ویرایش" class="my-3 cursor-pointer">
            <template #prepend>
              <span class="icon-edit text-2xl"> </span>
            </template>
          </list>
          <list
            title="حذف"
            class="mt-3 cursor-pointer"
            @click="
              deleteDialog = true;
              optionsDialog = false;
            "
          >
            <template #prepend>
              <span class="icon-trash-outlined text-2xl"> </span>
            </template>
          </list>
        </div>
      </BottomSheets>

      <!-- delete dialog  -->
      <BottomSheets v-model="deleteDialog">
        <div class="px-4 py-6 text-center">
          <div
            class="size-[52px] bg-error-200 mx-auto left-0 right-0 rounded-full centered"
          >
            <span class="icon-trash text-2xl text-error-700"> </span>
          </div>
          <h3 class="my-5">
            آیا از حذف این فرد ({{ selectedAgent.title }}) اطمینان دارید؟
          </h3>
          <div class="grid grid-cols-2 mt-9">
            <div class="pl-2">
              <base-btn color="error-700">بله</base-btn>
            </div>
            <div class="pr-2">
              <base-btn variant="outlined" color="neutral-800"> خیر </base-btn>
            </div>
          </div>
        </div>
      </BottomSheets>
    </div>
  </div>
</template>
<script setup>
import tombAgents from "./tombAgents.vue";
import tombRoles from "./tombRoles.vue";
const selectedItem = ref("first");

const agentsData = ref({});
const optionsDialog = ref(false);
const selectedAgent = ref({});

const optionsDialogHandller = (e) => {
  selectedAgent.value = e;
  optionsDialog.value = true;
};

const deleteDialog = ref(false);

agentsData.value.data = [
  { title: "ادمین کل", subtitle: "سید علی هاشمی", status: "success", id: 1 },
  { title: "مسئول پذیرش", subtitle: "سید علی هاشمی", status: "pending", id: 2 },
  {
    title: "مسئول کتابخانه",
    subtitle: "سید علی هاشمی",
    status: "failed",
    id: 3,
  },
  {
    title: "مسئول کتابخانه",
    subtitle: "سید علی هاشمی",
    status: "success",
    id: 4,
  },
];

const roleData = ref([
  {
    title: "ادمین کل",
    subtitle:
      "مدیریت درخواست ها، ادمین  مدیریت درخواست ها، ادمین  مدیریت درخواست ها، ادمین ",
    status: true,
    id: 1,
  },
  {
    title: "ادمین کل",
    subtitle:
      "مدیریت درخواست ها، ادمین  مدیریت درخواست ها، ادمین  مدیریت درخواست ها، ادمین ",
    status: false,
    id: 2,
  },
  {
    title: "ادمین کل",
    subtitle:
      "مدیریت درخواست ها، ادمین  مدیریت درخواست ها، ادمین  مدیریت درخواست ها، ادمین ",
    status: true,
    id: 3,
  },
  {
    title: "ادمین کل",
    subtitle:
      "مدیریت درخواست ها، ادمین  مدیریت درخواست ها، ادمین  مدیریت درخواست ها، ادمین ",
    status: true,
    id: 4,
  },
]);
</script>

<style lang="scss" scoped>
</style>