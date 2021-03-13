<template>
  <section class="empty-cart">
    <fks-base-card
      :title="$t('shop.emptyCartTitle')"
      :content="$t('shop.emptyCartContent')"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FksEmptyCart',
})
</script>

<style lang="scss" scoped>
.empty-cart {
  width: rem(600);
  max-width: 100%;
  margin: 0 auto;
}
</style>
