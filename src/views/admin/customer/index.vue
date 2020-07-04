<template>
  <div class="Customer">
    <el-row>
      <h2>客户分布</h2>
    </el-row>
    <div class="actios">
      <div class="block" v-for="(item, index) in list" :key="index">
        <el-image :src="$imgBaseUrl+item.imageUrl"></el-image>
      </div>
    </div>
    <div class="asdsize">
      <el-upload
        :action="$imgBaseUrl+'/background-imagesUp/up'"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <el-button size="small" type="primary">修改图片</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { queryByPageList, updateImage } from '@/api/admin/Customer';
export default {
  name: 'Customer',

  data () {
    return {
      list: [],
      ruleForm: {},
      fileList: []
    }
  },
  //生命周期函数
  created () {
    this.retrieveData()
  },
  //方法
  methods: {
    async retrieveData () {
      let { data } = await queryByPageList()
      this.list = data.list
      data.list.forEach(item => {
        this.$imgBaseUrl + item.imageUrl
      })
      console.log(data, this.$imgBaseUrl)
    },
    handleAvatarSuccess (file, fileList) {
      this.list[0].imageUrl = file.data
      updateImage({ imageUrl: file.data, id: this.list[0].id, status: this.list[0].status }).then(res => {
        console.log(res, "0101")
      })
      // console.log(file, fileList, "1")
    },
    beforeAvatarUpload (file, fileList) {
      console.log(file, fileList, "2")
    },
    handleChange (file, fileList) {
      console.log(file, fileList, "3")
    },
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
.actios {
  width: 900px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid #c4bdbd;
}
.Customer {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  h2 {
    padding: 10px 0;
    padding-bottom: 30px;
    font-size: 25px;
  }
  ::v-deep .el-upload.el-upload--text {
    // width: 100%;
    margin-top: 50px;
  }

  .block {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    ::v-deep.el-image.el-tooltip.item {
      border: 1px solid #c4bdbd;
    }
  }
}
.asdsize {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
