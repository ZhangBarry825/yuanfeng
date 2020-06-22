<template>
  <div class="case-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="3"></Header>
      <div class="banner">
        <div class="text">案例实景</div>
      </div>
      <div class="center">
        <div class="menus">
          <div class="menu selected">工厂车间</div>
          <div class="menu">户外作业</div>
          <div class="menu">农田作业</div>
          <div class="menu">化工设备</div>
        </div>
        <div class="items">
          <div class="item">
            <div class="pic">
              <div class="img"></div>
            </div>
            <div class="text">螺栓和螺母</div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="img"></div>
            </div>
            <div class="text">螺栓和螺母</div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="img"></div>
            </div>
            <div class="text">螺栓和螺母</div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="img"></div>
            </div>
            <div class="text">螺栓和螺母</div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="img"></div>
            </div>
            <div class="text">螺栓和螺母</div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="img"></div>
            </div>
            <div class="text">螺栓和螺母</div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="img"></div>
            </div>
            <div class="text">螺栓和螺母</div>
          </div>
          <div class="item">
            <div class="pic">
              <div class="img"></div>
            </div>
            <div class="text">螺栓和螺母</div>
          </div>

        </div>
        <el-pagination
          class="pagination"
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>

      <Footer></Footer>
    </div>
    <MobileCaseList v-if="isMobile"></MobileCaseList>
  </div>
</template>

<script>
  import Header from "@/components/Header/index";
  import Footer from "@/components/Footer/index";
  import MobileCaseList from "@/views/mobile/case/case-list";

  export default {
    name: "CaseList",
    components: {
      Header,
      Footer,
      MobileCaseList
    },
    props: ['isMobile'],
  }
</script>

<style scoped lang="scss">
  .case-page {
    width: 100%;

    .pc {
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
        background-image: url("../../../../public/images/case_banner.png");
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

        .menus {
          min-width: 1200px;
          border-bottom: 2px solid rgba(204, 204, 204, 0.5);
          display: flex;
          flex-direction: row;
          justify-content: center;

          .menu {
            cursor: pointer;
            color: #343434;
            font-size: 20px;
            padding: 20px 0;
            margin: 0 5%;
          }

          .selected {
            color: #3652B6;
            border-bottom: 2px solid #3652B6;
          }
        }

        /*.items::after{*/
        /*  height: 0;*/
        /*  content: '';*/
        /*  width:272px ;*/
        /*  max-width: 272px;*/
        /*}*/
        .items {
          min-width: 1200px;
          padding: 50px 0;
          display: flex;
          justify-content: flex-start;
          flex-direction: row;
          flex-wrap: wrap;

          .item {
            margin: 15px 14px;
            width: 272px;
            height: 349px;
            box-shadow: 0 0 10px rgba(136, 148, 164, 0.2);
            display: flex;
            flex-direction: column;

            .pic {
              height: 290px;
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
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 20px;
              color: rgba(52, 52, 52, 1);
              height: 59px;
              border-top: 1px solid rgba(238, 238, 238, 1);
            }
          }

          .item:hover {
            box-sizing: border-box;
            cursor: pointer;
            box-shadow: 0 1px 35px 0 rgba(135, 148, 164, 0.7);

            .pic > .img {
              transform: scale(1.1);
            }

            .text {
              color: #FFF;
              background-color: #3652B6;
            }
          }
        }

        .pagination {
          margin: 30px 0 100px 0;
        }
      }
    }
  }

</style>
