<template>
  <section class="home">
    <fks-product-grid :products="products" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '@/types/types'

export default Vue.extend({
  name: 'Home',

  async asyncData({ store }): Promise<Object> {
    const products: Array<Product> = await store.dispatch('shop/getAllProducts')
    return { products }
  },
})
</script>
