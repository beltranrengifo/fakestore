<template>
  <div class="cart-status">
    <n-link class="cart-status__icon" tag="figure" :to="link">
      <img :src="cartIcon" alt="My cart icon" width="16" height="16" />
    </n-link>
    <p class="cart-status__text">
      {{ $t('shop.myCart') }}
      <span class="cart-status__count"> ({{ count }}) </span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'FksCartStatus',

  props: {
    link: {
      type: Object,
      default: () => null,
    },
  },

  computed: {
    ...mapGetters({
      count: 'shop/getCartCount',
    }),

    cartIcon(): object {
      return require('@/assets/images/cart.svg')
    },
  },
})
</script>

<style lang="scss" scoped>
.cart-status {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__icon {
    width: rem(16);
    height: rem(16);
  }

  &__text {
    margin-left: rem(8);
    color: get-var(color-white);
    font-weight: get-var(font-weight-bold);
    font-size: rem(12);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
}
</style>
