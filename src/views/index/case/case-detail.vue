<template>
  <div class="case-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="3"></Header>
      <div class="banner">
        <div class="text">案例实景</div>
      </div>

      <div class="article">
        <div class="title">{{caseDetail.title}}</div>
        <div class="time">{{caseDetail.addTime}}</div>
        <div class="border"></div>
        <div class="content" v-html="caseDetail.text">

        </div>
      </div>

      <div class="pagination">
        <div class="line1">上一篇：农田田地作业中实景</div>
        <div class="line2">
          <div class="left">下一篇：化工设备作业中实景</div>
          <div class="right" @click="$router.push({path:'/case-list'})">返回列表 ></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    <MobileCaseDetail v-if="isMobile"></MobileCaseDetail>
  </div>
</template>

<script>
  import Header from "@/components/Header/index";
  import Footer from "@/components/Footer/index";
  import MobileCaseDetail from "@/views/mobile/case/case-detail";
  import {fetchCaseDetail} from "@/api/case";

  export default {
    name: "CaseDetail",
    components: {
      Header,
      Footer,
      MobileCaseDetail
    },
    props: ['isMobile'],
    data(){
      return{
        caseDetail:{}
      }
    },
    mounted() {
      this.fetchData(this.$route.query.id)
    },
    methods:{
      async fetchData(id){
        let caseDetail=await fetchCaseDetail({id:id})
        this.caseDetail=caseDetail.data
      }
    }
  }
</script>

<style scoped lang="scss">
  .case-page {
    width: 100%;

    .pc {
      width: 100%;
      min-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f5f5f5;
    }


    .banner {
      min-width: 1200px;
      width: 100%;
      height: 350px;
      background-image: url("../../../../public/images/case_banner.png");
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .text {
        font-size: 40px;
        color: #fff;
      }
    }

    .article {
      width: 1200px;
      padding: 30px;
      box-sizing: border-box;
      background-color: #fff;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        padding-top: 30px;
        font-size: 32px;
        font-weight: 400;
        color: rgba(0, 0, 51, 1);
        line-height: 44px;
        text-align: center;
      }

      .time {
        font-size: 14px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 38px;
      }

      .border {
        width: 1100px;
        height: 1px;
        background: rgba(229, 229, 229, 1);
      }

      .content {
        width: 100%;
        padding: 30px 10px;
        box-sizing: border-box;

        ::v-deep img {
          max-width: 100%;
        }


        font-size: 16px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 28px;
      }
    }

    .pagination {
      margin-top: 30px;
      padding: 50px 0;
      width: 1200px;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;

      .line1 {
        width: 100%;
        cursor: pointer;
        font-size: 14px;
        color: #666666;
        line-height: 38px;
      }

      .line2 {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .left {
          cursor: pointer;
          font-size: 14px;
          color: #666666;
          line-height: 38px;
        }

        .right {
          cursor: pointer;
          font-size: 14px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 38px;
        }
      }
    }
  }

</style>
