import Vuex from 'vuex';
import Vue from 'vue';
// import actions from './actions';
// import getters from './getters';
// import mutations from './mutations';
// import state from './state';
import cart from './modules/cart';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    products
  }
});


