<template>
    <div class="Lf">
        <h2>{{title}}</h2>
         <input type="text" :disabled="inputDisabled">
         <button @click="inputDisabled =!inputDisabled">Mo/Khoa</button>
         <div>
             <h3 :class="{dachon: selected}">fhhfhhfhfhf</h3>
             <button @click="selected =! selected">
                 <span v-if="selected">chuyển đổi</span>
                 <span v-else>ban đầu</span>
             </button>
         </div>
    </div>
</template>
<script>
export default {
    name: 'LifeCycle',
    data() {
        return {
            title: 'LifeCycle',
            inputDisabled: true ,
            selected:true,
        };
    }
    
};
</script>
<style scoped>
h2{
    text-align: center;
    color: darkgoldenrod;
}
.dachon {
    color: darkred;
    text-align: center;
}
</style>