import VueRouter from "vue-router"
// Vue.use(VueRouter)
import homecontainer from "./components/Tabbar/homecontainer.vue"
import membercontainer from "./components/Tabbar/membercontainer.vue"
import shopcarcontainer from "./components/Tabbar/shopcarcontainer.vue"
import searchcontainer from "./components/Tabbar/searchcontainer.vue"
const router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: homecontainer },
        { path: "/member", component: membercontainer },
        { path: "/shopcar", component: shopcarcontainer },
        { path: "/search", component: searchcontainer }

    ],

    linkActiveClass: "mui-active"
})
export default router