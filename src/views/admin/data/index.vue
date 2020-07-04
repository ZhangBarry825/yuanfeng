<template>
  <div class="HistoryData">
    <el-row>
      <h2>公司数据</h2>
    </el-row>
    <div class="adsasdj">
      <el-button-group class="buttons">
        <el-button size="small" type="primary" icon="el-icon-edit" @click="DialogVisiblerue">新增</el-button>
        <el-button
          size="small"
          type="primary"
          icon="el-icon-delete"
          style="border-top-right-radius: 4px;border-bottom-right-radius: 4px"
          @click="multiSelectDelete"
        >删除
        </el-button>
      </el-button-group>
      <el-table
        v-loading="loading"
        @selection-change="handleSelectionChange"
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column align="center" prop="id" label="ID"/>
        <el-table-column align="center" prop="detail" label="标题"/>
        <el-table-column align="center" prop="title" label="详情"/>
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
            <el-button type="primary" @click="editdata(row)" size="small" plain>编辑</el-button>
            <el-button type="danger" @click="deleteCurrent(row.id)" size="small" plain>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination layout="prev, pager, next" :total="total" @current-change="handleChange"></el-pagination>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="DialogVisible"
      width="30%"
      center
    >
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题" prop="detail">
          <el-input v-model="ruleForm.detail" type="number" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="详情" prop="title">
          <el-input
            type="textarea"
            :rows="5"
            maxlength="300"
            show-word-limit
            placeholder="请输入详情"
            v-model="ruleForm.title"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="DialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addAndModify">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {queryByPageList, addCompany, updateCompany, deleteCompany, updateCompany2} from '@/api/admin/HistoryData';
  import {updateClass} from "@/api/admin-case";

  export default {
    name: 'HistoryData',

    data() {
      return {
        loading: true,
        tableData: [],
        total: 0,
        pageNum: 1,
        ruleForm: {
          title: "",
          detail: ""
        },
        DialogVisible: false,
        detail: null,
        arrid: [],
        rules: {
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'}
          ],
          detail: [
            {required: true, message: '请输入详情', trigger: 'blur'}
          ],
        },
      }
    },
    //生命周期函数
    created() {
      this.retrieveData()
    },
    //方法
    methods: {
      async retrieveData() {
        this.loading = true
        let {data} = await queryByPageList({pageNum: this.pageNum, pageSize: 10})
        this.loading = false
        this.tableData = data.list
        this.total = data.total
        console.log(data, "00")
      },
      // 多选删除
      handleSelectionChange(arrli) {
        let arrid = []
        arrli.forEach(item => {
          arrid.push(item.id)
        })
        this.arrid = arrid
      },
      deleteCurrent(id) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteCompany({id}).then(res => {
            console.log(res)
            this.retrieveData()
            this.$message({
              type: 'success',
              message: res.msg
            });
          })
        })
      },
      multiSelectDelete() {
        if (this.arrid.length != 0) {
          let character = this.arrid.join(",")
          this.deleteCurrent(character)
        }
      },

      // 分页
      handleChange(frow) {
        this.pageNum = frow
        this.retrieveData()
      },
      // 打开修改
      editdata(row) {
        this.detail = row
        this.ruleForm.title = row.title
        this.ruleForm.detail = row.detail
        this.DialogVisible = true
        console.log(row)
      },
      // 添加与修改
      addAndModify() {
        this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            if (this.detail) {
              updateCompany({...this.ruleForm, id: this.detail.id, status: this.detail.status}).then(res => {
                console.log(res, "修改")
                this.$message({
                  message: res.msg,
                  type: 'success'
                });
                this.detail = null
                this.DialogVisible = false
                this.ruleForm = this.$options.data().ruleForm;
                this.retrieveData()
              })
            } else {
              addCompany(this.ruleForm).then(res => {
                console.log(res, "添加")
                this.$message({
                  message: res.msg,
                  type: 'success'
                });
                this.DialogVisible = false
                this.retrieveData()
              })
              this.ruleForm = this.$options.data().ruleForm;
            }
          }else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      switchState(data){
        this.loading=true
        updateCompany({title:data.title,detail:data.detail, id: data.id, status: data.status}).then(res => {
          this.$message({
            message: res.msg,
            type: 'success'
          });
          this.detail = null
          this.DialogVisible = false
          this.ruleForm = this.$options.data().ruleForm;
          this.retrieveData()
        }).catch(e=>{
          this.retrieveData()
        })
      },
      // 打开新增
      DialogVisiblerue() {
        this.DialogVisible = true
        this.ruleForm = this.$options.data().ruleForm;
      },
    },
    //组件
    components: {}
  }
</script>

<style lang='scss' scoped>
  .HistoryData {
    .adsasdj {
      width: 96%;
      margin: 0 auto;
    }

    width: 100%;
    padding: 20px;
    box-sizing: border-box;

    h2 {
      padding: 10px 0;
      padding-bottom: 30px;
      font-size: 25px;
    }
  }
</style>
