<template>
  <div class="me">
    <div class="meheader">
      <h3><img v-bind:src=userimg></h3>
      <h4>{{username}}</h4>
      <h5>{{useraddress}}</h5>
    </div>
    <div class="main">
      <div class="conbox">
        <ul>
          <a href="#">
            <li>
              <h3 class="orange"><i class="iconfont icon-qiandao ico-b"></i></h3>
              <p>{{sign}}</p>
              <h4><i class="iconfont icon-jiantou ico-g"></i></h4>
              <div class="clear"></div>
            </li>
          </a>
          <a href="#">
            <li>
              <h3 class="blue"><i class="iconfont icon-chongzhi ico-b"></i></h3>
              <p>{{topup}}</p>
              <h4><i class="iconfont icon-jiantou ico-g"></i></h4>
              <div class="clear"></div>
            </li>
          </a>
          <a href="#">
            <li>
              <h3 class="red"><i class="iconfont icon-goumai ico-b"></i></h3>
              <p>{{pay}}</p>
              <h4><i class="iconfont icon-jiantou ico-g"></i></h4>
              <div class="clear"></div>
            </li>
          </a>
        </ul>
      </div>
      <div class="conbox">
        <ul>
          <a href="#">
            <li>
              <h3 class="green"><i class="iconfont icon-xiaoxi ico-b"></i></h3>
              <p>{{news}}</p>
              <h4><i class="iconfont icon-jiantou ico-g"></i></h4>
              <div class="clear"></div>
            </li>
          </a>
          <a href="#">
            <li>
              <h3 class="yellow"><i class="iconfont icon-shoucang ico-b ico-t"></i></h3>
              <p>{{collection}}</p>
              <h4><i class="iconfont icon-jiantou ico-g"></i></h4>
              <div class="clear"></div>
            </li>
          </a>
          
        </ul>
      </div>
      <div class="conbox">
        <ul>
          <a href="#">
            <li>
              <h3 class="blue"><i class="iconfont icon-set ico-b ico-t"></i></h3>
              <p>{{system}}</p>
              <h4><i class="iconfont icon-jiantou ico-g"></i></h4>
              <div class="clear"></div>
            </li>
          </a>
          <a href="#">
            <li>
              <h3 class="orange"><i class="iconfont icon-bangzhu ico-b ico-t"></i></h3>
              <p>{{feedback}}</p>
              <h4><i class="iconfont icon-jiantou ico-g"></i></h4>
              <div class="clear"></div>
            </li>
          </a>
          
        </ul>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'me',
  data () {
    return {
      
      userimg:require("../assets/img/011.jpg"),
      username:"Jennifer Aniston",
      useraddress:"吉林 长春 LV5",
      sign:"用户签到",
      topup:"账户充值",
      pay:"购买记录",
      news:"我的消息",
      collection:"我的收藏",
      system:"系统设置",
      feedback:"帮助反馈"
    }
  },
  components: {
    "app-footer":Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
