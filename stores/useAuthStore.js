import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

    async function getSendCOde(object) {
        return await useApi("api/application/account/code", {
            method: "POST",
            body: { ...object },
        });
    }

    async function getVerifyCode(object) {
        return await useApi("api/application/account/verify", {
            method: "POST",
            body: { ...object },
        });
    }

    async function getLoginGuests(object) {
        return await useApi("api/application/account/guest", {
            method: "POST",
            data: { ...object },
        });
    }

    return { getSendCOde, getVerifyCode, getLoginGuests }
})