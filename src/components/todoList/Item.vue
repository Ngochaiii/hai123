<template>
  <div>
    <input v-model="todo.title" v-show="editting">
        <span :class="{completting: todo.isCompleted}" v-show="!editting">{{todo.title}}</span>
    <button @click="editting=!editting">
        <span v-if="editting">save</span>
        <span v-else>chinh sua</span>
    </button>
        <input  type="checkbox" :checked="todo.isCompleted" @change="isCompleted(todo)" >   
        <button class="delete" @click="Remove(todo)">delete</button>
  </div>
</template>
<script>
export default {
    props:{ 
        todo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editting: false,
        };
    },
    methods: {
        Remove(todo) {
            this.$emit('Remove', todo);
        },
        isCompleted(todo) {
            this.$emit('completeTask',todo);
        }
    },
    computed: {
    }
};
</script>

<style>
.completting{
    text-decoration: line-through;
}
</style>
