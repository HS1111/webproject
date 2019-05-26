<template>
  <div class="index">
    <header>
      <i class="iconfont icon-chaxun zt_pos"></i><input id="sy_ser" type="text" value="请输入书名或用户名" />
    </header>
    <div class="main">
      <div class="menubox">
        <ul>
          <li class="select">
            {{recommended}}
          </li>
          <li>
            {{select}}
          </li>
          <li>
            {{classification}}
          </li>
          <li>
            {{ranking}}
          </li>
        </ul>
      </div>
      <div class="tab">
        <div class="banner">
          <div class="mui-slider">
            <div class="mui-slider-group mui-slider-loop">
              <!--支持循环，需要重复图片节点-->
              <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="#"><img src="../assets/img/023.jpg"></a>
              </div>
              <div class="mui-slider-item">
                <a href="#"><img src="../assets/img/021.jpg"></a>
              </div>
              <div class="mui-slider-item">
                <a href="#"><img src="../assets/img/020.jpg"></a>
              </div>
              <div class="mui-slider-item">
                <a href="#"><img src="../assets/img/022.jpg"></a>
              </div>
              <div class="mui-slider-item">
                <a href="#"><img src="../assets/img/023.jpg"></a>
              </div>
              <!--支持循环，需要重复图片节点-->
              <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="#"><img src="../assets/img/020.jpg"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="con_left">
            <div class="left_top left_bottom">
              <p><img src="../assets/img/rm_pic.png"></p>
              <a href="hotlist.html">
                <div class="rm_con">
                  <h3>{{rm_title}}</h3>
                  <h4>{{rm_content}}</h4>
                </div>
              </a>
            </div>
            <div class="left_top">
              <p><img src="../assets/img/xs_pic.png"></p>
              <a href="hotlist.html">
                <div class="rm_con">
                  <h3>{{xs_title}}</h3>
                  <h4>{{xs_content}}</h4>
                </div>
              </a>
            </div>
          </div>
          <a href="hotlist.html">
            <div class="con_right">
              <h3>{{vip_title}}</h3>
              <h4>{{vip_content}}</h4>
              <p><img src="../assets/img/yh_pic.png"></p>
            </div>
          </a>
          <div class="clear"></div>
        </div>
                <div class="bzqt wbj">
          <div class="bzqt_title">
            <span></span>
            <h3>本周强推</h3>
            <a href="#">
              <更多</a>
                <div class="clear"></div>
          </div>
          <ul>
            <li v-for="week in week_recommended" v-on:click="detai"><img v-bind:src="week.img_url"><span>{{week.name}}</span></li>
          </ul>
        </div>
        <div class="bzqt wbj">
          <div class="bzqt_title tit_cls">
            <span></span>
            <h3>新书推荐</h3>
            <a href="#">
              <更多</a>
                <div class="clear"></div>
          </div>
          <ul>
            <li v-for="nbook in nbook_recommended" v-on:click="detai"><img v-bind:src="nbook.img_url"><span>{{nbook.name}}</span></li>
           
          </ul>
        </div>
      </div>
      <!--精选-->
      <div class="tab" style="display: none;">
        <div class="conbox">
          <div class="padd">
            <div class="conbox_title">
              <span></span>
              <h3>畅销精选</h3>
            </div>
            <div class="conbox_content" v-for="selling in selects">
              <div class="conbox_left"><a href="details.html"><img v-bind:src="selling.img_url"></a></div>
              <div class="conbox_right">
                <h4>{{selling.title}}</h4>
                <p>
                  <a href="#">{{selling.content}}
                  </a>
                </p>
                <h5><span class="blue">{{selling.type}}</span><span class="red">{{selling.state}}</span></h5>
                <div class="clear"></div>
              </div>
              <div class="clear"></div>
              <div class="line1"></div>
            </div>
          </div>

        </div>
        <div class="conbox">
          <div class="padd">
            <div class="conbox_title">
              <span class="blue"></span>
              <h3 class="blue_font">主编力荐</h3>
            </div>
            <div class="conbox_content" v-for="comm in commend">
              <div class="conbox_left"><a href="details.html"><img v-bind:src="comm.img_url"></a></div>
              <div class="conbox_right">
                <h4>{{comm.title}}</h4>
                <p>
                  <a href="#">{{comm.content}}
                  </a>
                </p>
                <h5><span class="blue">{{comm.type}}</span><span class="yellow">{{comm.state}}</span></h5>
                <div class="clear"></div>
              </div>
              <div class="clear"></div>
              <div class="line1"></div>
            </div>            
          </div>

        </div>
      </div>
      <!--分类-->
      <div class="tab" style="display: none;">
        <div class="classification">
          <ul>
              <li v-for="grop in group" v-on:click="hlist"><img v-bind:src="grop.img_url"><span>{{grop.name}}</span></li>
          </ul>
        </div>
      </div>
            <!--排行-->
      <div class="tab" style="display: none;">
        <div class="conbox" v-for="total in totallist">
          <div class="ranking_left"><img v-bind:src="total.img_url"></div>
          <div class="ranking_right">
            <h3>
              <span>{{total.name}}</span><a href="#">{{total.more}}</a><div class="clear"></div>
            </h3>
            <ul>
              <li><span><b>{{total.id1}}</b></span>
                <a href="details.html">{{total.click_title1}}</a>
              </li>
              <li><span><b>{{total.id2}}</b></span>
                <a href="details.html">{{total.click_title2}}</a>
              </li>
              <li><span><b>{{total.id3}}</b></span>
                <a href="details.html#">{{total.click_title3}}</a>
              </li>
              <li><span><b>{{total.id4}}</b></span>
                <a href="details.html">{{total.click_title4}}</a>
              </li>
            </ul>
          </div>
          <div class="clear"></div>
        </div>

      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
