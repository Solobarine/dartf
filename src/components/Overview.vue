<template>
  <div class="bio">
    <img src="#" alt="Profile Pic">
    <h3 class="greet">Hello <span class="name">######</span></h3>
    <p class="intro">Welcome back to Dart</p>
  </div>
  <div class="menus">
    <router-link to="/dashboard" class="menu">Dashboard</router-link>
    <router-link to="/dashboard/account" class="menu">Account</router-link>
    <router-link to="/dashboard/deposit" class="menu">Deposit</router-link>
    <router-link to="/dashboard/transfer" class="menu">Transfer</router-link>
    <router-link to="/dashboard/messages" class="menu">Messages</router-link>
    <router-link to="/dashboard/settings" class="menu">Settings</router-link>
    <router-link to="/login" class="menu">Logout</router-link>
    <button @click="checkCookie">Cookie</button>
  </div>
</template>

<script>
export default {
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

</style>
