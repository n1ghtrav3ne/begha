import type { LoginRequestModel } from "~/assets/common/models/Login.model";
import { useCustomFetch } from "~/composables/useCustomFetch";

export async function Login() {
  return await useCustomFetch("/User/loginWithMobile/09123456789", {
    method: "POST",
  });
}
