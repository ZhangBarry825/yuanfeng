<template>
  <div class="list-box">
    <el-row><h2>轮播列表</h2></el-row>
    <el-button-group class="buttons">
      <el-button size="small" type="primary" icon="el-icon-edit" @click="goTo('/admin-banner/create')">
        新增
      </el-button>
      <el-button size="small" type="primary" icon="el-icon-delete" @click="deleteItems"
                 style="border-top-right-radius: 4px;border-bottom-right-radius: 4px">删除
      </el-button>
    </el-button-group>

    <el-table
      v-loading="loading"
      :data="bannerList"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        width="70"
        prop="sort"
        label="排序">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="details"
        label="简述">
      </el-table-column>
      <el-table-column
        prop="imageUrl"
        label="图片">
        <template  #default="{row}">
          <el-image
            class="miniImg"
            :src="baseImgUrl+row.imageUrl"
            :preview-src-list="[baseImgUrl+row.imageUrl]">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
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
        @current-change="pageChange"
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="totalNum">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
  import {deleteBanner, getBannerList, updateBanner} from "@/api/admin-banner";

  export default {
    name: "AdminBannerList",
    data() {
      return {
        loading:false,
        baseImgUrl: this.$imgBaseUrl,
        pageNum: 1,
        pageSize: 10,
        hasNext: false,
        totalNum: 0,
        multipleSelection:[],//多选内容
        bannerList: []
      }
    },
    methods: {
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
        this.$confirm('确定要删除吗?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let formData=new FormData()
          formData.append('id',d)
          deleteBanner(formData).then(res=>{
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
        this.$confirm('确定要删除吗?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let formData=new FormData()
          formData.append('id',id)
          deleteBanner(formData).then(res=>{
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
        formData.append('sort',data.sort)
        formData.append('title',data.title)
        formData.append('details',data.details)
        formData.append('status',data.status)
        formData.append('imageUrl',data.imageUrl)
        updateBanner(formData).then(res=>{
          //console.log(res,876)
          if(res.code && res.code === 200){
            that.loading=false
          }
        })

      },
      pageChange(nowPage){
        this.fetchData(nowPage)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleClick(row) {
        this.goTo('/admin-banner/edit?id='+row.id)
        //console.log(row);
      },
      changePage(currentPage, isDelete = false, deleteNum = 1) {
        if (isDelete) {
          let num = this.totalNum % this.pageSize
          //console.log(this.totalNum, 'this.totalNum')
          //console.log(this.pageSize, 'this.pageSize')
          //console.log(num, 'num')
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
        getBannerList({
          pageNum: page,
          pageSize: this.pageSize,
        }).then(res => {
          if (res.code && res.code === 200) {
            this.bannerList = res.data.list
            this.totalNum = res.data.total
            this.hasNext = res.data.hasNextPage
            this.totalNum=res.data.total
            this.pageNum=page
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
