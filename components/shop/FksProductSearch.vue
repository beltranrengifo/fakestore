<template>
  <div class="product-search">
    <fks-search-box
      :placeholder="$t('shop.searchProducts')"
      prepend-icon="glass"
      @input="handleSearch"
    />
    <span v-if="showCountConditions" class="product-search__count">
      <em>{{ $tc('shop.result', count) }}</em>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'FksProductSearch',

  props: {
    showCount: {
      type: Boolean,
      default: false,
    },
    count: {
      type: [Number, Boolean],
      default: false,
    },
    total: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      query: '' as String,
    }
  },

  computed: {
    showCountConditions(): boolean {
      return this.showCount && this.total !== this.count
    },
  },

  methods: {
    ...mapActions({
      setQuery: 'shop/setQuery',
    }),

    handleSearch(value: string) {
      this.setQuery(value)
    },
  },
})
</script>

<style lang="scss" scoped>
.product-search {
  margin-top: rem(8);
  position: sticky;
  top: 80px;

  &__count {
    position: absolute;
    top: 0;
    right: rem(32);
    line-height: rem(40);
    font-style: italic;
  }
}
</style>
