<template>
  <div class="p-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="2"></Header>
      <div class="banner">
        <div class="text">产品中心</div>
      </div>
      <div class="center">
        <div class="item0">
          <div class="title-box">
            <div class="title">{{dataDetail.productName}}</div>
          </div>
          <div class="content-box">
            <div class="left" :style="'background-image: url('+baseUrl+dataDetail.smallImages[selectedIndex]+')'"></div>
            <div class="right">
              <div class="pic" v-if="index<3" :class="{'selected':index==selectedIndex}" @click="selectedIndex=index"  v-for="(item,index) in dataDetail.smallImages" :style="'background-image: url('+baseUrl+item+')'"></div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="title-box">
            <div class="title">产品详情</div>
          </div>
          <div class="content-box" v-html="dataDetail.productDetail">
          </div>
        </div>
        <div class="item">
          <div class="title-box">
            <div class="title">产品介绍</div>
          </div>
          <div class="content-box" v-html="dataDetail.productPre">

          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
    <MobileProductDetail v-if="isMobile"></MobileProductDetail>
  </div>
</template>

<script>
  import Header from '@/components/Header/index'
  import Footer from '@/components/Footer/index'
  import MobileProductDetail from "@/views/mobile/product/product-detail";
  import {fetchProductDetail} from "@/api/product";

  export default {
    name: "ProductDetail",
    components: {
      Header,
      Footer,
      MobileProductDetail
    },
    data(){
      return{
        baseUrl:this.$imgBaseUrl,
        dataDetail:{
          smallImages:[]
        },
        selectedIndex:0
      }
    },
    props: ['isMobile'],
    methods:{
      async fetchData(id){
        let dataDetail=await fetchProductDetail({id:id})
        this.dataDetail=dataDetail.data
      }
    },
    mounted() {
      this.fetchData(this.$route.query.id)
    }
  }
</script>

<style scoped lang="scss">
  .p-page {
    width: 100%;

    .pc {
      width: 100%;
      min-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f5f5f5;


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

      .center {
        margin-top: 30px;
        width: 1200px;

        display: flex;
        align-items: center;
        flex-direction: column;

        .item0 {
          margin: 20px 0;
          width: 100%;

          .title-box {
            width: 100%;
            height: 70px;
            display: flex;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;

            .title {
              font-size: 20px;
              color: #333333;
              border-left: 4px solid #DE1F22;
              padding-left: 20px;
            }
          }

          .content-box {
            box-sizing: border-box;
            color: #333333;
            font-size: 16px;
            line-height: 1.7;
            display: flex;
            flex-direction: row;
            height: 486px;

            .left {
              height: 100%;
              width: calc(70% - 30px);
              background-image: url("../../../../public/images/product1.png");
              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;

            }

            .right {
              height: 100%;
              width: 25%;
              margin-left: 30px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              .pic {
                border: 2px solid #f5f5f5;
                cursor: pointer;
                background-image: url("../../../../public/images/product1.png");
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;

                height: 137px;
                width: 100%;
              }

              .selected {
                border: 2px solid rgba(54, 82, 182, 1);
              }

              .pic:hover {
                border: 2px solid rgba(54, 82, 182, 1);
              }
            }
          }
        }

        .item {
          margin: 20px 0;
          width: 100%;
          border: 1px solid #E5E5E5;

          .title-box {
            width: 100%;
            height: 70px;
            border-bottom: 1px solid #E5E5E5;
            display: flex;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;

            .title {
              font-size: 20px;
              color: #333333;
              border-left: 4px solid #DE1F22;
              padding-left: 20px;
            }
          }

          .content-box {
            padding: 20px;
            box-sizing: border-box;
            color: #333333;
            font-size: 16px;
            line-height: 1.7;
            ::v-deep image{
              max-width: 100%;
            }
            .text {
              width: 100%;
            }

            .pic {
              width: 100%;
              height: 654px;
              background-image: url("../../../../public/images/product2.png");
              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;
            }
          }
        }
      }

    }
  }

</style>
