<template>
  <section class="home">
    <fks-product-search
      :count="getProductsCount"
      :total="getTotalProductsCount"
      show-count
    />
    <fks-product-grid v-if="getProductsCount" :products="products" />
    <fks-empty-search v-else class="home__no-search-results" />
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
      getProductsCount: 'shop/getProductsCount',
      getTotalProductsCount: 'shop/getTotalProductsCount',
    }),
  },

  watch: {
    query() {
      this.products = this.filteredProducts
    },
  },
})
</script>
