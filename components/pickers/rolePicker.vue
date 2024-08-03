<template>
  <div>
    <label class="font-normal text-sm text-neutral-800">{{
      props.label
    }}</label>
    <div
      @click="dialog = true"
      class="w-full h-14 border border-neutral-200 rounded-lg mt-2 flex items-center justify-between p-3"
    >
      <span class="text-neutral-500 text-xs">{{
        selectedInsurance.value ? selectedInsurance.name : props.placeholder
      }}</span>
      <span class="text-secondary-700">
        <img src="~/assets/images/icons/menue-left.svg" />
      </span>
    </div>
    <!-- select state dialog  -->
    <bottomSheets v-model="dialog" title="انتخاب نقش">
      <div class="p-4">
        <!-- show state  -->
        <div class="mt-2" v-if="insurance.length">
          <list
            v-for="(item, i) in insurance"
            :key="i"
            :title="item.name"
            class="h-14 px-3"
            :class="
              selectedInsurance.value == item.value
                ? '  bg-secondary-200 rounded-lg'
                : ''
            "
            @click="selectedInsurance = item"
          >
            <template v-if="selectedInsurance.value == item.value" #append>
              <div class="bg-secondary-700 size-6 centered rounded-full p-1">
                <img src="/icons/check.svg" class="w-full h-full" />
              </div>
            </template>
          </list>
        </div>
        <div v-else>
          <not-defined title="نقش" />
        </div>
      </div>
    </bottomSheets>
  </div>
</template>
    
    <script setup>
const props = defineProps(["label", "placeholder"]);
const dialog = ref(false);
const insurance = ref([
  { name: "مسُول پذیرش", value: "included" },
  { name: "مسُول پذیرش", value: "not-included" },
  { name: "مسُول پذیرش", value: "not-included" },
  { name: "مسُول پذیرش", value: "not-included" },
  { name: "مسُول پذیرش", value: "not-included" },
  { name: "مسُول پذیرش", value: "not-included" },
  { name: "مسُول پذیرش", value: "not-included" },
  { name: "مسُول پذیرش", value: "not-included" },
  { name: "مسُول پذیرش", value: "not-included" },
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