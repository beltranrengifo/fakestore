<template>
  <n-link class="header-brand" :to="link">
    <FksImage :src="logo" :alt="alt" />
    <h2 class="header-brand__title">{{ $t('header.brand') }}</h2>
  </n-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { LOGO_IMAGE_ALT } from '~/config/constants'

export default Vue.extend({
  name: 'FksHeaderBrand',

  computed: {
    logo(): Object {
      return require('@/assets/images/logo.svg')
    },

    alt(): string {
      return LOGO_IMAGE_ALT
    },

    link(): object {
      return { path: '/' }
    },
  },
})
</script>

<style lang="scss" scoped>
.header-brand {
  display: flex;
  align-items: center;

  &__title {
    margin-left: rem(8);
    color: get-var(color-white);
    font-weight: get-var(font-weight-bold);
    font-size: rem(16);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
}
</style>
