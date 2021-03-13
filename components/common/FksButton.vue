<template>
  <component
    :is="tag"
    class="brand-button"
    :class="[`brand-button--${type}`]"
    @click="handleClick"
  >
    <span class="brand-button__inner">
      <span v-if="icon && getIcon" class="brand-button__icon">
        <img :src="getIcon" alt="cart" width="16" height="16" />
      </span>
      <span v-if="hasDefaultSlot" class="brand-button__text">
        <slot />
      </span>
    </span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Nullable } from '@/types/types'

export default Vue.extend({
  name: 'FksButton',

  props: {
    tag: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'info',
    },
    icon: {
      type: String,
      default: '',
    },
  },

  computed: {
    getIcon(): Nullable<object> {
      try {
        return require(`@/assets/images/${this.icon}.svg`)
      } catch (e) {
        return null
      }
    },

    hasDefaultSlot(): boolean {
      return !!this.$slots.default
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
  transition: background 250ms ease-in-out, transform 150ms ease;
  height: rem(40);
  font-size: rem(12);
  font-weight: get-var(font-weight-bold);
  text-transform: uppercase;
  color: get-var(color-white);
  border-radius: rem(4);
  padding: 0 rem(8);

  &:focus {
    outline-color: get-var(color-tertiary);
  }

  &:hover {
    opacity: 0.9;
  }

  &__inner {
    display: flex;
    align-items: flex-start;
  }

  &__icon {
    width: rem(16);
    height: rem(16);
    margin-right: rem(8);
  }
  &--info {
    background-color: get-var(color-blue-500);
  }
  &--danger {
    background-color: get-var(color-red-500);
  }
}
</style>
