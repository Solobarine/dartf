<template>
  <div class="container">
    <div class="buttons">
      <button id="login"><router-link to="/login">Login</router-link></button>
      <button id="signUp"><router-link to="/signup">Sign Up</router-link></button>
    </div>
    <h1 class="title">Welcome to Dart</h1>
    <h3 class="subtitle">The No 1 Financial Service Provider</h3>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  data () {
    return {
      theme: 'light',
      themeColors: this.$store.state.settings[0]
    }
  } 
}
</script>

<style scoped>
  .container {
    border: 2px solid black;
    height: 80vh;
    background-image: linear-gradient(45deg, v-bind(themeColors.background_color_1), #fff 15%, v-bind(themeColors.background_color_2));
  }

  .buttons {
    margin-top: 25px;
    margin-left: 80%;
    width: 18%;
    padding: 8px;
    display: flex;
    justify-content: space-between;
  }

  .buttons > button {
    font-size: 20px;
    padding: 14px;
    width: 45%;
    border-radius: 10px;
  }

  .title {
    text-align: center;
    font-size: 75px;
    margin-top: 160px;
  }

  .subtitle {
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
  }
</style>
