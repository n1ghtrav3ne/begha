
import { defineStore } from "pinia";

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    modals : {
      moreServicesButtons : false , 
      ratingEvents : false ,  
      deceasedInfo:false,
      cemeterySearch:false,
      cemeterySearchFilter:false,
      completeProfile:false,
      profileSearchCities:false,
      imagePicker:false,
      exitAccount:false,
      zaerSaraSelectDate:false
    }
  }),
  getters: {
     isOpenMoreServicesButtons(): boolean {
      return this.modals.moreServicesButtons
    },
    isOpenRatingEvents(): boolean {
      return this.modals.ratingEvents
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
