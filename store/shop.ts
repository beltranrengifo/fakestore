import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Product } from '@/types/types'

export const state = () => ({
  products: [] as Product[],
  cart: [] as Product[],
  query: '' as string,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getProducts({ products, query }): Product[] {
    return products.filter((product: Product) => {
      return product.title.toLowerCase().includes(query.toLowerCase())
    })
  },

  getProductsCount(_, getters): number {
    return getters.getProducts.length
  },

  getCartCount({ cart }): number {
    return cart.length
  },

  getCart({ cart }): Product[] {
    return cart
  },

  getQuery({ query }): string {
    return query
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchProducts({ commit }): Promise<void> {
    let products = []

    try {
      products = await this.$axios.$get('/products')
      commit('SET_PRODUCTS', products)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.info(`Error fetching products: ${e}`)
    }
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

  setQuery({ commit }, payload) {
    commit('SET_QUERY', payload)
  },
}

export const mutations: MutationTree<RootState> = {
  SET_PRODUCTS(state, payload) {
    state.products = [...payload]
  },

  SET_CART(state, payload) {
    state.cart = [...state.cart, payload]
  },

  UNSET_CART(state, payload) {
    state.cart = [...payload]
  },

  SET_QUERY(state, payload) {
    state.query = payload
  },
}
