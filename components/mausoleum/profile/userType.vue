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
          <div class="centered cursor-pointer">
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
  </div>
</template>
  
  <script setup>
const props = defineProps(["user"]);
</script>
  
  <style  scoped>
</style>