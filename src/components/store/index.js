
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
// im port modules 
import auth from './modules/auth.js'


Vue.use(Vuex);

const storeData = {
    modules: {
        auth
    },
    state: {
        todos: [ ],
        auth: {
            isAuthenticated : false
        }
    },
    getter: {
        doneTodos: state => state.todos.filter(todo => todo.isCompleted)
    }, 
    Mutations: {
       
        MARK_COMPLETE(state , todoID) {
            state.todos.map(todo => {
                if (todo.id=== todoID ) todo.isCompleted =! todo.isCompleted;
                return todo;
            });
        },
        DELETE_TODO(state , todoID) {
            state.todo = state.todo.filter(todo =>todo.id !== todoID);
        },
        ADD_TODO(state, newTodo) {
            state.todos.unshift(newTodo);
        },
        SET_TODOS(state,todos) {
            state.todo=todos;
        }
    },
    Actions: {
        async deleteTodo(context,todoID) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoID}`);
                context.commit('DELETE_TODO' , todoID);
            }
            catch (error){
                console.log(error);
            }
            
        },
        addTodo(context,newTodo) {
            context.commit('ADD_TODO', newTodo);
        },
        async getTodos({commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
                commit('SET_TODOS',response.data);
            }
            catch(error) {
                console.log(error);
            }
        }
    }

};

const store = new Vuex.Store(storeData);

export default store;