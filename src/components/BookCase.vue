<template>
  <div class="book">
    <div class="newheader"><h2>书架</h2></div>
    <div class="main main_top">
      <div class="bookcase">
        <ul>
          <li v-for="bookn in shelf" v-on:click="detai"><img v-bind:src="bookn.img_url"><span>{{bookn.title}}</span></li>      
        </ul>
      </div>
    </div>
    
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'bookcase',
  data () {
    return {
      shelf:[
        {
          img_url:require("../assets/img/200.jpg"),
          title:"极道天魔",
        },
        {
          img_url:require("../assets/img/210.jpg"),
          title:"道君",
        },
        {
          img_url:require("../assets/img/220.jpg"),
          title:"寻情仙使",
        },
        {
          img_url:require("../assets/img/230.jpg"),
          title:"蛊真人",
        },
        {
          img_url:require("../assets/img/250.jpg"),
          title:"聊斋大圣人",
        },
        {
          img_url:require("../assets/img/270.jpg"),
          title:"雪鹰领主",
        },
        {
          img_url:require("../assets/img/280.jpg"),
          title:"铁血德意志",
        },
        {
          img_url:require("../assets/img/320.jpg"),
          title:"原来是镇元",
        },
        {
          img_url:require("../assets/img/300.jpg"),
          title:"牧神记",
        },

      ]
    }
  },
  components: {
    "app-footer":Footer
  },
  methods:{
   detai:function(){
      this.$router.push({path: '/details'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
