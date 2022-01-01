<template>
  <div class="Hello">
    <h3>{{title}}</h3>
    <input type="text" v-model="name">
    <button @click="isShow = ! isShow">show/hide</button>
    <div v-show="isShow">
      {{name}}
    </div>
    <div class="select">
      <select v-model="selected">
        <option v-for="(option,index) in options" :key="index" :value="option.value">
          {{option.text}}
        </option>
      </select>
      <span>price: {{selected}}</span>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Skills',
    data () {
        return {
            title: 'xin chào ',
            name : '',
            isShow: true,
            selected: '50k',
            options: [
                {text:1 , value:'50k'},
                {text:2 , value:'100k'},
                {text:3 , value:'150k'}
            ]
        };
    },
    watch: {
        name:function (newValue,oldValue) {
            console.log(oldValue);
            console.log(newValue);
        }
    }
};
</script>
<style  scoped>
   h3 {
    color: darkblue;
    text-align: center;
  }
  .Hello {
   background-image: url("https://cdn.wallpapersafari.com/15/56/rZJpjL.png")
  }
  .select {
    text-align: center;
    margin-top: 60px;
  }
</style>