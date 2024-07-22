<template>
  <div
    ref="otpCont "
    class="w-full flex justify-evenly"
    style="direction: ltr !important"
  >
    <input
      type="text"
      class="size-12 outline-primary rounded-lg border-[1px] border-surface-400 text-center py-3 px-2 text-[22px] text-surface-500"
      v-for="(el, ind) in digits"
      :key="el + ind"
      :id="`input${ind + 1}`"
      v-model="digits[ind]"
      :autofocus="ind + 1"
      maxlength="1"
      @change="handlleFocus(ind, $event)"
      @keydown.delete="handlleKeypress(ind)"
    />
  </div>
  <span class="text-error text-sm" v-if="props.error">
    {{ props.error }}
  </span>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  default: String,
  digitCount: {
    type: Number,
    default: 4,
  },
  error: {
    type: String,
  },
  modelValue: String,
});

const digits = reactive([]);

if (props.default && props.default.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i);
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = "";
  }
}

function handlleFocus(index, e) {
  if (props.digitCount - 1 > index && e.target.value) {
    const element = document.getElementById(`input${index + 1}`);
    const nextElement = document.getElementById(`input${index + 2}`);
    element.removeAttribute("autofocus");
    nextElement.focus();
  }
}

// function handlleKeypress(index, e) {
//   console.log("index", index);
//   digits[index] = null;
//   if (index >= 0) {
//     const digit = digits[index - 1];
//     console.log("digit :", digit);
//     const prevElement = document.getElementById(`input${index}`);
//     prevElement.focus();
//     prevElement.innerHTML = digit;
//     digits[index - 1] = digit;
//     console.log("sdas", digits);
//   }
// }

watch(
  digits,
  (oldVal, newVal) => {
    const sum = digits.reduce((a, b) => a + b);
    console.log("sum", sum);
    emit("update:modelValue", sum);
  },
  { deep: true }
);
const otpCont = ref(null);
</script>

<style scoped>
.digit-box {
  height: 4rem;
  width: 2rem;
  border: 2px solid black;
  display: inline-block;
  border-radius: 5px;
  margin: 5px;
  padding: 15px;
  font-size: 3rem;
}

.digit-box:focus {
  outline: 3px solid black;
}
</style>