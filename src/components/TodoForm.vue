<template>
<div>
    <form @submit="onSubmit">
        <input type="text" v-model="title"/>
        <input type="submit" value="add"/>
    </form>
</div>

</template>

<script>
import {mapActions} from 'vuex';
import {v4 as uuidv4} from 'uuid';
export default {
    name: 'todoForm',
    data() {
        return {
            title: ''
        };
    },
    methods: {...mapActions(['addTodo']),// addTodo() this.$store.dispatch('addTodo')
        onSubmit(event) {
            event.preventDefault();
            this.addTodo({
                id: uuidv4(),
                title: this.title,
                isCompleted: false,
            });
            this.title= '';
        }
    }
};
</script>
<styke>
</styke>