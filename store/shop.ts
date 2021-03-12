import { ActionTree, MutationTree } from 'vuex'
import { Product } from '@/types/types'

export const state = () => ({
  products: [] as Product[],
})

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  async getAllProducts(context): Promise<Product[]> {
    const products = await this.$axios.$get('/products')

    context.commit('SET_PRODUCTS', products)
    return products
  },
}

export const mutations: MutationTree<RootState> = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },
}
