<template>
  <div id="contents">
    <h1 class="error">404.</h1>
    <h2 id="page">Page Not Found</h2>
    <div id="directions">
      <div id="option-1">
        <router-link to="/"><button class="welcome">Welcome</button></router-link>
        <p>Go Back to Welcome Page</p>
      </div>
      <div id="option-2">
        <router-link to="/login"><button class="login">Login</button></router-link>
        <p>Go to Login Page</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  computed: {
    themeColors () {
      return this.$store.state.settings[0]
    }
  }
}
</script>

<style scoped>
  #contents {
    width: 100%;
    height: 420px;
    background-color: v-bind(themeColors.background_color_3);
  }

  .error,
  #page,
  #directions {
    text-align: center;
  }

  h1,
  h2,
  p {
    color: v-bind(themeColors.color_3);
  }

  .error {
    padding-top: 20%;
  }

  #directions {
    margin-top: 20px;
  }

  #directions > div {
    margin-bottom: 15px;
  }

  .welcome,
  .login {
    padding: 5px;
    border-radius: 10px;
    background-color: v-bind(themeColors.background_color_1);
  }

  @media only screen and (min-width: 768px) {
    #contents {
      height: 760px;
    }
  
    .error {
      padding-top: 13%;
      font-size: 50px;
    }

    #page {
      font-size: 35px;
    }

    #directions {
      width: 80%;
      display: flex;
      margin: auto;
      margin-top: 30px;
      justify-content: space-around;
    }

    .welcome,
    .login {
      padding: 12px;
      font-size: 20px;
    }

    #option-1 p,
    #option-2 p {
      font-size: 23px;
    }
  }
</style>


