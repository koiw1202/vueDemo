import Vue from "vue" ;
import VueRouter from "vue-router"
import Main from "./components/views/Main.vue"
import About from "./components/views/About.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    mode : "history",
    routes : [
        {
            path:"/", 
            component: Main
        }
        ,{
            path:"/about", 
            component: About
        }
        

    ]

}) ;

export default router ;