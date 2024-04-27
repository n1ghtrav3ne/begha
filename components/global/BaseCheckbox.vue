<template>
  <div>
    <form>
      <div class="form-group">
        <input type="checkbox" id="html" />
        <label for="html"></label>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.form-group {
  display: block;
  margin-bottom: 15px;
}

.form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group label {
  position: relative;
  cursor: pointer;
  background-color: transparent;
}

.form-group label:before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid $outline-variant;
  padding: 12px;
  border-radius: 7px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
}

.form-group input:checked + label:before{
background-color: $secondary;
border-radius: 7px;
}

.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 4px;
  left: 11px;
  width: 6px;
  height: 12px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
