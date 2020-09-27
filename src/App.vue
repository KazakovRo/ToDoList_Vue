<template>
  <section id="to-do-app">
    <h1>Brilliant To do list</h1>
    <hr />
    <ToDoList 
      v-bind:todos="todos"
      @remove-task="removeTask"
    />
  </section>
</template>

<script>
import ToDoList from "@/components/ToDoList/ToDoList";

export default {
  components: {
    ToDoList,
  },
  data() {
    return {
      todos: [
        { id: 1,
          taskText: "task text 1",
          complete: false },
        { id: 2,
          taskText: "task text 2",
          complete: false },
        {
          id: 3,
          taskText: "task text 3",
          complete: false,
        },
        {
          id: 4,
          taskText: "task text 4",
          complete: false,
        },
      ],
    };
  },
  methods: {
    removeTask(id) {
      this.todos = this.todos.filter(task => task.id !== id)
    }
  }
}
</script>

<style scoped>
#to-do-app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

hr {
  width: 100%;
}
</style>

