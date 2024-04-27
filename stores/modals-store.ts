
import { defineStore } from "pinia";

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    modals : {
      beghaListFilter : false
    }
  }),
  getters: {
    isOpenBeghaListProvinceFilter(): boolean {
      return this.modals.beghaListFilter
    },
  },
  actions: {
    changeBeghaListProvinceFiltersActive() {
      this.modals.beghaListFilter = !this.modals.beghaListFilter;
    }
  },
})
