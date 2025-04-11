<template>
  <div>
    <label class="font-normal text-sm text-neutral-800">
      کد ارسال شده به شماره {{ props.phone }} را وارد کنید .
    </label>
    <div class="w-full mt-4">
      <BaseOtp
        v-model="object.code"
        :error="inputError(errors, 'code')"
      ></BaseOtp>
    </div>
    <div class="w-full text-center my-6">
      <span class="text-xs text-neutral-800" @click="emit('changeLevel')"
        >شماره همراه اشتباه است؟</span
      >
      <div class="mt-2">
        <BaseButton color="white">
          <div
            class="text-center bg-primary-700 text-xs"
            @click="getResendCode()"
          >
            دریافت مجدد کد
          </div>
        </BaseButton>
      </div>
    </div>
    <div class="divider"></div>
    <div class="w-full text-center my-6">
      <div>
        <BaseTimer :key="loading"></BaseTimer>
      </div>
      <span class="text-xs text-neutral-800 mt-[6px]"
        >زمان باقی مانده ارسال کد</span
      >
    </div>
    <div class="w-full">
      <BaseButton @click="getVerify()">
        <div class="text-center text-white">ثبت نام</div>
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseOtp from "../global/otp.vue";
import BaseButton from "../global/button.vue";
import BaseTimer from "../global/timer.vue";
defineComponent({ BaseButton, BaseTimer, BaseOtp });
const props = defineProps({
  phone: {
    type: String,
  },
  verificationId: {
    type: String,
  },
});

const emit = defineEmits(["changeLevel"]);

const loading = ref(false);
const errors = ref([]);

const object = reactive({
  code: "",
  verificationId: props.verificationId,
});

const codeRule = computed(() => {
  if (!object.code) {
    errors.value = [
      {
        errors: ["کد نمی تواند خالی باشد ."],
        key: "code",
      },
    ];
    return false;
  } else if (object.code.length < 4) {
    errors.value = [
      {
        error: ["کد باید 4 رقم باشد ."],
        key: "code",
      },
    ];
    return false;
  } else return true;
});

import { useAuthStore } from "@/stores/useAuthStore";
const useAuth = useAuthStore();

async function getVerify() {
  if (codeRule.value) {
    loading.value = true;
    const { data, error } = await useAuth.getVerifyCode(object);
    if (data?.value) {
      console.log("data in send code :", data?.value);
    } else if (error?.value) {
      errors.value = error?.value?.data?.data;
    }
    loading.value = false;
  }
}

async function getResendCode() {
  loading.value = true;
  const { data, error } = await useAuth.getSendCOde({
    cellNumber: String(props.phone),
    deviceId: "1",
  });
  if (data?.value) {
  } else if (error?.value) {
    errors.value = error?.value?.data?.data;
  }
  loading.value = false;
}
</script>

<style lang="scss" scoped>
</style>