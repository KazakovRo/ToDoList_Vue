<template>
  <div>
    <ul>
      <ToDoItem
        v-for="(task, index) of todos"
        v-bind:task="task"
        v-bind:key="index"
        v-on:remove-task="removeTask"
        v-on:edit-task="editTask"
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
    },

    editTask(txt) {
      this.$emit('edit-task', txt)
    }
  }
};
</script>

<style lang="scss" scoped>
@import './ToDoList.module.scss'
</style>
