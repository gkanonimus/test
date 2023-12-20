<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.ProductID">
        {{ product.ProductName }} - {{ product.Price }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    api.get('/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
