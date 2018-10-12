<template>
<div class="hh-header">
  <div class="hh-header-box">
    <div class="auth-menus">
      <span class="login-btn">登陆</span>
      <span class="user-text-box">
        <label class="user-icon"></label>个人中心
      </span>
    </div>
    <ul class="nav-menus">
      <li
        v-for="(menu, idx) in menuList"
        :key="idx"
        :class="{active: menu.name === activeMenu }"
      >
        {{menu.displayValue}}
      </li>
    </ul>
    <div class="logo"></div>
  </div>
</div>
</template>

<script type="babel">
export default {
  components: {},
  data() {
    return {
      menuList: [{
        name: 'main',
        displayValue: '首页',
      }, {
        name: 'list',
        displayValue: '保险产品',
      }, {
        name: 'about',
        displayValue: '走进寰海',
      }, {
        name: 'join',
        displayValue: '加入我们',
      }],
      activeMenu: 'main'
    };
  },
  computed: {},
  methods: {
    menuBtn() {
      this.collapsed = !this.collapsed;
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "~theme/colors.scss";
.hh-header{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: $primary-color;
  .hh-header-box{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
    overflow: hidden;
    .logo{
      margin-top: 10px;
      height: 44px;
      width: 91px;
      background-color: $white;
    }
    .auth-menus{
      float: right;
      height: 100%;
      line-height: 64px;
      margin-left: 120px;
      span{
        display: inline-block;
        color: $white;
        font-size: 14px;
        cursor: pointer;
        &.login-btn{
          height: 32px;
          width: 80px;
          line-height: 32px;
          border: 1px solid $white;
          border-radius: 3px;
          text-align: center;
        }
        &.user-text-box{
          position: relative;
          height: 20px;
          margin-left: 31px;
          padding-left: 21px;
          line-height: 20px;
          >label{
            content: "";
            position: absolute;
            display: block;
            left: 0;
            top: 3px;
          }
        }
      }
    }
    .nav-menus{
      height: 100%;
      float:right;
      color: $white;
      font-size: 0;
      line-height: 0;
      li{
        margin: 0;
        height: 100%;
        position: relative;
        display: inline-block;
        line-height: 64px;
        font-size: 16px;
        text-align: center;
        padding: 0 20px;
        cursor: pointer;
        &.active{
          &:after{
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: $white;
          }
        }
      }
    }
  }
}
</style>
