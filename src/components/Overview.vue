<template>
  <i @click="openMenu" class="fa-solid fa-bars open"></i>
  <div class="overview hide">
    <div class="bio">
      <p @click="closeMenu" id="close">&#10005;</p>
      <img v-if="sex == 'Male'" id="image" src="../assets/man.png" alt="Profile Pic">
      <img v-else src="../assets/woman.png" alt="Profile Pic" id="image">
      <h3 class="greet">Hello <span class="name">{{userDetails.first_name}}</span></h3>
      <p class="intro">Welcome back</p>
    </div>
    <div class="menus">
      <router-link to="/dashboard" class="menu"><i class="fa-solid fa-grip"></i><p @click="closeMenu" class="dashboard">Dashboard</p></router-link>
      <router-link @click="closeMenu" to="/dashboard/account" class="menu"><i class="fa-solid fa-house-user"></i><p class="account">Account</p></router-link>
      <router-link @click="closeMenu" to="/dashboard/deposit" class="menu"><i class="fa-solid fa-sack-dollar"></i><p class="deposit">Deposit</p></router-link>
      <router-link @click="closeMenu" to="/dashboard/transfer" class="menu"><i class="fa-solid fa-money-bill-transfer"></i><p class="transfer">Transfer</p></router-link>
      <router-link @click="closeMenu" to="/dashboard/messages" class="menu"><i class="fa-solid fa-message"></i><p class="message">Messages</p></router-link>
      <router-link to="/dashboard/contact-us" class="menu"><i class="fa-solid fa-address-card"></i><p class="contact">Contact Us</p></router-link>
      <router-link @click="closeMenu" to="/dashboard/settings" class="menu"><i class="fa-solid fa-sliders"></i><p class="settings">Settings</p></router-link>
      <router-link @click="logout" to="/login" class="menu"><i class="fa-solid fa-right-from-bracket"></i><p class="logout">Logout</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverView',
  computed: {
    themeColors () {
      return this.$store.state.settings[0]
    },
    userDetails () {
      return this.$store.state.userDetails[0]
    },
    store () {
      return this.$store.state
    }
  },
  data () {
    return {
      sex: this.$store.state.userDetails[0].sex
    }
  },
  methods: {
    logout: () => {
      if (confirm('Are you sure you want to exit?')) {
        this.$store.state = ''
      }
    },
    openMenu: () => {
      document.querySelector('.overview').classList.remove('hide')
    },
    closeMenu: () => {
      const menu = document.querySelector('.overview')
      menu.classList.add('hide')
    }
  }
}
</script>

<style scoped>
  .overview {
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_4));
    height: 100%;
    width: 20%;
    padding-left: 30px;
  }

  .open {
    display: none;
  }

  #close {
    display: none;
  }

  #image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: black;
    margin-bottom: 20px;
  }

  a {
    width: 80%;
    display: flex;
    text-align: left;
  }

  .menu i {
    margin-top: 5px;
    font-size: 30px;
  }

  .menu p {
    margin-left: 14px;
    font-size: 14px;
  }

  .greet,
  .intro {
    font-size: 25px;
    margin-bottom: 20px;
  }

  .intro {
    font-size: 20px;
  }

  span {
    font-size: 35px;
  }

  h3,
  span,
  p {
    color: v-bind(themeColors.color_3);
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

  @media only screen and (max-width: 768px) {
    .overview {
      position: fixed;
      top: 0;
      z-index: 100;
      width: 100%;
      height: 100vh;
    }

    .hide {
      display: none;
    }

    .open {
      display: block;
      position: absolute;
    }

    #close {
      display: block;
      float: right;
      font-size: 25px;
      font-weight: 800;
      cursor: pointer;
      margin: 10px 30px;
    }

    #image {
      margin-top: 20px;
      margin-left: 33%;
      margin-bottom: 8px;
    }

    .greet,
    .intro {
      font-size: 19px;
      margin-top: 5px;
      text-align: center;
      margin-left: -30px;
    }

    .menus > a > p {
      font-size: 17px;
      text-align: center;
      margin-bottom: 20px;
    }

    .menu p {
      margin-left: 0;
    }

    a {
      display: block;
      width: 100%;
    }

     p {
      text-decoration: none;
    }

    i {
      display: none;
    }

    .open {
      display: block;
      font-size: 20px;
      margin: 10px;
    }

    .menus {
      margin-left: -30px;
      height: auto;
    }
  }
</style>
