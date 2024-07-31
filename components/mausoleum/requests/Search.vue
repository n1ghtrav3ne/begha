<template>
    
    <div class="fixed z-[99] top-0 w-full h-full max-w-[600px] m-0 bg-neutral-50">

        <div class="greenBox flex flex-row pt-[12px] pb-[11px] px-[16px] bg-primary-700 w-full items-center">

            <div class="firstItem flex flex-row items-center gap-4 text-primary-50">

                <span @click="$router.go(-1)" class="material-symbols-outlined ">
                arrow_right_alt
            </span>

            <span class="text-[16px]">درخواست ها</span>

            </div>    

            <span @click="calendar=true" class="material-symbols-outlined text-primary-50 mr-auto scale-150">
            calendar_month
            </span>
            
            </div>

            <div class="container">

                <div class="flex mt-3 flex-row items-center gap-2">

                    <span @click="$emit('close')" class="material-symbols-outlined">
                    east
                    </span>

                    <div class="border border-primary-700 flex flex-row justify-between w-full p-4 rounded-xl">

                        <input class="bg-transparent outline-none w-full" placeholder="نام درخواست و ..." type="text">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.5 2C16.75 2 21 6.25 21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 7.8 4.11 4.6 7.2 3.03" stroke="#0B0B0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 22L20 20" stroke="#0B0B0B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>

                </div>

            </div>
            

    </div>

    <BottomSheets v-model="calendar">
        <DatePicker :show="true" :mode="'range'" :column="1" />
    </BottomSheets>

</template>

<script setup lang="ts">

const calendar=ref(false)

</script>