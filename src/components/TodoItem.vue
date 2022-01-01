<template>
  <div>
       <p :class="['todo-item' , todo.completed ? 'is-completed' : '']" > {{todo.content}}
            <input  type="checkbox" :checked="todo.completed" @click="checkTodo(item)">   
            <button class="delete">delete</button>
        </p>
  </div>
</template>

<script>

export default { 
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data() {
        return { 
        };
    },
    methods: {
        checkTodo(item) {
            this.$emit('Todo-item',item);
        }
    }
    // removeTask: function(list){
    //   var index = filter(this.index, 1);
    //   return index = []
    // },
};
</script>

<style>
.delete {
    background-color: darkred;
    color: ghostwhite;
    margin: 0;
    padding: 10px;
    border-bottom: 1px;
}
.is-completed {
    text-decoration: line-through;
}
</style>