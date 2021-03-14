<template>
  <section class="subheader">
    <fks-breadcrumbs class="subheader__breadcrumbs" />
    <fks-theme-selector class="subheader__theme-selector" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FksSubheader',
})
</script>

<style lang="scss" scoped>
.subheader {
  display: flex;

  &__breadcrumbs,
  &__theme-selector {
    width: 50%;
    justify-content: flex-end;
  }

  &__theme-selector {
    display: flex;
    align-items: center;
  }
}
</style>
