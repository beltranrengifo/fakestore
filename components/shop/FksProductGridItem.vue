<template>
  <article v-if="validProduct" class="product-grid-item">
    <div class="product-grid-item__inner">
      <figure v-if="product && product.image" class="product-grid-item__image">
        <img :src="product.image" alt="product.title" />
      </figure>

      <div class="product-grid-item__content">
        <h2 v-if="product && product.title" class="product-grid-item__title">
          {{ product.title }}
        </h2>

        <p
          v-if="product && product.description"
          class="product-grid-item__description"
        >
          {{ product.description }}
        </p>

        <h3
          v-if="product && product.category"
          class="product-grid-item__category"
        >
          {{ product.category }}
        </h3>

        <p v-if="product && product.price" class="product-grid-item__price">
          {{ price }}
        </p>

        <fks-button
          class="product-grid-item__button"
          @click="handleProductToCart"
        >
          {{ $t('shop.add') }}
        </fks-button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '@/types/types'
import { CURRENCY_SYMBOL } from '@/config/constants'

export default Vue.extend({
  name: 'FksProductGridItem',

  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },

  data() {
    return {
      currency: CURRENCY_SYMBOL as String,
    }
  },

  computed: {
    validProduct(): boolean {
      return !!Object.keys(this.product).length
    },

    price(): string {
      return `${this.product.price.toFixed(2)} ${this.currency}`
    },
  },

  methods: {
    handleProductToCart(): void {
      console.log('btn')
    },
  },
})
</script>

<style lang="scss" scoped>
.product-grid-item {
  &__inner {
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    height: 100%;
    padding: rem(48);
    border: 1px solid get-var(color-lighter-grey);
    border-radius: rem(4);
  }

  &__image {
    width: rem(112);
    max-width: 100%;
  }

  &__title {
    font-size: rem(20);
    font-weight: get-var(font-weight-bold);
    line-height: rem(32);
  }

  &__description,
  &__category,
  &__price {
    margin-top: rem(16);
  }

  &__category,
  &__price {
    line-height: rem(24);
  }

  &__description {
    line-height: rem(18);
  }

  &__category {
    font-weight: get-var(font-weight-bold);
    text-transform: uppercase;
    font-size: rem(12);
  }

  &__price {
    font-size: rem(18);
    color: get-var(color-secondary);
  }

  &__button {
    margin-top: rem(16);
  }
}
</style>
