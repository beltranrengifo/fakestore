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
          :icon="getButtonIcon"
          :type="getButtonType"
          @click="handleProductInCart"
        >
          {{ getButtonText }}
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
      inCart: false as Boolean,
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

    getButtonText(): string {
      return this.inCart
        ? (this.$t('shop.remove') as string)
        : (this.$t('shop.add') as string)
    },

    getButtonType(): string {
      return this.inCart ? 'danger' : 'info'
    },

    getButtonIcon(): string {
      return this.inCart ? 'cart-remove' : 'cart-add'
    },
  },

  created() {
    this.checkProductInCart()
  },

  methods: {
    ...mapActions({
      addToCart: 'shop/addToCart',
      removeFromCart: 'shop/removeFromCart',
    }),

    async handleProductInCart(): Promise<void> {
      if (this.inCart) {
        await this.removeFromCart(this.product)
        this.$toast.info(this.$t('shop.productRemovedFromCart') as string)

        this.inCart = false
        return
      }

      await this.addToCart(this.product)
      this.$toast.success(this.$t('shop.productAddedToCart') as string)

      this.inCart = true
    },

    checkProductInCart(): Boolean {
      this.inCart = this.cart.some(
        (product: Product) => product.id === this.product.id
      )

      return this.inCart
    },
  },
})
</script>

<style lang="scss" scoped>
.product-grid-item {
  &__inner {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    height: 100%;
    padding: rem(16);
    border: 1px solid get-var(color-lighter-grey);
    border-radius: rem(4);
    transition: box-shadow 200ms ease-out;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);

    &:hover {
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    }

    @include breakpoint(sm) {
      grid-template-columns: 40% 60%;
      padding: rem(48);
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
