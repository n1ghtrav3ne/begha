<template>
  <div>
    <div
      class="h-[72px] w-full flex justify-between items-center bg-surface-50 p-2 rounded-[66px]"
    >
      <div class="centered">
        <div class="size-14 rounded-full">
          <img
            src="~/assets/images/user.png"
            class="w-full h-full rounded-full"
          />
        </div>
        <div class="mr-2 font-normal text-sm text-surface-600">
          <span>
            {{ props?.user?.name }}
          </span>
          <br />
          <span>
            {{ props.user?.phone }}
          </span>
        </div>
      </div>
      <div class="bg-[#429FF5]/20 size-8 rounded-full centered ml-1">
        <img src="~/assets/images/icons/pencil.svg" />
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import bottomSheets from "~/components/global/bottomSheets.vue";

const props = defineProps(["user"]);
const informationDialog = ref(false);
</script>
  
  <style  scoped>
</style>