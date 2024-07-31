<template>
  <div
    v-if="props.modelValue"
    @click="handleOutsideClick"
    class="w-full h-screen fixed right-0 top-0 z-[99] bg-neutral-800/70"
  >
    <div
      ref="drawerElem"
      class="w-[85%] h-full bg-white animate-slide-up px-4 py-6"
    >
      <div class="flex items-center justify-between">
        <img src="~/assets/images/logo/sidebar-logo.png" alt="" />
        <div class="size-6 border rounded-full" @click="closeDrawer()">
          <img src="~/assets/images/icons/close.svg" class="size-6" />
        </div>
      </div>
      <div class="divider my-4"></div>
      <div>
        <div
          v-for="(item, i) in drawerItems"
          :key="i"
          class="flex items-center py-3"
          @click="router.push(item.link)"
        >
          <span :class="item.icon" class="bg-secondary-700 text-2xl"> </span>
          <span class="mr-2 text-sm font-normal">{{ item.title }}</span>
        </div>
      </div>
      <div class="absolute bottom-4 right-40">
        <div class="text-neutral-100">نسخه {{ appVersion }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["modelValue"]);
const router = useRouter();
const appVersion = ref("1.1.1");
const drawerItems = [
  // { icon: "icon-Pray-Counter-Iran", title: "قبله نما", link: "" },
  { icon: "icon-Pray-Counter-Iran", title: "ذکر شمار", link: "#" },
  // { icon: "", title: "اذان گو", link: "" },
  { icon: "icon-Calender-Iran", title: "تقویم", link: "#" },
  { icon: "icon-Support-Iran", title: "ارتباط با پشیبانی", link: "#" },
  { icon: "icon-Help-Iran", title: "راهنمای برنامه", link: "#" },
  { icon: "icon-Guides-Iran", title: "قوانین و مقررات", link: "#" },
];

const emit = defineEmits(["update:modelValue"]);
const closeDrawer = () => emit("update:modelValue", false);
const drawerElem = ref(null);
const handleOutsideClick = (event) => {
  if (drawerElem.value && !drawerElem.value.contains(event.target)) {
    closeDrawer();
  }
};

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue) {
      document.body.classList.add("disabled-scroll");
    } else {
      document.body.classList.remove("disabled-scroll");
    }
  }
);
</script>

<style lang="scss" scoped>
@keyframes slide-up {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s forwards; /* Adjust timing as needed */
}
</style>
