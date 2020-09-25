<template>
  <div class="page">
    <el-row><h2>公司信息</h2></el-row>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="电话" prop="phoneNumber">
        <el-input v-model="ruleForm.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="EMAIL" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getAboutUs, getInformation, saveInformation} from "@/api/admin-us";

  export default {
    name: "Information",
    data() {
      var validPhone = (rule, value, callback) => {
        const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/

        if (!value) {
          callback(new Error('请输入电话号码'))
        } else if (!reg.test(value)) {
          callback(new Error('请输入正确的11位手机号码'))
        } else {
          callback()
        }
      }
      return {
        baseUrl: this.$imgBaseUrl,

        ruleForm: {
          phoneNumber: '',
          email: '',
          address: '',
        },
        rules: {
          phoneNumber: [
            {required: true, message: '请输入电话号码', trigger: 'blur'},
            {required: true, trigger: 'blur', validator: validPhone}],
          email: [
            {required: true, message: '请输入EMAIL地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的EMAIL地址', trigger: ['blur', 'change']}
          ],
          address: [{required: true, message: '请输入地址', trigger: 'blur'}],
        },
      }
    },
    methods: {
      fetchData() {
        getInformation().then(res => {
          console.log(res)
          if (res.code && res.code == 200) {
            this.ruleForm = res.data.contactUs
          }
        })
      },
      submitForm(formName) {
        console.log(this.ruleForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let formData=new FormData()
            formData.append('id',this.ruleForm.id)
            formData.append('phoneNumber',this.ruleForm.phoneNumber)
            formData.append('email',this.ruleForm.email)
            formData.append('address',this.ruleForm.address)
            saveInformation(formData).then(res => {
              if (res.code && res.code == 200) {
                this.$message({
                  message: '保存成功!',
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
  .page {
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

</style>
