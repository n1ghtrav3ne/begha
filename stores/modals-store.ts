
import { defineStore } from "pinia";

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    modals : {
      beghaListProvinceFilter : false , 
      beghaListEventFilter : false , 
      moreServicesButtons : false , 
      ratingEvents : false , 
      switchAccount : false , 
      requestsFilter : false , 
      cancelRequest : false , 
      beghaMediaFilter : false , 
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
    isOpenSwitchAccount(): boolean {
      return this.modals.switchAccount
    },
    isOpenRequestsFilterModal(): boolean {
      return this.modals.requestsFilter
    },
    isOpenCancelRequestModal(): boolean {
      return this.modals.cancelRequest
    },
    isOpenMediaBeghaFilterModal(): boolean {
      return this.modals.beghaMediaFilter
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
    changeMediaBeghaFilterActive(operator:string) {
      if(operator === 'active'){
        this.modals.beghaMediaFilter = true;
      }else{
        this.modals.beghaMediaFilter = false;
      }
    } ,
    changeCancelRequestModalActive(operator:string) {
      if(operator === 'active'){
        this.modals.cancelRequest = true;
      }else{
        this.modals.cancelRequest = false;
      }
    } ,
    changeRequestsFilterActive(operator:string) {
      if(operator === 'active'){
        this.modals.requestsFilter = true;
      }else{
        this.modals.requestsFilter = false;
      }
    } ,
    changeSwitchAccountActive(operator:string) {
      if(operator === 'active'){
        this.modals.switchAccount = true;
      }else{
        this.modals.switchAccount = false;
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
