import { defineStore } from "pinia";

export const useReservationStore=defineStore('reservationStore', {
    state: ()=>({

        modals:{
            termsConfirmation:false,
            dateOfDeath:false,
        }
}),
getters:{
    isOpnenTermsConfirmation():boolean{
        return this.modals.termsConfirmation
    },
    isOpenDateOfBirth():boolean{
        return this.modals.dateOfDeath
    }
},
actions:{
    changeTermsConfirmation(operator:string){
        if(operator === 'active'){
            this.modals.termsConfirmation=true;
        }else{
            this.modals.termsConfirmation=false;
        }
    },
    changeDateOfDeath(operator:string){
        if(operator === 'active'){
            this.modals.dateOfDeath=true;
        }else{
            this.modals.dateOfDeath=false;
        }
    }
}
})
