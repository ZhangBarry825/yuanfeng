<template>
  <div class="p-page">
    <Header :menu-id="2"></Header>
    <div class="banner">
      <div class="text">产品中心</div>
    </div>
    <div class="center">
      <div class="item0">
        <div class="title-box">
          <div class="title">机械齿轮与扳手</div>
        </div>
        <div class="content-box">
          <div class="left"></div>
          <div class="right">
            <div class="pic selected"></div>
            <div class="pic"></div>
            <div class="pic"></div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title-box">
          <div class="title">产品详情</div>
        </div>
        <div class="content-box">
          <div class="text">

            1、专业级铬钒钢精工锻造，高硬度、高扭矩、更强韧，高硬度、高扭矩、更强韧；<br>
            2、抛光更好，二代升级扳手，加厚表面抛光不易生锈；<br>
            3、标准弧形开口，流线弧度标准，更好的吻合型，减少摩擦磨损，使用更方便；<br>
            4、铬钒钢强扭矩，高品质铬钒钢硬度高，扭矩强不易打滑；<br>


          </div>
        </div>
      </div>
      <div class="item">
        <div class="title-box">
          <div class="title">产品介绍</div>
        </div>
        <div class="content-box">
          <div class="text">
            5083铝卷是很有前途的合金，其优良的抗腐蚀性能使5083铝卷广泛用于海事用途如船舶，以及汽车、飞机焊接件、地铁轻轨等，以及需严格防火的压力容器(如液体罐车、冷藏车、冷藏集装箱)、制冷装置、电视塔、钻探设备、交通运输用铝等。以及汽车、飞机焊接件、地铁轻轨等，以及需严格防火的压力容器(如液体罐车、冷藏车、冷藏集装箱)、制冷装置。
          </div>
          <div class="pic"></div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header/index'
  import Footer from '@/components/Footer/index'

  export default {
    name: "ProductDetail",
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped lang="scss">
  .p-page {
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

      .item0{
        margin: 20px 0;
        width: 100%;
        .title-box{
          width: 100%;
          height: 70px;
          display: flex;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
          .title{
            font-size: 20px;
            color:#333333;
            border-left: 4px solid #DE1F22;
            padding-left: 20px;
          }
        }
        .content-box{
          padding: 20px;
          box-sizing: border-box;
          color: #333333;
          font-size: 16px;
          line-height: 1.7;
          display: flex;
          flex-direction: row;
          height: 486px;
          .left{
            height: 100%;
            width: calc(70% - 30px);
            background-image: url("../../../../public/images/product1.png");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;

          }
          .right{
            height: 100%;
            width: 25%;
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .pic{
              border:2px solid #f5f5f5;
              cursor: pointer;
              background-image: url("../../../../public/images/product1.png");
              background-repeat: no-repeat;
              background-position: center center;
              background-size: cover;

              height: 137px;
              width: 100%;
            }
            .selected{
              border:2px solid rgba(54,82,182,1);
            }
            .pic:hover{
              border:2px solid rgba(54,82,182,1);
            }
          }
        }
      }
      .item{
        margin: 20px 0;
        width: 100%;
        border: 1px solid #E5E5E5;
        .title-box{
          width: 100%;
          height: 70px;
          border-bottom: 1px solid #E5E5E5;
          display: flex;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
          .title{
            font-size: 20px;
            color:#333333;
            border-left: 4px solid #DE1F22;
            padding-left: 20px;
          }
        }
        .content-box{

          box-sizing: border-box;
          color: #333333;
          font-size: 16px;
          line-height: 1.7;
          .text{
            width: 100%;
            padding: 20px;
          }
          .pic{
            width: 100%;
            height: 654px;
            background-image: url("../../../../public/images/product2.png");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
        }
      }
    }


  }

</style>
