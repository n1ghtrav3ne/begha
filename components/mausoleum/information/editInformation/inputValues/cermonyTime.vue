<template>

            <div class="timeContainer">

                <div class="hourSelector">

                    <div class="title">

                        <span>ساعت شروع</span>

                        <span class="icon-Arrow-Bottom-Iran"></span>

                    </div>

                    <div class="inputsContainer">

                        <input pattern="[0-9]*" v-model="minute" @input="limitInput($event, 2)" type = "tel" maxlength = "2">

                        <span>:</span>

                        <input v-model="hour" @input="limitInput($event, 2)" type = "tel" maxlength = "2">

                    </div>

                </div>

                <hr>

                <div class="endHourSelector">

                    <div class="title">

                        <span>ساعت پایان</span>

                        <span class="icon-Arrow-Bottom-Iran"></span>

                    </div>

                    <div class="inputsContainer">

                        <input v-model="endMinute" @input="limitInput($event, 2)" type = "tel"maxlength = "2">

                        <span>:</span>

                        <input v-model="endHour" @input="limitInput($event, 2)" type = "tel"maxlength = "2">

                    </div>

                </div>

            </div>

            <button @click="$emit('close')">تمام</button>

</template>
<script setup lang="ts">

import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

function limitInput(event:any, maxLength:any) {
    if (event.target.value.length > maxLength) {
        event.target.value = event.target.value.slice(0, maxLength);
    }
}

    const minute = ref()

    const hour = ref()

    const endMinute = ref()

    const endHour = ref()

    let StartTimeValue=ref()

    let endTimeValue=ref()

watch([minute,hour],()=>{

    StartTimeValue.value=[hour.value , minute.value]

    if(!!minute.value && !!hour.value){
    modalStore.setStartTime(StartTimeValue.value)    
    }
})

watch([endMinute,endHour],()=>{
    
    endTimeValue.value=[endHour.value , endMinute.value]

    if(!!endMinute.value && !!endHour.value){
    modalStore.setEndTime(endTimeValue.value)    
    }
})

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.headerText{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;
}


.timeContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 26px;
    width: 100%;
    justify-content: space-between;
    -webkit-scrollbar: none !important;


    input{
        outline: 0;
        border: 1px solid $outline-variant;
        border-radius: 4px;
        width: 60px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
        text-align:center;
    }

    input:focus{
        border-radius: var(--X-Small, 4px);
        border: 1px solid var(--Secondary-S-400, #B5D9FB);
        background: var(--Secondary-S-100, #F3F9FE);
        box-shadow: 0px 1px 8px 0px rgba(66, 159, 245, 0.27);
    }

    input::-webkit-inner-spin-button{
        display: none;
    }

    input::-webkit-outer-spin-button{
        display: none;
    }

    hr{
        color: $outline;
        width: 18px;
        transform:rotate(90deg);
        margin-top: 10%;
    }

    .hourSelector{
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 140px;
        
        .title{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4px;
            color: $secondary;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .inputsContainer{
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 7px;
        }
    }

    .endHourSelector{
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 140px;
        
        .title{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4px;
            color: $secondary;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .inputsContainer{
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 7px;
        }
    }
}

button{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: $primary;
    color: $primary-on;
    border-radius: 12px;
    margin-top: 54px;
    width: 100%;
    height: 44px;
    margin-bottom: 44px;
}
</style>