<template>
    <div>
        <cermonyHall />
    </div>
</template>
<script lang="ts" setup>
    import cermonyHall from '@/components/cermonyHall/cermonyHallPage.vue'
    defineComponent({cermonyHall})
    definePageMeta({
        layout:'empty-layout'
    })
</script>