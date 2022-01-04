<template>
  <div class="status-bar">
      <p>Done</p>
      <ul> 
         <li v-for="todo in doneTodo" :key="todo.id">
             {{todo.title}}
         </li>
      </ul>
  </div>
</template>

<script>
// import {mapGetter} from 'vuex';  
export default {
    name:'Status-bar',
    // computed: mapGetter(['doneTodos'])
    computed: { 
        doneTodos () {
            return this.$store.getter.doneTodos;
        }
    }


};
</script>

<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>