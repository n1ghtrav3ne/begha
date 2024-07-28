<template>
  <div class="w-full">
    <div
      v-for="(plan, p) in plans"
      :key="p"
      class="h-16 w-full p-3 rounded-xl cursor-pointer flex items-center justify-between my-2"
      @click="selectPlan(p)"
      :class="activePlan == p && 'bg-[#E4F1FE] '"
    >
      <div class="w-full flex items-center">
        <div
          class="size-10 rounded-full centered"
          :class="activePlan == p ? 'bg-[#429FF5]' : 'bg-[#E4F1FE]'"
        >
          <img src="~/assets/images/user.png" />
        </div>
        <div class="mr-2">
          <span>{{ plan.title }}</span>
          <br />
          <span class="text-[11px]">
            {{ getUserType(plan.type) }}
          </span>
        </div>
      </div>
      <div v-if="activePlan == p">
        <img src="~/assets/images/icons/check.svg" />
      </div>
    </div>
  </div>
</template>
  
  <script setup>
const { getUserType } = mixin;
const activePlan = ref(null);
const plans = reactive([
  {
    title: "احمد حسینی",
    type: "normal",
  },
  {
    title: "امام زاده صالح (ع)",
    type: "emam",
  },
  {
    title: "امام زاده محسن",
    type: "admin",
  },
]);
function selectPlan(index) {
  if (activePlan.value === index) {
    activePlan.value = null;
  } else {
    activePlan.value = index;
  }
}
</script>
  
  <style lang="scss" scoped>
</style>