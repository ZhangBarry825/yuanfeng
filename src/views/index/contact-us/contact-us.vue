<template>
  <div class="about-page">
    <Header :menu-id="6"></Header>
    <div class="banner">
      <div class="text">联系我们</div>
      <div class="text2">打造一流的机械设备</div>
    </div>
    <div class="map-box">
      <Map></Map>
    </div>
    <div class="contact-box">
      <div class="left"></div>
      <div class="right"></div>
    </div>



    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header/index";
  import Footer from "@/components/Footer/index";
  import Map from "@/components/Map/index";

  export default {
    name: "ContactUs",
    components: {
      Header,
      Footer,
      Map,
    },
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
  .about-page {
    width: 100%;
    min-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;

    .banner {
      min-width: 1200px;
      width: 100%;
      height: 350px;
      background-image: url("../../../../public/images/about_us.png");
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

      .text2 {
        margin-top: 30px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }

    .map-box{
      padding: 50px 0;
      width: 1200px;
    }

    .contact-box{
      width: 100%;
      min-width: 1200px;

    }


  }

</style>
