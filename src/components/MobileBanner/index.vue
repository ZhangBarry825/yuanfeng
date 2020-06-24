<template>
  <div class="page">
    <el-carousel indicator-position="none" height="45vw" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <div class="backBox" :style="'background-image: url('+baseUrl+item.imageUrl+')'">
          <div class="center">
            <div class="line1">{{item.title}}</div>
            <div class="line2">{{item.details}}</div>
            <div class="line3" @click="goAboutUs">了解更多</div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="menu-box">
      <div class="top">
        <div class="img" @click="toggleShow"></div>
      </div>
      <transition name="fade">
        <div class="items" :class="{'display':ifShow}" @touchmove.prevent @mousewheel.prevent><br>
          <div class="menuItem" @click="goPage('/home')">网站首页</div>
          <div class="menuItem" @click="goPage('/product-center')">产品中心</div>
          <div class="menuItem" @click="goPage('/case-list')">案例实景</div>
          <div class="menuItem" @click="goPage('/news-list')">新闻动态</div>
          <div class="menuItem" @click="goPage('/about-us')">关于我们</div>
          <div class="menuItem" @click="goPage('/contact-us')">联系我们</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MobileBanner",
    data() {
      return {
        ifShow: false,
        baseUrl:this.$imgBaseUrl
      }
    },
    props:{
      bannerList: {
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    mounted() {
      document.documentElement.style.fontSize = '5.21vw'
    },
    methods: {
      goPage(path){
        this.$router.push({
          path:path
        })
      },
      goAboutUs(){
        this.$router.push({path: '/about-us'})
      },
      toggleShow() {
        this.ifShow = !this.ifShow
      }
    }
  }
</script>

<style scoped lang="scss">
  .page {
    width: 100%;
    position: relative;

    .el-carousel {
      width: 100%;
    }

    .menu-box {
      top: 0;
      width: 100%;
      height: 2rem;
      position: absolute;
      z-index: 9999;
      display: flex;
      flex-direction: column;

      .top {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 0.5rem 0.4rem;
        box-sizing: border-box;

        .img {
          width: 1.1rem;
          height: 1.1rem;
          cursor: pointer;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("../../../public/images/menu.png");
        }
      }

      .items {
        transition: height .7s,background-color .7s;
        overflow: hidden !important;
        width: 100%;
        height: 0;
        display: flex;
        flex-direction: column;
        z-index: 5556;
        color: #e8e1e8;

        .menuItem {
          color: #333;
          font-size: .7rem;
          cursor: pointer;
          padding: 12px 20px;
          box-sizing: border-box;
          width: 100%;
        }
      }
      .display{
        transition: height .7s;
        position: fixed;
        top: 2rem;
        height:calc(100% - 1.5rem) !important;
        background-color: rgba(247, 247, 247, 0.95);
      }
    }

    .backBox {
      width: 100%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../../../public/images/banner.png");
      display: flex;
      justify-content: center;

      .center {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .line1, .line2, .line3 {
          color: #fff;
        }

        .line1 {
          font-size: 1rem;
        }

        .line2 {
          font-size: .6rem;
          padding: 1rem 0;
        }

        .line3 {
          font-size: 0.4rem;
          box-sizing: border-box;
          border: 1px solid #fff;
          padding: 0.3rem .8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }

    }
  }

</style>
