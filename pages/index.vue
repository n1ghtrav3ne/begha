<template>
  <div>
    <template>
      <h1 class="text-3xl font-bold">سلام دنیا</h1>
    </template>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  middleware: ['is-auth'],
});
</script>
