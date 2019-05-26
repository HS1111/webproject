<template>
 
    <footer>
      <ul>
        <router-link to="/home" tag="li" exact v-on:click="curr"><i class="iconfont icon-shouye_shouye"></i>首页</router-link>
        <router-link to="/evaluation" tag="li" v-on:click="curr"><i class="iconfont icon-pingjia"></i>书评</router-link>
        <router-link to="/bookcase" tag="li" v-on:click="curr"><i class="iconfont icon-weibiaoti3zhuanhuan"></i>书架</router-link>
        <router-link to="/me" tag="li" v-on:click="curr"><i class="iconfont icon-wode"></i>我的</router-link>
      </ul>
    </footer>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  methods:{
    curr:function(){
      $(this).addClass("current").siblings().removeClass("current")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
