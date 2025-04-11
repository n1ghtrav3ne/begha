    <template>
  <div>
    <endowmentShow :data="endowment" link="endowments" />
  </div>
</template>

<script setup>
import endowmentShow from "../assetsAndEndowments/show.vue";
const endowment = ref({
  image: "/carpet2.png",
  title: "فرش ۱۲ متری (۴ تخته) ",
  description:
    "برگزاری مراسم ترحیم در بقعه متبرکه از دیرباز جزیی از این اجرای مراسم ترحیم میباشد.رزرو بقعه متبرکه مراسم ترحیم پس از خاکسپاری و تهیه اقلام پذیرایی.",
  user: {
    name: "سید علی هاشمی",
    date: "۲۲ اردیبهشت ۱۳۰۹",
    code: "۳۷۴۸۲۰۲",
    file: "",
  },
});
</script>

<style lang="scss" scoped>
</style>