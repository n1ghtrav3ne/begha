
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
      beghaMediaPostFilter : false , 
      mainMediaPostFilter : false , 
      cermonyHallRequestFilter:false,
      cermonyHallSearchFilter:true,
      cermonyHallSearchCities:false,
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
    isOpenMainMediaPostFilter(): boolean {
      return this.modals.mainMediaPostFilter
    },
    isOpenBeghaMediaPostFilter(): boolean {
      return this.modals.beghaMediaPostFilter
    },
    isOpenCermonyHallrequestFilter(): boolean{
      return this.modals.cermonyHallRequestFilter
    },
    isOpenCermonyHallSearchFilter(): boolean{
      return this.modals.cermonyHallSearchFilter
    },
    isOpenCermonyHallSearchCities(): boolean{
      return this.modals.cermonyHallSearchCities
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
    changeBeghaMediaPostFilterActive(operator:string) {
      if(operator === 'active'){
        this.modals.beghaMediaPostFilter = true;
      }else{
        this.modals.beghaMediaPostFilter = false;
      }
    } ,
    changeMainMediaPostFilterActive(operator:string) {
      if(operator === 'active'){
        this.modals.mainMediaPostFilter = true;
      }else{
        this.modals.mainMediaPostFilter = false;
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
    changeCermonyHallRequestFilterActive(operator:string){
      if (operator==='active'){
        this.modals.cermonyHallRequestFilter=true;
      }else{
        this.modals.cermonyHallRequestFilter=false;
      }
    },
    changeCermonyHallSearchFilterActive(operator:string){
      if(operator==='active'){
        this.modals.cermonyHallSearchFilter=true;
      }else{
        this.modals.cermonyHallSearchFilter=false;
      }
    },
    changeCermonyHallSearchCities(operator:string){
      if(operator==='active'){
        this.modals.cermonyHallSearchCities=true;
      }else{
        this.modals.cermonyHallSearchCities=false;
      }
    }
  },
})
