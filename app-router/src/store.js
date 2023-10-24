import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,

      todos: [
        { id: 1, text: "Learn Vue.js", completed: false },
        { id: 2, text: "Build an app", completed: false },
        { id: 3, text: "Use Vuex", completed: false },
      ],
      newTodo: "",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, payload) {
      state.transacion = payload;
    },

    addTodo: (state, newTodos) => {
      state.newTodo = newTodos;

      if (state.newTodo.trim() === "") {
        return;
      } else {
        state.todos.push({
          id: Date.now(),
          text: newTodos,
          completed: false,
        });
        state.newTodo = "";
      }
    },
    removeTodo(state, todoId) {
      state.todos = state.todos.filter((item) => item.id !== todoId);
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },

  actions: {
    async fetchTransaction({ commit }, { id }) {
      const response = await fetch("http://localhost:3000/transactions/" + id);
      const data = await response.json();

      console.log(commit);
      commit("setTransaction", data);
    },

    // setNewTodo: ({ commit }) => {
    //   commit("clearCompleted");
    // },

    addTodo({ commit }, newTodos) {
      console.log("action newTodos", newTodos);
      commit("addTodo", newTodos);
    },

    removeTodo: ({ commit }, todoId) => {
      commit("removeTodo", todoId);
    },

    clearCompleted: ({ commit }) => {
      commit("clearCompleted");
    },
  },

  getters: {
    completedTodos: (state) => {
      return state.todos.filter((todo) => todo.completed);
    },
    remainingTodos: (state) => {
      return state.todos.filter((todo) => !todo.completed);
    },
  },
});

export default store;
