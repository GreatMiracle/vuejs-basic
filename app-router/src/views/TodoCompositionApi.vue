<template>
  <div id="app">
    <h1>Todo Composition</h1>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add a new todo"
    />
    <button @click="clearCompleted">Clear Completed</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed" />
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "TodoComposition",
  setup() {
    const store = useStore();
    const newTodo = ref("");

    const todos = computed(() => {
      console.log("this.$store.state.todos", store.state.todos);
      console.log("newTodo", newTodo.value);
      return store.state.todos;
    });

    const completedTodos = computed(() => store.getters.completedTodos);

    const remainingTodos = computed(() => store.getters.remainingTodos);

    const addTodo = () => {
      store.dispatch("addTodo", newTodo.value);
      newTodo.value = "";
    };

    const removeTodo = (todoId) => {
      store.dispatch("removeTodo", todoId);
    };

    const clearCompleted = () => {
      store.dispatch("clearCompleted");
    };

    return {
      newTodo,
      todos,
      completedTodos,
      remainingTodos,
      addTodo,
      removeTodo,
      clearCompleted,
    };
  },
};
</script>
