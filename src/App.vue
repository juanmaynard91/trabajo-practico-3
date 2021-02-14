<template>
  <div id="app">
    <Header />
    <Footer />
    <router-view />
  </div>
</template>

<script>
import Header from "./views/Header";
import Footer from "./views/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
