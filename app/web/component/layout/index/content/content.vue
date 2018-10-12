<template>
  <div class="hh-content-container">
    <slot name='content'></slot>
  </div>
</template>

<script type='babel'>
  export default {
    name:'v-content',
    data(){
      return {

      }
    },
    components: {},
    mounted() {

    }
  }
</script>

<style lang="scss">
@import "~theme/colors.scss";
.hh-content-container{
  min-height: 800px;
  height: 100%;
  background-color: $white;
}
</style>
