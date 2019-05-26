<template>
<body>
<div id="login" class="lg_bg">
	<div class="h_registered"><a href="#">注册</a></div>
		<div class="clear"></div>
		<div class="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"></div>
			<h2><img src="../assets/img/logo_t.png"></h2>
		</div>
		<div class="login">
			<div class="username"><i class="iconfont icon-yonghuming b_font"></i><input type="text" value="请输入用户名"></div>
			<div class="password"><i class="iconfont icon-icon23 b_font"></i><input type="text" value="请输入密码"></div>
		</div>
		<a href="index.html"><button @click="pushIn" class="delu">登录</button></a>
		<div class="s_login">
			<h3>{{msgadmin}}</h3>
			<ul>
				<li><a href="#"><img id="c01" src="../assets/img/qq_dl.png" onclick="changepic('c01','qq_qh.png')" onMouseOut="changepic('c01','qq_dl.png')"></a></li>
				<li><a href="#"><img id="c02" src="../assets/img/wx_dl.png" onclick="changepic('c02','wx_qh.png')" onMouseOut="changepic('c02','wx_dl.png')"></a></li>
				<li><a href="#"><img id="c03" src="../assets/img/wb_dl.png" onclick="changepic('c03','wb_qh.png')" onMouseOut="changepic('c03','wb_dl.png')"></a></li>
			</ul>
	</div>
</div>
</body>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msgadmin: '使用第三方账号登录',
          }
  },
  methods:{
  	changepic(id,picName){
  		$("#"+id).attr("src","images/"+picName);
  	},
  	pushIn(){
  		this.$router.push({path:'/home'}) 
  	}

  }
}
</script>

<style scoped>

</style>