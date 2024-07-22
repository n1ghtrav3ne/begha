<template>

    <BaseDialog :modalHeight="330">

        <template #headerText>

            <span class="headerText">ساعت شروع و پایان را انتخاب کنید.</span>

        </template>

        <template #body>

            <div class="timeContainer">

                <div class="hourSelector">

                    <div class="title">

                        <span>ساعت شروع</span>

                        <span class="icon-Arrow-Bottom-Iran"></span>

                    </div>

                    <div class="inputsContainer">

                        <input v-model="minute" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number"maxlength = "2">

                        <span>:</span>

                        <input v-model="hour" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number"maxlength = "2">

                    </div>

                </div>

                <hr>

                <div class="endHourSelector">

                    <div class="title">

                        <span>ساعت پایان</span>

                        <span class="icon-Arrow-Bottom-Iran"></span>

                    </div>

                    <div class="inputsContainer">

                        <input v-model="endMinute" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number"maxlength = "2">

                        <span>:</span>

                        <input v-model="endHour" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type = "number"maxlength = "2">

                    </div>

                </div>

            </div>

            <button @click="mausoleumStore.changeCermonyTime('deactive')">تمام</button>

        </template>
    
    </BaseDialog>

</template>
<script setup lang="ts">

import BaseDialog from "~/components/global/mBaseDialog.vue"


import {useMausoleumStore} from "~/stores/m-modals-store"

const mausoleumStore=useMausoleumStore()

defineComponent({BaseDialog})

    const minute = ref()

    const hour = ref()

    const endMinute = ref()

    let endHour = ref()

    let timeValue=ref()

watch([minute,hour,endMinute,endHour],()=>{
    timeValue.value=[hour.value , minute.value , endHour.value , endMinute.value]
    mausoleumStore.setCermonyTime(timeValue.value)    
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