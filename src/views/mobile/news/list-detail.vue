<template>
  <div class="case-page">
    <MobileHeader title="新闻动态" :menuId="4"></MobileHeader>
    <div class="article">
      <div class="title">{{details.title}}</div>
      <div class="time">{{details.addtime}}</div>
      <div class="border"></div>
      <div class="content" v-html="details.text">
        <!-- 11月24日，以“新时代 新重汽 新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力的高度认可，也是对公司成就客户之心的充分肯定，公司将继续始终如一地为客户提供更优质的产品和更满意的服务，不断提升品牌知名度和行业影响力。实力的高度认可，也是对公司成就客户之心的充分肯定，公司将继续始终如一地为客户提供更优质的产品和更满意的服务，不断提升品牌知名度和行业影响力。
        <br />
11月24日，以“新时代 新重汽 新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力的高度认可，也是对公司成就客户之心的充分肯定，公司将继续始终如一地为客户提供更优质的产品和更满意的服务，不断提升品牌知名度和行业影响力。客户之心的充分肯定，公司将继续始终如一地为客户提供更优质的产品和更满意的服务。
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
    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
import MobileFooter from "@/components/MobileFooter/index";
import MobileHeader from "@/components/MobileHeader/index";
import {queryById} from "@/api/news";

export default {
  name: "MobileNewsDetail",
  components: {
    MobileFooter,
    MobileHeader
  },
  data () {
    return {
      details: {}
    }
  },
  created () {
    console.log(this.$route.query, "111")
    this.retrieveData(this.$route.query.id)
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;

  .article {
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    background-color: #fff;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      padding-top: 0.6rem;
      font-size: 1rem;
      font-weight: 400;
      color: rgba(0, 0, 51, 1);
      line-height: 44px;
      text-align: center;
    }

    .time {
      font-size: 0.4rem;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 2.5;
    }

    .border {
      width: 100%;
      height: 1px;
      background: rgba(229, 229, 229, 1);
    }

    .content {
      width: 100%;
      padding: 0.5rem 0.3rem;
      box-sizing: border-box;

      ::v-deep img {
        max-width: 100%;
      }

      font-size: 0.7rem;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 1.7;
    }
  }
  .pagination {
    margin-top: 0.3rem;
    padding: 0.5rem 0.5rem;
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    .line1 {
      width: 100%;
      cursor: pointer;
      font-size: 0.7rem;
      color: #666666;
      line-height: 2;
    }
    .line2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .left {
        cursor: pointer;
        font-size: 0.7rem;
        color: #666666;
        line-height: 2;
      }
      .right {
        cursor: pointer;
        font-size: 0.7rem;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 2;
      }
    }
  }
}
</style>
