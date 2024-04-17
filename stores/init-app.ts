
import { defineStore } from "pinia";

export const useInitialApp = defineStore('initialApp', {
  state: () => ({
    isLoading : true
  }),
  getters: {
    isLoadingApp(): boolean {
      return this.isLoading = false
    },
  },
  actions: {
    changeLoadingState() {
      this.isLoading = !this.isLoading;
    }
  },
})
