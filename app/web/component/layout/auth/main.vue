<template>
   <div class='main'>
     <LayoutHeader></LayoutHeader>
     <LayoutContent>
       <div slot='content'><slot name='main'></slot></div>
     </LayoutContent>
   </div>
</template>
<style lang='less'>
  .main {
    display: flex;
    .el-menu:not(.el-menu--collapse) {
      width: 230px;
    }
    .app {
      width: 100%;
      background-color: #ecf0f5;
    }
  
    .app-body {
      width: 100%;
      margin-left: 230px;
      -webkit-transition: margin-left 0.35s;
      transition: margin-left 0.35s;
    }
    .main-container {
      margin-top: 50px;
      padding: 10px;
      min-height: calc(~'100vh - 100px');
    }
  }
</style>
<script type='babel'>
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  export default {
    components: {
      LayoutHeader,
      LayoutContent
    }
  };
</script>
