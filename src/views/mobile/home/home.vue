<template>
  <div class="mobile-home">
    <MobileBanner :bannerList="pcData.bannerList"></MobileBanner>
    <div class="data">
      <div class="item" v-for="item in pcData.companyDataList" :key="pcData.companyDataList.id">
        <div class="line1">{{item.detail}}</div>
        <div class="line2">{{item.title}}</div>
      </div>
    </div>
    <div class="about-us">
      <div class="title">
        <div class="text1">
          公司简介
        </div>
        <div class="text2">
          ABOUT US
        </div>
        <div class="border"></div>
      </div>
      <div class="img"></div>
      <div class="text-box">
        <div class="text">
          {{pcData.aboutUsList.detail}}
        </div>
      </div>
      <div class="more" @click="$router.push({path:'/about-us'})">查看详情</div>
    </div>
    <div class="advantages">
      <div class="title">
        <div class="text1">
          我们的优势
        </div>
        <div class="text2">
          OUR STRENGTHS
        </div>
        <div class="border"></div>
      </div>
      <div class="img"></div>
      <div class="items">
        <div class="item" v-for="(item,index) in pcData.advantageList" v-if="index<4" :key="pcData.advantageList.id">
          <div class="img" :class="'img'+(index+1)"></div>
          <div class="text0">
            <div class="text1">
              <div class="num">01</div>
              <div class="text">{{item.title}}</div>
            </div>
            <div class="text2">
              {{item.detail}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="title">
        <div class="text1">
          产品中心
        </div>
        <div class="text2">
          PRODUCT CENTER
        </div>
        <div class="border"></div>
      </div>
      <Tabs class="tabs" title-active-color="#3652B6" title-inactive-color="#343434" background="#f5f5f5" color="#3652B6" :swipeable="true" v-model="activeProductIndex" @click="changeGroup(activeProductIndex,'product')">
        <Tab v-for="(item,index)  in productGroupList"  :title="item">
        </Tab>
      </Tabs>
      <div class="items">
        <div class="item" v-if="index<3" v-for="(item,index) in productList" :key="item.id" @click="$router.push({path:'/product-detail?id='+item.id})">
          <div class="pic">
            <div class="img" :style="'background-image: url('+baseUrl+item.imageUrl+')'"></div>
          </div>
          <div class="text">{{item.productName}}</div>
        </div>
      </div>
      <div class="more" @click="$router.push({path:'/product-center'})">查看更多</div>
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
    <div class="customer">
      <div class="title">
        <div class="text1">
          客户分布
        </div>
        <div class="text2">
          CLIENT　DISTRIBUTION
        </div>
        <div class="border"></div>
      </div>
      <div class="map" :style="'background-image: url('+baseUrl+pcData.customerMap+')'">

      </div>
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
    <div class="case">
      <div class="title">
        <div class="text1">
          案例实景
        </div>
        <div class="text2">
          CASE SCENARIO
        </div>
        <div class="border"></div>
      </div>
      <Tabs class="tabs" title-active-color="#3652B6" title-inactive-color="#343434" background="#f5f5f5" color="#3652B6" :swipeable="true" v-model="activeCaseIndex" @click="changeGroup(activeCaseIndex,'case')">
        <Tab v-for="(item,index)  in caseGroupList"  :title="item">
        </Tab>
      </Tabs>
      <div class="items">
        <div class="item" v-for="(item,index) in caseList" @click="$router.push({path:'/case-detail?id='+item.id})">
          <div class="pic">
            <div class="img" :style="'background-image: url('+baseUrl+item.imageUrl+')'"></div>
          </div>
          <div class="text">{{item.title}}</div>
        </div>
      </div>
      <div class="more" @click="$router.push({path:'/case-list'})">查看更多</div>
    </div>
    <div class="news">
      <div class="title">
        <div class="text1">
          新闻资讯
        </div>
        <div class="text2">
          NEWS AND INFORMATION
        </div>
        <div class="border"></div>
      </div>

      <swiper class="swiper-box" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="swiper-box-item" v-if="index<3" v-for="(item,index) in pcData.newsList" :key="item.id">
          <div class="list">
            <div class="list-title">{{item.newsGroupName}}</div>
            <div class="items">
              <a class="item" v-for="(item2,index2) in item.newsTitle" v-if="index2<5" @click="$router.push({path:'/news-detail?id='+item2.id})">
                <img src="../../../../public/images/dot0.png" alt="">
                <div class="right">
                  <div class="text"  >{{item2.title}}</div>
                  <div class="time">{{item2.addtime}}</div>
                </div>
              </a>
            </div>
            <div class="bottom">
              <img @click="$router.push({path:'/news-list'})" src="../../../../public/images/right_active.png" alt="">
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import MobileBanner from "../../../components/MobileBanner/index";
  import MobileFooter from "../../../components/MobileFooter/index";
  import {fetchCaseGroupList, fetchCaseList, fetchProductGroupList, fetchProductList} from "@/api/home";

  import { Tab, Tabs } from 'vant';
  import 'vant/lib/tabs/index.css';

  export default {
    name: "Home",
    components: {
      MobileBanner,
      MobileFooter,
      Swiper,
      SwiperSlide,
      Tab, Tabs
    },
    directives: {
      swiper: directive
    },
    data(){
      return{
        activeProductIndex:0,
        activeCaseIndex:0,
        baseUrl:this.$imgBaseUrl,
        productGroupList:[],
        productList:[],
        caseGroupList:[],
        caseList:[],
        swiperOptions: {
          // Some Swiper option/callback...
        }
      }
    },
    props:{
      pcData:{
        type:Object,
        default:()=>{
          return {
            productList:[]
          }
        }
      }
    },
    methods:{
      async fetchData(){
        let productGroupList= await fetchProductGroupList()
        this.productGroupList=productGroupList.data
        let productList= await fetchProductList({groupName:this.productGroupList[0]})
        this.productList=productList.data
        let caseGroupList= await fetchCaseGroupList()
        this.caseGroupList=caseGroupList.data
        let caseList= await fetchCaseList({groupName:this.caseGroupList[0]})
        this.caseList=caseList.data
      },
      async changeGroup(index,type){
        if(type==='product'){
          let productList= await fetchProductList({groupName:this.pcData.productGroupList[index]})
          this.productList=productList.data
        }else if(type==='case'){
          this.activeCaseIndex=index
          let caseList= await fetchCaseList({groupName:this.pcData.caseGroupList[index]})
          this.caseList=caseList.data
        }else {

        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      document.documentElement.style.fontSize = '5vw'
      this.swiper.slideTo(2, 4000, false)
      this.fetchData()
      console.log(this.pcData,9987)
    },
  }
</script>

<style scoped lang="scss">
  .mobile-home {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .data {
      width: 100%;
      height: 3rem;
      margin: 1rem 0;
      z-index: 999;
      background-color: #fff;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.5);
      .item {
        width: calc(25% - 1px);
        display: flex;
        flex-direction: column;
        align-items: center;

        .line1 {
          font-size: .8rem;
          color: #3552B5;
          padding-bottom: .2rem;
        }

        .line2 {
          font-size: .5rem;
          color: #333333;
        }
      }

      .border {
        height: 60%;
        border-right: 1px solid #E5E5E5;

      }
    }

    .about-us {
      background-color: #fff;
      padding: 1rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      .title {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 1rem;
          color: #333333;
        }

        .text2 {
          font-size: .6rem;
          padding: .3rem 0;
          color: #666;
          display: inline;
        }

        .border {
          width: 2rem;
          border-bottom: 2px solid #3652B6;
        }
      }

      .img {
        width: 90%;
        height: 8rem;
        background-image: url("../../../../public/images/company.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .text-box {
        width: 95%;
        padding: .7rem .5rem;

        .text {
          width: 100%;
          font-size: .7rem;
          line-height: 1.5;
          box-sizing: border-box;

          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 6;
          overflow: hidden;
        }
      }

      .more {
        font-size: .6rem;
        color: #DE1F22;
        border: 1px solid #DE1F22;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: .3rem 1rem;
        cursor: pointer;
      }
    }

    .advantages {

      padding: 2rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      .title {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 1rem;
          color: #333333;
        }

        .text2 {
          font-size: .6rem;
          padding: .3rem 0;
          color: #666;
          display: inline;
        }

        .border {
          width: 2rem;
          border-bottom: 2px solid #3652B6;
        }
      }

      .img {
        width: 90%;
        height: 10rem;
        background-image: url("../../../../public/images/advantage.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .items {
        box-sizing: border-box;
        width: 90%;
        background-color: #3652B6;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .item {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: .5rem 0;

          .img {
            width: 2rem;
            height: 2rem;
            background-size: cover;
            background-position: center center;
            border-radius: 50%;
            margin-right: 1rem;
          }

          .img1 {
            margin-left: 7%;
            background-image: url("../../../../public/images/item1.png");
          }

          .img2 {
            margin-left: 7%;
            background-image: url("../../../../public/images/item2.png");
          }

          .img3 {
            margin-left: 7%;
            background-image: url("../../../../public/images/item3.png");
          }

          .img4 {
            margin-left: 7%;
            background-image: url("../../../../public/images/item4.png");
          }

          .text0 {
            width: 70%;
            text-align: left;

            .text1 {
              font-size: .8rem;
              color: #fff;
              position: relative;
              padding-bottom: .3rem;
              color: rgba(255, 255, 255, 0.9);

              .num {
                display: none;
                position: absolute;
                font-size: 40px;
                color: rgba(239, 239, 239, 0.5);
                right: -30px;
                top: -25px;
              }
            }

            .text2 {
              color: rgba(255, 255, 255, 0.8);
              font-size: .6rem;
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
    }

    .product{
      padding: 2rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: #fff;

      .title {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 1rem;
          color: #333333;
        }

        .text2 {
          font-size: .6rem;
          padding: .3rem 0;
          color: #666;
          display: inline;
        }

        .border {
          width: 2rem;
          border-bottom: 2px solid #3652B6;
        }
      }
      .menus {
        width: 100%;
        border-bottom: 1px solid rgba(204, 204, 204, 0.5);
        display: flex;
        flex-direction: row;
        justify-content: center;

        .menu {
          cursor: pointer;
          color: #343434;
          font-size: .65rem;
          padding: .5rem 0;
          margin: 0 4.5%;
        }

        .selected {
          color: #3652B6;
          border-bottom: 1px solid #3652B6;
        }
      }
      .items {
        width: 100%;
        padding: 1rem .5rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;

        .item {
          border-top: 3px solid #fff;
          width: 5.5rem;
          box-shadow: 0 0 5px rgba(136, 148, 164, 0.2);
          display: flex;
          flex-direction: column;
          margin: .25rem .3rem;

          .pic {
            height: 5rem;
            overflow: hidden;
            .img {
              cursor: pointer;
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
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .7rem;
            color: rgba(52, 52, 52, 1);
            height: 2rem;
            border-top: 1px solid rgba(238, 238, 238, 1);
          }
        }

        .item:hover {
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
        font-size: .6rem;
        color: #DE1F22;
        border: 1px solid #DE1F22;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: .3rem 1rem;
        cursor: pointer;
      }
    }

    .banner {
      width: 100%;
      height: 6rem;
      background-image: url("../../../../public/images/b.png");
      background-size: cover;
      background-position: center center;
      display: flex;
      justify-content: center;

      .center {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .item {
          height: 4.5rem;
          width: 4.5rem;
          border-radius: 50%;
          border: 1px solid #fff;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          .line1 {
            font-size: .7rem;
          }

          .line2 {
            width: 2rem;
            border-bottom: 1px solid #fff;
            margin: .2rem;
          }

          .line3 {
            font-size: .45rem;
          }

        }
      }

    }

    .customer {
      padding: 2rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: #fff;

      .title {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 1rem;
          color: #333333;
        }

        .text2 {
          font-size: .6rem;
          padding: .3rem 0;
          color: #666;
          display: inline;
        }

        .border {
          width: 2rem;
          border-bottom: 2px solid #3652B6;
        }
      }
      .map {
        width: 80%;
        height:9rem;
        background-image: url("../../../../public/images/map.png");
        background-position: center center;
        background-size: contain;
        position: relative;
      }

      .map-data {
        background-color: #FFF;
        padding: 1rem 1.5rem;
        align-self: flex-start;
        margin-top: 0.2rem;
        width: 100%;
        height: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .line {
          width: 100%;
          display: flex;
          flex-direction: row;

          img {
            width: .7rem;
            height: .7rem;
            margin-right: 20px;
          }

          .text {
            color: #343434;
            font-size: .6rem;
          }
        }
      }
    }

    .case {
      padding: 2rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: rgba(245,245,245,0.8);

      .title {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 1rem;
          color: #333333;
        }

        .text2 {
          font-size: .6rem;
          padding: .3rem 0;
          color: #666;
          display: inline;
        }

        .border {
          width: 2rem;
          border-bottom: 2px solid #3652B6;
        }
      }
      .menus {
        width: 100%;
        border-bottom: 1px solid rgba(204, 204, 204, 0.5);
        display: flex;
        flex-direction: row;
        justify-content: center;

        .menu {
          cursor: pointer;
          color: #343434;
          font-size: .65rem;
          padding: .5rem 0;
          margin: 0 4.5%;
        }

        .selected {
          color: #3652B6;
          border-bottom: 1px solid #3652B6;
        }
      }
      .items {
        width: 100%;
        padding: .5rem .5rem;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;

        .item {
          width:8rem ;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 3%;
          margin-bottom: .3rem;
          .pic {
            width: 100%;
            height: 6rem;
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
            overflow: hidden;
            background-color: #fff;
            padding: .3rem 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: .7rem;
            color: rgba(52, 52, 52, 1);
          }
        }
      }

      .more {
        color: #DE2023;
        font-size: .7rem;
        border: 1px solid #DE2023;
        padding: .2rem .5rem;
        margin: .2rem 0;
        margin-bottom: 1rem;
        cursor: pointer;
      }
    }

    .news {
      padding: 2rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      background-color: #fff;

      .title {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .text1 {
          font-size: 1rem;
          color: #333333;
        }

        .text2 {
          font-size: .6rem;
          padding: .3rem 0;
          color: #666;
          display: inline;
        }

        .border {
          width: 2rem;
          border-bottom: 2px solid #3652B6;
        }
      }

      .swiper-box{
        width: 100%;
        display: flex;
        justify-content: center;
        .swiper-box-item{
          padding: 0 1rem;
          box-sizing: border-box;
        }

        .storeActivity-list .swiper-slide{
          width: 90%!important;
          margin: 0 5%;
        }
        .swiper-slide-prev{
          right:-8%;
        }
        .swiper-slide-next {
          left: -8%;
        }

        .list {
          border-bottom: 1px solid #fff;
          width: 100%;
          height: 100%;
          background-color: #fff;
          .list-title {
            width: 100%;
            height: 2rem;
            background-color: #3652b6;
            font-size: 1rem;
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
              padding: 0 .5rem;
              box-sizing: border-box;

              img {
                width: .3rem;
                height: .3rem;
                margin-right: 0.2rem;
              }

              .right {
                height: 2rem;
                width: calc(100% - 10px);
                border-bottom: 1px solid #E5E5E5;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .text {
                  font-size: .7rem;
                  max-width: calc(100% - 3rem);
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                  overflow: hidden;
                }

                .time {
                  min-width: 3rem;
                  display: block;
                  font-size: .7rem;
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
              width: .8rem;
              cursor: pointer;
            }
          }
        }
      }
    }

    .tabs{
      width: 100%;
      border-bottom: 2px solid rgba(204, 204, 204, 0.5);

      ::v-deep .van-tab__text{
        font-size: .65rem;
      }
    }
  }
</style>
