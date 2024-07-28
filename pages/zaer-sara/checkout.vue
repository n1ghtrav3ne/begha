<template>
    <cart/>

</template>
<script lang="ts" setup>
const route = useRoute();
const id = route.params.id;
definePageMeta({
  layout: "empty-layout",
});
</script>