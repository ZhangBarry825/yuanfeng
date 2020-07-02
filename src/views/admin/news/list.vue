<template>
  <div class="list">
    <h2>这是list.vue页面</h2>
  </div>
</template>

<script>
import { queryByPageList } from '@/api/admin/news';
export default {
  name: 'list',

  data () {
    return {

    }
  },
  //生命周期函数
  created () {
    this.retrieveData()
  },
  //方法
  methods: {
    async retrieveData () {
      let res = await queryByPageList()
      console.log(res, "获取数据")
    }
  },
  //计算属性
  computed: {
  },
  //组件
  components: {
  }
}
</script>

<style lang='scss' scoped>
.list {
}
</style>
