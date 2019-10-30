<template>
  <div class="home">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/header.vue'
import Footer from '@/components/footer/footer.vue'
export default {
  name: 'home',
  components: {
    Header,
    Footer
  },
  

}
</script>
<style>
.home{
  height: 100%;
  position: fixed;
  width: 100%;
  background: #e9eef8;;
}
  
</style>
