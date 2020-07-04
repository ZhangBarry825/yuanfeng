<template>
  <div class="list-box">
    <el-row><h2>关于我们</h2></el-row>


    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row><h5>公司简介</h5></el-row>
      <el-form-item label="图片" prop="companyPicture">
        <el-upload
          class="avatar-uploader"
          action="#"
          :http-request="uploadRequest1"
          :show-file-list="false">
          <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="公司简介" prop="companyDetail">
        <el-input type="textarea"  :rows="5" show-word-limit :maxlength="300"
                  v-model="ruleForm.company.detail"></el-input>
      </el-form-item>

      <el-row><h5>企业文化</h5></el-row>
      <el-form-item label="图片1" prop="companyPicture">
        <el-upload
          class="avatar-uploader"
          action="#"
          :http-request="uploadRequest2"
          :show-file-list="false">
          <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题1" prop="cultureName">
        <el-input v-model="ruleForm.culture[0].title"></el-input>
      </el-form-item>
      <el-form-item label="内容1" prop="cultureDetail">
        <el-input type="textarea" resize="none" show-word-limit :maxlength="100"
                  v-model="ruleForm.culture[0].detail"></el-input>
      </el-form-item>
      <el-form-item label="图片2" prop="companyPicture">
        <el-upload
          class="avatar-uploader"
          action="#"
          :http-request="uploadRequest3"
          :show-file-list="false">
          <img v-if="imageUrl3" :src="imageUrl3" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题2" prop="cultureName">
        <el-input v-model="ruleForm.culture[1].title"></el-input>
      </el-form-item>
      <el-form-item label="内容2" prop="cultureDetail">
        <el-input type="textarea" resize="none" show-word-limit :maxlength="100"
                  v-model="ruleForm.culture[1].detail"></el-input>
      </el-form-item>
      <el-form-item label="图片3" prop="companyPicture">
        <el-upload
          class="avatar-uploader"
          action="#"
          :http-request="uploadRequest4"
          :show-file-list="false">
          <img v-if="imageUrl4" :src="imageUrl4" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题3" prop="cultureName">
        <el-input v-model="ruleForm.culture[2].title"></el-input>
      </el-form-item>
      <el-form-item label="内容3" prop="cultureDetail">
        <el-input type="textarea" resize="none" show-word-limit :maxlength="100"
                  v-model="ruleForm.culture[2].detail"></el-input>
      </el-form-item>

      <el-row><h5>服务理念</h5></el-row>

      <el-form-item label="图片1" prop="companyPicture">
        <el-upload
          class="avatar-uploader"
          action="#"
          :http-request="uploadRequest5"
          :show-file-list="false">
          <img v-if="imageUrl5" :src="imageUrl5" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题1" prop="cultureName">
        <el-input v-model="ruleForm.service[0].title" show-word-limit :maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="图片2" prop="companyPicture">
        <el-upload
          class="avatar-uploader"
          action="#"
          :http-request="uploadRequest6"
          :show-file-list="false">
          <img v-if="imageUrl6" :src="imageUrl6" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题2" prop="cultureName">
        <el-input v-model="ruleForm.service[1].title" show-word-limit :maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="图片3" prop="companyPicture">
        <el-upload
          class="avatar-uploader"
          action="#"
          :http-request="uploadRequest7"
          :show-file-list="false">
          <img v-if="imageUrl7" :src="imageUrl7" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题3" prop="cultureName">
        <el-input v-model="ruleForm.service[2].title" show-word-limit :maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="图片4" prop="companyPicture">
        <el-upload
          class="avatar-uploader"
          action="#"
          :http-request="uploadRequest8"
          :show-file-list="false">
          <img v-if="imageUrl8" :src="imageUrl8" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题4" prop="cultureName">
        <el-input v-model="ruleForm.service[3].title" show-word-limit :maxlength="10"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getAboutUs, saveAboutUs} from "@/api/admin-us";
  import {uploadFile} from "@/api/admin-banner";

  export default {
    name: "AboutUs",
    data() {
      return {
        baseUrl: this.$imgBaseUrl,
        imageUrl1: '',
        imageUrl2: '',
        imageUrl3: '',
        imageUrl4: '',
        imageUrl5: '',
        imageUrl6: '',
        imageUrl7: '',
        imageUrl8: '',
        ruleForm: {
          company: {
            id: 1,
            imageUrl: '1',
            detail: '1'
          },
          culture: [
            {
              id: 1,
              imageUrl: '1',
              title: '1',
              detail: '1'
            },
            {
              id: 1,
              imageUrl: '1',
              title: '1',
              detail: '1'
            },
            {
              id: 1,
              imageUrl: '1',
              title: '1',
              detail: '1'
            },
          ],
          service: [
            {
              id: 1,
              imageUrl: '1',
              title: '1'
            },
            {
              id: 1,
              imageUrl: '1',
              title: '1'
            },
            {
              id: 1,
              imageUrl: '1',
              title: '1'
            },
            {
              id: 1,
              imageUrl: '1',
              title: '1'
            }
          ],
        },
        rules: {
          // companyPicture: [{required: true, message: '请上传图片', trigger: 'blur'}],
          // introduction: [{required: true, message: '请输入内容', trigger: 'blur'}],
          // companyDetail: [{required: true, message: '请输入公司简介', trigger: 'blur'}]
        },
      }
    },
    methods: {
      uploadRequest1(params) {
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
            this.imageUrl1 = this.baseUrl + res.data
            this.ruleForm.company.imageUrl = res.data
          }
        }).catch(() => {

        })
      },
      uploadRequest2(params) {
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
            this.imageUrl2 = this.baseUrl + res.data
            this.ruleForm.culture[0].imageUrl = res.data
          }
        }).catch(() => {

        })
      },
      uploadRequest3(params) {
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
            this.imageUrl3 = this.baseUrl + res.data
            this.ruleForm.culture[1].imageUrl = res.data
          }
        }).catch(() => {

        })
      },
      uploadRequest4(params) {
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
            this.imageUrl4 = this.baseUrl + res.data
            this.ruleForm.culture[2].imageUrl = res.data
          }
        }).catch(() => {

        })
      },
      uploadRequest5(params) {
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
            this.imageUrl5 = this.baseUrl + res.data
            this.ruleForm.service[0].imageUrl = res.data
          }
        }).catch(() => {

        })
      },
      uploadRequest6(params) {
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
            this.imageUrl6 = this.baseUrl + res.data
            this.ruleForm.service[1].imageUrl = res.data
          }
        }).catch(() => {

        })
      },
      uploadRequest7(params) {
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
            this.imageUrl7 = this.baseUrl + res.data
            this.ruleForm.service[2].imageUrl = res.data
          }
        }).catch(() => {

        })
      },
      uploadRequest8(params) {
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
            this.imageUrl8 = this.baseUrl + res.data
            this.ruleForm.service[3].imageUrl = res.data
          }
        }).catch(() => {

        })
      },
      fetchData() {
        getAboutUs().then(res=>{
          console.log(res)
          if(res.code && res.code== 200){
            this.ruleForm.company=res.data.aboutUsList[0]
            this.imageUrl1=this.baseUrl+res.data.aboutUsList[0].imageUrl
            this.ruleForm.culture=res.data.companyInfoList
            this.imageUrl2=this.baseUrl+res.data.companyInfoList[0].imageUrl
            this.imageUrl3=this.baseUrl+res.data.companyInfoList[1].imageUrl
            this.imageUrl4=this.baseUrl+res.data.companyInfoList[2].imageUrl
            this.ruleForm.service=res.data.serviceConList
            this.imageUrl5=this.baseUrl+res.data.serviceConList[0].imageUrl
            this.imageUrl6=this.baseUrl+res.data.serviceConList[1].imageUrl
            this.imageUrl7=this.baseUrl+res.data.serviceConList[2].imageUrl
            this.imageUrl8=this.baseUrl+res.data.serviceConList[3].imageUrl
          }
        })
      },
      submitForm(formName) {
        console.log(this.ruleForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let newData={
              aboutUsList:[]
            }
            newData.aboutUsList=[this.ruleForm.company]
            newData.companyInfoList=this.ruleForm.culture
            newData.serviceConList=this.ruleForm.service
            saveAboutUs(newData).then(res => {
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


  ::v-deep .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  ::v-deep .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  ::v-deep .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 130px;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }

  ::v-deep .avatar {
    width: 130px;
    height: 130px;
    display: block;
  }


</style>
