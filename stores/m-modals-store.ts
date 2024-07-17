
import { defineStore } from "pinia";

export const useMausoleumStore = defineStore('modalStore', {
  state: () => ({
    modals : {
        serviceButtons:false,
        selectUserType:false,
    }
  }),
  getters: {

    isOpenServiceButtons():boolean{
      return this.modals.serviceButtons
    },
    isOpenSelectUserType():boolean{
      return this.modals.selectUserType
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
    }
  },
})
