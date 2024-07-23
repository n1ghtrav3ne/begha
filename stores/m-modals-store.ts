
import { defineStore } from "pinia";

export const useMausoleumStore = defineStore('modalStore', {
  state: () => ({
    modals : {
        serviceButtons:false,
        selectUserType:false,
        weeklyCermony:false,
        setWeekCermony:ref(),
        cermonyTime:false,
        setStartTime:ref(),
        setEndTime:ref(),
        prayTimes:false,
        setPray:ref(),
        imamName:false,
        setImamName:ref(),
        infoImage:false
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
    },
    isOpenPrayTimes():boolean{
      return this.modals.prayTimes
    },
    isOpenImamName():boolean{
      return this.modals.imamName
    },
    isOpenInfoImage():boolean{
      return this.modals.infoImage
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
    setStartTime(time:any){
      this.modals.setStartTime=time
    },
    setEndTime(time:any){
      this.modals.setEndTime=time
    },
    changePrayTimes(operator:string){
      if(operator==='active'){
        this.modals.prayTimes=true;
      }else{
        this.modals.prayTimes=false;
      }
    },
    setPray(pray:any){
      this.modals.setPray=pray
    },
    changeImamName(operator:string){
      if(operator==='active'){
        this.modals.imamName=true;
      }else{
        this.modals.imamName=false;
      }
    },
    settingImamName(imam:any){
      this.modals.setImamName=imam
    },
    changeInfoImage(operator:string){
      if(operator==='active'){
        this.modals.infoImage=true
      }else{
        this.modals.infoImage=false
      }
    }
  },
})
