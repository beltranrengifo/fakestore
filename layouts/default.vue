<template>
  <section>
    <fks-header />
    <fks-subheader />
    <main role="main">
      <Nuxt />
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'DefaultLayout',

  head() {
    return {
      bodyAttrs: {
        class: `theme-${this.theme}`,
      },
    }
  },

  computed: {
    ...mapGetters({
      theme: 'ui/getTheme',
    }),
  },
})
</script>
