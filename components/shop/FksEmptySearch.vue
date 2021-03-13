<template>
  <section class="empty-search">
    <fks-base-card
      :title="$t('shop.emptySearchTitle')"
      :content="$t('shop.emptySearchContent')"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FksEmptySearch',
})
</script>

<style lang="scss" scoped>
.empty-search {
  width: rem(600);
  max-width: 100%;
  margin: rem(32) auto 0;
}
</style>
