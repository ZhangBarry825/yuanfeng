<template>
  <div class="mobile-product">
    <MobileHeader title="产品中心" :menuId="2"></MobileHeader>
    <div class="center">
      <div class="menus">
        <div class="menu" @click="changeGroup(index)" :class="{'selected':index==nowProductGroupIndex}" v-for="(item,index) in productGroupList">{{item}}</div>
      </div>
      <div class="items">
        <div class="item" v-for="(item,index) in productList" :key="item.id" @click="$router.push({path:'/product-detail?id='+item.id})">
          <div class="pic">
            <div class="img" :style="'background-image: url('+baseUrl+item.imageUrl+')'"></div>
          </div>
          <div class="text">{{item.productName}}</div>
        </div>
      </div>
      <div class="pagination">
        <img class="left" v-if="hasPrevious" src="../../../../public/images/btn_more_l.png"  @click="pageChange(-1)">
        <img class="left" v-if="!hasPrevious" src="../../../../public/images/btn_more_none_l.png" >
        <img class="right" v-if="hasNext" src="../../../../public/images/btn_more_r.png" @click="pageChange(+1)" />
        <img class="right" v-if="!hasNext" src="../../../../public/images/btn_more_none_r.png" />
      </div>
    </div>

    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
  import MobileFooter from "@/components/MobileFooter/index";
  import MobileHeader from "@/components/MobileHeader/index";
  import {fetchProductGroupList, fetchProductList} from "@/api/product";

  export default {
    name: "MobileProductCenter",
    components: {
      MobileFooter,
      MobileHeader
    },
    data(){
      return{
        pageSize:8,
        pageNum:1,
        baseUrl:this.$imgBaseUrl,
        nowProductGroupIndex:0,
        productGroupList:[],
        productList:[],
        hasNext:false,
        hasPrevious:false,
      }
    },
    methods:{
      async fetchData(){
        let productGroupList=await fetchProductGroupList()
        this.productGroupList=productGroupList.data
        let productList=await fetchProductList({groupName:productGroupList[0],pageSize:this.pageSize,pageNum:1})
        this.productList=productList.data.list
        this.totalNum=productList.data.total
        this.hasNext=productList.data.hasNextPage
        this.hasPrevious=productList.data.hasPreviousPage

      },
      async pageChange(num){
        let productList=await fetchProductList({groupName:this.productGroupList[this.nowProductGroupIndex],pageSize:this.pageSize,pageNum:this.pageNum+num})
        this.productList=productList.data.list
        this.pageNum=this.pageNum+num
        this.hasNext=productList.data.hasNextPage
        this.hasPrevious=productList.data.hasPreviousPage
      },
      async changeGroup(index){
        this.nowProductGroupIndex=index
        this.pageNum=1
        let productList= await fetchProductList({groupName:this.productGroupList[this.nowProductGroupIndex],pageSize:this.pageSize,pageNum:this.pageNum})
        this.productList=productList.data.list
        this.totalNum=productList.data.total
        this.hasNext=productList.data.hasNextPage
        this.hasPrevious=productList.data.hasPreviousPage
      }
    },
    mounted() {
      document.documentElement.style.fontSize = '5vw'
      this.fetchData()
    }
  }
</script>

<style scoped lang="scss">
  .mobile-product {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;

    .center {
      margin-top: 30px;
      width:100%;

      display: flex;
      align-items: center;
      flex-direction: column;

      .menus::-webkit-scrollbar{
        display: none;
      }
      .menus {
        width: 100%;
        border-bottom: 2px solid rgba(204, 204, 204, 0.5);
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        overflow-x: scroll;
        box-sizing: border-box;
        /*padding: 0 1rem;*/

        .menu {
          flex-basis: auto;
          flex-shrink: 0;

          cursor: pointer;
          color: #343434;
          font-size: .75rem;
          padding: .4rem 0;
          margin: 0 1rem;
        }

        .selected {
          color: #3652B6;
          border-bottom: 2px solid #3652B6;
        }
      }

      .items::after{
        height: 0;
        content: '';
        width: 8.5rem;
      }
      .items {

        width: 100%;
        padding: 1rem 0;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;

        .item {
          margin: 0.5rem 0;
          width: 8.5rem;
          height: 10rem;
          box-shadow: 0 0 10px rgba(136, 148, 164, 0.2);
          display: flex;
          flex-direction: column;

          .pic {
            height: 8.5rem;
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
            font-size: 0.7rem;
            color: rgba(52, 52, 52, 1);
            height: 1.5rem;
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
        width: 100%;
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;
        .left,.right{
          margin: 0.3rem;
          width: 2rem;
          height: 2rem;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
      }
    }


  }

</style>
