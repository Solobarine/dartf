<template>
  <div class="container">
    <div class="buttons">
      <router-link to="/login"><button id="login">Login</button></router-link>
      <router-link to="/signup"><button id="signUp">Sign Up</button></router-link>
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
    height: 760px;
    background-image: linear-gradient(45deg, v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_2));
  }

  .buttons {
    margin-top: 25px;
    margin-left: 80%;
    width: 18%;
    padding: 8px;
    display: flex;
    justify-content: space-evenly;
  }

  .buttons > a > button {
    font-size: 20px;
    padding: 14px;
    width: 120px;
    border-radius: 10px;
    border: 2px solid v-bind(themeColors.background_color_3);
    background-color: v-bind(themeColors.background_color_1);
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
