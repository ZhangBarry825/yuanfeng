<template>
  <div class="mobile-header">
    <div class="banner" :style="'background-image: url('+imageUrl+')'">
      <div class="text">{{title}}</div>
    </div>
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
    name: "MobileHeader",
    data() {
      return {
        imageUrl: '',
        ifShow: false
      }
    },
    props: {
      title: {
        type: String,
        // 对象或数组默认值必须从一个工厂函数获取
        default: function () {
          return '页面标题'
        }
      },
      menuId: {
        type: Number,
        // 对象或数组默认值必须从一个工厂函数获取
        default: function () {
          return 2
        }
      },
    },
    methods: {
      goPage(path){
        this.$router.push({
          path:path
        })
      },
      toggleShow() {
        this.ifShow = !this.ifShow
      }
    },
    mounted() {
      if (this.menuId == 2) {
        this.imageUrl = require('../../../public/images/banner_product.png')
      }
    }
  }
</script>

<style scoped lang="scss">
  .mobile-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;

    .banner {
      width: 100%;
      height: 45vw;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .text {
        font-size: 1rem;
        color: #fff;
      }
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
        transition: height .7s, background-color .7s;
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

      .display {
        transition: height .7s;
        position: fixed;
        top: 2rem;
        height: calc(100% - 1.5rem) !important;
        background-color: rgba(247, 247, 247, 0.95);
      }
    }
  }
</style>
