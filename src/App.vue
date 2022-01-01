<template>
  <div id="app">
    <router-view/>
    <Navbar/>
    <Todos/>
    <Statusbar/>
  </div>
</template>
<script>
import Todos from './components/Todos.vue';
import Navbar from './components/navbar.vue';
import Statusbar from './components/Statusbar.vue';
export default {
    name: 'app',
    components: {
        Todos,
        Navbar,
        Statusbar,
    }
};
</script>
<style  scoped>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
