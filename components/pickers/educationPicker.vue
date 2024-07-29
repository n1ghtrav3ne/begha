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
        selectedEducations.value ? selectedEducations.name : props.placeholder
      }}</span>
      <span class="text-blue">
        <img src="~/assets/images/icons/menue-left.svg" />
      </span>
    </div>
    <!-- select state dialog  -->
    <bottomSheets v-model="dialog" title="تحصیلات">
      <div class="py-4 px-6">
        <!-- show state  -->
        <div class="mt-5" v-if="educations.length">
          <list
            v-for="(item, i) in educations"
            :key="i"
            :title="item.name"
            class="h-14"
            :class="
              selectedEducations.value == item.value
                ? 'bg-blue/30 rounded-lg'
                : ''
            "
            @click="selectedEducations = item"
          >
            <template v-if="selectedEducations.value == item.value" #append>
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
const educations = ref([
  { name: "دیپلم", value: "diploma" },
  { name: "کارشناسی", value: "masters" },
  { name: "کارشناسی ارشد", value: "senior-masters" },
]);
const emit = defineEmits(["update:modelValue"]);

const selectedEducations = ref({});

watch(
  selectedEducations,
  () => {
    emit("update:modelValue", selectedEducations?.value);
    dialog.value = false;
  },
  { immediate: true }
);
</script>
  
  <style lang="scss" scoped>
</style>