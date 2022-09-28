import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: JSON.parse(localStorage.getItem('goods') || '[]')
  },
  getters: {
    goods: state => state.goods,
  },
  mutations: {
    newGood(state, good) {
      state.goods.push(good)
      localStorage.setItem('goods', JSON.stringify(state.goods))
    },
    deleteGood(state, index) {
    state.goods.splice(index, 1)
    localStorage.setItem('goods', JSON.stringify(state.goods))
    }
  },
  actions: {
    newGood({commit}, good) {
      commit('newGood', good)
    },
    deleteGood({commit}, index) {
      commit('deleteGood', index)
    }
  },
  modules: {
  }
})
