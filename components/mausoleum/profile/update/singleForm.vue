<template>
  <div>
    <div>
      <label class="font-normal text-sm text-neutral-800">نقش</label>
      <div
        class="w-full h-14 border border-neutral-200 rounded-lg mt-2 flex items-center p-3"
      >
        {{ props?.data?.role }}
      </div>
    </div>

    <div class="mt-5 h-14">
      <baseInput
        label="نام و نام خانوادگی"
        placeholder="نام و نام خانوادگی خود را وارد کنید"
        color="white"
        :border="true"
      ></baseInput>
    </div>

    <div class="mt-11">
      <label class="font-normal text-sm text-neutral-800">شماره همراه</label>
      <div
        class="w-full h-14 border border-neutral-200 rounded-lg mt-2 flex items-center p-3"
      >
        {{ props?.data?.phone }}
      </div>
    </div>

    <div class="h-14 mt-5">
      <baseInput
        label="کد ملی"
        placeholder="کد ملی ۱۰ رقمی خود را وارد کنید"
        color="white"
        :border="true"
      ></baseInput>
    </div>

    <div class="mt-11">
      <date-picker label="تاریخ تولد" placeholder="روز،ماه،سال" />
    </div>

    <div class="mt-5">
      <state-picker
        label="استان"
        placeholder="استان خود را انتخاب کنید"
        v-model="object.state"
      >
      </state-picker>
    </div>

    <div class="mt-5">
      <city-picker
        label="شهر"
        placeholder="شهر خود را انتخاب کنید"
        v-model="object.city"
        :state="object.state"
      ></city-picker>
    </div>

    <div class="mt-5">
      <education-picker
        label="تحصیلات "
        placeholder="انتخاب کنید"
        v-model="object.education"
        :state="object.education"
      ></education-picker>
    </div>

    <div class="mt-5">
      <address-picker
        label="آدرس محل سکونت "
        placeholder="از روی نقشه انتخاب کنید"
        v-model="object.address"
      ></address-picker>
    </div>

    <div class="mt-5">
      <date-picker label="تاریخ اعتبار شما" placeholder="روز،ماه،سال" />
    </div>
  </div>
</template>

<script setup>
import BaseInput from "~/components/global/input.vue";
import DatePicker from "~/components/pickers/datePicker.vue";
import StatePicker from "~/components/pickers/statePicker.vue";
import CityPicker from "~/components/pickers/cityPicker.vue";
import EducationPicker from "~/components/pickers/educationPicker.vue";
import AddressPicker from "~/components/pickers/addressPickers.vue";
const props = defineProps(["data"]);

const object = reactive({
  state: "",
  city: "",
  education: "",
  address: "",
});
</script>

<style lang="scss" scoped>
</style>