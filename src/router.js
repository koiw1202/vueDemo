import Vue from "vue" ;
import VueRouter from "vue-router"
import Home from "./components/views/Home.vue"
import About from "./components/views/About.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    mode : "history",
    routes : [
        {
            path:"/", 
            component: Home
        }
        ,{
            path:"/about", 
            component: About
        }
        

    ]

}) ;

export default router ;