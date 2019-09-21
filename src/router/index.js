import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserIofo from '../components/UserIofo'

import { userInfo } from 'os'
Vue.use(Router)

export default new Router({
    routes: [
        {
            name:'root',
            path:'/',
            components:{
                main:PostList //打开根组件，就是postList组件
            }
        },
        {
            name:'post_content',
            path:'/topic/:id',
            components:{
                main:Article
            }
        },
        {
            name:'user_info',
            path:'/userinfo/:name',
            components:{
                main:UserInfo
            }
        }
       
    ]
})