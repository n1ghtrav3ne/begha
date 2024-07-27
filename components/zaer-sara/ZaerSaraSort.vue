<template>
  <div class="filter-modal-body">
    <div
      class="item-layout mt-3"
      v-for="(item, i) in items"
      :class="i == 1 && 'active'"
    >
      {{ item.label }}
      <span v-if="i == 1" class="material-symbols-outlined check-icon">
        check_circle
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PopularBegha from "~/components/home/PopularBegha.vue";
import BeghaListItems from "~/components/home/BeghaListItems.vue";

defineNuxtComponent({ PopularBegha, BeghaListItems });
let selectedEvents = ref<{ isChecked: boolean; label: string; id: number }[]>(
  []
);
const items = ref<{ id: number; label: string }[]>([
  {
    id: 1,
    label: "همه",
  },
  {
    id: 2,
    label: "محبوب ترین ها",
  },
  {
    id: 3,
    label: "تخفیف خورده ها",
  },
  {
    id: 4,
    label: "ارزان ترین‌ها",
  },
]);
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.item-layout {
  display: flex;
  justify-content: space-between;
  height: 44px;
  padding: 16px 12px;
  align-items: center;
  gap: 24px;
}
.active {
  background-color: $secondary-container;
}
</style>
