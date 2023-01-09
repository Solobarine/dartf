<template>
  <div class="container">
    <h2 class="transfer">Make Your Transfer</h2>
    <form class="form">
      <select v-model="card" name="card" id="cards">
        <option disabled value="">Choose Your Card</option>
        <option v-bind:key="card" v-for="card in cards">{{card.card_no}}</option>
      </select>
      <input v-model="amount" type="number" name="amount" id="amount" placeholder="Enter Amount">
      <p class="transferError">{{errorMessage}}</p>
      <input @keyup="checkAccountNo" v-model="receiverAccNo" type="text" name="receiverAccNo" id="receiverAccNo" placeholder="Receiver Account Number">
      <div class="receiverName">
        <p class="info">Always Wait until you can see the recipient's name before clicking the Submit button.</p>
        <p class="name r-firstName">{{receiverFirstName}}   {{receiverLastName}}</p>
      </div>
      <p>{{status}}</p>
      <input v-model="pin" type="number" name="pin" id="pin" placeholder="Enter Your Pin">
      <input v-model="description" type="text" name="description" id="description" placeholder="Description">
      <input @click="makeTransfer" class="submit" type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'TransferView',
  computed: {
    themeColors () {
      return this.$store.state.settings[0]
    },
    firstName () {
      return this.$store.state.userDetails[0].first_name
    },
    lastName () {
      return this.$store.state.userDetails[0].last_name
    },
    receiverFirstName () {
      return this.$store.state.transferReceipient.receiverFirstName
    },
    receiverLastName () {
      return this.$store.state.transferReceipient.receiverLastName
    },
    errorMessage () {
      return this.$store.state.transferReceipient.errorMessage
    },
    status () {
      return this.$store.state.transferStatus
    }
  },
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
      const response = fetch(url, options)
      const json = response.json()
        const store = this.$store.state
        store.userDetails = json.res.userDetails
        store.cards = json.res.cards
        store.deposits = json.res.deposits
        store.transfers = json.res.transfers
        store.messages = json.res.messages
        store.settings = json.res.settings
    }
  },
  data () {
    return {
      cards: this.$store.state.cards,
      card: '',
      iscard: 'You don\'t have a card',
      receiverAccNo: '',
      amount: '',
      pin: '',
      description: '',
      transferRequest: ''
    }
  },
  methods: {
    checkAccountNo () {
      const input = this.receiverAccNo
      if (this.receiverAccNo.length >= 10) {
        const data = {sender_account_no: this.$store.state.userDetails[0].account_no, account_no: input}
        console.log(data)
        this.$store.dispatch('getReceiverName', data)
      }
    },
    makeTransfer (e) {
      console.log('here')
      e.preventDefault()
      if (this.receiverFirstName != '' && this.receiverLastName != '') {
        const data = {
          'sender_first_name': this.$store.state.userDetails[0].first_name,
          'sender_last_name': this.$store.state.userDetails[0].last_name,
          'sender_account_no': this.$store.state.userDetails[0].account_no,
          'amount': this.amount,
          'card_no': this.card,
          'pin': this.pin,
          'receiver_first_name': this.receiverFirstName,
          'receiver_last_name': this.receiverLastName,
          'receiver_account_no': this.receiverAccNo,
          'description': this.description
        }

        this.$store.dispatch('makeTransfer', data)
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
    height: 80%;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    background-color: v-bind(themeColors.background_color_5);
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

  h2,
  p,
  .submit {
    color: v-bind(themeColors.color_3);
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

  select {
    font-size: 20px;
    text-align: center;
  }

  input {
    background-color: v-bind(themeColors.color_2);
  }

  ::placeholder {
    color: #000;
  }

  .info,
  .name {
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    color: v-bind(themeColors.color_3);
  }

  .submit {
    width: 25%;
    padding-left: 0;
    padding: 13px;
    font-size: 18px;
    background-color: v-bind(themeColors.background_color_1);
  }

  @media only screen and (max-width: 768px) {
    .container {
      width: 100%;
    }

    .form {
      margin: auto;
      width: 80%;
    }

    select,
    input {
      width: 100%;
      font-size: 13px;
    }

    .info,
    .name {
      font-size: 10px;
    }

    .submit {
      width: 40%;
      font-size: 14px;
      padding: 8px;
    }
  }
</style>
