<template>

    <div class="flex flex-col pt-7 gap-3">

        <div @click="selectItem(item)" v-for="(item , index) in sortItems" :key="index" :class="{'bg-secondary-200' : item.selected}" class="flex rounded-lg flex-row gap-2 p-3 h-12 items-center">

            <div :class="`bg-${item.color}`" class="w-3 h-3 rounded-full">

            </div>

            <span>{{ item.name }}</span>

            <span v-if="item.selected" class="material-symbols-outlined mr-auto text-secondary-700">
            check_circle
            </span>

        </div>

    </div>

</template>

<script setup lang="ts">

const sortItems=ref<{color:string ; name:string ; selected?:boolean}[]
>([
    {
        color:'secondary-700',
        name:'همه',
        selected:true
    },
    {
        color:'warning-700',
        name:'در حال بررسی',
    },
    {
        color:'primary-700',
        name:'تائيد شده ها',
    },
    {
        color:'error-700',
        name:'رد شده ها',
    },
    {
        color:'error-700',
        name:'لغو شده ها توسط کاربر',
    },
])

function selectItem(item: any) {
  sortItems.value.forEach((i) => (i.selected = false));
  item.selected = true;
}
</script>