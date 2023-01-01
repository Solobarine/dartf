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
  data () {
    return {
      email: '',
      password: '',
      error: '',
      themeColors: this.$store.state.settings[0]
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
  .container {
    height: 760px;
    padding: 30px;
  }

  .login {
    text-align: center;
    font-size: 25px;
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
    height: 50px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding-left: 20px;
    border: none;
    background-color: v-bind(themeColors.color_2);
  }

  ::placeholder {
    color: #fff;
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
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    .contents {
      width: 90%;
    }

    .submit {
      padding: 6px;
      font-size: 14px;
      width: 25%;
    }

    #signup {
      font-size: 14px;
    }
  }
</style>
