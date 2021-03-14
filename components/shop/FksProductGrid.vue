<template>
  <div v-if="products" class="product-grid">
    <fks-product-grid-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="product-grid__item"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '@/types/types'

export default Vue.extend({
  name: 'FksProductGrid',

  props: {
    products: {
      type: Array as () => Product[],
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.product-grid {
  display: grid;
  gap: rem(50) rem(50);
  grid-template-columns: repeat(2, 1fr);
  margin: rem(24) 0;
}
</style>
