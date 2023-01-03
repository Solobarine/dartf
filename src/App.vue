<template>
  <div class="parent">
  <Header />
  <router-view></router-view>
  <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      themeColors: this.$store.state.settings[0]
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }

  :::placeholder {
    color: v-bind(themeColors.color_3);;
  }

  a, .active {
    text-decoration: none;
  }

  h1, h2, li, p, button, [type~="submit"], label {
    color: v-bind(themeColors.color_3);
    /*    color: #fff;*/
  }

  .parent {
    height: auto;
    background-color: v-bind(themeColors.background_color_5);
  }

  .footer {
    min-width: 20vh;
  }

  @media only screen and (min-width: 768px) {
    .parent {
      width: 1900px;
      height: 870px;
    }

    a, .active {
      text-decoration: none;
    }
  }
</style>
