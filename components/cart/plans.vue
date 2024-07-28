<template>
  <div class="w-full">
    <div
      v-for="(plan, p) in plans"
      :key="p"
      class="h-[67px] w-full p-3 rounded-xl cursor-pointer flex items-center justify-between my-2"
      @click="selectPlan(p)"
      :class="activePlan == p && 'bg-[#E4F1FE] '"
    >
      <div class="w-full flex items-center">
        <div
          class="size-10 rounded-full centered"
          :class="activePlan == p ? 'bg-[#429FF5]' : 'bg-[#E4F1FE]'"
        >
          <img
            v-if="activePlan !== p"
            src="~/assets/images/icons/plan.svg"
            class="size-6"
          />
          <img
            v-else
            src="~/assets/images/icons/plan-active.svg"
            class="size-6"
          />
        </div>
        <div class="mr-2">
          <span>{{ plan.title }}</span>
          <br />
          <span class="text-[11px]">
            <span class="text-red">{{ plan.discount }} درصد تخفیف</span>
            {{ plan.subtitle }}
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
const activePlan = ref(null);
const plans = reactive([
  {
    title: "طرح تخفیفی خدام",
    discount: "20",
    subtitle: "ویژه خدام امام زاده صالح (ع)",
  },
  {
    title: "طرح تخفیفی خدام",
    discount: "20",
    subtitle: "ویژه خدام امام زاده صالح (ع)",
  },
  {
    title: "طرح تخفیفی خدام",
    discount: "20",
    subtitle: "ویژه خدام امام زاده صالح (ع)",
  },
  {
    title: "طرح تخفیفی خدام",
    discount: "20",
    subtitle: "ویژه خدام امام زاده صالح (ع)",
  },
  {
    title: "طرح تخفیفی خدام",
    discount: "20",
    subtitle: "ویژه خدام امام زاده صالح (ع)",
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