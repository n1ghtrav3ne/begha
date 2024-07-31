<template>
    <div class="filter-modal-body">
        <div class="item-layout mt-3" v-for="(item, i) in items" >
            {{ item.label }}
     
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
        label: "اشتراک گذاری",
    },
    {
        id: 2,
        label: "ویرایش",
    },
    {
        id: 3,
        label: "حذف",
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