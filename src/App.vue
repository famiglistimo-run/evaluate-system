<template>
  <div id="app">
    <schooltopbar></schooltopbar>
    <router-view />
  </div>
</template>

<script>
import schooltopbar from './components/schooltopbar.vue'
export default {
  components: { schooltopbar },
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
