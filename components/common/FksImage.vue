<template>
  <component
    :is="imgComponent"
    v-bind="imgProps"
    class="brand-logo"
    :style="styles"
  >
    <img :src="src" :alt="alt" :width="width" :height="height" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { DEFAULT_IMAGE_ALT } from '@/constants'
import { Nullable } from '@/types/types'

export default Vue.extend({
  name: 'FksImage',

  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: DEFAULT_IMAGE_ALT,
    },
    width: {
      type: [String, Number],
      default: 38,
    },
    height: {
      type: [String, Number],
      default: 38,
    },
    link: {
      type: [String, Object],
      default: () => null,
    },
  },

  computed: {
    imgComponent(): string {
      return this.link ? 'n-link' : 'figure'
    },

    imgProps(): object | Nullable<null> {
      return this.imgComponent === 'n-link' ? { to: this.link } : null
    },

    styles(): object {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      }
    },
  },
})
</script>
