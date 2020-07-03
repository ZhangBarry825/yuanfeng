<template>
  <div class="Message">
    <el-row>
      <h2>留言列表</h2>
    </el-row>
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column align="center" prop="name" label="名称" />
      <el-table-column align="center" prop="detail" label="留言" />
      <el-table-column align="center" prop="email" label="邮箱" />
      <el-table-column align="center" prop="phoneNumber" label="电话号码" />
      <!-- <el-table-column align="center" label="操作">
        <template #default="{row}">
          <el-button @click="openService('edit',row)" type="text">编辑</el-button>
        </template>
      </el-table-column>-->
    </el-table>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="total" @current-change="handleChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import { queryByPageList } from '@/api/admin/Message';
export default {
  name: 'Message',

  data () {
    return {
      tableData: [],
      pageNum: 1,
      total: 0,
      loading: false
    }
  },
  //生命周期函数
  created () {
    this.retrieveData()
  },
  //方法
  methods: {
    async retrieveData () {
      this.loading = true
      let res = await queryByPageList({ pageSize: 10, pageNum: this.pageNum })
      this.tableData = res.data.list
      this.total = res.data.total
      this.loading = false
      console.log(res)
    },
    handleChange (val) {
      this.pageNum = val
      this.retrieveData()
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
.Message {
  width: 95%;
  margin: 50px auto;
  .pagination {
    width: 100%;
    margin: 30px auto;
  }
}
</style>
