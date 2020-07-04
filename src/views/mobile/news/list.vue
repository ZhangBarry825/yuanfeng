<template>
  <div class="news-list-page">
    <MobileHeader title="新闻动态" :menuId="4"></MobileHeader>
    <div class="menus">
      <div
        class="menu menu1"
        :class="groupName=='行业新闻'?'selected':''"
        @click="switchNews('行业新闻')"
      >行业新闻</div>
      <div
        class="menu menu2"
        :class="groupName=='新闻资讯'?'selected':''"
        @click="switchNews('新闻资讯')"
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
        @click="jumpDetails(item)"
        :key="index"
      >
        <div class="left" :style="`background-image: url('${baseUrl}${item.imageUrl}')`"></div>
        <div class="right">
          <div class="line1">{{item.title}}</div>
          <div class="line2">{{item.lead}}</div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <img
        class="left"
        v-if="newsobj.hasPreviousPage"
        @click="nextclick"
        src="../../../../public/images/btn_more_l.png"
      />
      <img class="left" v-else src="../../../../public/images/btn_more_none_l.png" />

      <img
        class="right"
        @click="prevclick"
        v-if="newsobj.hasNextPage"
        src="../../../../public/images/btn_more_r.png"
      />
      <img class="right" v-else src="../../../../public/images/btn_more_none_r.png" />
    </div>
    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
import MobileFooter from "@/components/MobileFooter/index";
import MobileHeader from "@/components/MobileHeader/index";
import { newsAdvisory } from '@/api/news';
export default {
  name: "MobileNewsList",
  components: {
    MobileFooter,
    MobileHeader
  },
  data () {
    return {
      baseUrl: this.$imgBaseUrl,
      newsobj: {},
      pageSize: 4,
      pageNum: 1,
      loading: false,
      groupName: "行业新闻",
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
    prevclick () {
      this.pageNum += 1
      this.retrieveData()
    },
    nextclick () {
      this.pageNum -= 1
      this.retrieveData()
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

  .menus {
    margin: 3rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 6rem;
      height: 4.5rem;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      font-size: 0.8rem;
      /*font-weight:bold;*/
      color: rgba(255, 255, 255, 1);
      line-height: 1.5;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    .item {
      cursor: pointer;
      margin: 0.3rem 0;
      display: flex;
      align-items: center;
      .left {
        // background-image: url('../../../../public/images/product1.png');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width: 5rem;
        height: 5rem;
      }
      .right {
        height: 5rem;
        width: calc(100% - 5rem);
        background: rgba(255, 255, 255, 1);
        padding: 0.5rem;
        box-sizing: border-box;
        .line1 {
          width: 100%;
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);

          max-width: 100%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          margin: 0.2rem 0;
        }
        .line2 {
          font-size: 0.65rem;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 1.5;

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
    width: 100%;
    display: flex;
    justify-content: center;
    .left,
    .right {
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
