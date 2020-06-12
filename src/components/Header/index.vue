<template>
  <div class="page">
    <div class="center">
        <div class="left">河南沅奉机械设备有限公司</div>
        <div class="right">
          <div class="item selected">网站首页 <div class="bottom"></div></div>
          <div class="item">产品中心 <div class="bottom"></div></div>
          <div class="item">案例实景 <div class="bottom"></div></div>
          <div class="item">新闻动态 <div class="bottom"></div></div>
          <div class="item">关于我们 <div class="bottom"></div></div>
          <div class="item">联系我们 <div class="bottom"></div></div>
        </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "Header",

  }
</script>

<style scoped lang="scss">
  .page {
    width: 100%;
    display: flex;
    justify-content: center;
    .center{
      height: 100px;
      width: 1200px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .left{
        font-size: 24px;
        color: #333;
      }
      .right{
        display: flex;
        justify-content: flex-end;
        font-size: 16px;
        color: #333;
        .item{
          cursor: pointer;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .bottom{
            display: none;
            width: 80%;
            border-bottom: 2px solid #3652B6;
            position: relative;
            top: 10px;
          }
        }
        .selected{
          color: #3652B6;
          .bottom{
            display: block;
          }
        }
        .item:hover{
          color: #3652B6;
        }
        .item:hover>.bottom{
          color: #3652B6;
          display: block;
        }

      }
    }
  }
</style>
