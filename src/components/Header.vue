<template>
  <header  id="navBar">
    <div id="company">
      <h3 id="companyName">dart</h3> 
      <i className="fa-target"></i>
    </div>
    <div class="navLinks">
      <p class="welcome"><router-link to="/">Welcome</router-link></p>
      <p class="contact"><router-link to="/dashboard/contact-us">Contact Us</router-link></p>
      <p class="discover">Discover</p>
    </div>
    <div id="icons">
      <router-link to="/dashboard/messages"><i class="notfication" /></router-link>
      <i class="profile"></i>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderView',
    data () {
      return {
        theme: 'light',
        themeColors: this.$store.state.settings[0],
        col: "#ff0"
      }
    }
  };
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #navBar {
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: 20px;
    background-image: linear-gradient(to right, v-bind(themeColors.background_color_1), #fff 25%, v-bind(themeColors.background_color_2));
  }

  .navLinks {
    width: 30%;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }

  .navLinks > p a {
    text-decoration: none;
  }
</style>
