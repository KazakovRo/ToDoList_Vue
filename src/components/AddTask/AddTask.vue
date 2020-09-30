<template>
  <div class="add-task">
    <input type="text" v-model="inputText" />
    <button type="submit" @click="addTask">Add task</button>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  props: ["todos"],
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    addTask() {
      if (this.inputText.trim().length) {
        const newTask = {
          id: uuid.v4(),
          taskText: this.inputText,
          complete: false,
          editing: false,
        };

        this.todos.push(newTask);
        this.inputText = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./AddTask.module.scss";
</style>

