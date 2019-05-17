import VueRouter from "vue-router"
// Vue.use(VueRouter)
import homecontainer from "./components/Tabbar/homecontainer.vue"
import membercontainer from "./components/Tabbar/membercontainer.vue"
import shopcarcontainer from "./components/Tabbar/shopcarcontainer.vue"
import searchcontainer from "./components/Tabbar/searchcontainer.vue"


import newslist from "./components/news/newslist.vue"
import newsinfo from "./components/news/newsinfo.vue"
import photolist from "./components/photolists/photolist.vue"
const router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: homecontainer },
        { path: "/member", component: membercontainer },
        { path: "/shopcar", component: shopcarcontainer },
        { path: "/search", component: searchcontainer },
        { path: "/home/newslist", component: newslist },
        { path: "/home/newsinfo/:id", component: newsinfo },
        { path: "/home/photolist", component: photolist }


    ],

    linkActiveClass: "mui-active"
})
export default router