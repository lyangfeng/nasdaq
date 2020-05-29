<template>
  <div id="app">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from './components/Footer'

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch("index");
    console.log(this.$store.state.home);
  }
};
</script>
<style>
</style>
