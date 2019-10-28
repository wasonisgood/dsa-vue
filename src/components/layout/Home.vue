<template>
  <div class="home">
    <Header></Header>
    <router-view :tweetData=loadData></router-view>
    <Footer></Footer> 
    
  </div>
</template>


<script>
import * as d3 from "d3";

export default {
  name:"home",

  data: function() {
    return {
      loadData: []
    };
  },
  mounted() {
    console.log("App loaded");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await d3.json("./tweets.json");
      this.loadData = data;
    }
  }
};
</script>
<style>
.home{
  height: 100%;
  position: fixed;
  width: 100%;
  background: #e9eef8;
  
}
.panel{
  background-color: #fff;
  background-clip: border-box;
  /* box-shadow: inset 0 0 6px rgba(100,100,100,.3); */
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  padding: .5rem 15px;
  min-height: calc(25vh - 3rem);
  
  text-align:left;
}
.iconsm{
  width:25px;
  height:25px;
  margin-left:5px;
  margin-right:5px;
}
hr{
  margin-top:7px !important;
  margin-bottom:7px !important;
  border-width: 3px !important;
} 
.status{
  text-align: right;
  width:25px;
  height:25px;
  margin-left:5px;
}

</style>
