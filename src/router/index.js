import Vue from 'vue';
import Router from 'vue-router';

import ToDo from '@/views/ToDo.vue';
import News from '@/views/News.vue';
import LifeCycle from '@/components/LifeCycle.vue';
import Skills from '@/components/Skills.vue';

import EX from '@/components/EX.vue';
import PropEx from '@/components/PropEx.vue';
import ListTodo from '@/views/ListTodo.vue';
import ToDolist from '@/components/todoList/TodoList.vue';
import ToDoItem from '@/views/ToDoItem.vue';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/news',
            name: 'News',
            component: News
        },
        {
            path: '/lifeCycle',
            name: 'LifeCycle',
            component: LifeCycle
        },
        {
            path: '/skills',
            name: 'Skills',
            component: Skills
        },
   
        {
            path: '/EX',
            name: 'EX',
            component: EX
        },
        {
            path: '/Pr',
            name: 'PropEx',
            component: PropEx
        },
        {
            path: '/todo',
            name: 'Todo',
            component: ToDo
        },
        {
            path: '/TD',
            name: 'ToDolist',
            component: ListTodo
        },
        {
            path: '/app',
            name: 'app',
            component: ToDolist
        },
        {
            path: '/ToDoItem',
            name: 'Todo',
            component: ToDoItem
        }
    ]
});
