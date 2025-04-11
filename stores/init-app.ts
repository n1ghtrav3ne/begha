
import { defineStore } from "pinia";

export const useInitialApp = defineStore('initialApp', {
  state: () => ({
    isLoading: true
  }),
  getters: {
    isLoadingApp(): boolean {
      return this.isLoading
    },
  },
  actions: {
    changeLoadingState(value: any) {
      this.isLoading = value;
    }
  },
})
