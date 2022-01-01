<template>
    <div class="container">
        <h2 class="text-center mt-5"> THIS IS MY TODO LIST APP</h2>
        <div class="d-flex">
          <form action="" @submit.prevent="create">
            <input v-model="taskName" type="text " placeholder="Enter_Task" class="form-control">
            <button class="add-task"> Submit</button>
          </form>  
        </div>
<!-- task Table -->
        <table class="table table-bordered mt-5">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center">sửa</th>
      <th scope="col" class="text-center">xóa</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="task in tasks" :key="task.id">
      <td>
          <input v-if="task.editing" v-model="task.name" class="pointer">
          <span v-else @click="changeStatus" class="pointer">{{task.name}}</span>
          </td>
      <td>{{ task.status }}</td>
      <td>
          <button v-if="task.editing" class="btn btn-success" @click="update(task)">
              save
          </button>
          <button v-else class="btn btn-primary" @click="edit(task)">
              <span class="fa fa-pen"></span>
          </button>
      </td>
      <td>
          <div class="text-center" @click="remove(index)">
              <span class="fa fa-trash"></span>
          </div>
      </td>
    </tr>
  </tbody>
</table>
    {{randString}}
  </div>
</template>
<script>
import { rand } from '@/services/random';
export default {
    name: 'Todo',
    data () {
        return {
            taskName: '',
            editedTask: null,
            statuses: ['idle', 'doing', 'finished'],
            tasks: []
        };
    },
    methods: {
        create () {
            this.tasks.push({
                id: rand.string(16),
                name: this.taskName,
                status: 'idle',
                editing: false
            });
        },
        edit (task) {
            task.editing = true;
        },
        update (task) {
            task.editing = false;
        },
        changeStatus (index) {
            let newIndex = this.statuses.indexOf(this.tasks[index].status);
            if (++newIndex > 2) newIndex = 0;
            this.tasks[index].status = this.statuses[newIndex];
        },
    
    
    
        editTask (index) {
            this.task = this.tasks[index].name;
            this.editedTask = index;
        }
    
    
    }
};

</script>
<style >

</style>
