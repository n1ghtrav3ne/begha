<template>
  <div>
    <label class="font-normal text-sm text-surface-600">{{
      props.label
    }}</label>
    <div
      @click="props.state ? (dialog = true) : ''"
      class="w-full h-14 border-[1px] border-surface-100 rounded-lg mt-2 flex items-center justify-between p-3"
    >
      <span class="text-surface-600 text-xs">{{
        selectedCity ? selectedCity : props.placeholder
      }}</span>
      <span class="text-blue">
        <img src="~/assets/images/icons/menue-left.svg" />
      </span>
    </div>
    <!-- select state dialog  -->
    <bottomSheets
      v-model="dialog"
      title="شهر مورد نظر خود را انتخاب کنید"
      :search="{ placeholder: 'جستجوی شهر' }"
    >
      <div class="p-4">
        <!-- show state  -->
        <div class="mt-2" v-if="states.length">
          <list
            v-for="(item, i) in states"
            :key="i"
            :title="item.city"
            :subtitle="item.state"
            class="h-14 px-3"
            sub-title-class="text-[11px]"
            :class="selectedCity == item.city ? '  bg-blue/15 rounded-lg' : ''"
            @click="selectedCity = item.city"
          >
            <template #prepend>
              <img src="~/assets/images/icons/location2.svg" alt="" />
            </template>
            <template v-if="selectedCity == item.city" #append>
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
const props = defineProps(["label", "placeholder", "state"]);
const dialog = ref(false);

const states = ref([
  { city: "خمینی شهر", state: "اصفهان" },
  { city: "نجف آباد", state: "اصفهان" },
  { city: "شاهین شهر", state: "اصفهان" },
  { city: "دامنه", state: "اصفهان" },
  { city: "کوهپایه", state: "اصفهان" },
  { city: "زرین شهر", state: "اصفهان" },
  { city: "بهارستان", state: "اصفهان" },
  { city: "لنجان", state: "اصفهان" },
]);
const emit = defineEmits(["update:modelValue"]);

const selectedCity = ref("");
const search = ref("");

watch(selectedCity, () => {
  emit("update:modelValue", selectedCity.value);
  dialog.value = false;
});
</script>
  
  <style lang="scss" scoped>
</style>