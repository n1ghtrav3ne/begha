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
        selectedState ? selectedState : props.placeholder
      }}</span>
      <span class="text-blue">
        <img src="~/assets/images/icons/menue-left.svg" />
      </span>
    </div>
    <!-- select state dialog  -->
    <bottomSheets
      v-model="dialog"
      title="استان مورد نظر خود را انتخاب کنید"
      closable
    >
      <div class="py-4 px-6">
        <div class="divider"></div>
        <!-- search text field -->
        <base-input
          placeholder="جستجو بر اساس نام استان"
          v-model="search"
          class="h-[46px ]"
          @update:model-value="emit('update:modelValue', search)"
        >
          <template #prepend>
            <div class="cursor-pointer ml-2">
              <img src="~/assets/images/icons/search-black.svg" alt="" />
            </div>
          </template>
        </base-input>

        <!-- show state  -->
        <div class="mt-5" v-if="states.length">
          <list
            v-for="(item, i) in states"
            :key="i"
            :title="item"
            class="h-14"
            :class="selectedState == item ? 'bg-blue/30 rounded-lg' : ''"
            @click="selectedState = item"
          >
            <template #prepend>
              <img src="~/assets/images/icons/location2.svg" alt="" />
            </template>
            <template v-if="selectedState == item" #append>
              <div class="bg-blue size-6 centered rounded-full p-1">
                <img src="/icons/check.svg" class="w-full h-full" />
              </div>
            </template>
          </list>
        </div>
        <div v-else class="w-full flex justify-center mt-24">
          <div class="text-center">
            <img
              src="~/assets/images/icons/search-black.svg"
              class="w-12 h-12 left-0 right-0 mx-auto mb-2"
            />
            <span>موردی یافت نشد !</span>
          </div>
        </div>
      </div>
    </bottomSheets>
  </div>
</template>

<script setup>
import BaseInput from "~/components/global/input.vue";
const props = defineProps(["label", "placeholder"]);
const dialog = ref(false);
const search = ref("");
const states = ref([
  "تهران",
  "اصفهان",
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "خوزستان",
  "خراسان شمالی",
  "فارس",
]);
const emit = defineEmits(["update:modelValue"]);

const selectedState = ref("");

watch(selectedState, () => {
  emit("update:modelValue", selectedState.value);
  dialog.value = false;
});
</script>

<style lang="scss" scoped>
</style>