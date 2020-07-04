<template>
  <div class="about-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="5"></Header>
      <div class="banner">
        <div class="text">关于我们</div>
        <div class="text2">致力于研发更好用的产品</div>
      </div>

      <div class="introduction">
        <div class="left" :style="`background-image: url(${baseUrl}${theCompany.imageUrl});`"></div>
        <div class="right">
          <div class="title">
            <div class="text">公司简介</div>
            <div class="border"></div>
          </div>
          <div class="content">
            <!-- 河南沅奉机械设备有限公司成立于2003年7月，是一家从事磨料磨具的生产及服务商，磨具磨料领域融合十几年的经验。
            河南沅奉机械设备有限公司位于河南省郑州市，集团占地面积68万平方米，是国家级大型工业企业、国家高新技术企业。
            <br />
            <br />沅奉十分注重研发投入，已经拥有多项国家发明，软件著作权和实用新型专利。不论是传统的制造业还是高科技产业甚至至到远瞻新兴行业，都可以为其设计，研发，生产!近几年经过自身的努力研发并保持与国外同行业的技术合作，不断的提升的生产制造能力。
            <br />
            <br />本公司拥有完善的售后服务体系和专业的技术人员为用户提供售后服务，和客户保持紧密的合作关系，让客户放心购买我们的产品。-->
            {{theCompany.detail}}
          </div>
          <div class="bottom">
            <div class="border"></div>
            <div class="text">ABOUT US</div>
          </div>
        </div>
      </div>

      <div class="culture">
        <div class="text">企业文化</div>
        <div class="border"></div>
      </div>
      <div class="items">
        <div class="item" v-for="(item, index) in theCulture" :key="index">
          <img :src="baseUrl+item.imageUrl" alt />
          <div class="line1">{{item.title}}</div>
          <div class="line2">{{item.detail}}</div>
        </div>
      </div>
      <div class="service">
        <div class="title">
          <div class="text">服务理念</div>
          <div class="border"></div>
        </div>
        <div class="service-item">
          <div class="item" v-for="(item, index) in theService" :key="index">
            <img :src="baseUrl+item.imageUrl" alt />
            <div class="title">{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="experience">
        <div class="center">
          <div class="experience-title">
            <div class="text">发展历程</div>
            <div class="border"></div>
          </div>
          <div class="item" :class="'item'+index" v-for="(item, index) in theHistory" :key="index">
            <img src="../../../../public/images/dotdot.png" alt />
            <div class="title">{{item.time}}年</div>
            <div class="des">{{item.detail}}</div>
          </div>
          <!-- <div class="item item1">
            <img src="../../../../public/images/dotdot.png" alt />
            <div class="title">2006年</div>
            <div class="des">公司刚成立，正在发展阶段</div>
          </div>
          <div class="item item2">
            <img src="../../../../public/images/dotdot.png" alt />
            <div class="title">2010年</div>
            <div class="des">公司刚成立，正在发展阶段</div>
          </div>
          <div class="item item3">
            <img src="../../../../public/images/dotdot.png" alt />
            <div class="title">2013年</div>
            <div class="des">公司刚成立，正在发展阶段</div>
          </div>
          <div class="item item4">
            <img src="../../../../public/images/dotdot.png" alt />
            <div class="title">2015年</div>
            <div class="des">公司刚成立，正在发展阶段</div>
          </div>
          <div class="item item5">
            <img src="../../../../public/images/dotdot.png" alt />
            <div class="title">2020年</div>
            <div class="des">公司发展成熟，服务过268+客户</div>
          </div>-->
        </div>
      </div>

      <Footer></Footer>
    </div>
    <MobileAboutUs v-if="isMobile"></MobileAboutUs>
  </div>
</template>

<script>
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import MobileAboutUs from "@/views/mobile/about-us/about-us";
import { getUsInfo, getHistory, getAboutUs } from '@/api/about';

export default {
  name: "AboutUs",
  components: {
    Header,
    Footer,
    MobileAboutUs
  },
  props: ['isMobile'],
  data () {
    return {
      baseUrl: this.$imgBaseUrl,

      usInfo: [],
      theCompany: {},
      theCulture: [],
      theService: [],
      theHistory: [],
    }
  },
  mounted () {
    this.retrieveData()
  },
  methods: {
    async retrieveData () {
      let res = await getUsInfo()
      this.usInfo = res.data
      this.theCompany=res.data.aboutUsList[0]
      this.theCulture=res.data.companyInfoList
      this.theService=res.data.serviceConList
      //console.log(this.theCompany,'theCompany')
      //console.log(this.theCulture,'theCulture')
      //console.log(this.theService,'theService')
      // 发展历程
      let res1 = await getHistory()
      this.theHistory = res1.data.slice(-6)

    },
  },
}
</script>

<style scoped lang="scss">
.about-page {
  width: 100%;
  .pc {
    min-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;

    .banner {
      min-width: 1200px;
      width: 100%;
      height: 350px;
      background-image: url('../../../../public/images/about_us.png');
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

      .text2 {
        margin-top: 30px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }

    .introduction {
      display: flex;
      justify-content: flex-end;
      width: 1200px;
      padding: 80px 0;
      position: relative;

      .left {
        position: absolute;
        left: 0;
        top: 165px;
        width: 543px;
        height: 515px;
        box-shadow: 0px 1px 35px 0px rgba(135, 148, 164, 0.31);

        // background-image: url('../../../../public/images/us_img.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .right {
        width: 769px;
        height: 701px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 1px 35px 0px rgba(135, 148, 164, 0.31);

        padding: 100px 100px 100px 200px;

        .title {
          font-size: 32px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 38px;
        }

        .border {
          margin-top: 10px;
          width: 53px;
          height: 4px;
          background: rgba(54, 82, 182, 1);
        }

        .content {
          padding: 20px 0;
          box-sizing: border-box;
          font-size: 16px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 28px;
        }

        .bottom {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          padding: 20px 0;

          .border {
            width: 70px;
            height: 0;
            margin: 0 10px;
            border-bottom: 1px solid rgba(222, 31, 34, 1);
          }

          .text {
            font-size: 16px;
            font-weight: bold;
            color: rgba(222, 31, 34, 1);
            line-height: 38px;
          }
        }
      }
    }

    .culture {
      width: 100%;
      height: 361px;
      min-width: 1200px;
      background-image: url('../../../../public/images/culture.png');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;

      .text {
        font-size: 32px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 38px;
      }

      .border {
        margin-top: 10px;
        width: 53px;
        height: 4px;
        background: rgba(255, 255, 255, 1);
      }
    }

    .items {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      position: relative;
      top: -110px;

      .item {
        background-color: #fff;
        padding: 50px 30px;
        box-sizing: border-box;
        width: 381px;
        height: 225px;
        box-shadow: 0px 1px 30px 0px rgba(135, 148, 164, 0.21);
        position: relative;

        img {
          position: absolute;
          top: -40px;
          box-shadow: 0px 1px 30px 0px rgba(135, 148, 164, 0.21);
          border-radius: 50%;
        }

        .line1 {
          font-size: 28px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 38px;
          padding: 20px 0;
        }

        .line2 {
          font-size: 14px;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 24px;
        }
      }
    }

    .service {
      width: 1200px;

      .title {
        display: flex;
        flex-direction: column;
        align-items: center;

        .text {
          font-size: 32px;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 38px;
        }

        .border {
          margin-top: 10px;
          width: 53px;
          height: 4px;
          background: rgba(54, 82, 182, 1);
        }
      }

      .service-item {
        padding: 80px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 175px;
            height: 175px;
            border-radius: 50%;
          }

          .title {
            font-size: 20px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 38px;
            padding: 30px 0;
          }
        }
      }
    }

    .experience {
      width: 100%;
      min-width: 1200px;
      height: 684px;
      background-image: url('../../../../public/images/experience.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;

      .center {
        width: 1200px;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;

        .experience-title {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          left: 45%;
          top: 15%;

          .text {
            font-size: 32px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 38px;
          }

          .border {
            margin: 10px 0;
            width: 53px;
            height: 4px;
            background: rgba(255, 255, 255, 1);
          }
        }

        .item {
          width: 130px;
          display: flex;
          flex-direction: column;
          color: #fff;
          align-items: center;

          img {
            width: 22px;
            height: 22px;
          }

          .title {
            font-size: 20px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 38px;
            padding: 10px 0;
          }

          .des {
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 24px;
          }
        }

        .item0 {
          margin-top: 380px;
        }

        .item1 {
          margin-top: 337px;
        }

        .item2 {
          margin-top: 322px;
        }

        .item3 {
          margin-top: 360px;
        }

        .item4 {
          margin-top: 383px;
        }

        .item5 {
          margin-top: 345px;
        }
      }
    }
  }
}
</style>
