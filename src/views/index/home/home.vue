<template>
  <div class="home-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="1"></Header>
      <Banner :bannerList="bannerList"></Banner>
      <div class="data">
        <div class="item" v-for="item in companyDataList" :key="companyDataList.id">
          <div class="line1">{{item.detail}}</div>
          <div class="line2">{{item.title}}</div>
        </div>
      </div>
      <div class="aboutUs" id="about-us">
        <div class="title">
          <div class="text">公司简介/
            <div class="text2">ABOUT US</div>
          </div>
          <div class="border"></div>
        </div>
        <div class="content">
          <div class="left" ></div>
          <div class="right">
            <div class="top">
              {{aboutUsList.detail}}
            </div>
            <div class="bottom" @click="$router.push({path:'/about-us'})">查看详情</div>
          </div>
        </div>
      </div>
      <div class="advantages" id="advantage">
        <div class="title">
          <div class="text1">
            我们的优势
          </div>
          <div class="text2">
            OUR STRENGTHS
          </div>
          <div class="border"></div>
        </div>
        <div class="content">
          <div class="left">
            <div class="item" v-for="(item,index) in advantageList" v-if="index<4" :key="advantageList.id">
              <div class="text0">
                <div class="text1">
                  <div class="num">0{{index+1}}</div>
                  <div class="text">{{item.title}}</div>
                </div>
                <div class="text2">
                  {{item.detail}}
                </div>
              </div>
              <div :class="'img'+(index+1)"></div>
            </div>
          </div>
          <div class="right"></div>
        </div>
      </div>
      <div class="products"  id="product">
        <div class="title">
          <div class="text1">
            产品中心
          </div>
          <div class="text2">
            PRODUCT CENTER
          </div>
          <div class="border"></div>
        </div>
        <div class="menus">
          <div class="menu" @click="changeGroup(index,'product')" :class="{'selected':index==nowProductGroupIndex}" v-for="(item,index) in productGroupList">{{item}}</div>
        </div>
        <div class="items">
          <div class="item" v-for="(item,index) in productList" :key="item.id">
            <div class="pic">
              <div class="img" :style="'background-image: url('+baseUrl+item.imageUrl+')'"></div>
            </div>
            <div class="text">{{item.productName}}</div>
          </div>
        </div>

        <div class="more" @click="$router.push({path:'/product-center'})">更多产品</div>

      </div>
      <div class="banner">
        <div class="center">
          <div class="item">
            <div class="line1">优质选材</div>
            <div class="line2"></div>
            <div class="line3">SELECTION</div>
          </div>
          <div class="item">
            <div class="line1">做工精细</div>
            <div class="line2"></div>
            <div class="line3">WORKMANSHIP</div>
          </div>
          <div class="item">
            <div class="line1">最佳原材</div>
            <div class="line2"></div>
            <div class="line3">MATERIALN</div>
          </div>
          <div class="item">
            <div class="line1">专业制造</div>
            <div class="line2"></div>
            <div class="line3">PROFESSIONAL</div>
          </div>
        </div>
      </div>
      <div class="customer"  id="customer">
        <div class="title">
          <div class="text1">
            客户分布
          </div>
          <div class="text2">
            CLIENT　DISTRIBUTION
          </div>
          <div class="border"></div>
        </div>
        <div class="map" :style="'background-image: url('+baseUrl+customerMap+')'">
          <div class="map-data">
            <div class="line">
              <img src="../../../../public/images/dot1.png" alt="">
              <div class="text">服务过的客户</div>
            </div>
            <div class="line">
              <img src="../../../../public/images/dot2.png" alt="">
              <div class="text">正在洽谈的合作</div>
            </div>
          </div>
        </div>
      </div>
      <div class="case" id="case">
        <div class="title">
          <div class="text1">
            案例实景
          </div>
          <div class="text2">
            CASE SCENARIO
          </div>
          <div class="border"></div>
        </div>
        <div class="menus">
          <div class="menu" @click="changeGroup(index,'case')" :class="{'selected':index==nowCaseGroupIndex}" v-for="(item,index) in caseGroupList">{{item}}</div>
        </div>
        <div class="items">
          <div class="item" v-for="(item,index) in caseList">
            <div class="pic">
              <div class="img"></div>
            </div>
            <div class="text">{{item.title}}</div>
          </div>
        </div>
        <div class="more" @click="$router.push({path:'/case-list'})">查看更多</div>
      </div>
      <div class="news"  id="news">
        <div class="title">
          <div class="text1">
            新闻资讯
          </div>
          <div class="text2">
            NEWS AND INFORMATION
          </div>
          <div class="border"></div>
        </div>
        <div class="lists">
          <div class="list" v-for="(item,index) in newsList" :key="item.id">
            <div class="list-title">{{item.newsGroupName}}</div>
            <div class="items">
              <div class="item" v-for="(item2,index2) in item.newsTitle">
                <img src="../../../../public/images/dot0.png" alt="">
                <div class="right">
                  <div class="text">{{item2.title}}</div>
                  <div class="time">{{item2.addtime}}</div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <img @click="$router.push({path:'/news-list'})" src="../../../../public/images/right_active.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <Footer ></Footer>
    </div>
    <MobileHome v-if="isMobile"></MobileHome>
  </div>
