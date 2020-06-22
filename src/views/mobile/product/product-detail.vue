<template>
  <div class="p-page">
    <MobileHeader title="产品中心" :menuId="2"></MobileHeader>
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

    <MobileFooter></MobileFooter>
  </div>
</template>

<script>
  import MobileFooter from "@/components/MobileFooter/index";
  import MobileHeader from "@/components/MobileHeader/index";

  export default {
    name: "MobileProductDetail",
    components: {
      MobileFooter,
      MobileHeader
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
          padding: 1rem;
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

          box-sizing: border-box;
          color: #333333;
          font-size: .55rem;
          line-height: 1.7;
          .text{
            width: 100%;
            padding: 20px;
          }
          .pic{
            width: 100%;
            max-width: 100%;
            height: 10rem;
            background-image: url("../../../../public/images/product2.png");
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
          }
        }
      }
    }


  }

</style>
