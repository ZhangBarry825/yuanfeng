<template>
  <div class="list-box">
    <el-row><h2>关于我们</h2></el-row>


    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row><h5>公司简介</h5></el-row>
      <el-form-item label="图片" prop="companyPicture">
        <el-upload
          class="avatar-uploader"
          action="#"
          :http-request="uploadRequest"
          :show-file-list="false">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="公司简介" prop="companyDetail">
        <el-input type="textarea" resize="none" show-word-limit :maxlength="300"
                  v-model="ruleForm.company.detail"></el-input>
      </el-form-item>

      <el-row><h5>企业文化</h5></el-row>
      <el-form-item label="标题" prop="cultureName">
        <el-input v-model="ruleForm.culture[0].title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="cultureDetail">
        <el-input type="textarea" resize="none" show-word-limit :maxlength="100"
                  v-model="ruleForm.culture[0].detail"></el-input>
      </el-form-item>

      <el-row><h5>服务理念</h5></el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {saveAboutUs} from "@/api/admin-us";
  import {uploadFile} from "@/api/admin-banner";

  export default {
    name: "AboutUs",
    data() {
      return {
        baseUrl: this.$imgBaseUrl,
        imageUrl: '',
        ruleForm: {
          company: {
            id: '',
            imageUrl: '',
            detail: ''
          },
          culture: [
            {
              id: '',
              imageUrl: '',
              title: '',
              detail: ''
            },
            {
              id: '',
              imageUrl: '',
              title: '',
              detail: ''
            },
            {
              id: '',
              imageUrl: '',
              title: '',
              detail: ''
            },
          ],
          service: [
            {
              id: '',
              imageUrl: '',
              title: ''
            },
            {
              id: '',
              imageUrl: '',
              title: ''
            },
            {
              id: '',
              imageUrl: '',
              title: ''
            },
            {
              id: '',
              imageUrl: '',
              title: ''
            }
          ],
        },
        rules: {
          companyPicture: [
            {required: true, message: '请上传图片', trigger: 'blur'}
          ], introduction: [
            {required: true, message: '请输入内容', trigger: 'blur'}
          ],
          companyDetail: [
            {required: true, message: '请输入公司简介', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      uploadRequest(params) {
        let that = this
        const file = params.file,
          fileType = file.type,
          isImage = fileType.indexOf("image") != -1,
          isLt2M = file.size / 1024 / 1024 < 2;
        // 这里常规检验，看项目需求而定
        if (!isImage) {
          this.$message.error("文件类型仅限png,jpg和gif!");
          return;
        }
        if (!isLt2M) {
          this.$message.error("文件大小必须小于2M");
          return;
        }
        const form = new FormData();
        form.append("file", file);
        uploadFile(form).then(res => {
          if (res.data || res.code == 200) {
            this.imageUrl = this.baseUrl + res.data
            this.ruleForm.company.imageUrl = res.data
          }
        }).catch(() => {

        })
      },
      fetchData() {

      },
      submitForm(formName) {
        console.log(this.ruleForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData = new FormData()
            formData.append('introduction', this.ruleForm.introduction)
            saveAboutUs(formData).then(res => {
              if (res.code && res.code == 200) {
                this.$message({
                  message: '修改成功!',
                  type: 'success'
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

    h5 {
      padding: 10px 0;
      padding-bottom: 30px;
      font-size: 18px;
      font-weight: normal;
    }


  }


  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
