<template>
  <div class="container">
    <h2 class="transfer">Make Your Transfer</h2>
    <form class="form" action="#" method="post">
      <select v-model="card" name="card" id="cards">
        <option disabled value="">Choose Your Card</option>
        <option v-bind:key="card" v-for="card in cards">{{card}}</option>
      </select>
      <input v-model="amount" type="number" name="amount" id="amount" placeholder="Enter Amount">
      <input v-model="receiverAccNo" type="text" name="receiverAccNo" id="receiverAccNo" placeholder="Receiver Account Number">
      <div class="receiverName">
        <p class="info">Always Wait until you can see the recipient's name before clicking the Submit button.</p>
        <p class="name r-firstName">{{receiverFirstName}}</p>
        <p class="name r-lastName">{{receiverLastName}}</p>
      </div>
      <input v-model="pin" type="number" name="pin" id="pin" placeholder="Enter Your Pin">
      <input v-model="description" type="text" name="description" id="description" placeholder="Description">
      <input class="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  created () {
    if(this.$cookies.isKey('user') == true && (this.$store.state.userDetails.length == 0)) {
      const user = this.$cookies.get(user).json()
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
      cards: this.$store.state.cards,
      card: 'You don\'t have a card',
      firstName: this.$store.state.userDetails.firstName,
      lastName: this.$store.state.userDetails.lastName,
      receiverFirstName: '',
      receiverLastName: '',
      receiverAccNo: '',
      amount: '',
      pin: '',
      description: '',
      transferRequest: '',
      themeColors: this.$store.state.settings[0]
    }
  },
  methods: {
    checkAccountNo () {
      
    },
    makeTransfer () {
      if (this.receiverFirstName != '' && this.receiverLastName != '') {
        const url = 'http://localhost:8000/dashboard/transfer'
        const data = {
          sender_first_name: this.$store.state.userDetails.firstName,
          sender_last_name: this.$store.state.userDetails.lastName,
          sender_account_no: this.$store.state.userDetails.account_no,
          amount: this.amount,
          card: this.card,
          pin: this.pin,
          receiver_first_name: this.receiverFirstName,
          receiver_last_name: this.receiverLastName,
          receiver_account_no: this.receiverAccNo,
          description: this.description
        }
        const options = {
          "method": "POST",
          "body": JSON.stringify(data),
          "headers": {
            "Content-Type": "application/json"
          }
        }
        const response = fetch (url, options).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
        if (!response.err) {
          return this.transferRequest = 'Your Transfer Request has been accepted'
        } else {
          return this.transferRequest = 'Transaction Failed'
        } 
    } else {
      return this.transferError = 'Invalid Transfer'
    }
    }
  }
}
</script>

<style scoped>
  .container {
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
  }

  .transfer {
    text-align: center;
    font-size: 35px;
  }

  .form {
    width: 40%;
    margin-left: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  select,
  input {
    width: 70%;
    height: 50px;
    border-radius: 10px;
    margin-top: 30px;
    border: none;
    padding-left: 20px;
  }

  input {
    background-color: v-bind(themeColors.background_color_4);
  }

  .info,
  .name {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    color: v-bind(themeColors.color_1);
  }

  .submit {
    width: 25%;
    padding-left: 0;
    padding: 13px;
    font-size: 18px;
    background-color: v-bind(themeColors.color_1);
  }
</style>
