<template>
  <div class="container">
    <div id="content">
      <h1 class="title">Welcome to Dart</h1>
      <h3 class="subtitle">The No 1 Financial Service Provider</h3>
      <div class="buttons">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </div>
    <div id="welcome_image">
      <div>
        <img src="/image_0.png" alt="">
      </div>
    </div>
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
    background-color: v-bind(themeColors.background_color_1);
  }

  #content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }

  .title {
    margin-top: 50px;
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
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  #welcome_image {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  #welcome_image div {
    width: 80%;
    max-height: 600px;
    margin: auto;
  }

  #welcome_image div img {
    width: 100%;
    object-fit: cover;
  }
  .buttons > a {
    color: #333;
    border: 2px solid v-bind(themeColors.background_color_1);
    background-color: v-bind(themeColors.background_color_4);
    text-align: center;
    border-radius: 10px;
    width: 120px;
    padding: 15px;
  }

  @media only screen and (min-width: 600px) {
    .container {
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      flex-basis: fill;
      border: 2px solid black;
      background-image: linear-gradient(45deg, v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_2));
    }

    .title {
      text-align: center;
    }

    .subtitle {
      text-align: center;
    }
  }
</style>
