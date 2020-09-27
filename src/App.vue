<template>
  <section id="to-do-app">
    <h1>Brilliant To do list</h1>
    <AddTask 
      @add-task="addTask"
    />
    <hr />
    <ToDoList 
      v-bind:todos="todos"
      @remove-task="removeTask"
    />
  </section>
</template>

<script>
import ToDoList from "@/components/ToDoList/ToDoList";
import AddTask from '@/components/AddTask/AddTask';

export default {
  components: {
    ToDoList,
    AddTask
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
      ],
    };
  },
  methods: {
    removeTask(id) {
      this.todos = this.todos.filter(task => task.id !== id)
    },
    addTask(task) {
      this.todos.push(task)
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

