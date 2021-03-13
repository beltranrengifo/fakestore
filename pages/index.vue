<template>
  <section class="home">
    <fks-product-search />
    <fks-product-grid :products="products" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '@/types/types'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Home',

  async asyncData({ store }): Promise<Object> {
    await store.dispatch('shop/fetchProducts')

    const products: Array<Product> = store.getters['shop/getProducts']
    return { products }
  },

  data() {
    return {
      products: [],
    }
  },

  computed: {
    ...mapGetters({
      query: 'shop/getQuery',
      filteredProducts: 'shop/getProducts',
    }),
  },

  watch: {
    query() {
      this.products = this.filteredProducts
    },
  },
})
</script>
