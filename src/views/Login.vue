<template>
  <div class="container">
    <div class="contents">
      <h2 class="login">Login to your Account</h2>
      <p id="errorMessage">{{error}}</p>
      <input v-model="email" type="email" class="input" name="email" placeholder="Enter your Email">
      <input v-model="password" type="password" class="input" name="password" placeholder="Enter your password">
      <input v-on:click="login" class="submit" type="submit" value="Submit">
      <p id="signup">Not a User, <router-link to="/signup" id="signUp">Create Account</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  computed: {
    error () {
      return this.$store.state.loginError
    },
    themeColors () {
      return this.$store.state.settings[0]
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const inputs = { email: this.email, password: this.password }
      this.$store.dispatch("populateStore", inputs).then(() => {
        if (this.$store.state.loggedIn) {
          this.$router.push({name: 'DashBoard'})
        }
      })
    },
    checkStore () {
      this.$store.state.loggedIn = true
      this.$router.push({name: 'DashBoard'})
    }
  }
}
</script>

<style scoped>
  .container {
    height: 75%;
    padding: 30px;
    background-color: v-bind(themeColors.background_color_5);
  }

  #errorMessage {
    color: red;
  }

  h2,
  #signup {
    color: v-bind(themeColors.color_3);
  }

  .login {
    text-align: center;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .contents {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: 60px;
    margin: auto;
    align-items: center;
  }

  .input {
    width: 80%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding-left: 20px;
    border: none;
    background-color: v-bind(themeColors.color_2);
  }

  ::placeholder {
    color: #000;
  }

  .submit {
    padding: 12px;
    font-size: 18px;
    border-radius: 10px;
    width: 40%;
    border: none;
    background-color: v-bind(themeColors.background_color_1);
    color: #fff;
  }

  #signup {
    margin-top: 20px;
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    .contents {
      width: 90%;
    }

    .submit {
      padding: 8px;
      font-size: 10px;
      width: 25%;
    }

    #signup {
      font-size: 14px;
    }
  }
</style>
