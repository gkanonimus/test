<template>
  <div>
    <h1>Orders</h1>
    <OrdersList />
  </div>
</template>

<script>
import OrdersList from '@/components/OrdersList.vue';

export default {
  components: {
    OrdersList
  }
};
</script>
