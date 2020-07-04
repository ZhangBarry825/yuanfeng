<template>
  <div class="about-page">
    <MobileHeader title="关于我们" :menuId="5"></MobileHeader>
    <div class="introduction">
      <div class="right">
        <div class="title">
          <div class="text">公司简介</div>
          <div class="border"></div>
        </div>
        <div class="left" :style="`background-image: url(${baseUrl}${theCompany.imageUrl});`"></div>
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
      <div class="service-title">
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
      <div class="experience-title">
        <div class="text">发展历程</div>
        <div class="border"></div>
      </div>
      <div class="center">
        <div class="border"></div>
        <div class="item" :class="'item'+index" v-for="(item, index) in theHistory" :key="index">
          <img src="../../../../public/images/dotdot.png" alt />
          <div class="title">{{item.time}}</div>
          <div class="des">{{item.detail}}</div>
        </div>
      </div>
    </div>

    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
import MobileFooter from "@/components/MobileFooter/index";
import MobileHeader from "@/components/MobileHeader/index";
import {CompanyCulList, getDamn, getCulture, queryAboutUs, getUsInfo, getHistory} from '@/api/about';

export default {
  name: "MobileAboutUs",
  components: {
    MobileHeader,
    MobileFooter
  },
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
  created () {
    this.retrieveData()
  },
  methods: {
    async retrieveData () {
      let res = await getUsInfo()
      this.usInfo = res.data
      this.theCompany=res.data.aboutUsList[0]
      this.theCulture=res.data.companyInfoList
      this.theService=res.data.serviceConList
      console.log(this.theCompany,'theCompany')
      console.log(this.theCulture,'theCulture')
      console.log(this.theService,'theService')
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  .introduction {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    padding: 1rem 0;
    .right {
      width: 100%;
      background: rgba(255, 255, 255, 1);
      padding: 0 0.5rem;
      .title {
        font-size: 0.8rem;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .border {
        margin-top: 0.5rem;
        width: 3rem;
        height: 2px;
        background: rgba(54, 82, 182, 1);
      }
      .left {
        width: 100%;
        height: 10rem;
        box-shadow: 0px 1px 35px 0px rgba(135, 148, 164, 0.31);

        background-image: url('../../../../public/images/us_img.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .content {
        padding: 1rem 0;
        box-sizing: border-box;
        font-size: 0.7rem;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 1.7;
      }

      .bottom {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding-bottom: 2rem;
        .border {
          width: 3rem;
          height: 0;
          margin: 0 0.8rem;
          border-bottom: 1px solid rgba(222, 31, 34, 1);
        }
        .text {
          font-size: 0.7rem;
          color: rgba(222, 31, 34, 1);
        }
      }
    }
  }

  .culture {
    width: 100%;
    height: 13rem;
    background-image: url('../../../../public/images/culture.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;

    .text {
      font-size: 0.8rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 38px;
    }

    .border {
      background: rgba(255, 255, 255, 1);
      margin-top: 0.5rem;
      width: 3rem;
      height: 2px;
    }
  }

  .items {
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: relative;
    top: -4rem;

    .item {
      background-color: #fff;
      padding: 1rem 0.3rem;
      padding-top: 1.5rem;
      box-sizing: border-box;
      width: 30%;
      box-shadow: 0px 1px 30px 0px rgba(135, 148, 164, 0.21);
      position: relative;

      img {
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        top: -1.2rem;
        left: 29%;
        box-shadow: 0px 1px 30px 0px rgba(135, 148, 164, 0.21);
        border-radius: 50%;
      }

      .line1 {
        text-align: center;
        font-size: 0.8rem;
        font-weight: 400;
        padding: 0.4rem 0;
        color: rgba(51, 51, 51, 1);
      }

      .line2 {
        text-align: justify;
        font-size: 0.6rem;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 1.5;
      }
    }
  }

  .service {
    width: 100%;

    .service-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: -1.5rem;
      .text {
        font-size: 0.8rem;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }

      .border {
        margin-top: 0.5rem;
        width: 3rem;
        height: 2px;
        background: rgba(54, 82, 182, 1);
      }
    }

    .service-item {
      position: relative;
      top: -.5rem;
      padding: 1rem 0;
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
        }

        .title {
          font-size: 0.7rem;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          padding: 1rem 0.8rem;
          text-align: center;
        }
      }
    }
  }

  .experience {
    width: 100%;
    background-image: url('../../../../public/images/experience1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 1rem;
    .experience-title {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .text {
        font-size: 0.8rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      .border {
        margin-top: 0.5rem;
        width: 3rem;
        height: 2px;
        background: rgba(255, 255, 255, 1);
      }
    }
    .center {
      width: 100%;
      height: calc(100% - 5rem);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      position: relative;
      margin-top: 1rem;

      .border {
        border-right: 2px solid rgba(255, 255, 255, 0.6);
        position: absolute;
        height: 100%;
        top: 0;
        left: 26px;
        z-index: 1;
      }
      .item {
        width: 100%;
        display: flex;
        flex-direction: row;
        color: #fff;
        align-items: center;

        img {
          margin-left: 20px;
          z-index: 2;
          width: 15px;
          height: 15px;
        }

        .title {
          margin: 0 0.5rem;
          font-size: 0.7rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 38px;
          padding: 0.5rem 0;
        }
        .des {
          font-size: 0.6rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
</style>
