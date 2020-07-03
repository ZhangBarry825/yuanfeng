<template>
  <div class="Advantage">
    <el-row>
      <h2>公司优势列表</h2>
    </el-row>
    <el-button-group class="buttons">
      <el-button
        size="small"
        type="primary"
        icon="el-icon-edit"
        @click="centerDialogVisible=true"
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
      <el-table-column align="center" prop="title" label="标题" />
      <el-table-column align="center" label="操作">
        <template #default="{row}">
          <el-button type="primary" @click="AndModify(row)" size="small" plain>编辑</el-button>
          <el-button type="danger" @click="deleteCurrent(row.id)" size="small" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="total" @current-change="handleChange"></el-pagination>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      :before-close="handleClose"
      width="30%"
      center
    >
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题">
          <el-input v-model="ruleForm.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="详情">
          <el-input
            type="textarea"
            :rows="5"
            maxlength="300"
            show-word-limit
            placeholder="请输入详情"
            v-model="ruleForm.detail"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAndModify">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { queryByPageList, addtAdvantages, updateAdvantages, deleteAdvantages } from '@/api/admin/Advantage';
export default {
  name: 'Advantage',

  data () {
    return {
      pageNum: 1,
      loading: false,
      tableData: [],
      total: 0,
      centerDialogVisible: false,
      ruleForm: {},
      detail: null,
      arrid: []
    }
  },
  //生命周期函数
  created () {
    this.retrieveData()
  },
  //方法
  methods: {
    // 获取数据
    async retrieveData () {
      this.loading = true
      let { data } = await queryByPageList({ pageNum: this.pageNum, pageSize: 10 })
      this.total = data.total
      this.tableData = data.list
      this.loading = false
      console.log(data)
    },
    // 分页
    handleChange (val) {
      this.pageNum = val
      this.retrieveData()
    },
    AndModify (row) {
      this.ruleForm.title = row.title
      this.ruleForm.detail = row.detail
      this.detail = row
      this.centerDialogVisible = true
    },
    // 添加与修改
    addAndModify (row) {
      if (this.detail) {
        updateAdvantages({ ...this.ruleForm, id: this.detail.id, status: this.detail.status }).then(res => {
          console.log(res, "修改")
          this.$message({
            message: res.msg,
            type: 'success'
          });
          this.detail = null
          this.centerDialogVisible = false
          this.ruleForm = this.$options.data().ruleForm;
          this.retrieveData()
        })
      } else {
        addtAdvantages(this.ruleForm).then(res => {
          console.log(res, "添加")
          this.$message({
            message: res.msg,
            type: 'success'
          });
          this.centerDialogVisible = false
          this.retrieveData()
        })
        this.ruleForm = this.$options.data().ruleForm;
      }

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    deleteCurrent (id) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteAdvantages({ id }).then(res => {
          console.log(res)
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
.Advantage {
  width: 95%;
  margin: 30px auto;
  .buttons {
    margin-top: 20px;
  }
}
</style>
