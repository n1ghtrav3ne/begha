<template>
  <div>
    <div
      class="h-[72px] w-full flex justify-between items-center bg-neutral-100 p-2 rounded-[66px]"
    >
      <div class="centered">
        <div class="size-14 rounded-full">
          <img
            src="~/assets/images/user.png"
            class="w-full h-full rounded-full"
          />
        </div>
        <div class="mr-2 font-normal text-sm text-neutral-800">
          <span>
            {{ props?.user?.name }}
          </span>
          <br />
          <span>
            {{ props.user?.phone }}
          </span>
        </div>
      </div>
      <div
        class="bg-secondary-200 size-8 rounded-full centered ml-1"
        @click="typeDialog = true"
      >
        <img src="~/assets/images/icons/pencil.svg" />
      </div>
    </div>
    <bottomSheets v-model="typeDialog" title="انتخاب کنید">
      <typePlans></typePlans>
    </bottomSheets>
  </div>
</template>
  
  <script setup>
import bottomSheets from "~/components/global/bottomSheets.vue";
import typePlans from "./typePlans.vue";
const props = defineProps(["user"]);
const informationDialog = ref(false);
const typeDialog = ref(false);
</script>
  
  <style  scoped>
</style>