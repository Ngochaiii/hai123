<template>
    <button class="btn" :style="{backgroundColor:bgColor}">{{name}}</button>
</template>
<script>
export default {
    name: 'Button',
    props: {
        name: String,
        bgColor: String
    }
};
</script>
<style>

</style>

