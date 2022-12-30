<template>
  <div class="container">
    <div class="bio">
      <img id="image" src="../assets/man.png" alt="Profile Pic">
      <h3 class="greet">Hello <span class="name">Solly</span></h3>
      <p class="intro">Welcome back to Dart</p>
    </div>
    <div class="menus">
      <router-link to="/dashboard" class="menu"><i class="fa-solid fa-grip"></i><p class="dashboard">Dashboard</p></router-link>
      <router-link to="/dashboard/account" class="menu"><i class="fa-solid fa-house-user"></i><p class="account">Account</p></router-link>
      <router-link to="/dashboard/deposit" class="menu"><i class="fa-solid fa-sack-dollar"></i><p class="deposit">Deposit</p></router-link>
      <router-link to="/dashboard/transfer" class="menu"><i class="fa-solid fa-money-bill-transfer"></i><p class="transfer">Transfer</p></router-link>
      <router-link to="/dashboard/messages" class="menu"><i class="fa-solid fa-message"></i><p class="message">Messages</p></router-link>
      <router-link to="/dashboard/settings" class="menu"><i class="fa-solid fa-sliders"></i><p class="settings">Settings</p></router-link>
      <router-link to="/login" class="menu"><i class="fa-solid fa-right-from-bracket"></i><p class="logout">Logout</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverView',
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
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_4));
    height: 90%;
    width: 20%;
    padding-left: 30px;
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
    font-size: 25px;
    margin-bottom: 20px;
  }

  span {
    font-size: 35px;
  }

  .intro {
    font-size: 30px;
    font-weight: 600;
  }

  .menus {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60%;
  }

  .menus > a > p {
    font-size: 25px;
  }

  i {
    color: v-bind(themeColors.color_1);
  }
</style>
