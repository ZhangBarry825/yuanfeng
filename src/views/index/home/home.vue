<template>
  <div class="page">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../../../components/Header/index";
  import Footer from "../../../components/Footer/index";

  export default {
    name: "Home",
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped lang="scss">

</style>
