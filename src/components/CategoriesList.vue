<template>
  <div>
    <h1>Categories</h1>
    <ul>
      <li v-for="category in categories" :key="category.CategoryID">
        {{ category.CategoryName }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      categories: []
    };
  },
  created() {
    api.get('/categories')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
