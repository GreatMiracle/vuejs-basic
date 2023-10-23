import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, payload) {
      state.transacion = payload;
    },
  },

  actions: {
    async fetchTransaction({ commit }, { id }) {
      const response = await fetch("http://localhost:3000/transactions/" + id);
      const data = await response.json();

      console.log(commit);
      commit("setTransaction", data);
    },
  },
});

export default store;
