<template>
  <div class="p-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="2"></Header>
      <div class="banner">
        <div class="text">产品中心</div>
      </div>
      <div class="center">
        <div class="menus">
          <div class="menu" @click="changeGroup(index)" :class="{'selected':index==nowProductGroupIndex}"
               v-for="(item,index) in productGroupList">{{item}}
          </div>
        </div>
        <div class="items" v-loading="loading">
          <div class="item" v-for="(item,index) in productList" :key="item.id"
               @click="$router.push({path:'/product-detail?id='+item.id})">
            <div class="pic">
              <div class="img" :style="'background-image: url('+baseUrl+item.imageUrl+')'"></div>
            </div>
            <div class="text">{{item.productName}}</div>
          </div>
        </div>
        <el-pagination
          class="pagination"
          background
          layout="prev, pager, next"
          @current-change="pageChange"
          :page-size="pageSize"
          :total="totalNum">
        </el-pagination>
      </div>
      <Footer></Footer>
    </div>
    <MobileProduct v-if="isMobile"></MobileProduct>
  </div>
</template>

<script>
  import Header from '@/components/Header/index'
  import Footer from '@/components/Footer/index'
  import MobileProduct from "../../mobile/product/product-center";
  import {fetchProductGroupList, fetchProductList} from "@/api/product";

  export default {
    name: "ProductCenter",
    components: {
      Header,
      Footer,
      MobileProduct
    },
    props: ['isMobile'],
    data() {
      return {
        loading: false,
        pageSize: 8,
        pageNum: 1,
        baseUrl: this.$imgBaseUrl,
        nowProductGroupIndex: 0,
        productGroupList: [],
        productList: [],
        totalNum: 0,
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      async fetchData() {
        this.loading = true
        let productGroupList = await fetchProductGroupList()
        this.productGroupList = productGroupList.data
        let productList = await fetchProductList({groupName: productGroupList[0], pageSize: this.pageSize, pageNum: 1})
        this.productList = productList.data.list
        this.totalNum = productList.data.total
        setTimeout(() => {
          this.loading = false
        }, 200)
      },
      async pageChange(nowPage) {
        this.loading = true
        let productList = await fetchProductList({
          groupName: this.productGroupList[this.nowProductGroupIndex],
          pageSize: this.pageSize,
          pageNum: nowPage
        })
        this.productList = productList.data.list
        this.pageNum = nowPage
        setTimeout(() => {
          this.loading = false
        }, 200)
      },
      async changeGroup(index) {
        this.loading = true
        this.nowProductGroupIndex = index
        this.pageNum = 1
        let productList = await fetchProductList({
          groupName: this.productGroupList[this.nowProductGroupIndex],
          pageSize: this.pageSize,
          pageNum: this.pageNum
        })
        this.productList = productList.data.list
        this.totalNum = productList.data.total
        setTimeout(() => {
          this.loading = false
        }, 200)
      }
    },
    mounted() {
      this.fetchData()
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

        /*.items::after{*/
        /*  height: 0;*/
        /*  content: '';*/
        /*  width:272px ;*/
        /*  max-width: 272px;*/
        /*}*/
        .items {
          min-width: 1200px;
          padding: 50px 0;
          display: flex;
          justify-content: flex-start;
          flex-direction: row;
          flex-wrap: wrap;

          .item {
            margin: 15px 14px;
            border-top: 3px solid #fff;
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

        .pagination {
          margin: 30px 0 100px 0;
        }
      }
    }


  }

</style>
