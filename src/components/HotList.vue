<template>
<body>
<div id="hotlist">
	<div class="newheader">
			<h2>热门新书</h2>
		</div>
		<div class="clear"></div>
		<div class="main main_top">
			<div class="conbox">
				<div class="padd">
					<div class="conbox_title">
						<span></span>
						<h3>热门榜单</h3>
					</div>
					<div class="conbox_content" v-for=" selling in selects">
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
						<h3 class="blue_font">新书入库</h3>
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
	<app-footer></app-footer>
</div>
</body>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'hotlist',
  data () {
    return {
     
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
          }
  },
  methods:{


  },
  components: {
    "app-footer":Footer
  }
}
</script>

<style scoped>
	
</style>