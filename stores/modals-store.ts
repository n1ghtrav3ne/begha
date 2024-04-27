
import { defineStore } from "pinia";

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    modals : {
      beghaListProvinceFilter : false , 
      beghaListEventFilter : false
    }
  }),
  getters: {
    isOpenBeghaListProvinceFilter(): boolean {
      return this.modals.beghaListProvinceFilter
    },
    isOpenBeghaListEventFilter(): boolean {
      return this.modals.beghaListEventFilter
    },
  },
  actions: {
    changeBeghaListProvinceFiltersActive(operator:string) {
      if(operator === 'active'){
        this.modals.beghaListProvinceFilter = true;
      }else{
        this.modals.beghaListProvinceFilter = false;
      }
    } , 
    changeBeghaListEventFiltersActive(operator:string) {
      if (operator === 'active') {
        this.modals.beghaListEventFilter = true;
      }else{
        this.modals.beghaListEventFilter = false;
      }
    } , 
  },
})
