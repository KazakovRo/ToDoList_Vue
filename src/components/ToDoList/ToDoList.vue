<template>
  <div>
    <ul>
      <ToDoItem
        v-for="(task, index) of todos"
        v-bind:task="task"
        v-bind:key="index"
        v-on:remove-task="removeTask"
      />
    </ul>
  </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem/ToDoItem";

export default {
  props: ["todos"],
  components: {
    ToDoItem,
  },
  methods: {
    removeTask(id) {
      this.$emit('remove-task', id)
    }
  }
};
</script>

