import Vue from "vue"


import Mint from "mint-ui"
Vue.use(Mint)
import "mint-ui/lib/style.css"
// import { Header, Swipe, SwipeItem, Button } from "mint-ui"
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// import { Lazyload } from 'mint-ui';

// Vue.use(Lazyload);

import "mint-ui/lib/style.css"
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"

import VueRouter from "vue-router"
Vue.use(VueRouter)

import VueResource from "vue-resource"
Vue.use(VueResource)

import VuePreview from "vue-preview"
Vue.use(VuePreview)


Vue.http.options.root = 'http://localhost:5000';
Vue.http.options.emulateJSON = true;
// 格式化时间
import moment from "moment"
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

import router from "./router.js"

import app from "./app.vue"

const vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})