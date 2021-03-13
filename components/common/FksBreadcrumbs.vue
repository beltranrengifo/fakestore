<template>
  <div class="breadcrumbs">
    <n-link to="/" class="breadcrumbs__home-path">
      <img src="@/assets/images/home.svg" alt="Go home" />
      <span>Home</span>
    </n-link>

    <n-link
      v-for="item in breadcrumbs"
      :key="item.path"
      :to="item.path"
      class="breadcrumbs__item"
    >
      <span class="breadcrumbs__separator">{{ separator }}</span>
      <span class="breadcrumbs__path">{{ getPath(item.path) }}</span>
    </n-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { capitalize } from '@/utils/strings'

export default Vue.extend({
  name: 'FksBreadcrumbs',

  data() {
    return {
      separator: '/' as string,
    }
  },

  computed: {
    breadcrumbs(): any {
      return this.$route.matched.filter((e) => e.path)
    },

    getPath(): Function {
      return (path: string) => capitalize(path.replace('/', ''))
    },
  },
})
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: rem(16) rem(16) rem(16) 0;

  .nuxt-link-active {
    color: get-var(color-tertiary);
  }

  .nuxt-link-exact-active {
    color: get-var(color-base);
    cursor: text;
  }

  &__home-path {
    display: flex;
    align-items: flex-start;

    img {
      height: rem(16);
      width: rem(16);
    }

    span {
      margin-left: rem(8);
    }
  }

  &__item {
    display: flex;
  }

  &__separator {
    margin: 0 rem(8);
  }
}
</style>
