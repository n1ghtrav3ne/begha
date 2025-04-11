<template>

    <div class="mt-2 flex flex-col gap-1">
        
        <div @click="selectIndex(index)" :class="{'bg-secondary-200': active === index}" v-for="(item , index) in sections" :key="index" class="flex flex-row items-center px-3 py-4 h-11 rounded-lg justify-between">

            <span>{{ item.floor }}</span>

            <span v-if="active===index" class="material-symbols-outlined text-secondary-700">
            check_circle
            </span>

        </div>

    </div>

</template>

<script setup lang="ts">

const active=ref()

const sections=ref([{floor:1},{floor:2},])

const emit=defineEmits(["selectedFloor"])

const selectIndex=(index:number)=>{
    active.value=index
    const selectFloor=sections.value[index]
    emit("selectedFloor",selectFloor.floor)
}

</script>