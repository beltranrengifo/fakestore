<template>
  <div class="theme-selector">theme</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FksThemeSelector',

  props: {},

  data() {
    return {
      value: '' as String,
    }
  },
})
</script>

<style lang="scss" scoped>
.theme-selector {
}
</style>
