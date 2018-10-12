<template>
   <div class='main'>
     <LayoutHeader></LayoutHeader>
     <LayoutContent>
       <div slot='content'><slot name='main'></slot></div>
     </LayoutContent>
     <layoutFooter></layoutFooter>
   </div>
</template>
<style lang='less'>
.main{
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 1200px;
  min-height: 800px;
  padding-top: 60px;
  padding-bottom: 40px;
}
</style>
<script type='babel'>
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  import LayoutFooter from './footer/footer';
  export default {
    components: {
      LayoutHeader,
      LayoutContent,
      LayoutFooter,
    }
  };
</script>
