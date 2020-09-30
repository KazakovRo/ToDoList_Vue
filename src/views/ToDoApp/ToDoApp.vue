<template>
  <div id="todo-list">
    <h2>To do list</h2>

    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>

    <AddTask :todos="todos" />
    <ToDoList :todos="todos" v-if="todos.length" @remove-task="removeTask" />
    <p v-else>No tasks :)</p>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList/ToDoList";
import AddTask from "@/components/AddTask/AddTask";

export default {
  components: {
    ToDoList,
    AddTask,
  },
  data() {
    return {
      todos: [
        { id: 1, taskText: "task text 1", complete: false, editing: false },
        { id: 2, taskText: "task text 2", complete: false, editing: false },
      ],
    };
  },
  methods: {
    removeTask(taskId) {
      this.todos = this.todos.filter(({ id }) => id !== taskId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./ToDoApp.module.scss";
</style>