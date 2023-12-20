<template>
  <div>
    <h1>Manufacturers</h1>
    <ul>
      <li v-for="manufacturer in manufacturers" :key="manufacturer.ManufacturerID">
        {{ manufacturer.ManufacturerName }} - {{ manufacturer.Country }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api'; // Предполагается, что вы создали api.js

export default {
  data() {
    return {
      manufacturers: []
    };
  },
  created() {
    api.get('/manufacturers')
      .then(response => {
        this.manufacturers = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
