<template>
  <div class="case-page">
    <MobileHeader title="案例实景" :menuId="3"></MobileHeader>
    <div class="article">
      <div class="title">{{caseDetail.title}}</div>
      <div class="time">{{caseDetail.addTime}}</div>
      <div class="border"></div>
      <div class="content" v-html="caseDetail.text">

      </div>
    </div>
    <div class="pagination">
      <div class="line1"
           v-if="details.beforeId!=null"
           @click="fetchData(details.beforeId)"
      >上一篇：{{details.beforeTitle}}</div>
      <div class="line2"
           v-if="details.nextId!=null"
      >
        <div class="left"
             v-if="details.nextId!=null"
             @click="fetchData(details.nextId)"
        >下一篇：{{details.nextTitle}}</div>
        <div class="right" @click="$router.push({path:'/case-list'})">返回列表 ></div>
      </div>
    </div>
    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
  import MobileFooter from "@/components/MobileFooter/index";
  import MobileHeader from "@/components/MobileHeader/index";
  import {fetchCaseDetail} from "@/api/case";
  import {queryById} from "@/api/news";

  export default {
    name: "MobileCaseDetail",
    components: {
      MobileFooter,
      MobileHeader
    },
    data(){
      return{
        caseDetail:{},
        details:{}
      }
    },
    mounted() {
      this.fetchData(this.$route.query.id)
    },
    methods:{
      async fetchData(id){
        let caseDetail=await fetchCaseDetail({id:id})
        this.caseDetail=caseDetail.data

        let { data } = await queryById({ id })
        this.details = data
        //console.log(data, "110  ")
      }
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

    .article {
      width: 100%;
      padding: 0.2rem;
      box-sizing: border-box;
      background-color: #fff;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        padding-top: .6rem;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(0, 0, 51, 1);
        line-height: 44px;
        text-align: center;
      }

      .time {
        font-size: .4rem;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 2.5;
      }

      .border {
        width: 100%;
        height: 1px;
        background: rgba(229, 229, 229, 1);
      }

      .content {
        padding: .5rem .3rem;
        box-sizing: border-box;
        width:100%;
        min-height:10rem;
        ::v-deep img {
          max-width: 100%;
        }


        font-size: .7rem;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 1.7;
      }
    }
    .pagination{
      margin-top: .3rem;
      padding: .5rem .5rem;
      width:100%;
      height: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      .line1{
        width: 100%;
        cursor: pointer;
        font-size:.7rem;
        color:#666666;
        line-height:2;
      }
      .line2{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .left{
          cursor: pointer;
          font-size:.7rem;
          color:#666666;
          line-height:2;
        }
        .right{
          cursor: pointer;
          font-size:.7rem;
          font-weight:400;
          color:rgba(102,102,102,1);
          line-height:2;
        }
      }
    }
  }

</style>
