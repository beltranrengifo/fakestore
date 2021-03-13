<template>
  <article class="base-card">
    <div class="base-card__inner">
      <h2 v-if="title" class="base-card__title">{{ title }}</h2>
      <p v-if="content" class="base-card__content">{{ content }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FksBaseCard',

  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.base-card {
  &__inner {
    padding: rem(48);
    border: 1px solid get-var(color-lighter-grey);
    border-radius: rem(4);
  }

  &__title {
    font-size: rem(20);
    font-weight: get-var(font-weight-bold);
    line-height: rem(32);
  }

  &__content {
    margin-top: rem(16);
  }
}
</style>
