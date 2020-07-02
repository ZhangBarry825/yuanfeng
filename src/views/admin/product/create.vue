<template>
  <div class="list-box">
    <el-row><h2>新增产品</h2></el-row>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="产品名称" prop="productName">
        <el-input v-model="ruleForm.productName"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="groupName">
        <el-select v-model="ruleForm.groupName" placeholder="请选择">
          <el-option
            v-for="item in categoryList"
            :key="item.id"
            :label="item.groupName"
            :value="item.groupName">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="封面" prop="imageUrl">
        <Uploader :limitNum="1" @handSubmit="imgSubmit" @handRemove="imgRemove"></Uploader>
      </el-form-item>
      <el-form-item label="图片(5张)" prop="smallImages">
        <UploaderTwo :limitNum="5" @handSubmit="imgsSubmit" @handRemove="imgsRemove"></UploaderTwo>
      </el-form-item>
      <el-form-item label="简述" prop="productPre">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.productPre"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="productDetail">
        <!--        <el-input type="textarea"  v-model="ruleForm.productDetail"></el-input>-->
        <Editor v-model="ruleForm.productDetail" :height="300"></Editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">新增</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  import Uploader from '@/components/Article/uploader/uploader'
  import UploaderTwo from '@/components/Article/uploader/uploaderTwo'
  import Editor from '@/components/Article/Tinymce/index'
  import {getAllClass,addProduct} from "@/api/admin-product";

  export default {
    name: "ProductCreate",
    data() {
      return {
        categoryList: [],
        ruleForm: {
          productName: '',
          productPre: '',
          productDetail: '',
          imageUrl: '',
          smallImages: [],
          groupName: '',
        },
        rules: {
          productName: [
            {required: true, message: '请输入产品名称', trigger: 'blur'}
          ],
          imageUrl: [
            {required: true, message: '请上传产品封面', trigger: 'blur'}
          ],
          smallImages: [
            {required: true, message: '请上传产品图片', trigger: 'blur'}
          ],
          groupName: [
            {required: true, message: '请选择分类', trigger: 'blur'}
          ],
          productPre: [
            {required: true, message: '请输入简述', trigger: 'blur'},
            {min: 0, max: 300, message: '长度必须小于300字符', trigger: 'blur'}
          ],
          productDetail: [
            {required: true, message: '请输入文章内容', trigger: 'blur'}
          ]
        },

      }
    },
    components: {
      Uploader,
      Editor,
      UploaderTwo
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      imgSubmit(path) {
        //console.log(path)
        this.ruleForm.imageUrl=path
      },
      imgsSubmit(path) {
        console.log(path)
        this.ruleForm.smallImages.push(path)
      },
      imgRemove() {
        this.ruleForm.imageUrl = ''
      },
      imgsRemove(e) {
        console.log(e)
        this.ruleForm.smallImages = ''
      },
      submitForm(formName) {
        console.log(this.ruleForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData = new FormData()
            formData.append('productName', this.ruleForm.productName)
            formData.append('imageUrl', this.ruleForm.imageUrl)
            formData.append('smallImages', this.ruleForm.smallImages)
            formData.append('productPre', this.ruleForm.productPre)
            formData.append('productDetail', this.ruleForm.productDetail)
            formData.append('groupName', this.ruleForm.groupName)

            //console.log(this.ruleForm)
            addProduct(formData).then(res => {
              if (res.code && res.code == 200) {
                this.$message({
                  message: '新增成功!',
                  type: 'success'
                })
                this.$router.push({path: '/admin-product/list'})
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      fetchData() {
        getAllClass({
          pageSize:9999,
          pageNum:1
        }).then(res => {
          //console.log(res,1)
          if (res.code && res.code === 200) {
            this.categoryList=res.data.list
          }
          this.loading=false
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
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

    .miniImg {
      width: 100px;
      height: 100px;
    }

    .buttons {

      padding-bottom: 20px;
      box-sizing: border-box;
      display: flex;
      align-items: center
    }

    .pagination {
      padding: 30px 0;
    }
  }
</style>
