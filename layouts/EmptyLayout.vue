<template>
  <div class="wrapper">
    <div class="empty-layout">
      <VitePwaManifest />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 100vh;
}

.empty-layout {
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow-y: scroll !important;
}
</style>