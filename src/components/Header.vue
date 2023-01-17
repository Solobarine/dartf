<template>
  <header  id="navBar">
    <div id="company">
      <h3 id="companyName">dart</h3> 
      <i class="fa-solid fa-arrows-to-circle"></i>
    </div>
    <div class="navLinks">
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

<style scoped>
  header {
    align-content: center;
    padding: 5px;
    background: v-bind(themeColors.background_color_1);
  }

  .fa-arrows-to-circle {
    padding-top: 6px;
  }

  #company {
    width: 10%;
    display: flex;
    justify-content: space-between;
  }

  .navLinks,
  #icons {
    display: none;
  }

  h3,
  #company i,
  #icons i,
  p {
    color: v-bind(themeColors.color_3);
  }

  @media only screen and (min-width: 768px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #company {
    display: flex;
    width: 5%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 0px;
  }

  #company > * {
    font-size: 20px;
  }

  #navBar {
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: 10px;
    background-image: linear-gradient(to right, v-bind(themeColors.background_color_1), #fff 25%, v-bind(themeColors.background_color_2));
  }

  .navLinks {
    width: 30%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  #icons {
    width: 10%;
    display: flex;
    justify-content: space-evenly;
  }

  #icons > a {
    font-size: 15px;
    text-decoration: none;
  }

  .navLinks > a p,
  .discover {
    color: #000
  }

  .user {
    display: flex;
    text-align: center;
    width: 60%;
    justify-content: space-between;
  }

  .user i {
    margin-top: 3px;
  }
}
</style>
