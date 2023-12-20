<template>
  <div>
    <h1>Warehouse Stock</h1>
    <ul>
      <li v-for="warehouse in warehouses" :key="warehouse.ProductID">
        Product ID: {{ warehouse.ProductID }} - Quantity: {{ warehouse.Quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      warehouses: []
    };
  },
  created() {
    api.get('/warehouses')
      .then(response => {
        this.warehouses = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