</template>

<script>
  import Header from "../../../components/Header/index";
  import Footer from "../../../components/Footer/index";
  import Banner from "../../../components/Banner/index";
  import MobileHome from "../../mobile/home/home";
  import {
    fetchAboutUsList,
    fetchAdvantageList,
    fetchBannerList, fetchCaseGroupList, fetchCaseList, fetchCustomerList,
    fetchDataList,
    fetchProductGroupList, fetchProductList, fetchNewsList, fetchFooterList
  } from "@/api/home";

  export default {
    name: "Home",
    components: {
      Header,
      Footer,
      Banner,
      MobileHome
    },
    props: ['isMobile'],
    data(){
      return{
        baseUrl:this.$imgBaseUrl,
        nowProductGroupIndex:0,
        nowCaseGroupIndex:0,
        bannerList:[],
        companyDataList:[],
        aboutUsList:[],
        advantageList:[],
        productList:[],
        productGroupList:[],
        customerMap:'',
        caseList:[],
        caseGroupList:[],
        newsList:[],
        footerList: {},
      }
    },
    computed:{
      dataDetail:function (){
        return {
          productGroupList:this.productGroupList,
          caseGroupList:this.caseGroupList,
          newsList:this.newsList,
        }
      }
    },
    methods:{
      async fetchData(){
        let bannerList= await fetchBannerList()
        this.bannerList=bannerList.data
        let companyDataList= await fetchDataList()
        this.companyDataList=companyDataList.data
        let aboutUsList= await fetchAboutUsList()
        this.aboutUsList=aboutUsList.data[0]
        let advantageList= await fetchAdvantageList()
        this.advantageList=advantageList.data
        let productGroupList= await fetchProductGroupList()
        this.productGroupList=productGroupList.data
        let productList= await fetchProductList({groupName:this.productGroupList[0]})
        this.productList=productList.data
        let customerMap= await fetchCustomerList()
        this.customerMap=customerMap.data
        let caseGroupList= await fetchCaseGroupList()
        this.caseGroupList=caseGroupList.data
        let caseList= await fetchCaseList({groupName:this.caseGroupList[0]})
        this.caseList=caseList.data
        let newsList= await fetchNewsList()
        this.newsList=newsList.data
        let footerList= await fetchFooterList()
        this.footerList=footerList.data


        localStorage.setItem('dataList',JSON.stringify({
          productGroupList:this.productGroupList,
          caseGroupList:this.caseGroupList,
          newsList:this.newsList,
          footerList:this.footerList,
        }))
      },
      async changeGroup(index,type){
        if(type==='product'){
          this.nowProductGroupIndex=index
          let productList= await fetchProductList({groupName:this.productGroupList[index]})
          this.productList=productList.data
        }else if(type==='case'){
          this.nowCaseGroupIndex=index
          let caseList= await fetchCaseList({groupName:this.caseGroupList[index]})
          this.caseList=caseList.data
        }else {

        }
      }
    },
    mounted() {
      let that = this
      if(that.$route.query.selector){
        setTimeout(()=>{
          document.querySelector("#"+that.$route.query.selector).scrollIntoView(true);
        },100)
      }
      this.fetchData()
    },
  }
</script>