$(document).ready(function() {
        $(".menubox ul li").click(function() {        
          $(this).addClass("select").siblings().removeClass("select");
          $(".tab").hide().eq($(this).index()).show();
        });
      });
import Footer from './Footer'
export default {
  name: 'index',
  data () {
    return {
     recommended:"推荐",
     select:"精选",
     classification:"分类",
     ranking:"排行",
     rm_title:"热门榜单",
     rm_content:"当下点击率最高的小说",
     xs_title:"新书入库",
     xs_content:"最新入库的原创小说",
     vip_title:"VIP用户",
     vip_content:"畅读无限制尽情浏览",
     week_recommended:[
      {img_url:require("../assets/img/180.jpg"),name:"一念永恒"},
      {img_url:require("../assets/img/190.jpg"),name:"不朽凡人"},
      {img_url:require("../assets/img/200.jpg"),name:"极道天魔"},
      {img_url:require("../assets/img/210.jpg"),name:"道君"},
     ],
     nbook_recommended:[
      {img_url:require("../assets/img/220.jpg"),name:"寻情仙使"},
      {img_url:require("../assets/img/230.jpg"),name:"蛊真人"},
      {img_url:require("../assets/img/280.jpg"),name:"铁血德意志"},
      {img_url:require("../assets/img/250.jpg"),name:"聊斋大圣人"},
     ],
     selects:[
      {
        img_url:require("../assets/img/210.jpg"),
        title:"道君",
        content:"闯入修真界的故事，桃花源里，有歌声。山外青山，白骨山。五花马，千金裘，倚天剑。应我多情，啾啾鬼鸣，美人薄嗔。天地无垠，谁家旗鼓，碧落黄泉， 万古高楼。",
        type:"玄幻",
        state:"完结"
      },
      {
        img_url:require("../assets/img/270.jpg"),
        title:"雪鹰领主",
        content:"在夏族的安阳行省，有一个很小很不起眼的领地，叫——雪鹰领！故事，就从这里开始！继 《盘龙》《星辰变》《寸芒》《星峰传说》后，番茄的 第八本小说。",
        type:"玄幻",
        state:"连载"
      },
      {
        img_url:require("../assets/img/250.jpg"),
        title:"聊斋大圣人",
        content:"良田万亩，奴仆数百，豪门大宅......李修远穿越成为了地主家的大少爷，毫无志气的他本打算做一回败家子，当一个纨绔弟子，调戏美俾，广收小妾，鲜衣怒马。直到有天他突然发现自 己家在郭北县，县外有个兰若寺。",
        type:"玄幻",
        state:"完结"
      }
     ],
     commend:[
      {
        img_url:require("../assets/img/200.jpg"),
        title:"极道天魔",
        content:"妖魔横行，世人苦难。神兵魔刃，遮耀天下。手机上的一款游戏修改器，意外成了路胜脑海 里的异能。也成了他在这个黑暗乱世唯一的依靠。",
        type:"玄幻",
        state:"连载"
      },
      {
        img_url:require("../assets/img/270.jpg"),
        title:"雪鹰领主",
        content:"在夏族的安阳行省，有一个很小很不起眼的领地，叫——雪鹰领！故事，就从这里开始！继 《盘龙》《星辰变》《寸芒》《星峰传说》后，番茄的 第八本小说.",
        type:"玄幻",
        state:"完结"
      },
      {
        img_url:require("../assets/img/330.jpg"),
        title:"斗破苍穹",
        content:"这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！新书等级 制度：斗者，斗师，大斗师，斗灵，斗王，斗皇，斗宗，斗尊，斗圣，斗帝。",
        type:"玄幻",
        state:"连载"
      },
     ],
     group:[
      {
        img_url:require("../assets/img/xhqh.png"),
        name:"玄幻奇幻"
      },
      {
        img_url:require("../assets/img/wxxz.png"),
        name:"武侠修真"
      },
      {
        img_url:require("../assets/img/dsyq.png"),
        name:"都市言情"
      },
      {
        img_url:require("../assets/img/jshx.png"),
        name:"军事幻想"
      },
      {
        img_url:require("../assets/img/yxtc.png"),
        name:"游戏题材"
      },
      {
        img_url:require("../assets/img/jkls.png"),
        name:"架空历史"
      },
      {
        img_url:require("../assets/img/tyjj.png"),
        name:"穿越重生"
      },
      {
        img_url:require("../assets/img/khtc.png"),
        name:"科幻题材"
      },
     ],
     totallist:[
      {
        img_url:require("../assets/img/180.jpg"),
        name:"用户点击总榜",
        more:"更多>>",
        id1:1,click_title1:"《一念永恒》剑道天才，强势崛起...",
        id2:2,click_title2:"《无限归来之超级警察》》重生过去...",
        id3:3,click_title3:"《庶子风流》醒掌天下权，醉卧美人膝...",
        id4:4,click_title4:"《剑逆苍穹》修仙觅长生，热血任逍遥...",
      },
      {
        img_url:require("../assets/img/330.jpg"),
        name:"书友收藏总榜",
        more:"更多>>",
        id1:1,click_title1:"《一念永恒》剑道天才，强势崛起...",
        id2:2,click_title2:"《无限归来之超级警察》》重生过去...",
        id3:3,click_title3:"《庶子风流》醒掌天下权，醉卧美人膝...",
        id4:4,click_title4:"《剑逆苍穹》修仙觅长生，热血任逍遥...",
      },
      {
        img_url:require("../assets/img/270.jpg"),
        name:"书友收藏总榜",
        more:"更多>>",
        id1:1,click_title1:"《一念永恒》剑道天才，强势崛起...",
        id2:2,click_title2:"《无限归来之超级警察》》重生过去...",
        id3:3,click_title3:"《庶子风流》醒掌天下权，醉卧美人膝...",
        id4:4,click_title4:"《剑逆苍穹》修仙觅长生，热血任逍遥...",
      },
     ]
    }
  },
  methods:{
    detai:function(){
      this.$router.push({path: '/details'})
    },
    hlist:function(){
      this.$router.push({path: '/hotlist'})
    },
  },
  components: {
    "app-footer":Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
