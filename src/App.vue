<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch("reqIndex");
    console.log(this.$store.state.home);
  }
};
</script>
<style>
</style>
