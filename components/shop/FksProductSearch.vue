<template>
  <div class="product-search">
    <fks-search-box
      :placeholder="$t('shop.searchProducts')"
      prepend-icon="glass"
      @input="handleSearch"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'FksProductSearch',

  data() {
    return {
      query: '' as String,
    }
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
  top: 80;
}
</style>
