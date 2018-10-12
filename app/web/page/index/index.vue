<template>
  <layout description="寰海经纪、人寿保险" keywords="保险, 金融, 云分享">
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

    <img
      v-for="(banner, idx) in bannerList"
      :src="banner.productListImgPath"
      :alt="banner.productName"
      :key="idx"
    />
  </layout>
</template>

<script type="babel">
const iview = require('iview');
require('iview/dist/styles/iview.css');
import Vue from 'vue';
Vue.use(iview);
export default {
  components: {
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
  @import "~theme/colors.scss";
  .container{
  }
</style>
