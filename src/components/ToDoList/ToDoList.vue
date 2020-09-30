<template>
  <div>
    <ul>
      <ToDoItem
        v-for="(task, index) of todos"
        :key="index"
        :task="task"
        @remove-task="removeTask"
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
    removeTask(taskId) {
      this.$emit("remove-task", taskId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./ToDoList.module.scss";
</style>
