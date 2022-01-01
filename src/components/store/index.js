import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeData = {
    state: {
        todos: [
            {id:'1' , title:'todo 1' , isCompleted: false},
            {id:'2' , title:'todo 2' , isCompleted: false},
            {id:'3' , title:'todo 3' , isCompleted: false},
            {id:'4' , title:'todo 4' , isCompleted: false}
        ],
        auth: {
            isAuthenticated : false
        }
    }
};

const store = new Vuex.Store(storeData);

export default store;