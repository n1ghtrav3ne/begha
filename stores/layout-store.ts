
import { defineStore } from "pinia";

export const useAppSidebar = defineStore('appSidebar', {
  state: () => ({
    isOpenSidebar : false
  }),
  getters: {
    isOpenAppSidebar(): boolean {
      return this.isOpenSidebar
    },
  },
  actions: {
    changeSidebarState() {
      this.isOpenSidebar = !this.isOpenSidebar;
    }
  },
})
