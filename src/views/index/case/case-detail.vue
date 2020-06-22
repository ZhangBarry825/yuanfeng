<template>
  <div class="case-page">
    <div class="pc" v-if="!isMobile">
      <Header></Header>
      <div class="banner">
        <div class="text">案例实景</div>
      </div>

      <div class="article">
        <div class="title">工厂车间设备正在作业中</div>
        <div class="time">2020-05-22</div>
        <div class="border"></div>
        <div class="content">

          8011铝箔是河南明泰铝业股份有限公司的优势产品之一，近日，明泰铝业喜获20吨8011-H18铝箔订单，厚度为0.25mm，客户将用于制作茶叶包装易撕盖。茶叶包装与8011铝箔又有着哪些关系呢？我们一起来看下吧。<br>

          经常喝茶的人都知道，茶叶吸湿及吸味性强，很容易吸附空气中水分及异味，若贮存方法稍有不当，就会在短时期内失去风味，而且愈是清发酵高清香的名贵茶叶，愈是难以保存。通常茶叶在贮放一段时间后，香气、滋味、颜色会发生变化，原来的新茶味儿消失，陈味儿渐露。好好的茶叶说变味儿就变味儿，想想就很悲伤呢。在这样的情况下，铝箔用于茶叶包装势不可挡。<br>

          众所周知，铝箔具有防潮、遮光、无毒无味等优点。8011铝箔作为铝箔中的佼佼者，除了具有铝箔共有的优势外，更是具有稳定性强、密封性强、食品级、除油干净、针孔少、产品板型好等多重优势。尤其是稳定性和密封性，是作为茶叶包装所必须的，铝箔包装可以保证茶叶的成分保持稳定，不会因运输、储存等发生变化，而成本低廉的特点，又能够降低茶叶包装的成本，降低茶叶的整体价格。<br>

          明泰铝业可生产0.016-0.5mm厚、20-1600mm宽的8011铝箔，广泛用于食品、药品包装、酒瓶盖、化妆品瓶盖、饮料瓶盖等领域。河南明泰是中国前十的铝箔材生产厂家，可承接3-2000吨8011铝箔原材料订单，产品质量稳定，全球出口，价格实惠，可放心采购！如有需要，请拨打0371-86628262，询价订购更方便！<br>

          <img src="../../../../public/images/product1.png" alt="">
        </div>
      </div>

      <div class="pagination">
        <div class="line1">上一篇：农田田地作业中实景</div>
        <div class="line2">
          <div class="left">下一篇：化工设备作业中实景</div>
          <div class="right">返回列表 ></div>
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

  export default {
    name: "CaseDetail",
    components: {
      Header,
      Footer,
      MobileCaseDetail
    },
    props: ['isMobile'],
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
