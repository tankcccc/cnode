<template>
  <div class="autherinfo">
      <div class="authersummay">
         <div class="topbar">作者</div> 
         <router-link to="{
            name:'user_info',
            params:{
               name:userinfo.loginname
            }
         }">
         <img :src="user_info.avatar_url" alt="">
         </router-link>
      </div>
      <div class="recent_topics">
         <div class="topbar">作者最近主题</div>
      </div>
      <div class="recent_replies">
         <div class="topbar">作者最近回复</div>
      </div>
  </div>
</template>

<script>
export default {
   name:"SlideBar",
   data(){
      return{
         userinfo:{}
      }
   },
   methods:{
      getData(){
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res=>{
            this.isLoading=false //加载成功，去除动画
            this.userinfo = res.data.data
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
      }
   }
}
</script>

<style>

</style>