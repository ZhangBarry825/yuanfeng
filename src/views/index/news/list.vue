<template>
  <div class="news-list-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="4"></Header>
      <div class="banner">
        <div class="text">新闻动态</div>
      </div>
      <div class="menus">
        <div
          class="menu menu1"
          :class="groupName=='行业新闻'?'selected':''"
          @click="switchNews('行业新闻')"
        >行业新闻</div>
        <div
          class="menu menu2"
          :class="groupName=='公司新闻'?'selected':''"
          @click="switchNews('公司新闻')"
        >公司新闻</div>
        <div
          class="menu menu3"
          :class="groupName=='常见问题'?'selected':''"
          @click="switchNews('常见问题')"
        >常见问题</div>
      </div>

      <div class="items" v-loading="loading">
        <div
          class="item"
          v-for="(item, index) in newsobj.list"
          :key="index"
          @click="jumpDetails(item)"
        >
          <div class="left" :style="`background-image: url('${baseUrl}${item.imageUrl}')`"></div>
          <div class="right">
            <div class="line1">{{item.title}}</div>
            <div class="line2">{{item.lead}}</div>
          </div>
        </div>
      </div>

      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="newsobj.total"
        :pageSize="pageSize"
        @next-click="nextclick"
        @prev-click="prevclick"
        @current-change="currentchange"
      ></el-pagination>
      <Footer></Footer>
    </div>
    <MobileNewsList v-if="isMobile"></MobileNewsList>
  </div>
</template>

<script>
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import MobileNewsList from "@/views/mobile/news/list";

import { newsAdvisory } from '@/api/news';
export default {
  name: "NewsList",
  props: ['isMobile'],
  components: {
    MobileNewsList,
    Header,
    Footer
  },
  data () {
    return {
      baseUrl: this.$imgBaseUrl,
      newsobj: {},
      pageSize: 4,
      pageNum: 1,
      loading: false,
      groupName: "行业新闻"
    }
  },
  created () {
    this.retrieveData()
  },
  methods: {
    jumpDetails (item) {
      this.$router.push({
        path: '/news-detail',
        query: {
          id: item.id
        }
      })
      //console.log(item, "大")
    },
    switchNews (text) {
      this.groupName = text
      this.pageNum = 1
      this.retrieveData()
    },
    async retrieveData () {
      this.loading = true
      let { data } = await newsAdvisory({ groupName: this.groupName, pageNum: this.pageNum, pageSize: this.pageSize })
      //console.log(data, "123")

      setTimeout(() => {
        this.loading = false
      }, 500)
      if (data) {
        this.newsobj = data
      } else {
        this.newsobj.list = []
        this.newsobj.total = 0
      }
    },
    nextclick (e) {
      this.pageNum = e
      this.retrieveData()
      //console.log(e, "点击下一页")
    },
    prevclick (e) {
      this.pageNum = e
      this.retrieveData()
      //console.log(e, "点击上一页")
    },
    currentchange (e) {
      this.pageNum = e
      this.retrieveData()
      //console.log(e, "点击数字")
    }
  },
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
      background-image: url('../../../../public/images/news.png');
    }

    .menu2 {
      background-image: url('../../../../public/images/news_product.png');
    }

    .menu3 {
      background-image: url('../../../../public/images/news_problem.png');
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
        // background-image: url('../../../../public/images/product1.png');
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
        color: #3652b6 !important;
      }
    }
  }

  .pagination {
    margin: 30px 0 100px 0;
  }
}
</style>
