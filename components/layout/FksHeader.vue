<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__left">
        <FksHeaderBrand />
      </div>
      <div class="header__right">
        <FksHeaderCart />
      </div>
    </div>
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
  position: sticky;
  top: 0;

  @include breakpoint(sm) {
    margin-top: rem(40);
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: get-var(header-height);
    padding: 0 rem(24);
    background-color: get-var(color-primary);
    @include breakpoint(sm) {
      border-radius: rem(10);
    }
  }
}
</style>
