<template>
  <div class="header-cart">
    <fks-cart-status :link="link" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FksHeaderCart',

  computed: {
    link(): object {
      return { path: '/cart' }
    },
  },
})
</script>

<style lang="scss" scoped>
.header-cart {
}
</style>
