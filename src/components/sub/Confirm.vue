<template>
  <div class="back-opacity">
    <h1>{{msg}}</h1>
    <input type="text"  class="login_user qxs-icon"  placeholder="请输入用户名" v-model="sysUser.loginAccount" ref="loginAccount" maxlength="16">
    <input :type="pwdType"  class="login_password qxs-icon"  placeholder="请输入密码" v-model="sysUser.password" ref="password" maxlength="16">
    <img :src="openeye" class="login_eye" alt="" @click="changeType()">
    <!--<el-form ref="sysUser" :rules="formRules" :model="sysUser" label-width="200px">
      <el-form-item label="用户名:" prop="loginAccount">
        <el-input type="text"  class="qxs-ic_user qxs-icon"  placeholder="请输入用户名" v-model="sysUser.loginAccount" ref="loginAccount"/>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input type="text"  class="qxs-ic_password qxs-icon"  placeholder="请输入密码" v-model="sysUser.password" ref="password"/>
      </el-form-item>
    </el-form>-->
    <el-button class="login_btn" @click="login" type="primary" round :loading="isBtnLoading">{{text || '确认'}}</el-button>
    <div style="margin-top: 10px; margin-bottom:10px;">
      <router-link to="/second" style="color: #000099;">注册</router-link>
      <span style="color: #A9A9AB;">&nbsp;|&nbsp;</span>
      <router-link to="/second" style="color: #000099;">忘记密码？</router-link>
    </div>
  </div>
</template>

<script>
  // 在父组件中引入子组件 Confirm
  export default {
    name: "Confirm",
    //父组件传给子组件的值通过props节点接收
    props: ["text"], //父组件给子组件传的值
    data(){
      return{
        msg: "欢迎登录后台管理系统",
        isBtnLoading: false,
        pwdType: 'password', // 密码类型
        openeye: require('../../assets/images/closeEye.png'), //图片地址
        sysUser:{
          id: '1',
          name: '调解调解',
          loginAccount: '',
          password: ''
        }
        // 表单验证
        /*formRules: {
          loginAccount: [
            {required: true,message: "请输入用户名",trigger: "blur"}
          ],
          password: [
            {required: true,message: "请输入密码",trigger: "blur"}
          ]
        }*/
      };
    },
    created () {
      var _this = this;
      document.onkeydown = function (e) {
        let key = window.event.keyCode;
        if (key == 13) {
          _this.login();
        }
      };
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).loginAccount){
        this.loginAccount = JSON.parse( localStorage.getItem('user')).loginAccount;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      changeType() {
        this.pwdType = this.pwdType === 'password' ? 'text' : 'password';
        this.openeye = this.openeye == require("../../assets/images/closeEye.png") ? require("../../assets/images/eye.png") : require("../../assets/images/closeEye.png");
      },
      login(){
        var that = this;
        if (!that.sysUser.loginAccount) {
          that.$message.error('请输入用户名');
          that.$refs.loginAccount.focus();
          return;
        }
        if (!that.sysUser.password) {
          that.$message.error('请输入密码');
          that.$refs.password.focus();
          return;
        }
        //开始真正的登陆请求
        //子组件听过this.$emit向父组件传值
        // this.$emit("message", this); //向父组件传值
        that.$axios.post('/api/demo/login/doLogin', that.sysUser)
          .then(function (response) {
            console.log("response");
            console.log(response);
            if('1000' != response.data.code){
              that.$message.error(response.data.data);
            }else{
              that.$message({
                type: 'success',
                message: '登录成功'
              });
            }
          })
          .catch(function (error) {
            console.log("error");
            console.log(error);
          })
      }
    }
  };
</script>

<style>

</style>
