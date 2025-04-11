<template>
  <div id="app">
    <Header />
    <homepage />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import homepage from "./components/Homepage.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
    homepage
  },
};
</script>
