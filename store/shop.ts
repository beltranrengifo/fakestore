import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Product } from '@/types/types'

export const state = () => ({
  products: [] as Product[],
  cart: [] as Product[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getCartCount({ cart }): number {
    return cart.length
  },

  getCart({ cart }): Product[] {
    return cart
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async getAllProducts({ commit }): Promise<Product[]> {
    const products = await this.$axios.$get('/products')

    commit('SET_PRODUCTS', products)
    return products
  },

  addToCart({ commit }, payload: Product): void {
    commit('SET_CART', payload)
  },

  removeFromCart({ commit, state }, payload: Product): void {
    const cart = [...state.cart]
    const index = cart.findIndex((product) => product.id === payload.id)
    cart.splice(index, 1)
    commit('UNSET_CART', cart)
  },
}

export const mutations: MutationTree<RootState> = {
  SET_PRODUCTS(state, payload) {
    state.products = payload
  },

  SET_CART(state, payload) {
    state.cart = [...state.cart, payload]
  },

  UNSET_CART(state, payload) {
    state.cart = [...payload]
  },
}
