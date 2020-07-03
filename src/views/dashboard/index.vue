<template>
  <div class="dashboard-container">
    <div class="centerBox">
      <h1 class="dashboard-text">河南沅奉机械设备管理后台</h1>
      <h3 class="welcome">欢迎，admin</h3>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {getHomeBanner, getHomeMenu} from "@/api/home";

  export default {
    name: 'Dashboard',
    computed: {
      ...mapGetters([
        'name',
        'roles'
      ])
    },
    data(){
      return{
        baseImgUrl:this.$imgBaseUrl,
        bannerData:[]
      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .dashboard-text{
    font-size: 2rem !important;
  }
  .centerBox{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:  0;
    .logo{
      width: 30%;
    }
    .welcome{
      font-weight: normal;
      font-size: 1.5rem;
    }
  }
  .imgBox{
    border-radius: 5px;
    overflow: hidden;
  }
  .swiperBackImg{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
