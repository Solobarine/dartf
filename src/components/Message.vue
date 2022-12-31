<template>
  <div class="container">
  <h2 class="deposit">Messages</h2>
  <div class="messages">
    <div class="mesage">
      <p class="sender" >Dart</p>
      <p class="description" >Deposit</p>
      <p class="date" >12-12-22</p>
    </div>
    <div class="mesage">
      <p class="sender" >Dart</p>
      <p class="description" >Deposit</p>
      <p class="date" >12-12-22</p>
    </div>
    <div class="mesage">
      <p class="sender" >Dart</p>
      <p class="description" >Deposit</p>
      <p class="date" >12-12-22</p>
    </div>
    <div class="mesage">
      <p class="sender" >Dart</p>
      <p class="description" >Deposit</p>
      <p class="date" >12-12-22</p>
    </div>
    <div class="mesage">
      <p class="sender" >Dart</p>
      <p class="description" >Deposit</p>
      <p class="date" >12-12-22</p>
    </div>
    <div class="mesage">
      <p class="sender" >Dart</p>
      <p class="description" >Deposit</p>
        <p class="date" >12-12-22</p>
      </div>
      <div class="mesage">
        <p class="sender" >Dart</p>
        <p class="description" >Deposit</p>
        <p class="date" >12-12-22</p>
      </div>
      <div class="mesage">
        <p class="sender" >Dart</p>
        <p class="description" >Deposit</p>
        <p class="date" >12-12-22</p>
      </div>
      <div class="mesage">
        <p class="sender" >Dart</p>
        <p class="description" >Deposit</p>
        <p class="date" >12-12-22</p>
      </div>
      <div class="mesage">
        <p class="sender" >Dart</p>
        <p class="description" >Deposit</p>
        <p class="date" >12-12-22</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageView',
  created () {
    if (this.$cookies.isKey('user') == true && (this.$store.state.userDetails.length == 0)) {
      const user = this.$cookie.get('user').json()
      const data = { firstName: user.firstName, account: user.account_no }
      const url = 'http://localhost:8000/loggedin'
      const options = {
        "method": "POST",
        "body": JSON.stringify(data),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = fetch(url, options).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
      if(!response.err) {
        const store = this.$store.state
        store.userDetails = response.userDetails
        store.cards = response.cards
        store.deposits = response.deposits
        store.transfers = response.transfers
        store.messages = response.messages
        store.settings = response.settings
      }
    }
  },
  data () {
    return {
      messages: this.$store.state.messages,
      themeColors: this.$store.state.settings[0]
    }
  }
}
</script>

<style scoped>
  .container {
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 80%;
    overflow-y: scroll;
  }

  .deposit {
    font-size: 32px;
    text-align: center;
    margin: 40px;
  }

  .messages {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    height: 100%;
    overflow-y: scroll;
  }

  .mesage {
    display: flex;
    flex-direction: column;
    border: 2px solid v-bind(themeColors.background_color_1);
    justify-content: space-between;
    width: 70%;
    margin-left: 15%;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: v-bind(themeColors.background_color_3);
  }

  .mesage > p {
    font-size: 25px;
  }

  @media only screen and (max-width: 768px) {
    .container {
      margin: auto;
    }

    .mesage {
      width: 95%;
      margin: auto;
      margin-bottom: 20px;
    }

    .mesage > p {
      font-size: 16px;
    }

    .sender {
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>
