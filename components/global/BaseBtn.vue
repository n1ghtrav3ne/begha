<template>
  <ClientOnly>
    <button
      :type="type"
      class="p-2 rounded-xl min-w-32 cursor-pointer h-full min-h-12 w-full"
      :class="getClass"
    >
      <div class="flex justify-between">
        <div>
          <slot name="prepend"></slot>
        </div>
        <div>
          <slot></slot>
        </div>
        <div>
          <slot name="append"></slot>
        </div>
      </div>
    </button>
  </ClientOnly>
</template>
  
  <script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
  color: {
    type: String,
    default: "primary-700",
  },
  textColor: {
    type: String,
  },
  type: {
    type: String,
  },
});
const getClass = computed(() => {
  switch (props.variant) {
    case "default":
      return `bg-${props.color} ,
         ${
           props.color.includes("neutral")
             ? "text-neutral-900"
             : `text-${props.textColor || "white"}`
         }`;
    case "outlined":
      return `bg-white border border-${props.color} text-${props.color}`;
    case "link":
      return `text-${props.color}`;
  }
});
</script>
  
  <style lang="scss" scoped>
</style>