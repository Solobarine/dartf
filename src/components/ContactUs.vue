<template>
  <div class="contact-page">
    <form id="form">
      <h2 class="head">We appreciate Your Feedback.</h2>
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
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: v-bind(themeColor.background_color_5);
  }

  #form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    margin: auto;
    align-items: center;
    padding: 20px;
    padding-bottom: 40px;
    border-radius: 30px;
    background-image: linear-gradient(90deg, v-bind(themeColor.background_color_1), v-bind(themeColor.background_color_2));
    /* background-color: red; */
  }

  .head {
    text-align: center;
    font-size: 20px;
  }

  input,
  textarea {
    width: 80%;
    padding: 15px;
    justify-content: space-evenly;
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
    height: 200px;
  }

  .submit {
    width: 150px;
    font-size: 18px;
    border: none;
    background-color: var(--green);
    color: #eee;
  }

  @media only screen and (max-width: 500px) {
    .contact-page {
      width: 100%;
      padding: 30px;
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

    input,
    textarea {
      width: 100%;
    }

    .submit {
      font-size: 12px;
      padding: 10px;
    }
  }
</style>
