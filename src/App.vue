<template>
  <div id="app">
     <Header></Header>
     <div class="main">
        <PostList></PostList>
     </div>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from './components/PostList'
export default {
  name: 'app',
  components: {
     Header,
     PostList
  }
}
</script>

<style scoped>
  #app{
    background:  #e1e1e1;
  }
  .main{
  width: 80%;
  margin: 0 auto;
  background: red;
}
</style>
