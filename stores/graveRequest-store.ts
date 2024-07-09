import { defineStore } from "pinia";

export const useReservationStore=defineStore('reservationStore', {
    state: ()=>({

        modals:{
            graveReservation:false,
            termsConfirmation:false,
            dateOfDeath:false,
            Date:ref()
        }
}),
getters:{
    isOpenGraveReservation():boolean{
        return this.modals.graveReservation
    },
    isOpnenTermsConfirmation():boolean{
        return this.modals.termsConfirmation
    },
    isOpenDateOfDeath():boolean{
        return this.modals.dateOfDeath
    }
},
actions:{
    changeGraveReservation(operator:string){
        if(operator==="active"){
            this.modals.graveReservation=true;
        }else{
            this.modals.graveReservation=false;
        }
    },
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
    },
    setDate(Date:any){
        this.modals.Date=Date
    }
}
})
