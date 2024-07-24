import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', () => {

    const dialogShow = ref(false)


    const getDialogShow = computed(() => {
        return dialogShow.value
    })

    function changeDialogStatus(value: boolean) {
        dialogShow.value = value
    }
    return { getDialogShow, changeDialogStatus }
})