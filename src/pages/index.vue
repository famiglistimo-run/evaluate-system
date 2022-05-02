<template>
  <div id="header_color">
    <div id="Nr">
      <div id="TB_XT">
        <img>
        <div id="XT_color">
          <strong>综 测 评 定 系 统</strong>
        </div>
      </div>
      <div id="GS">
        <strong>SWPU</strong><br>
      </div>
      <div id="DL_color">
        <img id="DL_left" src="../assets/login.jpg" alt="">
      </div>
      <div id="DL_right">
        <div id="DL_JM_color">
          <div id="DL_JM_color01"></div>
          <div id="Yhdl">
            <strong>用户登录</strong>
            <span id="XG">&nbsp;/</span>
            <span id="LOGIN">LOGIN</span>
          </div>
          <form>
            <label id="Yhm">用户名：</label>
            <input id="text01" type="text"><br>
            <label id="Mm">密&nbsp;&nbsp;码&nbsp;&nbsp;:&nbsp;&nbsp;</label>
            <input id="text02" type="password"><br>
            <label id="Yzm">验证码：</label>
            <input id="text03" type="text" style="width:70px">&nbsp;&nbsp;<input id="text04" type="text" style="width:80px" value="asdf"><br>
            <div id="Dan">
              <input type="radio" name="1">
              <label id="JiaoShi">教师</label>
              <input type="radio" name="1">
              <label id="Xs">学生</label>
              <input type="radio" name="1">
              <label id="Gly">管理员</label>
            </div>
            <div id="An">
              <el-button round @click="login" size="small">登录</el-button>
              <el-button round @click="remake" size="small">重置</el-button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="bq">
      <span id="Bqsy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版权所有---西南石油大学</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.replace({ path: '/mainstudent' })
    }
  }
}
</script>

<style>
#header_color {
  width: 100%;
  height: 500px;
  background-color: #9cacc9;
  background-image: linear-gradient(#9cacc9, #ffffff);
  position: relative;
}
#Nr {
  position: absolute;
  left: 20%;
}
img {
  margin-top: 50px;
  margin-left: 50px;
  width: 450px;
}
#XT_color {
  color: #304c7ce3;
  margin-top: 8px;
  margin-left: 55px;
  font-family: "Times New Roman", Times, serif;
}
strong {
  word-spacing: 5px;
  margin-left: 6em;
  font-size: 25px;
}
#GS {
  position: absolute;
  top: 25px;
  left: 750px;
  color: #11449e;
  font-size: 10px;
}
#DL_color {
  margin-top: 15px;
  margin-left: 50px;
  border: 1px solid;
  border-radius: 20px;
  width: 935px;
  height: 268px;
  background-color: #87a6d2;
}
#DL_left {
  position: absolute;
  top: 117px;
  left: 0px;
  border-radius: 20px 0px;
  float: left;
}
#DL_right {
  position: absolute;
  top: 160px;
  left: 470px;
  width: 500px;
  height: 290px;
  border: 1px solid;
  border-radius: 15px;
  background-color: #87a6d2;
  box-shadow: 0px 25px 0px #edf0f5;
}
#DL_JM_color {
  margin-top: 10px;
  margin-left: 10px;
  width: 480px;
  height: 265px;
  border-radius: 10px;
  border: 2px solid rgb(190, 190, 214);
  background-color: white;
  background-image: linear-gradient(#ffffff, #9cb1d8);
}
#Yhdl {
  color: #11449e;
  opacity: 0.8;
}
#DL_JM_color01 {
  width: 480px;
  height: 35px;
  border-radius: 10px 10px 0px 0px;
  background-color: rgb(242, 242, 247);
  background-image: linear-gradient(rgb(242, 242, 247), #b6c6e6);
}
#XG {
  font-size: 30px;
  color: rgb(32, 90, 145);
}
#LOGIN {
  color: rgb(124, 121, 121);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
}
form {
  margin: 10px;
  text-align: center;
  color: #11449e;
  line-height: 33px;
}
#Dan {
  padding: 5px;
}
#Bqsy {
  position: absolute;
  top: 480px;
  left: 45%;
  font-size: 10px;
  color: #11449e;
}
</style>
