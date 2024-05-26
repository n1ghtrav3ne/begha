
import { defineStore } from "pinia";

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    modals : {
      beghaListProvinceFilter : false , 
      beghaListEventFilter : false , 
      moreServicesButtons : false , 
      ratingEvents : false , 
    }
  }),
  getters: {
    isOpenBeghaListProvinceFilter(): boolean {
      return this.modals.beghaListProvinceFilter
    },
    isOpenBeghaListEventFilter(): boolean {
      return this.modals.beghaListEventFilter
    },
     isOpenMoreServicesButtons(): boolean {
      return this.modals.moreServicesButtons
    },
    isOpenRatingEvents(): boolean {
      return this.modals.ratingEvents
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
    changeEventsRatingActive(operator:string) {
      if (operator === 'active') {
        this.modals.ratingEvents = true;
      }else{
        this.modals.ratingEvents = false;
      }
    } , 
    changeMoreServicesButtonsActive(operator:string) {
      if (operator === 'active') {
        this.modals.moreServicesButtons = true;
      }else{
        this.modals.moreServicesButtons = false;
      }
    } , 
  },
})
