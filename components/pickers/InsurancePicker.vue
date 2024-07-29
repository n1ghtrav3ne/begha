<template>
  <div>
    <label class="font-normal text-sm text-surface-600">{{
      props.label
    }}</label>
    <div
      @click="dialog = true"
      class="w-full h-14 border-[1px] border-surface-100 rounded-lg mt-2 flex items-center justify-between p-3"
    >
      <span class="text-surface-600 text-xs">{{
        selectedInsurance.value ? selectedInsurance.name : props.placeholder
      }}</span>
      <span class="text-blue">
        <img src="~/assets/images/icons/menue-left.svg" />
      </span>
    </div>
    <!-- select state dialog  -->
    <bottomSheets v-model="dialog" title="تحصیلات">
      <div class="py-4 px-6">
        <!-- show state  -->
        <div class="mt-5" v-if="insurance.length">
          <list
            v-for="(item, i) in insurance"
            :key="i"
            :title="item.name"
            class="h-14"
            :class="
              selectedInsurance.value == item.value
                ? 'bg-blue/30 rounded-lg'
                : ''
            "
            @click="selectedInsurance = item"
          >
            <template v-if="selectedInsurance.value == item.value" #append>
              <div class="bg-blue size-6 centered rounded-full p-1">
                <img src="/icons/check.svg" class="w-full h-full" />
              </div>
            </template>
          </list>
        </div>
      </div>
    </bottomSheets>
  </div>
</template>
    
    <script setup>
const props = defineProps(["label", "placeholder"]);
const dialog = ref(false);
const insurance = ref([
  { name: "مشمول", value: "included" },
  { name: "غیرمشمول", value: "not-included" },
]);
const emit = defineEmits(["update:modelValue"]);

const selectedInsurance = ref({});

watch(
  selectedInsurance,
  () => {
    emit("update:modelValue", selectedInsurance.value);
    dialog.value = false;
  },
  { immediate: true }
);
</script>
    
    <style lang="scss" scoped>
</style>