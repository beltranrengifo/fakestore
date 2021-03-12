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
          icon="cart-add"
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
import { mapActions, mapState } from 'vuex'
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
    ...mapState({
      cart: (state: any) => state.shop.cart,
    }),

    validProduct(): boolean {
      return !!Object.keys(this.product).length
    },

    price(): string {
      return `${this.product.price.toFixed(2)} ${this.currency}`
    },
  },

  methods: {
    ...mapActions({
      addToCart: 'shop/addToCart',
    }),

    async handleProductToCart(): Promise<void> {
      const itemIsInCart: boolean = this.cart.find(
        (product: Product) => product.id === this.product.id
      )

      if (itemIsInCart) {
        this.$toast.error(this.$t('shop.productAlreadyInCart') as string)
        return
      }

      await this.addToCart(this.product)
      this.$toast.success(this.$t('shop.productAddedToCart') as string)
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
    transition: box-shadow 200ms ease-out;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);

    &:hover {
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    }
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
