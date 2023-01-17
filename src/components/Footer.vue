<template>
  <div class="footer">
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
  computed: {
    themeColors () {
      return this.$store.state.settings[0]
    }
  }
}
</script>

<style scoped>
  .footer {
    padding: 10px;
    background-color: v-bind(themeColors.background_color_4);
  }

  .social-media {
    width: 25%;
    display: flex;
    text-align: center;
    margin: auto;
    padding-top: 10px;
    justify-content: space-evenly;
    color: v-bind(themeColors.color_1);
  }

  i {
    font-size: 25px;
  }

  i:hover {
    transform: translateY(-15px);
  }

  p {
    text-align: center;
    font-size: 16px;
    margin-top: 15px;
    color: v-bind(themeColors.color_1);
  }

  @media only screen and (max-width: 768px) {
    .social-media {
      width: 70%;
    }

    i {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
</style>
