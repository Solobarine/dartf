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
  computed: {
    themeColors () {
      return this.$store.state.settings[0]
    }
  },
  data () {
    return {
      theme: 'light',
    }
  } 
}
</script>

<style scoped>
  .container {
    width: 100%;
    background-image: linear-gradient(90deg, v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_2));
    height: 88vh;
    background-color: v-bind(themeColors.background_color_1);
    margin-top: -26px;
  }

  .title {
    font-size: 27px;
    font-weight: 700;
    margin-top: 28vh;
  }

  .title,
  .subtitle {
    text-align: center;
  }

  button,
  h1,
  h3 {
    color: v-bind(themeColors.color_3); 
  }

  ::placeholder {
    color: #000;
  }

  .buttons {
    margin-top: 25px;
    margin-left: 60%;
    width: 35%;
    padding: 8px 0;
    display: flex;
    justify-content: space-evenly;
  }

  .buttons > a > button {
    font-size: 7px;
    padding: 5px;
    width: 50px;
    border-radius: 10px;
    border: 2px solid v-bind(themeColors.background_color_1);
    background-color: v-bind(themeColors.background_color_4);
  }

  @media only screen and (min-width: 768px) {
    .container {
      border: 2px solid black;
      height: 760px;
      margin-top: 0px;
      background-image: linear-gradient(45deg, v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_2));
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

    .buttons {
      margin-left: 80%;
      padding: 14px;
      width: 18%;
    }

    .buttons > a > button {
      font-size: 20px;
      padding: 14px;
      width: 120px;
    }
  }
</style>
