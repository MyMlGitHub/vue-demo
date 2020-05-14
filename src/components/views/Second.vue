<!-- template 写 html，script写 js，style写样式 -->
<!-- 一个组件下只能有一个并列的 div -->
<!-- 数据要写在 return 里面，而不是像文档那样子写 -->
<template>
  <div class="second">
    {{msg}}
    <router-link to="/login">回第一个页面</router-link>
  </div>
</template>

<script>
  export default {
    name: "second",
    data(){
      return{
        msg: "我是second子组件的msg"
      };
    }
  };
</script>

<style></style>
