<template>
  <div>
     <h3>ToDo List App</h3>
     <form action="" @submit.prevent>
         <input type="text" :class="input-group-field"
               v-model="newTask"
               @keyup.enter="addTask"
               placeholder="New task">
         <button type="submit" @click="addTask" >add</button>
     </form>
     <div>
            <button class=""
                @click="clearAll">
                <i class=""></i> Clear All
            </button>
            <button class="" @click="CompletedTask"> 
                <i> Completed All</i>
            </button>
        </div>
    <draggable 
        :tasks="tasks"
    >
        <Item v-for="task in tasks" 
            :key="task.id"
            :todo="task"
            @Remove="removeTask"
            @completeTask="completeTask">                    
        </Item>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
import Item from './Item.vue';
import { rand } from '@/services/random';
export default {
    components: { 
        Item,
        draggable,
    },
    name: 'app',
    data () {
        return {           
            newTask: '', 
            msg:'b muosbn thuc hien thao tac',
            tasks: [
                {id:'1' , title:'todo 1' , isCompleted: false},
                {id:'2' , title:'todo 2' , isCompleted: false},
                {id:'3' , title:'todo 3' , isCompleted: false},
                {id:'4' , title:'todo 4' , isCompleted: false}
            ]
        };
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.tasks.push({
                    id: rand.string(16),
                    title: this.newTask,
                    isCompleted: false,
                });
                this.newTask = '';
            }
        },
        clearAll() {
            this.tasks = [];
        },
        removeTask: function (todo) {
            const filterlist = this.tasks.filter(element => element !== todo);
            this.tasks = filterlist;  
            alert(this.msg);
        },
        CompletedTask() {
            this.tasks.forEach(task => {
                task.isCompleted =true;
            }); 
        },
        completeTask: function(tasks){
            tasks.isCompleted =! tasks.isCompleted;
            this.OderTask();
        },
        OderTask: function () {
            let falseArray = this.tasks.filter(item => {
                return item.isCompleted===false;
            });
            let trueArray = this.tasks.filter(item=> {
                return item.isCompleted===true;
            });
            this.tasks = falseArray.concat(trueArray);
        },
    },
    computed: {
        
    }
};
</script>

<style>
</style> 