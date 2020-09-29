<template>
  <div id="home-page">
    <h2>Home page</h2>
    <p>This is the homepage of the task manager SPA application.</p>
    
    <img src="../img/logo.png" alt="logo-vue">

    <div class="links">
      <router-link to="/todo-app">Tasks</router-link>
      <router-link to="/about">About</router-link>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import './HomePage.module.scss'
</style>