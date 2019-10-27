<template>
  <div id="app">
    <router-view  /> 
   
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
* {
  margin: 0%;
}
#app {
  font-family:Microsoft JhengHei;
  font-weight:bolder;
  font-size:12pt;
  -webkit-font-smoothing: antialiased;
  height:100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bolder;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
