<template>
  <div class="Item">
    <img :src="item.imageSrc" :alt="item.name" class="ItemImage">
    <div class="ItemDetails">
      <p><strong>{{item.name}}</strong></p>
      <p>Price: <strong>${{item.price}}</strong></p>
    </div>
    <button class="Button" @click="addToCart(item)">Add To Cart</button>
  </div>
</template>
<script>
export default {
    name: 'Shop-Item',
    props: ['item'],
    data() {
        return {};
    },
    methods: {
        // send it notification for components parent  epual to funtion 'update-cart' and value is item
        addToCart(item) {
            this.$emit('update-cart', item);
        }
    }
};
</script>
<style>
</style>