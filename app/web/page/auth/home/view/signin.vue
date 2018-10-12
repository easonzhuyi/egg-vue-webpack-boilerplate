<template>
  <div class="login">
    <div class="login-form">
      <div class="login-header">
        <img src="asset/images/logo.png" height="100" alt="">
      </div>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <br><br>
      <Steps :current="1">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      </Steps>
      <!-- <el-input
          placeholder="请输入用户名"
          suffix-icon="fa fa-user"
          v-model="userNmae"
          style="margin-bottom: 18px"
      >
      </el-input>

      <el-input
          placeholder="请输入密码"
          suffix-icon="fa fa-keyboard-o"
          v-model="password"
          type="password"
          style="margin-bottom: 18px"
      >
      </el-input>

      <el-button
          type="primary"
          style="width: 100%;margin-bottom: 18px"
          @click.native="login"
      >登录
      </el-button>
      <div>
        <el-checkbox v-model="remenber">记住密码</el-checkbox>
        <a href="javascript:;" style="float: right;color: #3C8DBC;font-size: 14px">注册</a>
      </div> -->
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        userNmae: '',
        password: '',
        remenber: true
      }
    },
    methods: {
      login() {
        setTimeout(() => {
          this.$notify({
            title: '登录成功',
            message: '欢迎来到xx系统',
            type: 'success'
          });
          this.$route.replace('/detail');
        }, 1000);
      }
    }
  }
</script>

<style lang="less">
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #e4e5e6;
    .login-form{
      width: 375px;
      height: 400px;
      padding: 30px;
      background-color: white;
      text-align: left;
      border-radius: 4px;
      position: relative;
      margin-left: 0;
      margin-right: 0;
      zoom: 1;
      display: block;
      .login-header{
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
      }
    }
  }
</style>
