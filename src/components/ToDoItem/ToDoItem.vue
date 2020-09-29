<template>
  <li v-bind:class="{ doneTaskColor: task.complete }">
    <span v-bind:class="{ done: task.complete }">
      <input type="checkbox" v-on:change="task.complete = !task.complete" />
      {{ task.taskText }}
    </span>
    <span>
      <button v-on:click="$emit('edit-task', task.taskText)">✏️</button>
      <button v-on:click="$emit('remove-task', task.id)">❌</button>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './ToDoItem.module.scss';
</style>