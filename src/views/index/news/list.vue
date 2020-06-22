<template>
  <div class="news-list-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="4"></Header>
      <div class="banner">
        <div class="text">新闻动态</div>
      </div>
      <div class="menus">
        <div class="menu menu1 selected">行业新闻</div>
        <div class="menu menu2">新闻资讯</div>
        <div class="menu menu3">常见问题</div>
      </div>

      <div class="items">
        <div class="item">
          <div class="left"></div>
          <div class="right">
            <div class="line1">
              助力自主品牌 彰显制造实力——沅奉机械再获殊荣
            </div>
            <div class="line2">11月24日，以“新时代 新重汽
              新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力......
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left"></div>
          <div class="right">
            <div class="line1">
              助力自主品牌 彰显制造实力——沅奉机械再获殊荣
            </div>
            <div class="line2">11月24日，以“新时代 新重汽
              新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力......
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left"></div>
          <div class="right">
            <div class="line1">
              助力自主品牌 彰显制造实力——沅奉机械再获殊荣
            </div>
            <div class="line2">11月24日，以“新时代 新重汽
              新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力......
            </div>
          </div>
        </div>
        <div class="item">
          <div class="left"></div>
          <div class="right">
            <div class="line1">
              助力自主品牌 彰显制造实力——沅奉机械再获殊荣
            </div>
            <div class="line2">11月24日，以“新时代 新重汽
              新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力......
            </div>
          </div>
        </div>
      </div>

      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
      <Footer></Footer>
    </div>
    <MobileNewsList v-if="isMobile"></MobileNewsList>
  </div>
</template>

<script>
  import Header from "@/components/Header/index";
  import Footer from "@/components/Footer/index";
  import MobileNewsList from "@/views/mobile/news/list";

  export default {
    name: "NewsList",
    props: ['isMobile'],
    components: {
      MobileNewsList,
      Header,
      Footer
    }
  }
</script>

<style scoped lang="scss">
  .news-list-page {
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
      background-image: url("../../../../public/images/banner_product.png");
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

    .menus {
      margin: 80px;
      width: 1200px;
      display: flex;
      justify-content: space-between;

      .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 381px;
        height: 168px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

        font-size: 28px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 38px;
      }

      .menu1 {
        background-image: url("../../../../public/images/news.png");
      }

      .menu2 {
        background-image: url("../../../../public/images/news_product.png");
      }

      .menu3 {
        background-image: url("../../../../public/images/news_problem.png");
      }

      .selected {
        background-image: none;
        background-color: #3652b6;
      }

      .menu:hover {
        background-image: none;
        background-color: #3652b6;
      }
    }

    .items {
      width: 1200px;
      display: flex;
      flex-direction: column;

      .item {
        cursor: pointer;
        margin: 10px 0;
        display: flex;
        align-items: center;

        .left {
          background-image: url("../../../../public/images/product1.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          width: 200px;
          height: 171px;
        }

        .right {
          width: calc(100% - 200px);
          height: 151px;
          background: rgba(255, 255, 255, 1);
          padding: 20px;
          box-sizing: border-box;

          .line1 {
            width: 100%;
            font-size: 20px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 38px;

            max-width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }

          .line2 {
            font-size: 14px;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;

            max-width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
      }

      .item:hover {
        .line1 {
          color: #3652B6 !important;
        }
      }
    }

    .pagination {
      margin: 30px 0 100px 0;
    }
  }
</style>
