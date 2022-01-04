<template>
  <div class="navbar">
      <h1>My Vuex app Todos</h1>
      <ul>
          <li>Home</li>
          <li>About</li>
          <li v-if="auth.auth.isAuthenticated">TotalTodos :{{todos.length}}
              <button @click="TOGGLE_AUTH">logout</button>
          </li>
          <button v-else @click="TOGGLE_AUTH">login</button>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {mapMutatios} from 'vuex';
export default {
    name: 'Navbar',
    computed: mapState(['todos', 'auth']),
    method: mapMutatios(['TOGGLE_AUTH']),
    
};
</script>

<style>
.navbar {
 padding: 5px;
 text-align: center;
 background: rgb(240, 240, 240);
 color: black;
}

.navbar ul {
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
 padding: 0;
}
h1 {
color:darksalmon
}
</style>