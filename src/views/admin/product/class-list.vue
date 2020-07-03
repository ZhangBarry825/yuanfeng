<template>
  <div class="list-box">
    <el-row><h2>产品分类</h2></el-row>
    <el-button-group class="buttons">
      <el-button size="small" type="primary" icon="el-icon-edit"  @click="dialogFormVisible = true">
        新增
      </el-button>
      <el-button size="small" type="primary" icon="el-icon-delete" @click="deleteItems"
                 style="border-top-right-radius: 4px;border-bottom-right-radius: 4px">删除
      </el-button>
    </el-button-group>

    <el-table
      v-loading="loading"
      :data="categoryList"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="groupName"
        label="分类名称">
      </el-table-column>
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
      <el-table-column
        width="160"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small" plain>编辑</el-button>
          <el-button type="danger" @click="handleDelete([scope.row.id])" size="small" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row class="pagination">
      <el-pagination
        background
        @current-change="changePage"
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="totalNum">
      </el-pagination>
    </el-row>

    <el-dialog title="新增分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input maxlength="11" v-model="form.groupName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
            <el-switch
              @change="updateState(form.status)"
              v-model="form.status"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66"
              inactive-color="gainsboro">
            </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false;form={id:'',groupName:'',status:1}">取 消</el-button>
        <el-button v-if="isCreate" type="primary" @click="createClass">确 定</el-button>
        <el-button v-if="!isCreate" type="primary" @click="updateClass">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
    addClass,
    deleteClass,
    deleteProduct,
    getAllClass,
    getProductList,
    updateClass,
    updateProduct
  } from "@/api/admin-product";

  export default {
    name: "ProductClassList",
    data() {
      return {
        loading:false,
        baseImgUrl: this.$imgBaseUrl,
        pageNum: 1,
        pageSize: 10,
        hasNext: false,
        totalNum: 0,
        multipleSelection:[],//多选内容
        categoryList: [],

        isCreate:true,
        dialogFormVisible: false,
        form: {
          id:'',
          groupName:'',
          status:1
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      createClass(){
        let form= new FormData()
        form.append('groupName',this.form.groupName)
        form.append('status',this.form.status)
        addClass(form).then(res=>{
          if(res.code && res.code == 200 && res.msg=='添加失败,分组名已存在'){
            this.$message({
              type: 'error',
              message: '分组名已存在!'
            });
          }else if(res.code && res.code == 200){
            this.$message({
              type: 'success',
              message: '添加成功!'
            });
            this.fetchData()
            this.dialogFormVisible=false
            this.form={
              id:'',
              groupName:'',
              status:''
            }
          }
        })
      },
      updateClass(){
        let form= new FormData()
        form.append('id',this.form.id)
        form.append('groupName',this.form.groupName)
        form.append('status',this.form.status)
        updateClass(form).then(res=>{
          if(res.code && res.code == 200 && res.msg=='添加失败,分组名已存在'){
            this.$message({
              type: 'error',
              message: '分组名已存在!'
            });
          }else if(res.code && res.code == 200){
            this.$message({
              type: 'success',
              message: '修改成功!'
            });
            this.fetchData()
            this.dialogFormVisible=false
            this.form={
              id:'',
              groupName:'',
              status:''
            }
          }
        })
      },
      updateState(e){
        e==1?this.form.status=1:this.form.status=0
      },
      handleClick(row) {
        console.log(row);
        this.dialogFormVisible=true
        this.form={
          id:row.id,
          groupName:row.groupName,
          status:row.status
        }
      },
      goTo(path){
        this.$router.push({path:path})
      },
      deleteItems(){
        if(this.multipleSelection.length===0){
          return
        }
        let d=[]
        for (let i = 0; i <this.multipleSelection.length ; i++) {
          d.push(this.multipleSelection[i].id)
        }
        this.$confirm('确定删除?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let formData=new FormData()
          formData.append('id',d)
          deleteClass(formData).then(res=>{
            if(res.code && res.code == 200){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.changePage(this.pageNum,true,this.multipleSelection.length)
            }
          })
        }).catch(() => {

        });
      },
      handleDelete(id){
        this.$confirm('确定删除?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let formData=new FormData()
          formData.append('id',id)
          deleteClass(formData).then(res=>{
            if(res.code && res.code == 200){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.changePage(this.pageNum,true,1)
            }
          })
        }).catch(() => {

        });
      },
      switchState(data){
        let that = this
        this.loading=true
        //console.log(data)
        let formData=new FormData()
        formData.append('id',data.id)
        formData.append('status',data.status)
        formData.append('groupName',data.groupName)

        updateClass(formData).then(res=>{
          //console.log(res,876)
          if(res.code && res.code === 200){
            that.loading=false
          }
        })

      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      changePage(currentPage, isDelete = false, deleteNum = 1) {
        if (isDelete) {
          let num = this.totalNum % this.pageSize
          if (num > deleteNum) {
            this.pageNum = currentPage
          } else {
            if (currentPage > 1) {
              this.pageNum = currentPage - 1
            } else {
              this.pageNum = currentPage
            }
          }
        } else {
          this.pageNum = currentPage
        }
        this.fetchData()
      },
      fetchData(page = this.pageNum) {
        this.loading=true
        getAllClass({
          pageSize:this.pageSize,
          pageNum:page
        }).then(res => {
          //console.log(res,1)
          if (res.code && res.code === 200) {
            this.categoryList=res.data.list
          }
          this.loading=false
        })
      }
    },
    mounted() {
      this.fetchData()
    }
  }
</script>

<style scoped lang="scss">
  .list-box {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    h2 {
      padding: 10px 0;
      padding-bottom: 30px;
      font-size: 25px;
    }
    .miniImg{
      width: 100px;
      height: 100px;
    }

    .buttons {

      padding-bottom: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center
    }
    .pagination{
      padding: 30px 0;
    }
  }

</style>
