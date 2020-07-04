<template>
  <div class="list-box">
    <el-row><h2>新增轮播</h2></el-row>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" :maxlength="20" show-word-limit></el-input>
      </el-form-item>
<!--      <el-form-item label="状态" prop="status">-->
<!--        <el-switch-->
<!--          active-value="1"-->
<!--          inactive-value="0"-->
<!--          v-model="ruleForm.status"></el-switch>-->
<!--      </el-form-item>-->
      <el-form-item label="排序" prop="sort">
        <el-input type="number" v-model="ruleForm.sort"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="imageUrl">
        <Uploader :limitNum="1" @handSubmit="imgSubmit" @handRemove="imgRemove"></Uploader>
      </el-form-item>
      <el-form-item label="简述" prop="details">
        <el-input type="textarea" :autosize="{ minRows: 4}" :maxlength="100" show-word-limit v-model="ruleForm.details"></el-input>
      </el-form-item>
<!--      <el-form-item label="Content" prop="content">-->
<!--        &lt;!&ndash;        <el-input type="textarea"  v-model="ruleForm.content"></el-input>&ndash;&gt;-->
<!--        <Editor v-model="ruleForm.content" :height="300"></Editor>-->
<!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">新增</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  import Uploader from '@/components/Article/uploader/uploader'
  import Editor from '@/components/Article/Tinymce/index'
  import {addBanner} from "@/api/admin-banner";

  export default {
    name: "AdminBannerCreate",
    data() {
      return {
        ruleForm: {
          title: '',
          status: '1',
          details: '',
          content:'',
          imageUrl:'',
          sort:'',
        },
        rules: {
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'}
          ],
          imageUrl:[
            {required: true, message: '请上传图片', trigger: 'blur'}
          ],
          sort: [
            {required: true, message: '请输入排序', trigger: 'blur'}
          ],
          details: [
            {required: true, message: '请输入简述', trigger: 'blur'},
            {min: 0, max: 100, message: '最长100字', trigger: 'blur'}
          ],
          // content: [
          //   {required: true, message: 'Please input the content', trigger: 'blur'}
          // ]
        },

      }
    },
    components:{
      Uploader,
      Editor
    },
    mounted() {

    },
    methods:{
      imgSubmit(path){
        console.log(path,123)
        this.ruleForm.imageUrl = path
      },
      imgRemove(){
        this.ruleForm.imageUrl = ''
      },
      submitForm(formName) {
        console.log(this.ruleForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData=new FormData()
            formData.append('title',this.ruleForm.title)
            formData.append('imageUrl',this.ruleForm.imageUrl)
            formData.append('sort',this.ruleForm.sort)
            // formData.append('status',this.ruleForm.status)
            formData.append('details',this.ruleForm.details)
            // formData.append('content',this.ruleForm.content)
            addBanner(formData).then(res=>{
              if(res.code && res.code==200){
                this.$message({
                  message:'新增成功!',
                  type:'success'
                })
                this.$router.push({path:'/admin-banner/list'})
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
