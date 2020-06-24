<template>
  <div class="page">
    <div class="center">
      <div class="left">
        <div class="title">联系方式</div>
        <div class="red"></div>
        <div class="line">电话：{{footerList.contactUs.phoneNumber}}</div>
        <div class="line">Email：{{footerList.contactUs.email}}</div>
        <div class="line">地址：{{footerList.contactUs.address}}</div>
      </div>
      <div class="right">
        <div class="item">
          <div class="title">公司首页</div>
          <div class="line" @click="goAnchor('about-us')">公司简介</div>
          <div class="line" @click="goAnchor('advantage')">我们的优势</div>
          <div class="line" @click="goAnchor('product')">产品中心</div>
          <div class="line" @click="goAnchor('customer')">客户分布</div>
          <div class="line" @click="goAnchor('case')">案例实景</div>
          <div class="line" @click="goAnchor('news')">新闻资讯</div>
        </div>
        <div class="white"></div>
        <div class="item">
          <div class="title">产品中心</div>
          <div class="line" @click="$router.push({path:'/product-center?type='+item+'&index='+index})" v-for="(item,index) in footerList.menuGroups[0].groupName" v-if="index<4">{{item}}</div>
        </div>
        <div class="white"></div>
        <div class="item">
          <div class="title">案例实景</div>
          <div class="line" @click="$router.push({path:'/case-list?type='+item+'&index='+index})" v-for="(item,index) in footerList.menuGroups[1].groupName" v-if="index<4">{{item}}</div>
        </div>
        <div class="white"></div>
        <div class="item">
          <div class="title">新闻动态</div>
          <div class="line" @click="$router.push({path:'/news-list?type='+item+'&index='+index})" v-for="(item,index) in footerList.menuGroups[2].groupName" v-if="index<4">{{item}}</div>
        </div>
        <div class="white"></div>
        <div class="item">
          <div class="title">关于我们</div>
          <div class="line">公司简介</div>
          <div class="line">企业文化</div>
          <div class="line">服务理念</div>
          <div class="line">发展历程</div>
        </div>
        <div class="white"></div>
        <div class="item">
          <div class="title">联系我们</div>
          <div class="line">提交留言</div>
        </div>
      </div>
    </div>
    <div class="bottom">豫ICP备06100159号技术支持:正尚科技</div>
  </div>
</template>

<script>


  import {fetchFooterList} from "@/api/home";

  export default {
    name: "Footer",
    data(){
      return{
        footerList:{
          contactUs:{},
          menuGroups:[
            {groupName:''},
            {groupName:''},
            {groupName:''},
          ]
        }
      }
    },
    methods:{
      goAnchor(selector) {
        if(this.$route.path!=='/home'){
          this.$router.push({path:'/home?selector='+selector})
        }else {
          document.querySelector("#"+selector).scrollIntoView(true);
        }
      },
      async fetchData(){
        let footerList=await fetchFooterList()
        this.footerList=footerList.data
      }
    },
    mounted() {
      this.dataList=JSON.parse(localStorage.getItem('dataList'))
      this.fetchData()
    }
  }
</script>

<style scoped lang="scss">
.page{
  min-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #333333;
  align-items: center;
  .center{
    min-width: 1200px;
    box-sizing: border-box;
    padding: 40px 0;
    color: #fff;
    height: 300px;
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left{
      padding-bottom: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      max-width: 300px;
      .title{
        font-size: 24px;
      }
      .red{
        width: 33px;
        border-bottom: 2px solid #DE1F22;
      }
      .line{
        font-size: 14px;
        line-height: 1.3;
      }
    }
    .right{
      height: 100%;
      display: flex;
      flex-direction: row;

      .item{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 35px;
        .title{
          font-size: 16px;
          padding: 15px 0;
        }
        .line{
          cursor: pointer;
          padding: 5px 0;
          font-size: 14px;
          color: rgba(255,255,255,0.5);
        }
        .line:hover{
          color: #fff;
        }
      }
      .white{
        margin-top: 10px;
        height: 37px;
        border-right: 1px solid rgba(255,255,255,0.3);
      }
    }
  }
  .bottom{
    border-top: 1px solid rgba(255,255,255,0.1);
    width: 100%;
    display: flex;
    justify-content: center;
    color: rgba(255,255,255,0.5);
    font-size: 12px;
    padding: 10px 0;
  }
}
</style>
