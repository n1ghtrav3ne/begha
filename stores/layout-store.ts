
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
    changeSidebarStateActive(operator:string) {
      if(operator === 'active'){
        this.isOpenSidebar = true;
      }else{
        this.isOpenSidebar = false;
      }
      
    }
  },
})
