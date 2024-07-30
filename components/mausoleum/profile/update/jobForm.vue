<template>
  <div>
    <div class="mt-5 h-14">
      <baseInput
        label="شغل"
        placeholder="شغل خود را وارد کنید"
        color="white"
        :border="true"
      ></baseInput>
    </div>

    <div class="mt-11">
      <address-picker
        label="آدرس محل کار "
        placeholder="از روی نقشه انتخاب کنید"
      ></address-picker>
    </div>

    <div class="mt-5 h-14">
      <baseInput
        label="تلفن محل کار"
        placeholder="شماره همراه محل کار خود را وارد کنید"
        color="white"
        :border="true"
      ></baseInput>
    </div>

    <div class="mt-11">
      <insurance-picker label="وضعیت بیمه" placeholder="انتخاب کنید">
      </insurance-picker>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "~/components/global/input.vue";
import AddressPicker from "~/components/pickers/addressPickers.vue";
import InsurancePicker from "~/components/pickers/InsurancePicker.vue";
</script>

<style lang="scss" scoped>
</style>