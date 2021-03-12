<template>
  <component
    :is="tag"
    v-bind="buttonProps"
    class="brand-button"
    @click="handleClick"
  >
    <span class="brand-button__inner">
      <slot />
    </span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FksButton',

  props: {
    tag: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: '',
    },
    buttonProps: {
      type: Object,
      default: () => null,
    },
  },

  methods: {
    handleClick(): void {
      this.$emit('click')
    },
  },
})
</script>

<style lang="scss" scoped>
.brand-button {
  /* reset */
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: background 250ms ease-in-out, transform 150ms ease;
  cursor: pointer;
  box-shadow: none;
  border: none;
  // styles
  background-color: get-var(color-blue-500);
  height: rem(40);
  font-family: get-var(font-sans);
  font-size: rem(12);
  font-weight: get-var(font-weight-bold);
  text-transform: uppercase;
  color: get-var(color-white);
  border-radius: rem(4);
  padding: 0 rem(8);

  &:focus {
    outline-color: get-var(color-tertiary);
  }
}
</style>
