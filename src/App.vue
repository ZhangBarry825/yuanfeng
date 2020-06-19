<template>
  <div id="app">
    <router-view :isMobile="isMobile" />
  </div>
</template>

<script>
  import Vue from 'vue'
export default {
  name: 'App',
  mounted() {
    let store = this.$store
    //监听窗口
    const that = this
    that.screenWidth = document.documentElement.offsetWidth || document.body.offsetWidth;
    store.commit('window/CHANGE_WIDTH',{screenWidth: that.screenWidth})
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        store.commit('window/CHANGE_WIDTH',{screenWidth: window.screenWidth})
      })()
    }
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile
    }
  },
  watch: {
    isMobile: (newVal, oldVal) => {
    }
  },
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
</style>
