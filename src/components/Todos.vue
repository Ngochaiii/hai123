<template>
  <div class="todo-list">
    <TodoForm />
      <ul v-if="auth.auth.isAuthenticated">
          <li v-for="todo in todos" :key="todo.id" :class="todo.isCompleted ? 'completed' : ''">
              {{todo.title}}
            <input type="checkbox"  :checked="todo.isCompleted" @change="markTodo(todo.id)"/>
             <button @click="deleteTodo()">DELETE</button>
          </li>
      </ul>
      <p v-else style="text-align: center;"> not authorised</p>
  </div>
</template>

<script>
import {TodoForm} from './components/TodoForm.vue';
import {mapState} from 'vuex';
import {mapActions} from 'vuex';
export default {
    name:'Todos',
    components: {TodoForm},
    computed: mapState(['todos', 'auth']),
    created() {
        this.getTodos();
    },
    methods: {
        markTodo(todoID) {
            this.$store.commit('MARK_COMPLETE',todoID);
        },
        deleteTodo(todoID){
            this.$store.dispatch('deleteTodo',todoID);
        },
        ...mapActions(['getTodos'])
    }
};
</script>

<style>
.todo-list ul {
 padding: 0 10px 10px 10px;
 list-style-type: none;
}

.todo-list li {
 padding: 10px;
 cursor: pointer;
 margin: 10px 0;
 border-radius: 4px;
 background: rgb(240, 240, 240);
 color: black;
}

.todo-list li input[type='checkbox'] {
 -ms-transform: scale(2); 
 -moz-transform: scale(2); 
 -webkit-transform: scale(2); 
 -o-transform: scale(2); 
 transform: scale(2);
 padding: 10px;
 float: right;
}

.todo-list li.completed {
 background: rgb(119, 218, 243);
}
.todo-list li button:hover {
 cursor: pointer;
 background: red;
 color: white;
}
</style>
