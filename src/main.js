import Vue from "vue"


// import Mint from "mint-ui"
import { Header, Swipe, SwipeItem } from "mint-ui"
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import "mint-ui/lib/style.css"
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

import VueRouter from "vue-router"
Vue.use(VueRouter)

import VueResource from "vue-resource"
Vue.use(VueResource)

import router from "./router.js"

import app from "./app.vue"

const vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})