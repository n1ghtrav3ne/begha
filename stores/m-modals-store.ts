
import { defineStore } from "pinia";

export const useMausoleumStore = defineStore('modalStore', {
  state: () => ({
    modals : {
        serviceButtons:false,
    }
  }),
  getters: {

    isOpenServiceButtons():boolean{
        return this.modals.serviceButtons
    }

  },
  actions: {
    changeServiceButtons(operator:string){
        if(operator==='active'){
            this.modals.serviceButtons=true;
        }else{
            this.modals.serviceButtons=false;
        }
    }
  },
})
