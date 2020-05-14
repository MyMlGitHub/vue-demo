<!-- template 写 html，script写 js，style写样式 -->
<!-- 一个组件下只能有一个并列的 div -->
<!-- 数据要写在 return 里面，而不是像文档那样子写 -->
<template>
  <div class="index">
    <h1>{{msg}}</h1>
    <!--text标签传给子组件的值-->
    <!--<confirm text="登录" @message="getMessage"></confirm>-->
    <router-link to="/login">进入</router-link>倒计时：{{codeTime}}
  </div>
</template>

<script>
  // 在父组件中引入子组件 Confirm
  // import Confirm from './sub/Confirm'
  export default {
    name: "Index",
    //引入子组件
    // components: {
    //   Confirm
    // }
    data(){
      return{
        msg: "欢迎来到后台管理系统",
        day: 0,//天
        hr: 0,//时
        min: 0,//分
        sec: 0,//秒
        codeTime:10
      };
    },
    methods: {
      //倒计时
      countdown() {
        /*const end = Date.parse(new Date("2019-12-01"));
        const now = Date.parse(new Date());
        const msec = end - now;
        let day = parseInt(msec / 1000 / 60 / 60 / 24);
        let hr = parseInt(msec / 1000 / 60 / 60 % 24);
        let min = parseInt(msec / 1000 / 60 % 60);
        let sec = parseInt(msec / 1000 % 60);
        this.day = day
        this.hr = hr > 9 ? hr : '0' + hr;
        this.min = min > 9 ? min : '0' + min;
        this.sec = sec > 9 ? sec : '0' + sec;
        const that = this;
        this._interval = setTimeout(function () {
          that.countdown()
        }, 1000)*/

        var times = 10
        this.timeCountDown = setInterval(()=>{
          times--
          this.codeTime = times
          if( times == 0){
            console.log("倒计时结束");
            clearInterval(this.timeCountDown)
            this.$router.push({ name: "Login" })
            // this.$router.push({ path: "/login" })
          }
        },1000)
      }
    },
    mounted(){
      this.countdown()
    },
    //当离开页面时，清除倒计时
    beforeDestroy() {
      clearInterval(this.timeCountDown)
    }
  };
</script>

<!--npm run dev-->
<style>
  .index{
    text-align: center;
    color: #c4646a;
    position: absolute;
    left: 40%;
    top: 30%;
  }
</style>
