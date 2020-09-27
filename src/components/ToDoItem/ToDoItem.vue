<template>
  <li v-bind:class="{ doneTaskColor: task.complete }">
    <span v-bind:class="{ done: task.complete }">
      <input type="checkbox" v-on:change="task.complete = !task.complete" />
      {{ task.taskText }}
    </span>
    <button v-on:click="$emit('remove-task', task.id)">&times;</button>
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