<style scoped lang="scss">
  .home-page {
    width: 100%;
    .pc{
      width: 100%;
      min-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .data {
        min-width: 1200px;
        height: 230px;
        position: relative;
        top: -120px;
        z-index: 999;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-shadow: 0 1px 35px 0 rgba(64, 101, 194, 0.2);

        .item {
          width: calc(25% - 1px);
          display: flex;
          flex-direction: column;
          align-items: center;

          .line1 {
            font-size: 50px;
            color: #3552B5;
            padding-bottom: 20px;
          }

          .line2 {
            font-size: 16px;
            color: #333333;
          }
        }

        .border {
          height: 60%;
          border-right: 1px solid #E5E5E5;
        }
      }

      .aboutUs {
        min-width: 1200px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
          position: relative;
          left: 100px;
          padding-bottom: 50px;

          .text {
            font-size: 32px;
            color: #333333;
            padding-bottom: 10px;
          }

          .text2 {
            font-size: 20px;
            color: #666;
            display: inline;
          }

          .border {
            width: 53px;
            border-bottom: 4px solid #3652B6;
          }
        }

        .content {
          width: 100%;
          min-width: 1200px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          position: relative;

          .left {
            position: absolute;
            width: 498px;
            height: 498px;
            left: 0;
            top: -100px;
            background-image: url("../../../../public/images/company.png");
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .right {
            width: 900px;
            height: 460px;
            box-shadow: 0 0 15px rgba(64, 101, 194, 0.2);
            padding: 80px;
            padding-left: 270px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .top {
              font-size: 16px;
              color: #333333;
              line-height: 1.8;

              max-width: 100%;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 6;
              overflow: hidden;
            }

            .bottom {
              font-size: 15px;
              color: #DE1F22;
              border: 1px solid #DE1F22;
              width: 117px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              padding: 7px 0;
              cursor: pointer;
            }
          }
        }
      }

      .advantages {
        margin-top: 100px;
        width: 100%;
        min-width: 1200px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
          padding-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;

          .text1 {
            font-size: 32px;
            color: #333333;
            padding-bottom: 10px;
          }

          .text2 {
            padding-top: 10px;
            padding-bottom: 20px;
            font-size: 20px;
            color: #666;
            display: inline;
          }

          .border {
            width: 53px;
            border-bottom: 4px solid #3652B6;
          }
        }

        .content {
          width: 100%;
          min-width: 1200px;
          height: 620px;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;

          .left {
            box-sizing: border-box;

            width: 50%;
            height: 100%;
            background-color: #3652B6;
            padding: 40px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .item {
              position: relative;
              left: 31px;
              width: 100%;
              display: flex;
              justify-content: flex-end;
              align-items: center;

              .img1 {
                margin-left: 7%;
                background-image: url("../../../../public/images/item1.png");
                background-size: cover;
                background-position: center center;
                width: 60px;
                height: 60px;
                border-radius: 50%;
              }

              .img2 {
                margin-left: 7%;
                background-image: url("../../../../public/images/item2.png");
                background-size: cover;
                background-position: center center;
                width: 60px;
                height: 60px;
                border-radius: 50%;
              }

              .img3 {
                margin-left: 7%;
                background-image: url("../../../../public/images/item3.png");
                background-size: cover;
                background-position: center center;
                width: 60px;
                height: 60px;
                border-radius: 50%;
              }

              .img4 {
                margin-left: 7%;
                background-image: url("../../../../public/images/item4.png");
                background-size: cover;
                background-position: center center;
                width: 60px;
                height: 60px;
                border-radius: 50%;
              }

              .text0 {
                width: 60%;
                text-align: right;

                .text1 {
                  font-size: 22px;
                  color: #fff;
                  position: relative;
                  padding-bottom: 10px;
                  color: rgba(255, 255, 255, 0.9);

                  .num {
                    position: absolute;
                    font-size: 40px;
                    color: rgba(239, 239, 239, 0.5);
                    right: -30px;
                    top: -25px;
                  }
                }

                .text2 {
                  color: rgba(255, 255, 255, 0.8);
                  font-size: 14px;
                  color: #fff;
                  line-height: 1.5;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }
              }
            }
          }

          .right {
            box-sizing: border-box;
            width: 50%;
            height: 100%;
            background-image: url("../../../../public/images/advantage.png");
            background-size: cover;
            background-position: center center;
          }
        }
      }

      .products {
        background-color: #f5f5f5;
        padding-top: 100px;
        width: 100%;
        min-width: 1200px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
          padding-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;

          .text1 {
            font-size: 32px;
            color: #333333;
            padding-bottom: 10px;
          }

          .text2 {
            padding-top: 10px;
            padding-bottom: 20px;
            font-size: 20px;
            color: #666;
            display: inline;
          }

          .border {
            width: 53px;
            border-bottom: 4px solid #3652B6;
          }
        }

        .menus {
          min-width: 1200px;
          border-bottom: 2px solid rgba(204, 204, 204, 0.5);
          display: flex;
          flex-direction: row;
          justify-content: center;

          .menu {
            cursor: pointer;
            color: #343434;
            font-size: 20px;
            padding: 20px 0;
            margin: 0 5%;
          }

          .selected {
            color: #3652B6;
            border-bottom: 2px solid #3652B6;
          }
        }

        .items {
          background-color: #f5f5f5;
          min-width: 1200px;
          padding: 50px 0;
          display: flex;
          justify-content: space-between;
          flex-direction: row;

          .item {
            border-top: 3px solid rgba(255,255,255,0);
            box-sizing: border-box;
            width: 272px;
            height: 349px;
            box-shadow: 0 0 10px rgba(136, 148, 164, 0.2);
            display: flex;
            flex-direction: column;

            .pic {
              height: 290px;
              overflow: hidden;

              .img {
                height: 100%;
                width: 100%;
                background-image: url("../../../../public/images/product.png");
                background-size: cover;
                background-position: center center;

                transition: all .4s;
                -moz-transition: all .4s;
                -webkit-transition: all .4s;
                -o-transition: all .4s;
              }
            }

            .text {
              background-color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 20px;
              color: rgba(52, 52, 52, 1);
              height: 59px;
              border-top: 1px solid rgba(238, 238, 238, 1);
            }
          }

          .item:hover {
            padding-top: 0;
            box-sizing: border-box;
            cursor: pointer;
            box-shadow: 0 0 15px rgba(136, 148, 164, 0.5);
            border-top: 3px solid #3652B6;

            .pic > .img {
              transform: scale(1.1);
            }

            .text {
              color: #3652B6;
            }
          }
        }

        .more {
          color: #DE2023;
          font-size: 24px;
          border: 1px solid #DE2023;
          padding: 10px 50px;
          margin: 20px 0;
          margin-bottom: 100px;
          cursor: pointer;
        }
      }

      .banner {
        width: 100%;
        min-width: 1200px;
        height: 261px;
        background-image: url("../../../../public/images/b.png");
        background-size: cover;
        background-position: center center;
        display: flex;
        justify-content: center;

        .center {
          min-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .item {
            height: 155px;
            width: 155px;
            border-radius: 50%;
            border: 1px solid #fff;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .line1 {
              font-size: 24px;
            }

            .line2 {
              width: 32px;
              border-bottom: 2px solid #fff;
              margin: 15px;
            }

            .line3 {
              font-size: 14px;
            }

          }
        }

      }

      .customer {
        margin-top: 100px;
        padding-bottom: 100px;
        width: 100%;
        min-width: 1200px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
          padding-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;

          .text1 {
            font-size: 32px;
            color: #343434;
            padding-bottom: 10px;
          }

          .text2 {
            padding-top: 10px;
            padding-bottom: 20px;
            font-size: 20px;
            color: #343434;
            display: inline;
          }

          .border {
            width: 53px;
            border-bottom: 4px solid #3652B6;
          }
        }

        .map {
          min-width: 1200px;
          height: 614px;
          background-image: url("../../../../public/images/map.png");
          background-position: center center;
          background-size: cover;
          position: relative;

          .map-data {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 240px;
            height: 120px;
            box-shadow: 0 0 15px rgba(136, 148, 164, 0.2);
            background-color: #fff;
            padding: 25px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .line {
              width: 100%;
              display: flex;
              flex-direction: row;

              img {
                width: 22px;
                height: 22px;
                margin-right: 20px;
              }

              .text {
                color: #343434;
                font-size: 18px;
              }
            }
          }
        }
      }

      .case {
        background-color: #f5f5f5;
        padding-top: 100px;
        width: 100%;
        min-width: 1200px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
          padding-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;

          .text1 {
            font-size: 32px;
            color: #333333;
            padding-bottom: 10px;
          }

          .text2 {
            padding-top: 10px;
            padding-bottom: 20px;
            font-size: 20px;
            color: #666;
            display: inline;
          }

          .border {
            width: 53px;
            border-bottom: 4px solid #3652B6;
          }
        }
        .menus {
          min-width: 1200px;
          border-bottom: 2px solid rgba(204, 204, 204, 0.5);
          display: flex;
          flex-direction: row;
          justify-content: center;

          .menu {
            cursor: pointer;
            color: #343434;
            font-size: 20px;
            padding: 20px 0;
            margin: 0 5%;
          }

          .selected {
            color: #3652B6;
            border-bottom: 2px solid #3652B6;
          }
        }
        .items {
          min-width: 1200px;
          padding: 50px 0;
          display: flex;
          justify-content: space-between;
          flex-direction: row;

          .item {
            display: flex;
            flex-direction: column;
            align-items: center;

            .pic {
              width: 272px;
              height: 349px;
              overflow: hidden;

              .img {
                height: 100%;
                width: 100%;
                background-image: url("../../../../public/images/case1.png");
                background-size: cover;
                background-position: center center;

                transition: all .4s;
                -moz-transition: all .4s;
                -webkit-transition: all .4s;
                -o-transition: all .4s;
              }
            }

            .text {
              background-color: #fff;
              width: 212px;
              height: 81px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 20px;
              color: rgba(52, 52, 52, 1);
            }
          }

          .item:hover {
            box-sizing: border-box;
            cursor: pointer;

            .pic {
              box-shadow: 0 0 15px rgba(136, 148, 164, 0.5);
            }

            .pic > .img {
              transform: scale(1.1);
            }

            .text {
              color: #3652B6;
              box-shadow: 0 0 15px rgba(136, 148, 164, 0.5);
            }
          }
        }

        .more {
          color: #DE2023;
          font-size: 24px;
          border: 1px solid #DE2023;
          padding: 10px 50px;
          margin: 20px 0;
          margin-bottom: 100px;
          cursor: pointer;
        }
      }

      .news {
        background-color: #fff;
        padding: 100px 0;
        width: 100%;
        min-width: 1200px;
        display: flex;
        align-items: center;
        flex-direction: column;

        .title {
          padding-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;

          .text1 {
            font-size: 32px;
            color: #333333;
            padding-bottom: 10px;
          }

          .text2 {
            padding-top: 10px;
            padding-bottom: 20px;
            font-size: 20px;
            color: #666;
            display: inline;
          }

          .border {
            width: 53px;
            border-bottom: 4px solid #3652B6;
          }
        }

        .lists {
          min-width: 1200px;
          display: flex;
          justify-content: space-between;

          .list {
            border-bottom: 2px solid #fff;
            box-shadow: 0 0 15px rgba(136, 148, 164, 0.2);
            width: 380px;

            .list-title {
              width: 100%;
              height: 86px;
              background-color: #3652b6;
              font-size: 28px;
              color: #fff;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              padding-bottom: 0px;
            }

            .items {
              width: 100%;
              display: flex;
              flex-direction: column;

              .item {
                cursor: pointer;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 0 20px;
                box-sizing: border-box;

                img {
                  width: 10px;
                  height: 10px;
                  margin-right: 10px;
                }

                .right {
                  height: 57px;
                  width: calc(100% - 10px);
                  border-bottom: 1px solid #E5E5E5;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  .text {
                    font-size: 16px;
                    max-width: 100%;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                  }

                  .time {
                    font-size: 12px;
                    color: #9A9A9A;
                  }
                }
              }

              .item:hover {
                > .right {
                  > .text {
                    color: #3653B6;
                  }
                }
              }
            }

            .bottom {
              padding: 0 30px;
              height: 57px;
              display: flex;
              align-items: center;
              justify-content: flex-end;

              img {
                cursor: pointer;
              }
            }
          }

          .list:hover {
            border-bottom: 2px solid #3653B6;
          }
        }
      }
    }

  }
</style>
