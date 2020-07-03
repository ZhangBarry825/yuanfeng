<template>
  <div class="list-box">
    <el-row><h2>编辑案例</h2></el-row>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="案例名称" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
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
        <Uploader :backImg="baseImgUrl+ruleForm.imageUrl" :limitNum="1" @handSubmit="imgSubmit" @handRemove="imgRemove"></Uploader>
      </el-form-item>
      <el-form-item label="内容" prop="text">
        <!--        <el-input type="textarea"  v-model="ruleForm.productDetail"></el-input>-->
        <Editor v-model="ruleForm.text" :height="300"></Editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  import Uploader from '@/components/Article/uploader/uploader'
  import UploaderTwo from '@/components/Article/uploader/uploaderTwo'
  import Editor from '@/components/Article/Tinymce/index'
  import {getAllClass, getNews, updateNews} from "@/api/admin-news";

  export default {
    name: "NewsEdit",
    data() {
      return {
        categoryList: [],
        baseImgUrl: this.$imgBaseUrl,
        id: '',
        ruleForm: {
          title: '',
          status: '1',
          indexShow: '1',
          text: '',
          imageUrl: '',
          classifyId: ''
        },
        rules: {
          title: [
            {required: true, message: '请输入新闻标题', trigger: 'blur'}
          ],
          lead: [
            {required: true, message: '请输入新闻导语', trigger: 'blur'}
          ],
          imageUrl: [
            {required: true, message: '请上传封面', trigger: 'blur'}
          ],
          groupName: [
            {required: true, message: '请选择分类', trigger: 'blur'}
          ],
          text: [
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
        this.ruleForm.imageUrl=path
        //console.log(path, '成功提交！')
      },
      imgsSubmit(path) {
        console.log(path)
        this.ruleForm.smallImages.push(path)
      },
      imgRemove() {
        this.ruleForm.imageUrl=[]
      },
      imgsRemove(e) {
        console.log(e)
        this.ruleForm.smallImages=e
      },
      submitForm(formName) {
        console.log(this.ruleForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData = new FormData()
            formData.append('id', this.ruleForm.id)
            formData.append('title', this.ruleForm.title)
            formData.append('status', this.ruleForm.status)
            formData.append('imageUrl', this.ruleForm.imageUrl)
            formData.append('lead', this.ruleForm.lead)
            formData.append('text', this.ruleForm.text)
            formData.append('groupName', this.ruleForm.groupName)
            let nowTime=new Date()
            formData.append('addtime',nowTime.toLocaleString('chinese', { hour12: false }))

            //console.log(this.ruleForm)
            updateNews(formData).then(res=>{
              if(res.code && res.code==200){
                this.$message({
                  message:'修改成功!',
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
        getNews({
          id: this.id
        }).then(res => {
          console.log(res, 864)
          this.ruleForm = res.data
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
