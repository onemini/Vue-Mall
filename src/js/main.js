import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
    state:{
        // this.$store.state
        car: car
    },
    mutations:{
        // this.$store.commit('方法的名称', '按需传递唯一的参数')
       

        addToCar(state, goodsinfo){
            var flag = false
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })

            if (!flag) {
                state.car.push(goodsinfo)
            }

            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo){
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem("car", JSON.stringify(state.car))
        },
        removeFormCar(state, id){
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(
                item => {
                    if (item.id == info.id ) {
                        item.selected = info.selected
                    }
                }
            )
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {
        // this.store.getters.***
        //相当于计算属性 也相当于fulters
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                    o[item.id] = item.count
                }
            )
            return o
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})


// MUI
import '../../lib/mui/css/mui.min.css'
import '../../lib/mui/css/icons-extra.css'


import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview';
Vue.use(VuePreview);

import router from './router'

import app from '../App.vue'




var vm = new Vue({
    el: '#app',
    render: c=> c(app),
    router,
    store
})