//import Vue from 'vue';
//import VueRouter from 'vue-router';
import Home from '../views/HomeView.vue';
import ManufacturersPage from '../views/ManufacturersPage.vue';
import CategoriesPage from '../views/CategoriesPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import WarehousePage from '../views/WarehousePage.vue';
import OrdersPage from '../views/OrdersPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manufacturers',
    name: 'Manufacturers',
    component: ManufacturersPage
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesPage
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/warehouse',
    name: 'Warehouse',
    component: WarehousePage
  },
  {
    path: '/orders',
    name: 'Orders',
    component: OrdersPage
  }
  // Можно добавить дополнительные маршруты здесь
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
