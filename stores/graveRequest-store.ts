import { defineStore } from "pinia";

export const useReservationStore=defineStore('reservationStore', {
    state: ()=>({

        modals:{
            graveReservation:false,
            termsConfirmation:false,
            dateOfDeath:false,
            Date:ref(),
            personalRatio:false,
            theChosenPerson:ref(),
            sectionPart:false,
            sectionName:ref(),
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
    },
    isOpenPersonalRatio():boolean{
        return this.modals.personalRatio
    },
    isOpensectionPart():boolean{
        return this.modals.sectionPart
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
    },
    changePersonalRatio(operator:string){
        if(operator==='active'){
            this.modals.personalRatio=true;
        }else{
            this.modals.personalRatio=false;
        }
    },
    setPerson(person:any){
        this.modals.theChosenPerson=person
    },
    changeSectionPart(operator:string){
        if(operator==='active'){
            this.modals.sectionPart=true;
        }else{
            this.modals.sectionPart=false;
        }
    },
    setSection(section:any){
        this.modals.sectionName=section
    }
}
})
