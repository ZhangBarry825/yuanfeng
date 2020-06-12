<template>
  <div class="page">
    <Header></Header>
    <Banner></Banner>
    <div class="data">
      <div class="item">
        <div class="line1">2003</div>
        <div class="line2">成立于2003年</div>
      </div>
      <div class="border"></div>
      <div class="item">
        <div class="line1">17</div>
        <div class="line2">17年经验积累</div>
      </div>
      <div class="border"></div>
      <div class="item">
        <div class="line1">50+</div>
        <div class="line2">产品种类</div>
      </div>
      <div class="border"></div>
      <div class="item">
        <div class="line1">268</div>
        <div class="line2">服务客户</div>
      </div>
    </div>
    <div class="aboutUs">

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../../../components/Header/index";
  import Footer from "../../../components/Footer/index";
  import Banner from "../../../components/Banner/index";

  export default {
    name: "Home",
    components: {
      Header,
      Footer,
      Banner
    }
  }
</script>

<style scoped lang="scss">
.page{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .data{
    width: 1200px;
    height: 242px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 0 15px gainsboro;
    .item{
      width: calc(25% - 1px);
      display: flex;
      flex-direction: column;
      align-items: center;
      .line1{
        font-size: 50px;
        color: #3552B5;
        padding-bottom: 20px;
      }
      .line2{
        font-size: 20px;
        color: #333333;
      }
    }
    .border{
      height: 60%;
      border-right: 1px solid #E5E5E5;
    }
  }
  .aboutUs{
    width: 1200px;
  }

}
</style>
