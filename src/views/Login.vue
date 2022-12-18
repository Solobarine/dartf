<template>
  <div class="container">
    <p id="errorMessage">{{error}}</p>
    <input v-model="email" type="email" name="email" placeholder="Enter your Email">
    <input v-model="password" type="password" name="password" placeholder="Enter your password">
    <input v-on:click="login" type="submit" value="Submit">
    <p>Not a User, <router-link to="/signup" id="signUp">Create Account</router-link></p>
  </div>
</template>

<script> 

export default {
  name: "Login",
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login () {
      const inputs = { email: this.email, password: this.password }
      this.$store.dispatch("populateStore", inputs)
    },
    checkStore () {
      console.log(this.$store)
    }
  }
}
</script>

<style scoped>

</style>
