<template>
  <div class="article">
      <!-- 在数据未返回的时候，显示这个正在加载的gif -->
       <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif" >
       </div>
       <div v-else>
           <!-- 文章 -->
           <div class="topic_header">
               <div class="topic_title">{{post.title}}</div>
               <ul>
                   <li>*发布于:{{post.create_at | formatDate}}</li>
                   <li>*作者：{{post.author.loginname}}</li>
                   <li>*{{post.visit_count}} 次浏览</li>
                   <li>*来自{{post | tabFormatter}}</li>
               </ul>
               <div v-html="post.content" class="topic_content"></div>
           </div>
       </div>
       <div id="reply">
         <div class="topbar">回复</div>
         <div v-for="(reply,index) in post.replies">
           <div class="replyUp">
             <router-link :to="{
               name:'user_info',
               params:{
                 name:reply.author.loginname
               }
             }">
                 <img :src="reply.author.avatar_url" alt="">
             </router-link>
             <!-- 需要每个用户的登陆的名字 -->
              <span>
                {{reply.author.loginname}} 
              </span>
              <span>
                {{index+1}}楼
              </span>
              <p v-html="reply.content"></p>
           </div>
         </div>
       </div>
  </div>
</template>

<script>
export default {
    name:"Article",
    data(){
        return{
            isLoading:false,//是否正在加载
            post:[] //代表当前文章页的所有内容，所有属性
        }
    },
    methods:{
      getArticleData(){
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`) //因为作为参数传递过来，需要获取路由
          .then(res=>{
            if(res.data.success == true){
              this.isLoading = false
              this.post = res.data.data
              console.log(res)
            }
          })
          .catch(err=>{
            console.log(err)
          })
      }
    },
    beforeMount(){
      this.isLoading = true
      this.getArticleData()
    },
    // 这里是侧边栏只是路由参数的变化，同一个路由是检测不到变化的，所以需要watch这个方法
    watch:{
          '$route'(to,from){
            this.getArticleData()
          }
      }
}
</script>

<style>
    .article{
      margin-right: 305px;
    }
    @import url('../assets/markdown-github.css');
    
    .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }
  .article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
  }

  #reply, .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:0 10px;
  }
  .loading {
    text-align: center;
    padding-top: 300px;
  }
  .replyUp{
    border-bottom: 1px solid #f5f5f5;
    margin-left: 12px;
  }
  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }

  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 0 10px;
  }
  /* 这里css不是很清楚 */
  pre{
    word-break:break-all;
    word-wrap: break-word;
    white-space: pre-wrap;
    
  }
  .markdown-text img {
    width: 92% !important;
  }
</style>