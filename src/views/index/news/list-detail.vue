<template>
  <div class="case-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="4"></Header>
      <div class="banner">
        <div class="text">{{details.groupName}}</div>
      </div>

      <div class="article">
        <div class="title">{{details.title}}</div>
        <div class="time">{{details.addtime}}</div>
        <div class="border"></div>
        <div class="content" v-html="details.text">
          <!-- 11月24日，以“新时代 新重汽
          新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力的高度认可，也是对公司成就客户之心的充分肯定，公司将继续始终如一地为客户提供更优质的产品和更满意的服务，不断提升品牌知名度和行业影响力。实力的高度认可，也是对公司成就客户之心的充分肯定，公司将继续始终如一地为客户提供更优质的产品和更满意的服务，不断提升品牌知名度和行业影响力。
          <br />11月24日，以“新时代 新重汽
          新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力的高度认可，也是对公司成就客户之心的充分肯定，公司将继续始终如一地为客户提供更优质的产品和更满意的服务，不断提升品牌知名度和行业影响力。客户之心的充分肯定，公司将继续始终如一地为客户提供更优质的产品和更满意的服务。
          <img
            src="../../../../public/images/product1.png"
            alt
          />-->
        </div>
      </div>

      <div class="pagination">
        <div
          class="line1"
          v-if="details.beforeId!=null"
          @click="article(details.beforeId)"
        >上一篇：{{details.beforeTitle}}</div>
        <div class="line2">
          <div
            class="left"
            v-if="details.nextId!=null"
            @click="article(details.nextId)"
          >下一篇：{{details.nextTitle}}</div>
          <div class="right" @click="$router.push({  path: '/news-list' })">返回列表 ></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    <MobileNewsDetail v-if="isMobile"></MobileNewsDetail>
  </div>
</template>

<script>
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import MobileNewsDetail from "@/views/mobile/news/list-detail";

import { queryById } from '@/api/news';

export default {
  name: "NewsDetail",
  components: {
    Header,
    Footer,
    MobileNewsDetail
  },
  props: ['isMobile'],
  data () {
    return {
      details: {},
    }
  },
  created () {
    console.log(this.$route.query, "111")
    this.retrieveData(JSON.parse(this.$route.query.item).id)
  },
  methods: {
    async retrieveData (id) {
      let { data } = await queryById({ id })
      this.details = data
      console.log(data, "110  ")
    },
    article (id) {
      this.retrieveData(id)
    }
  }
}
</script>

<style scoped lang="scss">
.case-page {
  width: 100%;

  .pc {
    min-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;

    .banner {
      min-width: 1200px;
      width: 100%;
      height: 350px;
      background-image: url('../../../../public/images/banner_product.png');
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
}
</style>
