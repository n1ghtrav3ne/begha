<template>
  <div>
    <AuthTemplate>
      <template v-if="!verify">
        <PhoneNumberLevel
          v-model="object.cellNumber"
          @change-level="getVerifyLevel($event)"
        ></PhoneNumberLevel>
      </template>
      <template v-else>
        <VerifyLevel
          :phone="object.cellNumber"
          :verification-id="verificationId"
          @change-level="verify = true"
        ></VerifyLevel>
      </template>
      <div></div>
    </AuthTemplate>
  </div>
</template>

<script lang="ts" setup>
import AuthTemplate from "./template.vue";
import PhoneNumberLevel from "./phoneNumberLevel.vue";
import VerifyLevel from "./verifyLevel.vue";

defineComponent({ AuthTemplate, PhoneNumberLevel, VerifyLevel });

const verify = ref(false);
const verificationId = ref("");

const object = reactive({
  cellNumber: "",
  deviceId: "",
});

function getVerifyLevel(e: any) {
  verificationId.value = e;
  verify.value = true;
}
</script>

<style lang="scss" scoped>
</style>