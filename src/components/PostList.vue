<template>
    <div>
        <!-- 数据真在加载 -->
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif">
        </div>
        <!-- 主题列表 -->
        <div>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'postList',
    data(){
        return{
            isLoading:false,
            posts:[] //代表页面的列表数据
        }
    },
    methods:{
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics',{
                page:1,
                limit:20
            }).then(res=>{
                this.isLoading=false //加载成功，去除动画
                this.posts = res.data.data
                console.log(res)

            }).catch(err=>{
                console.log(err)
            })
        }
    },
    beforeMount(){
        this.isLoading=true //加载成功之前显示加载动画
        this.getData();//在页面加载之前获取数据
    }
}
</script>

<style>

</style>