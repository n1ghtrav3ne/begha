<template>
  <div>
    <div v-if="data?.length">
      <list
        v-for="(item, i) in data"
        :key="item.id"
        :title="item.title"
        :subtitle="item.subtitle.slice(0, 30) + '...'"
        subtitle-class="text-tiny text-neutral-500"
        class="my-3"
        :bordered="i + 1 < data?.length"
      >
        <template #append>
          <div class="flex">
            <div
              class="flex items-center justify-center h-9 px-3 py-2 rounded-xl"
              :class="
                item.status
                  ? 'bg-primary-200 text-primary-700'
                  : 'bg-secondary-200 text-secondary-700 underline'
              "
            >
              {{ item.status ? "اختصاص داده شده" : "اختصاص داده نشده" }}
            </div>
            <img
              src="/assets/images/icons/dots.svg"
              class="mr-3 cursor-pointer"
              @click="emit('openDialog', item)"
            />
          </div>
        </template>
      </list>
    </div>
    <div v-else>
      <NotDefined title="نقش" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const emit = defineEmits(["openDialog"]);
</script>

<style lang="scss" scoped>
</style>