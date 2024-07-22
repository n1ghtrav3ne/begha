<template>
  <div>
    <BaseInput
      label=" کاربر گرامی لطفا شماره خود را وارد کنید ."
      placeholder="مثال : ۰۹۱۲۳۴۵۶۷۸۹"
      v-model="object.cellNumber"
      :error="inputError(errors, 'cellNumber')"
      @change="emit('update:modelValue', object.cellNumber)"
    >
    </BaseInput>
    <div class="mt-8">
      <BaseButton @click="getCode()">
        <div class="text-center text-white">بعدی</div>
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "../global/input.vue";
import BaseButton from "../global/button.vue";
defineComponent({ BaseInput, BaseButton });

const emit = defineEmits(["update:modelValue", "changeLevel"]);
const loading = ref(false);
const errors = ref([]);

const object = reactive({
  cellNumber: "",
  deviceId: "1",
});

const phoneRule = computed(() => {
  if (!object.cellNumber) {
    errors.value = [
      {
        errors: ["شماره تلفن نمی تواند خالی باشد ."],
        key: "cellNumber",
      },
    ];
    return false;
  } else if (object.cellNumber.length < 11) {
    errors.value = [
      {
        errors: ["شماره تلفن باید 11 رقم باشد"],
        key: "cellNumber",
      },
    ];
    return false;
  } else return true;
});
import { useAuthStore } from "@/stores/useAuthStore";
const useAuth = useAuthStore();
async function getCode() {
  if (phoneRule.value) {
    loading.value = true;
    object.cellNumber = String(object.cellNumber);
    const { data, error } = await useAuth.getSendCOde(object);
    if (data?.value) {
      emit("changeLevel", data.value.verificationId);
    } else if (error?.value) {
      errors.value = error?.value?.data?.data;
    }
    loading.value = false;
  }
}
</script>

<style lang="scss" scoped>
</style>