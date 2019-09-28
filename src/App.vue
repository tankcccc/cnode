<template>
  <div id="app">
     <Header></Header>
     <div class="main">
        <router-view name="slidebar"></router-view>
        <router-view name="main"></router-view>
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
  max-width: 1400px;
  min-width: 960px;
  margin: 0 auto;
  background: white;
}
</style>
