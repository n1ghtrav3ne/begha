<template>
  <div>
    <div v-if="data?.length">
      <list
        v-for="(item, i) in props.data"
        :key="item.id"
        :title="item.title"
        titleClass="text-neutral-500 text-tiny"
        :subtitle="item.subtitle"
        subtitleClass="font-normal text-sm"
        class="my-3"
        :bordered="i + 1 < props?.data.length"
      >
        <template #append>
          <div class="flex">
            <div
              class="flex items-center justify-center h-9 px-3 py-2 rounded-xl"
              :class="`bg-${getAgentsStatus(item.status).color} text-${
                getAgentsStatus(item.status).textColor
              }`"
            >
              {{ getAgentsStatus(item.status).text }}
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
      <NotDefined title="عضو" link="/mausoleum/tomb/agents/create" />
    </div>
  </div>
</template>

<script setup>
const { getAgentsStatus } = mixin;
import BaseBtn from "~/components/global/BaseBtn.vue";
const emit = defineEmits(["openDialog"]);
const props = defineProps(["data"]);
</script>

<style lang="scss" scoped>
</style>