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
            <input id="text01" type="text" v-model="accountNum"><br>
            <label id="Mm">密&nbsp;&nbsp;码&nbsp;&nbsp;:&nbsp;&nbsp;</label>
            <input id="text02" type="password" v-model="password"><br>
            <label id="Yzm">验证码：&nbsp;</label>
            <input id="text03" type="text" style="width:70px" v-model="code">&nbsp;&nbsp;
            <img :src="imgCode" id="yzm"><a id="refresh_code" @click="refreshCode">看不清，换一张</a><br>
            <div id="Dan">
              <input type="radio" name="role" value="教师" id="teacher" v-model="role">
              <label id="JiaoShi">教师</label>
              <input type="radio" name="role" value="学生" id="student" v-model="role">
              <label id="Xs">学生</label>
              <input type="radio" name="role" value="管理员" id="admin" v-model="role">
              <label id="Gly">管理员</label>
            </div>
            <div id="An">
              <el-button round @click="login" size="small">登录</el-button>
              <el-button round size="small">重置</el-button>
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
  data () {
    return {
      accountNum: '',
      password: '',
      code: '',
      imgCode: '',
      role: ''
    }
  },
  created () {
    this.refreshCode();
  },
  methods: {
    login () {
      let user = {
        accountNum: this.accountNum,
        password: this.password,
        code: this.code,
        role: this.role
      }

      if (document.getElementById("teacher").checked = true) {
        this.api.post("/zuoshurun/swpu/login", user).then(res => {
          this.$router.replace({ path: '/mainteacher' })
        })
      }
      else if (document.getElementById("mainstudent").checked = true) {
        this.api.post("/zuoshurun/swpu/login", user).then(res => {
          this.$router.replace({ path: '/mainstudent' })
        })
      }
      else if (document.getElementById("mainadmin").checked = true) {
        this.api.post("/zuoshurun/swpu/login", user).then(res => {
          this.$router.replace({ path: '/mainadmin' })
        })
      }
    }
    ,
    refreshCode () {
      const num = Math.ceil(Math.random() * 10); // 生成一个随机数（防止缓存）
      this.imgCode = '/songqiang/swpu/login?' + num;
    },
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
#Yzm {
  margin-left: 100px;
}
#yzm {
  width: 80px;
  height: 30px;
  margin-top: 0;
  margin-left: 0;
}
</style>
