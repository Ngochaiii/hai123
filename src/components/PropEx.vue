<template>
    <div id="props">
        <button :name="tnname" bgColor="red">èwefew</button>
        <button :name="tnname" bgColor="green">efgt</button>
        <button :name="tnname" bgColor="blue">vfghbj</button>
    </div>
</template>
<script>
import Button from '@/components/testprops.vue';
export default {
    name: 'PropEx',
    data() {
        return {
            tnname:'hadfdvh',
        };
    },
    components: {
        Button
    }
    
};
</script>
<style>

</style>
