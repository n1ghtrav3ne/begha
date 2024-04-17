import type { LoginResponseModel } from "../assets/common/models/Login.model";
import type { AuthenticateModel } from "../assets/common/models/authenticate.model";
import { defineStore } from "pinia";

export const credentialStore = defineStore('credential', {
  state: () => ({
    loginInfo: {} as LoginResponseModel,
    userInfo: {} as AuthenticateModel | null
  }),
  getters: {
    isLogin(): boolean {
      return this.loginInfo.accessToken ? true : false;
    },
    isLoginUser(): boolean {
      return this.userInfo && this.userInfo.accessToken ? true : false
    }
  },
  actions: {
    setToken(token: LoginResponseModel) {
      this.loginInfo = token;

    }
  },
  persist: {
      key: "credential",
      storage: localStorage,
  },

})
