<template>
  <div>
    <!-- show requests from admin user -->

    <template v-for="(date, d) in groupArrays" :key="d">
      <div class="mt-10">
        <span class="text-surface-400 text-[11px]">{{
          converDate(date.date)
        }}</span>
      </div>
      <div>
        <template v-for="(item, i) in date.requests" :key="i">
          <list
            :title="item?.title"
            :subtitle="item?.from"
            subtitleClass="text-[11px] text-surface-500"
            class="mt-3"
            :bordered="i + 1 < date.requests?.length"
          >
            <template #prepend>
              <div class="size-11 rounded-full bg-[#E4F1FE] centered">
                <img
                  :src="item.image ? item?.image : '/icons/receipt-item.svg'"
                />
              </div>
            </template>
            <template #append>
              <button
                :class="getRequestStatus(item.status)?.class"
                class="py-2 px-3 rounded-xl"
              >
                {{ getRequestStatus(item.status)?.text }}
              </button>
            </template>
          </list>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup>
import list from "~/components/global/list.vue";
const { getRequestStatus } = mixin;
const { converDate } = mixin;
const props = defineProps(["data"]);
const groupArrays = ref({});
watch(
  () => props.data,
  () => {
    const groups = props.data.reduce((groups, request) => {
      const date = request.date.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(request);
      return groups;
    }, {});

    // Edit: to add it in the array format instead
    groupArrays.value = Object.keys(groups).map((date) => {
      return {
        date,
        requests: groups[date],
      };
    });
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
</style>