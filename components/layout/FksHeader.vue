<template>
  <header class="header">
    <div class="header__inner"></div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FksHeader',
})
</script>

<style lang="scss" scoped>
.header {
  &__inner {
    background-color: get-var(color-primary);
    height: get-var(header-height);
  }
}
</style>
