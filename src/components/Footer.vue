<template>
  <div class="container">
  <div class="social-media">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-linkedin"></i>
    <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-slack"></i>
    <i class="fa-brands fa-gitlab"></i>
  </div>
  <p class="copy">Copyright &copy; 2022. All rights reserved. Dart </p>
</div>
</template>

<script>
export default {
  name: 'FooterView',
  data () {
    return {
      themeColors: this.$store.state.settings[0]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
    background-color: v-bind(themeColors.background_color_4);
  }

  .social-media {
    width: 20%;
    display: flex;
    text-align: center;
    margin: auto;
    padding-top: 20px;
    justify-content: space-evenly;
    color: v-bind(themeColors.color_1);
  }

  i {
    font-size: 35px;
  }

  i:hover {
    transform: translateY(-15px);
  }

  p {
    text-align: center;
    font-size: 16px;
    margin-top: 25px;
  }
</style>
