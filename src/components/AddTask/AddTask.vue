<template>
  <form @submit.prevent="addTask">
    <input type="text" v-model="inputText">
    <button type="submit">Add task</button>
  </form>
</template>

<script>
import {uuid} from "vue-uuid";

export default {
  data() {
    return{
      inputText: ''
    }
  },
  methods: {
    addTask() {
      if (this.inputText.trim()) {
        const newTask = {
          id: uuid.v4(),
          taskText: this.inputText,
          complete: false
        }

        this.$emit('add-task', newTask)
        this.inputText = ''
      }
    }
  }
}
</script>

