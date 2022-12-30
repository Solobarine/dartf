<template>
  <div class="contact-page">
    <form id="form">
      <h2 class="head">Send Your Suggestions to Us. We appreciate Your Feedback.</h2>
      <input type="email" name="email" id="mail" value="Enter Your Email" required>
      <input type="text" name="comment" id="comment" minlength="2" maxlength="100" value="Give your Feedback" required>
      <input class="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data () {
    return {
      themeColor: this.$store.state.settings[0]
    }
  }
}
</script>

<style scoped>
  @media only screen and (min-width: 768px) {
  .contact-page {
    height: 80%;
    width: 80%;
  }

  #form {
    margin-top: 80px;
    width: 30%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 35%;
    align-items: center;
  }

  .head {
    text-align: center;
    font-size: 27px;
    margin-bottom: 20px;
  }

  input {
    width: 80%;
    height: 50px;
    justify-content: space-evenly;
    padding-left: 20px;
    border-radius: 10px;
    border: none;
    background-color: v-bind(themeColor.background_color_3);
  }

  #comment {
    height: 55%;
  }

  .submit {
    width: 30%;
    padding-left: 0;
    padding: 12px;
    font-size: 18px;
    background-color: v-bind(themeColor.color_1);
  }
}
</style>
