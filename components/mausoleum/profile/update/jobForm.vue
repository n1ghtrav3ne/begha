<template>
  <div>
    <div class="mt-5 h-14">
      <text-field label="شغل" placeholder="شغل خود را وارد کنید"></text-field>
    </div>

    <div class="mt-11">
      <address-picker
        label="آدرس محل کار "
        placeholder="از روی نقشه انتخاب کنید"
      ></address-picker>
    </div>

    <div class="mt-5 h-14">
      <text-field
        label="تلفن محل کار"
        placeholder="شماره همراه محل کار خود را وارد کنید"
      ></text-field>
    </div>

    <div class="mt-11">
      <insurance-picker label="وضعیت بیمه" placeholder="انتخاب کنید">
      </insurance-picker>
    </div>
  </div>
</template>

<script setup>
import AddressPicker from "~/components/pickers/addressPickers.vue";
import InsurancePicker from "~/components/pickers/InsurancePicker.vue";
</script>

<style lang="scss" scoped>
</style>