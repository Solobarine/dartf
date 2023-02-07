<template>
  <div class="contact-page">
    <form id="form">
      <h2 class="head">Send Your Suggestions to Us. We appreciate Your Feedback.</h2>
      <input v-model="mail" type="email" name="email" id="mail" placeholder="Enter Your Email" required>
      <textarea v-model="feedback" type="text" name="comment" id="comment" minlength="2" maxlength="100" placeholder="Give your Feedback" required></textarea>
      <input class="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  computed: {
    themeColor () {  
     return this.$store.state.settings[0]
    }
  },
  data () {
    return {
      mail: '',
      feedback: ''
    }
  }
}
</script>

<style scoped>
  .contact-page {
    height: 80%;
    width: 80%;
    background-color: v-bind(themeColor.background_color_5);
  }

  #form {
    margin-top: 80px;
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
    align-items: center;
  }

  .head {
    text-align: center;
    font-size: 27px;
    margin-bottom: 20px;
  }

  input,
  textarea {
    width: 80%;
    height: 50px;
    justify-content: space-evenly;
    padding-left: 20px;
    border-radius: 10px;
    border: 1px solid v-bind(themeColor.background_color_1);
    background-color: v-bind(themeColor.background_color_3);
  }

  ::placeholder {
    color: v-bind(themeColor.color_3);
  }

  .head,
  input {
    color: v-bind(themeColor.color_3);
  }

  #comment {
    height: 35%;
    padding-top: 15px;
  }

  .submit {
    width: 30%;
    padding-left: 0;
    padding: 12px;
    font-size: 18px;
    border: none;
    background-color: v-bind(themeColor.background_color_1);
  }

  @media only screen and (max-width: 768px) {
    .contact-page {
      width: 100%;
    }

    #form {
      width: 80%;
      margin: auto;
    }

    .head {
      font-size: 18px;
      width: 80%;
      margin-top: 30px;
    }

    input {
      width: 100%;
      margin-top: 20px;
    }

    .submit {
      font-size: 12px;
      padding: 10px;
    }
  }
</style>
