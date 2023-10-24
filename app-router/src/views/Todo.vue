<template>
  <div id="app">
    <h1>Todo List</h1>
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
export default {
  name: "TodoVue",
  data: function () {
    return {
      newTodo: "",
    };
  },
  computed: {
    todos() {
      console.log("this.$store.state.todos", this.$store.state.todos);
      console.log("newTodo", this.newTodo);

      return this.$store.state.todos;
    },
    completedTodos() {
      return this.$store.getters.completedTodos;
    },
    remainingTodos() {
      return this.$store.getters.remainingTodos;
    },
  },
  methods: {
    addTodo() {
      console.log(this.newTodo);
      this.$store.dispatch("addTodo", this.newTodo);
      this.newTodo = "";
    },
    removeTodo(todoId) {
      this.$store.dispatch("removeTodo", todoId);
    },
    clearCompleted() {
      this.$store.dispatch("clearCompleted");
    },
  },
};
</script>
