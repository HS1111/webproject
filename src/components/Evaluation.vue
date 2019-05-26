<template>
  <div class="evaluation">
    <div class="newheader"><h2>书评</h2></div>
    <div class="main main_top">
      <div class="review" v-for="comment in comments">
        <div class="review_title">
          <img v-bind:src="comment.img_url">
          <span>{{comment.name}}</span>
          <strong>{{comment.title}}</strong>
        </div>
        <div class="clear"></div>
        <p>{{comment.content}}</p>
        <h4><i class="iconfont icon-zan icon-sm"></i><b>{{comment.praise}}</b><strong>{{comment.data}}</strong></h4>
        <div class="clear"></div>
      </div>
    </div>
     <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'evaluation',
  data () {
    return {
      comments:[
        {
          img_url:require("../assets/img/008.jpg"),
          name:"GSG9",
          title:"书名：《凡人修仙传》",
          content:"订阅加月票能支持的就这么多了，作者加油。难得的一本好书。看了单章深感写手的不容易。这本书是真的很用心了。在现在这种写作氛围里，难得。作者加油。千万不要因为成绩而放弃写作质量.",
          praise:"2赞",
          data:"2017-06-12",
        },
        {
          img_url:require("../assets/img/009.jpg"),
          name:"GSG9",
          title:"书名：《吞噬星空》",
          content:"这是我看的第一本毕竟严谨的历史穿越文了，开始一直看到现在。写得是不错。但最近感觉有点疲劳了，是不是该加点进度拉。或者来点高潮什么的 .",
          praise:"5赞",
          data:"2017-06-10",
        },
        {
          img_url:require("../assets/img/010.jpg"),
          name:"边锋",
          title:"书名：《全职高手》",
          content:"格莱是女扮男装的女主，已经没啥疑问了。从她在学院介绍来自哪、去学院重点学习什么可以看出必和帝国有关联。开一下脑洞，格莱还有可能是一个逃婚的公主或郡主也不是没可能.",
          praise:"0赞",
          data:"2017-06-15",
        },
        {
          img_url:require("../assets/img/008.jpg"),
          name:"GSG9",
          title:"书名：《凡人修仙传》",
          content:"订阅加月票能支持的就这么多了，作者加油。难得的一本好书。看了单章深感写手的不容易。这本书是真的很用心了。在现在这种写作氛围里，难得。作者加油。千万不要因为成绩而放弃写作质量.",
          praise:"2赞",
          data:"2017-06-12",
        },
        {
          img_url:require("../assets/img/009.jpg"),
          name:"GSG9",
          title:"书名：《吞噬星空》",
          content:"这是我看的第一本毕竟严谨的历史穿越文了，开始一直看到现在。写得是不错。但最近感觉有点疲劳了，是不是该加点进度拉。或者来点高潮什么的 .",
          praise:"5赞",
          data:"2017-06-10",
        },
        {
          img_url:require("../assets/img/010.jpg"),
          name:"边锋",
          title:"书名：《全职高手》",
          content:"格莱是女扮男装的女主，已经没啥疑问了。从她在学院介绍来自哪、去学院重点学习什么可以看出必和帝国有关联。开一下脑洞，格莱还有可能是一个逃婚的公主或郡主也不是没可能.",
          praise:"0赞",
          data:"2017-06-15",
        },
      ]
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
