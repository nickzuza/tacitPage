import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Docs from './components/Docs.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/docs', component: Docs }
  ]
})

new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')
