<template>
  <div style="font-size: 24px; text-align: center">
    user info
    <Steps :current="1">
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="进行中" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      {{$store}}
    </Steps>

  </div>
</template>
<style>

</style>
<script type="text/babel">
import request from 'framework/network/request';
export default {
  created() {
  },
  methods: {
    fetchApi({ state, dispatch, commit }) {
      const { id } = state.route.params;
      return dispatch('FETCH_ARTICLE_DETAIL', { id })
    },
  },
  beforeMount() {
    this.fetchApi(this.$store);
  },
}
</script>
