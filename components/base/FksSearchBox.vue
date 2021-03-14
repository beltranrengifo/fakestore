<template>
  <div class="search-box">
    <span v-if="prependIcon && getIcon" class="search-box__prepend-icon">
      <img :src="getIcon" alt="Search icon" width="16" height="16" />
    </span>
    <input
      v-model="value"
      type="text"
      class="search-box__input"
      :placeholder="placeholder"
      @input="handleChange"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Nullable } from '@/types/types'

export default Vue.extend({
  name: 'FksSearchBox',

  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
    prependIcon: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      value: '' as String,
    }
  },

  computed: {
    getIcon(): Nullable<object> {
      try {
        return require(`@/assets/images/${this.prependIcon}.svg`)
      } catch (e) {
        return null
      }
    },
  },

  methods: {
    handleChange(): void {
      this.$emit('input', this.value)
    },
  },
})
</script>

<style lang="scss" scoped>
.search-box {
  position: relative;

  &__input {
    display: block;
    width: 100%;
    border-radius: rem(10);
    background-color: get-var(color-lighter-grey);
    padding-left: rem(48);
  }

  &__prepend-icon {
    position: absolute;
    left: rem(24);
    display: flex;
    align-items: center;
    height: 100%;
    width: rem(16);
  }
}
</style>
