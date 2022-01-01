<template>
<div id="watch">
    <p>make question</p>
    <input type="text" v-model="question">
    {{answer}}
</div>
    
</template>
<script>
import axios from 'axios';
export default {
    name: 'EX',
    data() {
        return{
            question: '',
            answer: 'no answer'
        };
    },
    watch: {
        question: function( newQuestion ,oldQuestion){
            if (newQuestion.indexOf('?')>-1){
                this.getAnswer();
            }
            console.log(newQuestion);
            console.log(oldQuestion);
        }
    },
    methods: {
        getAnswer() {
            this.answer= 'Thingking.....',
            axios 
                .get('https://yesno.wtf/api')    
                .then(response =>{
                    this.answer= response.data.answer;
                })
                .catch(error => {
                    this.answer ='Error this is not Api' + error;
                });
        }
    }
};
</script>
<style >

</style>