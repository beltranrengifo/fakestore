<template>
  <n-link :to="{ path }" tag="button" class="navigate-button">
    <i v-if="icon && getIcon" class="navigate-button__icon">
      <img :src="getIcon" alt="Navigate icon" height="16" width="16" />
    </i>
    <span class="navigate-button__text">
      {{ text }}
    </span>
  </n-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Nullable } from '@/types/types'
export default Vue.extend({
  name: 'FksNavigateButton',

  props: {
    path: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: 'chevron-left',
    },
    text: {
      type: String,
      required: true,
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
  },
})
</script>

<style lang="scss" scoped>
.navigate-button {
  display: flex;
  align-items: center;
  margin: rem(16) 0;

  &__icon {
    height: rem(16);
    width: rem(16);
    margin-right: rem(8);
  }

  &__text {
    color: get-var(color-medium-grey);
    line-height: rem(18);
  }
}
</style>
