
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
      facilitiesSearchFilter:false,
      reservingCermonyHall:false,
      beghaCemeteryFilter:false,
      deceasedInfo:false,
      cemeterySearch:false,
      cemeterySearchFilter:false,
      cermonyHallReservationHours:false,
      completeProfile:false,
      profileSearchCities:false,
      imagePicker:false,
      exitAccount:false,
      zaerSaraSelectDate:false
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
    isOpenFacilitiesSearchFilter():boolean{
      return this.modals.facilitiesSearchFilter
    },
    isOpenReservingCermonyHall():boolean{
      return this.modals.reservingCermonyHall
    },
    isOpenBeghaCemeteryFilter():boolean{
      return this.modals.beghaCemeteryFilter
    },
    isOpenDeceasedInfo():boolean{
      return this.modals.deceasedInfo
    },
    isOpenCemeterySearchFilter():boolean{
      return this.modals.cemeterySearchFilter
    },
    isOpenCemeterySearch():boolean{
      return this.modals.cemeterySearch
    },
    isOpenCermonyHallReservationHours():boolean{
      return this.modals.cermonyHallReservationHours
    },
    isOpenCompleteProfile():boolean{
      return this.modals.completeProfile
    },
    isOpenProfileSearchCities():boolean{
      return this.modals.profileSearchCities
    },
    isOpenImagePicker():boolean{
      return this.modals.imagePicker
    },
    isOpenExitAccount():boolean{
      return this.modals.exitAccount
    },
    isOpenZaerSelectDate(): boolean {
      return this.modals.zaerSaraSelectDate
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
    },
    changeFacilitiesSearchFilter(operator:string){
      if(operator==='active'){
        this.modals.facilitiesSearchFilter=true;
      }else{
        this.modals.facilitiesSearchFilter=false;
      }
    },
    changeReservingCermonyHall(operator:string){
      if(operator==='active'){
        this.modals.reservingCermonyHall=true;
      }else{
        this.modals.reservingCermonyHall=false;
      }
    },
    changeBeghaCemeteryFilter(operator:string){
      if(operator==='active'){
        this.modals.beghaCemeteryFilter=true
      }else{
        this.modals.beghaCemeteryFilter=false
      }
    },
    changeDeceasedInfo(operator:string){
      if(operator==='active'){
        this.modals.deceasedInfo=true
      }else{
        this.modals.deceasedInfo=false
      }
    },
    changeCemeterySearchFilter(operator:string){
      if(operator==='active'){
        this.modals.cemeterySearchFilter=true
      }else{
        this.modals.cemeterySearchFilter=false
      }
    },
    changeCemeterySearch(operator:string){
      if(operator==='active'){
        this.modals.cemeterySearch=true
      }else{
        this.modals.cemeterySearch=false
      }
    },
    changeCermonyHallReservationHours(operator:string){
      if(operator==='active'){
        this.modals.cermonyHallReservationHours=true;
      }else{
        this.modals.cermonyHallReservationHours=false;
      }
    },
    changeCempleteProfile(operator:string){
      if(operator==='active'){
        this.modals.completeProfile=true;
      }else{
        this.modals.completeProfile=false;
      }
    },
    changeProfileSearchCities(operator:string){
      if(operator==='active'){
        this.modals.profileSearchCities=true;
      }else{
        this.modals.profileSearchCities=false;
      }
    },
    changeimagePicker(operator:string){
      if(operator==='active'){
        this.modals.imagePicker=true;
      }else{
        this.modals.imagePicker=false
      }
    },
    changeExitAccount(operator:string){
      if(operator==='active'){
        this.modals.exitAccount=true;
      }else{
        this.modals.exitAccount=false
      }
    },
    ChangezaerSaraSelectDate(operator:string){
      if(operator==='active'){
        this.modals.zaerSaraSelectDate=true;
      }else{
        this.modals.zaerSaraSelectDate=false;
      }
    },
  },
})
