<template>
  <li :class="{ doneTaskColor: task.complete }">
    <span :class="{ done: task.complete }">
      <input type="checkbox" @change="toggleComplete" />

      <input type="text" v-model="task.taskText" v-if="task.editing" />
      <span v-else>{{ task.taskText }}</span>
    </span>

    <span>
      <button @click="saveTask" v-if="task.editing">💾</button>
      <button @click="editTask" v-else>✏️</button>
      <button @click="$emit('remove-task', task.id)">❌</button>
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
  methods: {
    toggleComplete() {
      this.task.complete = !this.task.complete;
    },
    editTask() {
      this.task.editing = true;
    },
    saveTask() {
      this.task.editing = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./ToDoItem.module.scss";
</style>