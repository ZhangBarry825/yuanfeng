<template>
  <div class="p-page">
    <MobileHeader title="产品中心" :menuId="2"></MobileHeader>
    <div class="center">
      <div class="item0">
        <div class="title-box">
          <div class="title">{{dataDetail.productName}}</div>
        </div>
        <div class="content-box">
          <div class="left" :style="'background-image: url('+baseUrl+dataDetail.smallImages[selectedIndex]+')'"></div>
          <div class="right">
            <div class="pic" v-if="index<3" :class="{'selected':index==selectedIndex}" @click="selectedIndex=index"  v-for="(item,index) in dataDetail.smallImages" :style="'background-image: url('+baseUrl+item+')'"></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title-box">
          <div class="title">产品详情</div>
        </div>
        <div class="content-box" v-html="dataDetail.productDetail">
        </div>
      </div>
      <div class="item">
        <div class="title-box">
          <div class="title">产品介绍</div>
        </div>
        <div class="content-box" v-html="dataDetail.productPre">

        </div>
      </div>
    </div>

    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
  import MobileFooter from "@/components/MobileFooter/index";
  import MobileHeader from "@/components/MobileHeader/index";
  import {fetchProductDetail} from "@/api/product";

  export default {
    name: "MobileProductDetail",
    components: {
      MobileFooter,
      MobileHeader
    },
    data(){
      return{
        baseUrl:this.$imgBaseUrl,
        dataDetail:{
          smallImages:[]
        },
        selectedIndex:0
      }
    },
    methods:{
      async fetchData(id){
        let dataDetail=await fetchProductDetail({id:id})
        this.dataDetail=dataDetail.data
      }
    },
    mounted() {
      this.fetchData(this.$route.query.id)
    }
  }
</script>

<style scoped lang="scss">
  .p-page {
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

      .item0{
        margin: 1rem 0;
        width: 100%;
        .title-box{
          width: 100%;
          height: 2rem;
          display: flex;
          align-items: center;
          padding: 1rem;
          box-sizing: border-box;
          .title{
            font-size: .73rem;
            color:#333333;
            border-left: 4px solid #DE1F22;
            padding-left: .5rem;
          }
        }
        .content-box{
          padding: .5rem;
          box-sizing: border-box;
          color: #333333;
          font-size: .7rem;
          line-height: 1.7;
          display: flex;
          flex-direction: row;
          height: 15.5rem;
          .left{
            height: 100%;
            width: calc(100% - 5rem);
            background-image: url("../../../../public/images/product1.png");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;

          }
          .right{
            height: 100%;
            width: 25%;
            margin-left: .5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .pic{
              border:1px solid #f5f5f5;
              cursor: pointer;
              background-image: url("../../../../public/images/product1.png");
              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;

              height: 5rem;
              width: 5rem;
            }
            .selected{
              border:1px solid rgba(54,82,182,1);
            }
          }
        }
      }
      .item{
        background-color: #fff;
        margin: .5rem 0;
        width: 100%;
        border: 1px solid #E5E5E5;
        .title-box{
          width: 100%;
          height: 2rem;
          border-bottom: 1px solid #E5E5E5;
          display: flex;
          align-items: center;
          padding: 1rem;
          box-sizing: border-box;
          .title{
            font-size: .73rem;
            color:#333333;
            border-left: 4px solid #DE1F22;
            padding-left: .5rem;
          }
        }
        .content-box{
          min-height: 5rem;
          padding: .5rem;
          box-sizing: border-box;
          color: #333333;
          font-size: .55rem;
          line-height: 1.7;
          ::v-deep img{
            max-width: 100%;
          }
        }
      }
    }


  }

</style>
