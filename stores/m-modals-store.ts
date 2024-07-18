
import { defineStore } from "pinia";
import CermonyTime from "~/components/mausoleum/information/editInformation/inputValues/cermonyTime.vue";

export const useMausoleumStore = defineStore('modalStore', {
  state: () => ({
    modals : {
        serviceButtons:false,
        selectUserType:false,
        weeklyCermony:false,
        setWeekCermony:ref(),
        cermonyTime:false,
        setCermonyTime:ref(),
    }
  }),
  getters: {

    isOpenServiceButtons():boolean{
      return this.modals.serviceButtons
    },
    isOpenSelectUserType():boolean{
      return this.modals.selectUserType
    },
    isOpenWeeklyCermony():boolean{
      return this.modals.weeklyCermony
    },
    isOpenCermonyTime():boolean{
      return this.modals.cermonyTime
    }

  },
  actions: {
    changeServiceButtons(operator:string){
        if(operator==='active'){
            this.modals.serviceButtons=true;
        }else{
            this.modals.serviceButtons=false;
        }
    },
    changeSelectUserType(operator:string){
      if(operator==='active'){
        this.modals.selectUserType=true;
      }else{
        this.modals.selectUserType=false;
      }
    },
    changeWeeklyCermony(operator:string){
      if(operator==='active'){
        this.modals.weeklyCermony=true;
      }else{
        this.modals.weeklyCermony=false;
      }
    },
    setCermony(cermony:any){
      this.modals.setWeekCermony=cermony
    },
    changeCermonyTime(operator:string){
      if(operator==='active'){
        this.modals.cermonyTime=true;
      }else{
        this.modals.cermonyTime=false
      }
    },
    setCermonyTime(time:any){
      this.modals.setCermonyTime=time
    }
  },
})
