<template>
  <section class="cart">
    <fks-navigate-button text="Continue shopping" path="/" />
    <fks-product-grid :products="products" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Cart',

  computed: {
    ...mapGetters({
      products: 'shop/getCart',
    }),
  },
})
</script>
