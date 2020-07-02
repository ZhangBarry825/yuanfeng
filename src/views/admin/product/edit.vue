<template>
  <div class="list-box">
    <el-row><h2>编辑产品</h2></el-row>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="产品名称" prop="productName">
        <el-input v-model="ruleForm.productName"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-switch
          :active-value="1"
          :inactive-value="0"
          v-model="ruleForm.status"></el-switch>
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
      <el-form-item label="图片" prop="imageUrlList">
        <!--        <Uploader :backImg="baseImgUrl+ruleForm.imageUrlList[0].imageUrl" :limitNum="5" @handSubmit="imgSubmit" @handRemove="imgRemove"></Uploader>-->
        <UploaderTwo :backImgs="smallImages" :limitNum="5" @handSubmit="imgSubmit"
                     @handRemove="imgsRemove"></UploaderTwo>
      </el-form-item>
      <el-form-item label="简述" prop="productPre">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.productPre"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="productDetail">
        <!--        <el-input type="textarea"  v-model="ruleForm.productDetail"></el-input>-->
        <Editor v-model="ruleForm.productDetail" :height="300"></Editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Update</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  import Uploader from '@/components/Article/uploader/uploader'
  import UploaderTwo from '@/components/Article/uploader/uploaderTwo'
  import Editor from '@/components/Article/Tinymce/index'
  import {getProduct, updateProduct,getAllClass} from "@/api/admin-product";

  export default {
    name: "ProductEdit",
    data() {
      return {
        categoryList: [],
        baseImgUrl: this.$imgBaseUrl,
        smallImages: [],
        id: '',
        ruleForm: {
          smallImages: [{}],
          productName: '',
          status: '1',
          introduction: '',
          content: '',
          imageUrl: '',
          sort: '',
          classifyId: ''
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
      this.id = this.$route.query.id
      this.fetchData()
    },
    methods: {
      imgSubmit(path) {
        this.ruleForm.smallImages.push(path)
        //console.log(path, '成功提交！')
      },
      imgsSubmit(path) {
        console.log(path)
        this.ruleForm.smallImages.push(path)
      },
      imgRemove() {
        this.ruleForm.smallImages=[]
        this.smallImages=[]
      },
      imgsRemove(e) {
        console.log(e)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData = new FormData()
            formData.append('id', this.ruleForm.id)
            formData.append('productName', this.ruleForm.productName)
            formData.append('imagesUrl', this.ruleForm.smallImages)
            formData.append('sort', this.ruleForm.sort)
            formData.append('status', this.ruleForm.status)
            formData.append('introduction', this.ruleForm.introduction)
            formData.append('content', this.ruleForm.content)

            //console.log(this.ruleForm)
            updateProduct(formData).then(res=>{
              if(res.code && res.code==200){
                this.$message({
                  message:'update successfully!',
                  type:'success'
                })
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      fetchData() {
        getProduct({
          id: this.id
        }).then(res => {
          //console.log(res, 864)
          this.ruleForm = res.data
          let smallImages = []
          let images = []
          for (let i = 0; i < this.ruleForm.smallImages.length; i++) {
            images[i]= this.ruleForm.smallImages[i].imageUrl
            smallImages[i] = {
              url: this.baseImgUrl + this.ruleForm.smallImages[i]
            }
          }
          this.ruleForm.smallImages=images
          this.smallImages = smallImages
          console.log(this.smallImages, 987)
        })

        getAllClass({}).then(res => {
          //console.log(res, 1)
          if (res.code && res.code === 200) {
            this.categoryList = res.data.list
          }
          this.loading = false
        })
      }
    },
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
