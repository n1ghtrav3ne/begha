<template>
  <div>
    <div class="footer-menu">
      <div class="container footer-container">
        <ul class="flex items-center justify-between">
          <li
            @click="handleFooterAction(item)"
            v-for="(item, index) in footerItems"
            :key="index"
            :class="
              item.iconClass == 'icon-Location-Iran'
                ? 'search-item'
                : 'flex flex-col items-center'
            "
          >
            <span
              v-if="item.iconClass == 'icon-Location-Iran'"
              class="menu-item-icon search-icon"
              :class="`${item.iconClass}`"
            >
            </span>
            <span
              v-else
              class="menu-item-icon"
              :class="
                `${item.iconClass} ` + `${item.active ? 'active-item' : ''}`
              "
            >
            </span>
            <span
              :class="item.active ? 'active-item' : ''"
              class="mt-2 footer-item-title"
              >{{ item.title }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const footerItems = ref<
  { title: string; iconClass: string; link: string; active: boolean }[]
>([
  {
    title: "خانه",
    iconClass: "icon-Home",
    link: "/",
    active: true,
  },
  {
    title: "بقاع من",
    iconClass: "icon-Mosque",
    link: "/followed-begha/list",
    active: false,
  },
  {
    title: "",
    iconClass: "icon-Location-Iran",
    link: "/",
    active: false,
  },
  {
    title: "رسانه",
    iconClass: "icon-Media",
    link: "/media",
    active: false,
  },
  {
    title: "پروفایل",
    iconClass: "icon-Profile",
    link: "/profile",
    active: false,
  },
]);

const handleFooterAction = (clickedItem: { active: boolean; link: string }) => {
  for (const item of footerItems.value) {
    item.active = false;
  }
  clickedItem.active = true;
  router.push(clickedItem.link);
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.footer-menu {
  background-color: $surface;
  z-index: 80;
  position: fixed;
  bottom: 0;
  left: 0; /* add this line */
  right: 0; /* add this line */
  max-width: 600px; /* add this line to set the maximum width */
  margin: 0 auto; /* add this line to center the footer menu */
  border-top: 1px solid $outline-variant;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  .footer-container {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    padding: 13px 40px !important;
  }
  .footer-item-title {
    color: $surface-on-variant;
    font-family: "yekan-regular";
    font-size: 14px;
  }

  .search-item {
    background: $primary;
    padding: 14px;
    border-radius: 50%;
    .search-icon {
      color: $primary-on;
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .menu-item-icon {
    font-size: 28px;
    color: $surface-on-variant;
  }
  .active-item {
    color: $primary;
    &::before {
      color: $primary;
    }
  }
}
</style>
