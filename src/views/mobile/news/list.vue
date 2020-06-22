<template>
  <div class="news-list-page">
    <MobileHeader title="新闻动态" :menuId="4"></MobileHeader>
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
          <div class="line2">11月24日，以“新时代  新重汽  新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力......</div>
        </div>
      </div>
      <div class="item">
        <div class="left"></div>
        <div class="right">
          <div class="line1">
            助力自主品牌 彰显制造实力——沅奉机械再获殊荣
          </div>
          <div class="line2">11月24日，以“新时代  新重汽  新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力......</div>
        </div>
      </div>
      <div class="item">
        <div class="left"></div>
        <div class="right">
          <div class="line1">
            助力自主品牌 彰显制造实力——沅奉机械再获殊荣
          </div>
          <div class="line2">11月24日，以“新时代  新重汽  新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力......</div>
        </div>
      </div>
      <div class="item">
        <div class="left"></div>
        <div class="right">
          <div class="line1">
            助力自主品牌 彰显制造实力——沅奉机械再获殊荣
          </div>
          <div class="line2">11月24日，以“新时代  新重汽  新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力......</div>
        </div>
      </div>
      <div class="item">
        <div class="left"></div>
        <div class="right">
          <div class="line1">
            助力自主品牌 彰显制造实力——沅奉机械再获殊荣
          </div>
          <div class="line2">11月24日，以“新时代  新重汽  新跨越”为主题的中国重汽集团2020年商务大会在济南隆重召开。作为中国重汽的战略合作伙伴，公司凭借稳定的产品质量、及时的订单交付和满意的客户服务赢得了重汽集团的高度信赖，并再次荣获2019年度“优秀供应商”荣誉称号。这既是对公司实力......</div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <img class="left" src="../../../../public/images/btn_more_none_l.png" >
      <img class="right" src="../../../../public/images/btn_more_r.png" />
    </div>
    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
  import MobileFooter from "@/components/MobileFooter/index";
  import MobileHeader from "@/components/MobileHeader/index";

  export default {
    name: "MobileNewsList",
    components: {
      MobileFooter,
      MobileHeader
    }
  }
</script>

<style scoped lang="scss">
  .news-list-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;

    .menus{
      margin: 3rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      .menu{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 6rem;
        height: 4.5rem;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

        font-size:.8rem;
        /*font-weight:bold;*/
        color:rgba(255,255,255,1);
        line-height:1.5;
      }
      .menu1{
        background-image: url("../../../../public/images/news.png");
      }
      .menu2{
        background-image: url("../../../../public/images/news_product.png");
      }
      .menu3{
        background-image: url("../../../../public/images/news_problem.png");
      }
      .selected{
        background-image:none;
        background-color: #3652b6;
      }
      .menu:hover{
        background-image:none;
        background-color: #3652b6;
      }
    }

    .items{
      width: 100%;
      display: flex;
      flex-direction: column;
      .item{
        cursor: pointer;
        margin: .3rem 0;
        display: flex;
        align-items: center;
        .left{
          background-image: url("../../../../public/images/product1.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          width:5rem;
          height:5rem;
        }
        .right{
          height:5rem;
          width:calc(100% - 5rem);
          background:rgba(255,255,255,1);
          padding: .5rem;
          box-sizing: border-box;
          .line1{
            width: 100%;
            font-size:.75rem;
            font-weight:400;
            color:rgba(51,51,51,1);

            max-width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            margin: 0.2rem 0;
          }
          .line2{
            font-size:.65rem;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:1.5;

            max-width: 100%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
      }
      .item:hover{
        .line1{
          color: #3652B6 !important;
        }
      }
    }

    .pagination {
      width: 100%;
      display: flex;
      justify-content: center;
      .left,.right{
        margin: 1rem 0.3rem;
        width: 2rem;
        height: 2rem;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
    }
  }
</style>
