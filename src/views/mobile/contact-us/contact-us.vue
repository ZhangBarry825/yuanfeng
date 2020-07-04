<template>
  <div class="about-page">
    <MobileHeader title="联系我们" :menuId="5"></MobileHeader>

    <div class="map-box">
      <Map height="10rem" :is-mobile="true"></Map>
    </div>
    <div class="contact-box">
      <div class="right">
        <div class="title">提交留言</div>
        <div class="inputs">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="name">
              <el-input class="in" v-model="ruleForm.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item prop="phoneNumber">
              <el-input class="in" v-model="ruleForm.phoneNumber" placeholder="电话"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input class="in" v-model="ruleForm.email" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="detail">
              <el-input
                class="in"
                type="textarea"
                :autosize="{ minRows: 5, maxRows: 10}"
                placeholder="请输入留言内容"
                v-model="ruleForm.detail"
              ></el-input>
            </el-form-item>
            <el-row class="submit-row">
              <div @click="submitForm('ruleForm')" class="submit-button" type="primary">提交</div>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
import Map from "@/components/Map/index";
import MobileFooter from "@/components/MobileFooter/index";
import MobileHeader from "@/components/MobileHeader/index";
import { CompanyCulList } from '@/api/mobile'

export default {
  name: "MobileContactUs",
  components: {
    Map,
    MobileFooter,
    MobileHeader
  },
  data () {
    return {
      ruleForm: {
        name: '',
        email: '',
        phoneNumber: '',
        detail: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入邮箱', trigger: ['blur', 'change'] }
        ],
        phoneNumber: [
          { required: true, message: '请输入电话号码', trigger: 'blur' }
        ],
        detail: [
          { required: true, message: '请输入留言内容', trigger: 'blur' },
          { min: 0, max: 500, message: '留言内容不能超过500个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let formData = new FormData();
          formData.append('email', this.ruleForm.email)
          formData.append('phone', this.ruleForm.phoneNumber)
          formData.append('detail', this.ruleForm.detail)
          formData.append('name', this.ruleForm.name)

          CompanyCulList(this.ruleForm).then(res => {
            //console.log(res,2222)
            this.$message({
              message: res.msg,
              type: 'success'
            })
          })
        } else {
          //console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped lang="scss">
.about-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  .map-box {
    padding: 50px 0;
    width: 90%;
  }

  .contact-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background: rgba(245, 245, 245, 1);

    .right {
      width: 100%;
      background: rgba(55, 82, 182, 1);
      height: 100%;
      padding: 0.5rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .title {
        font-size: 0.8rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        border-left: 2px solid #fff;
        padding-left: 10px;
        margin-bottom: 1rem;
      }

      .inputs {
        width: 100%;
        display: flex;
        flex-direction: column;

        .in >>> .el-input__inner {
          background-color: #f7f7f7 !important;
          border: none;
          padding: 20px;
        }

        .el-textarea >>> .el-textarea__inner {
          background-color: #f7f7f7 !important;
          border: none;
        }

        .submit-row {
          width: 100%;
          padding: 1rem 0;
          display: flex;
          flex-direction: row;
          align-items: center;

          .submit-button {
            width: 118px;
            height: 38px;
            border: 1px solid rgba(255, 255, 255, 1);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 305px;
          }
        }
      }
    }
  }
}
</style>
