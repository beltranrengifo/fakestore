<template>
  <section>
    <FksHeader />
    <main role="main">
      <Nuxt />
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import FksHeader from '@/components/layout/FksHeader.vue'

export default Vue.extend({
  name: 'DefaultLayout',

  components: {
    FksHeader,
  },
})
</script>
