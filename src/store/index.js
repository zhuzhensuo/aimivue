import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cart from './modules/cart'
import product from './modules/product'
import getters from './getter'
import * as actions from './action'
Vue.use(Vuex)

var store = new Vuex.Store({
    modules:{
        cart,
        product
    },
    getters
})
export default store;