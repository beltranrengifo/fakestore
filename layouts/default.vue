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

export default Vue.extend({
  name: 'DefaultLayout',
})
</script>
