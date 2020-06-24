<template>
  <div class="case-page">
    <MobileHeader title="案例实景" :menuId="3"></MobileHeader>
    <div class="center">
      <div class="menus">
        <div class="menu" @click="changeGroup(index)" :class="{'selected':index==nowCaseGroupIndex}" v-for="(item,index) in caseGroupList">{{item}}</div>
      </div>
      <div class="items">
        <div class="item" v-for="(item,index) in caseList" :key="item.id" @click="$router.push({path:'/case-detail?id='+item.id})">
          <div class="pic">
            <div class="img" :style="'background-image: url('+baseUrl+item.imageUrl+')'"></div>
          </div>
          <div class="text-box">
            <div class="text">{{item.title}}</div>
          </div>

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
  import {fetchCaseGroupList, fetchCaseList} from "@/api/case";
  import {fetchProductList} from "@/api/product";

  export default {
    name: "MobileCaseList",
    components: {
      MobileFooter,
      MobileHeader
    },
    data(){
      return{
        pageSize:8,
        pageNum:1,
        baseUrl:this.$imgBaseUrl,
        nowCaseGroupIndex:0,
        caseGroupList:[],
        caseList:[],
        totalNum:0,
        hasNext:false,
        hasPrevious:false,
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      async fetchData(){
        let caseGroupList=await fetchCaseGroupList()
        this.caseGroupList=caseGroupList.data
        let caseList=await fetchCaseList({groupName:caseGroupList[0],pageSize:this.pageSize,pageNum:1})
        this.caseList=caseList.data.list
        this.totalNum=caseList.data.total
        this.hasNext=caseList.data.hasNextPage
        this.hasPrevious=caseList.data.hasPreviousPage
      },
      async pageChange(num){
        let caseList=await fetchCaseList({groupName:this.caseGroupList[this.nowCaseGroupIndex],pageSize:this.pageSize,pageNum:this.pageNum+num})
        this.caseList=caseList.data.list
        this.pageNum=this.pageNum+num
        this.hasNext=caseList.data.hasNextPage
        this.hasPrevious=caseList.data.hasPreviousPage
      },
      async changeGroup(index){
        this.nowCaseGroupIndex=index
        this.pageNum=1
        let caseList= await fetchCaseList({groupName:this.caseGroupList[this.nowCaseGroupIndex],pageSize:this.pageSize,pageNum:this.pageNum})
        this.caseList=caseList.data.list
        this.totalNum=caseList.data.total
        this.hasNext=caseList.data.hasNextPage
        this.hasPrevious=caseList.data.hasPreviousPage
      }
    },
    mounted() {
      this.fetchData()
    }
  }
</script>

<style scoped lang="scss">
  .case-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;

    .center {
      margin-top: 1rem;
      width: 100%;

      display: flex;
      align-items: center;
      flex-direction: column;

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
          box-shadow: 0 0 10px rgba(136, 148, 164, 0.2);
          display: flex;
          flex-direction: column;

          .pic {
            height: 8.5rem;
            width: 8.5rem;
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

          .text-box {
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.7rem;
            color: rgba(52, 52, 52, 1);
            padding: 0.2rem 0 ;
            border-top: 1px solid rgba(238, 238, 238, 1);
            .text{
              width: 100%;
              text-align: center;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }
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
        padding-bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
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
