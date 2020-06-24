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
    </div>
    <div class="bottom">豫ICP备06100159号技术支持:正尚科技</div>
  </div>
</template>

<script>
  import {fetchFooterList} from "@/api/home";

  export default {
    name: "MobileFooter",
    data() {
      return {
        ifShow: false,
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
    mounted() {
      document.documentElement.style.fontSize = '5vw'
      this.fetchData()
    },
    methods: {
      goPage(path){
        this.$router.push({
          path:path
        })
      },
      toggleShow() {
        this.ifShow = !this.ifShow
      },
      async fetchData(){
        let footerList=await fetchFooterList()
        this.footerList=footerList.data
      }
    }
  }
</script>

<style scoped lang="scss">
  .page {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #333333;
    align-items: center;
    .center{
      width: 100%;
      box-sizing: border-box;
      color: #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem 1rem;
      .left{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        color: rgba(240,240,240,0.95);
        .title{
          font-size: .9rem;
          padding: 0.2rem 0;
        }
        .red{
          width: 33px;
          border-bottom: 2px solid #DE1F22;
          margin-bottom: 0.3rem;
        }
        .line{
          padding: 0.2rem 0;
          font-size: .7rem;
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
