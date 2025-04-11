<template>
  <div v-for="(item, i) in props.items" :key="i" class="mt-2">
    <ClientOnly>
      <CustomCheckbox
        :item="item"
        v-model="items[i]"
        @update:model-value="
          defaultStore.filtersItems = items.filter((item) => item)
        "
      >
      </CustomCheckbox>
    </ClientOnly>
  </div>
</template>

<script setup>
const props = defineProps(["items", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const items = ref([]);
</script>

<style lang="scss" scoped>
</style>