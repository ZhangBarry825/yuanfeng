<template>
  <div class="list-box">
    <el-row>
      <h2>编辑发展历程</h2>
    </el-row>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="状态" prop="status">
        <el-switch
          :active-value="1"
          :inactive-value="0"
          v-model="ruleForm.status"></el-switch>
      </el-form-item>
      <el-form-item label="年限" prop="time">
        <el-input v-model.number="ruleForm.time" maxlength="4" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="发展详情" prop="detail">
        <el-input type="textarea" :autosize="{ minRows: 4}" v-model="ruleForm.detail"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { updateevelopHis, queryById } from "@/api/admin/HistoryList";
export default {
  name: "HistoryEdit",
  data () {
    return {
      ruleForm: {
        detail: '',
        time: ""
      },
      rules: {
        time: [
          { pattern: /^[0-9]*$/, required: true, message: '请输入年限(如:2020年)', trigger: 'blur' },
        ],
        detail: [
          { required: true, message: '请输入简述', trigger: 'blur' },
          { min: 0, max: 100, message: '最长100字', trigger: 'blur' }
        ]
      },

    }
  },
  components: {
  },
  created () {
    this.obtaindata()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // let formData = new FormData()
          // formData.append('time', this.ruleForm.time)
          // formData.append('detail', this.ruleForm.detail)
          // console.log(formData, "000")
          updateevelopHis(this.ruleForm).then(res => {
            //console.log(res, "20000")
            if (res.code && res.code == 200) {
              this.$message({
                message: res.msg,
                type: 'success'
              })
              this.resetForm('ruleForm')
              this.$router.push({ path: '/admin-history/history-list' })
            }
          })
        } else {
          //console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    async obtaindata () {
      // this.$route.query
      let { data } = await queryById({ id: this.$route.query.id })
      this.ruleForm.detail = data.detail
      this.ruleForm.time = data.time
      this.ruleForm.id = data.id
      this.ruleForm.status = data.status
      //console.log(data)
    },
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
    align-items: center;
  }

  .pagination {
    padding: 30px 0;
  }
}
</style>
