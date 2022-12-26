<template>
  <div class="container">
    <div class="bio">
      <img id="image" src="#" alt="Profile Pic">
      <h3 class="greet">Hello <span class="name">######</span></h3>
      <p class="intro">Welcome back to Dart</p>
    </div>
    <div class="menus">
      <p class="dashboard"><router-link to="/dashboard" class="menu">Dashboard</router-link></p>
      <p class="account"><router-link to="/dashboard/account" class="menu">Account</router-link></p>
      <p class="deposit"><router-link to="/dashboard/deposit" class="menu">Deposit</router-link></p>
      <p class="transfer"><router-link to="/dashboard/transfer" class="menu">Transfer</router-link></p>
      <p class="message"><router-link to="/dashboard/messages" class="menu">Messages</router-link></p>
      <p class="setings"><router-link to="/dashboard/settings" class="menu">Settings</router-link></p>
      <p class="logout"><router-link to="/login" class="menu">Logout</router-link></p>
      <button @click="checkCookie">Cookie</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      themeColors: this.$store.state.settings[0]
    }
  },
  methods: {
    logout: () => {
      if (confirm('Are you sure you want to exit?')) {
        this.$store.state = ''
      }
    },
    checkCookie() {
      console.log(this.$cookies.get('user'))
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(v-bind(themeColors.background_color_1), #fff);
    height: 80vh;
    width: 20%;
    padding-left: 40px;
  }

  #image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: black;
    margin-bottom: 20px;
  }

  .greet,
  .intro {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .menus {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60%;
  }

  .menus > p {
    font-size: 25px;
  }
  .active,
  .menus > p > a {
    text-decoration: none;
  }
</style>
