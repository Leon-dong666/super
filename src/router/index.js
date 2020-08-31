import Vue from 'vue'
import VueRouter from 'vue-router'

// Push版本
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
//Replace版本
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
}

const home=()=>import('../views/home/home.vue')
const category=()=>import('../views/category/category.vue')
const shopcart=()=>import('../views/shopcart/shopcart.vue')
const profile=()=>import('../views/profile/profile.vue')

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/category',
        component:category
    },
    {
        path:'/shopcart',
        component:shopcart
    },
    {
        path:'/profile',
        component:profile
    }

]
const router = new VueRouter({
    routes,
    mode:'history'
    
})

//3.导出
export default router