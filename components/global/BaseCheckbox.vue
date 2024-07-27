<template>
  <div class="flex flex-col">
    <div
      v-for="(item, index) in checkboxItems"
      :key="index"
      :class="`${item.status}`"
      class="checkbox-container inline-flex items-center"
    >
      <label
        class="relative flex items-center p-3 rounded-full cursor-pointer"
        htmlFor="check"
      >
        <input
          @change="updateCheckBox(checkboxItems, item)"
          v-model="item.isChecked"
          type="checkbox"
          class="custom-checkbox before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
        />
        <span
          class="absolute checkmark-icon text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        @click="item.isChecked = !item.isChecked"
        :style="`font-size: ${fns}`"
        class="mt-px font-light text-gray-700 cursor-pointer select-none"
        :class="`text-${item.textColor}`"
        htmlFor="check"
      >
        {{ item.label }}
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface CheckBoxItem {
  id: number;
  label: string;
  isChecked: boolean;
}
const props = defineProps(["items", "fns"]);
const emit = defineEmits(["updateCheckBoxes"]);
const checkboxItems = props.items;
let checkedArray: {}[] = [];
function updateCheckBox(
  allCheckBoxes: CheckBoxItem[],
  updatedCheckBox: CheckBoxItem
): CheckBoxItem[] {
  const index = allCheckBoxes.findIndex((obj) => obj.id === updatedCheckBox.id);
  if (index !== -1) {
    allCheckBoxes[index].isChecked = updatedCheckBox.isChecked;
  } else {
    allCheckBoxes.push(updatedCheckBox);
  }
  emit("updateCheckBoxes", JSON.parse(JSON.stringify(allCheckBoxes)));
  return allCheckBoxes;
}
</script>

<style lang="scss" scoped>
/* Customize the label (the wrapper) */
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.custom-checkbox {
  background-color: transparent;
  outline: none;
  border: 1px solid $outline;
  &:checked {
    background-color: $secondary;
  }
}
.checkmark-icon {
  color: #fff !important;
}
.checkbox-container {
  margin-bottom: 12px;
}

.error {
  color: $error;
  background-color: #fdf2f2;
}
.success {
  color: $primary;
  background-color: #f0fcf3;
}
</style>
