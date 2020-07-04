<template>
  <div class="HistoryList">
    <el-row>
      <h2>历程列表</h2>
    </el-row>
    <el-button-group class="buttons">
      <el-button
        size="small"
        type="primary"
        icon="el-icon-edit"
        @click="$router.push({ path: '/admin-history/history-create' })"
      >新增</el-button>
      <el-button
        size="small"
        type="primary"
        @click="multiSelectDelete"
        icon="el-icon-delete"
        style="border-top-right-radius: 4px;border-bottom-right-radius: 4px"
      >删除</el-button>
    </el-button-group>
    <el-table
      v-loading="loading"
      @selection-change="handleSelectionChange"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column align="center" prop="id" label="ID" />
      <el-table-column align="center" prop="detail" label="详情" />
      <el-table-column align="center" prop="time" label="年份" />
      <el-table-column
        prop="status"
        width="100"
        label="状态">
        <template slot-scope="scope">
          <el-switch
            @change="switchState(scope.row)"
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66"
            inactive-color="gainsboro">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template #default="{row}">
          <el-button
            type="primary"
            @click="$router.push({ path: '/admin-history/history-edit', query: {  id: row.id}})"
            size="small"
            plain
          >编辑</el-button>
          <el-button type="danger" @click="deleteCurrent(row.id)" size="small" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleChange"></el-pagination>
    </div>
  </div>
</template>

<script>
  import {queryByPageList, deletevelopHis, updateevelopHis} from '@/api/admin/HistoryList';
import {updateCase} from "@/api/admin-case";
export default {
  name: 'HistoryList',

  data () {
    return {
      pageNum: 1,
      loading: false,
      tableData: [],
      total: 0,
      arrid: []
    }
  },
  //生命周期函数
  created () {
    this.retrieveData()
  },
  //方法
  methods: {
    switchState(data){
      let that = this
      this.loading=true
      //console.log(data)
      updateevelopHis({id:data.id,detail:data.detail,time:data.time,status:data.status}).then(res=>{
        if(res.code && res.code === 200){
          that.loading=false
        }
      }).catch(()=>{
        this.retrieveData()
      })

    },
    // 获取数据
    async retrieveData () {
      this.loading = true
      let { data } = await queryByPageList({ pageNum: this.pageNum, pageSize: 10 })
      this.total = data.total
      this.tableData = data.list
      this.loading = false
      //console.log(data)
    },
    // 分页
    handleChange (val) {
      this.pageNum = val
      this.retrieveData()
    },
    // 删除
    deleteCurrent (id) {
      //console.log(id)
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deletevelopHis({ id }).then(res => {
          //console.log(res)
          this.retrieveData()
          this.$message({
            type: 'success',
            message: res.msg
          });
        })
      })
    },
    // 多选删除
    handleSelectionChange (arrli) {
      let arrid = []
      arrli.forEach(item => {
        arrid.push(item.id)
      })
      this.arrid = arrid
    },
    multiSelectDelete () {
      if (this.arrid.length != 0) {
        let character = this.arrid.join(",")
        this.deleteCurrent(character)
      }
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
.HistoryList {
  width: 95%;
  margin: 30px auto;
  .buttons {
    margin-top: 20px;
  }
  .pagination{
    padding: 30px 0;
  }
}
</style>
