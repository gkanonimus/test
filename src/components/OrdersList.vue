<template>
  <div>
    <h1>Orders</h1>
    <ul>
      <li v-for="order in orders" :key="order.OrderID">
        Order ID: {{ order.OrderID }} - Product ID: {{ order.ProductID }} - Quantity: {{ order.Quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      orders: []
    };
  },
  created() {
    api.get('/orders')
      .then(response => {
        this.orders = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
