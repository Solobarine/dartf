<template>
  <header  id="navBar">
    <div id="company">
      <h3 id="companyName">dart</h3>
      <div id="company_image">
        <img src="/arrow.png" alt="Dart">
      </div>
    </div>
    <div class="nav_links">
      <router-link to="/"><p class="welcome">Welcome</p></router-link>
      <router-link to="/dashboard/contact-us"><p class="contact">Contact Us</p></router-link>
      <p class="discover">Discover</p>
    </div>
    <div id="icons">
      <router-link to="/dashboard/messages"><i class="fa-solid fa-bell" /></router-link>
      <router-link class="user" to="/dashboard/account"><i class="fa-solid fa-user-tie" /><p id="user">{{firstName}}</p></router-link>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderView',
    computed: {
      themeColors () {
        return this.$store.state.settings[0]
      },
      firstName () {
        return this.$store.state.loggedIn ? this.$store.state.userDetails[0].first_name : ''
      }
    },
    data () {
      return {
        theme: 'light',
        col: "#ff0"
      }
    }
  };
</script>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background-image: linear-gradient(90deg, v-bind(themeColors.background_color_1), #fff, v-bind(themeColors.background_color_2));
  }

  #company_image {
    width: 30px;
    overflow: hidden;
  }

  #company_image img {
    width: 100%;
  }

  #company,
  .nav_links,
  #icons {
    display: flex;
    gap: 10px;
  }

  .nav_links {
    gap: 70px;
  }

  @media screen and (max-width: 600px) {
    .nav_links {
      display: none;
    }
  }
</style>