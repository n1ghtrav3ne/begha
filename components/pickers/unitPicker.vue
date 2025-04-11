<template>
  <div>
    <ClientOnly>
      <label class="font-normal text-sm text-neutral-800">{{
        props.label
      }}</label>
      <div
        @click="dialog = true"
        class="w-full h-14 border border-neutral-200 rounded-lg mt-2 flex items-center justify-between p-3 bg-white"
      >
        <span class="text-neutral-800 text-xs">{{
          selectedItem.value ? selectedItem.name : props.placeholder
        }}</span>
        <span class="text-secondary-700">
          <img src="~/assets/images/icons/menue-left.svg" />
        </span>
      </div>
      <!-- select state dialog  -->
      <bottomSheets v-model="dialog" title="انتخاب واحد">
        <div>
          <!-- show state  -->
          <div class="mt-2" v-if="items.length">
            <list
              v-for="(item, i) in items"
              :key="i"
              :title="item.name"
              class="h-14"
              :class="
                selectedItem.value == item.value
                  ? 'bg-secondary-200 rounded-lg'
                  : ''
              "
              @click="selectedItem = item"
            >
              <template v-if="selectedItem.value == item.value" #append>
                <div class="bg-secondary-700 size-6 centered rounded-full p-1">
                  <img src="/icons/check.svg" class="w-full h-full" />
                </div>
              </template>
            </list>
          </div>
        </div>
      </bottomSheets>
    </ClientOnly>
  </div>
</template>
  
  <script setup>
const props = defineProps(["label", "placeholder"]);
const dialog = ref(false);
const items = ref([
  { name: "تخته (فرش، موکت و ...)", value: "diploma" },
  { name: "تخته (فرش، موکت و ...)", value: "masters" },
  { name: "تخته (فرش، موکت و ...)", value: "senior-masters" },
  { name: "تخته (فرش، موکت و ...)", value: "senior-masters" },
  { name: "تخته (فرش، موکت و ...)", value: "senior-masters" },
  { name: "تخته (فرش، موکت و ...)", value: "senior-masters" },
  { name: "تخته (فرش، موکت و ...)", value: "senior-masters" },
  { name: "تخته (فرش، موکت و ...)", value: "senior-masters" },
  { name: "تخته (فرش، موکت و ...)", value: "senior-masters" },
  { name: "تخته (فرش، موکت و ...)", value: "senior-masters" },
]);
const emit = defineEmits(["update:modelValue"]);

const selectedItem = ref({});

watch(
  selectedItem,
  () => {
    emit("update:modelValue", selectedItem?.value);
    dialog.value = false;
  },
  { immediate: true }
);
</script>
  
  <style lang="scss" scoped>
</style>