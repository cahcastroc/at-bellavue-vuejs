<template>
  <navigation-bar :logo="logo" :cart="cart" />
  <router-view />
  <footer-section />
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  components: {
    NavigationBar,
    FooterSection,
  },
  data() {
    return {
      logo: require("../src/assets/logo.png"),
      cart: require("../src/assets/shopping-cart.png"),
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}
</style>
