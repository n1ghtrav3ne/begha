<template>
  <div>
    <div class="h-9 w-full flex justify-between items-center">
      <div class="centered">
        <div class="size-9 rounded-full">
          <img
            src="~/assets/images/user.png"
            class="w-full h-full rounded-full"
          />
        </div>
        <div class="mr-2">
          <div class="centered cursor-pointer" @click="typeDialog = true">
            <span class="font-normal text-sm text-surface-600">
              {{ props?.user?.role }}
            </span>
            <span class="material-symbols-rounded mr-2"> arrow_drop_down </span>
          </div>
          <span class="font-normal text-[11px] text-surface-500">
            {{ props.user?.place }}
          </span>
        </div>
      </div>
      <div class="w-[116px]">
        <img src="~/assets/images/logo/layout-logo.png" />
      </div>
    </div>
    <bottomSheets v-model="typeDialog">
      <typePlans></typePlans>
    </bottomSheets>
  </div>
</template>
  
  <script setup>
import bottomSheets from "~/components/global/bottomSheets.vue";
import typePlans from "./typePlans.vue";
const props = defineProps(["user"]);
const typeDialog = ref(false);
</script>
  
  <style  scoped>
</style>