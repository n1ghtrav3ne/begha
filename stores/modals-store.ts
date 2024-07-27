
import { defineStore } from "pinia";

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    modals : {
      Date:ref(),
      theChosenPerson:ref(),
      sectionName:ref(),
      userSelection:false,
      setWeekCermony:ref(),
      setStartTime:ref(),
      setEndTime:ref(),
      setPray:ref(),
      setImamName:ref(),
    }
  }),
  getters: {
    isOpenUserSelection():boolean{
      return this.modals.userSelection
    }
  },
  actions: {
    setDate(Date:any){
        this.modals.Date=Date
    },
    setPerson(person:any){
        this.modals.theChosenPerson=person
    },
    setSection(section:any){
        this.modals.sectionName=section
    },
    activeUserSelection(operator:string){
      if(operator==='active'){
        this.modals.userSelection=true;
      }else{
        this.modals.userSelection=false;
      }
    },
    setCermony(cermony:any){
      this.modals.setWeekCermony=cermony
    },
    setStartTime(time:any){
      this.modals.setStartTime=time
    },
    setEndTime(time:any){
      this.modals.setEndTime=time
    },
    setPray(pray:any){
      this.modals.setPray=pray
    },
    settingImamName(imam:any){
      this.modals.setImamName=imam
    },
  },
})
