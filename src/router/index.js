import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
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
                main:Article,
                slidebar:SlideBar
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