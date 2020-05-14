<!-- template 写 html，script写 js，style写样式 -->
<!-- 一个组件下只能有一个并列的 div -->
<!-- 数据要写在 return 里面，而不是像文档那样子写 -->
<template>
  <div>
    <div class="background"/>
    <div class="login-front">
      <!--text标签传给子组件的值-->
      <confirm text="登录" @message="getMessage"></confirm>
    </div>
  </div>
</template>

<script>
  // 在父组件中引入子组件 Confirm
  import Confirm from '../sub/Confirm'

  export default {
    name: "Login",
    //引入子组件
    components: {
      Confirm
    },
    data(){
      return{
        msg: "欢迎来到后台管理系统"
      };
    },
    methods: {
      //val为子组件传给父组件的值
      getMessage(val){
        alert(val.is);
        alert(val.msg);
      }
    }
  };
</script>

<style>

</style>
<!--npm run dev-->
