<template>
  <div class="container">
    <h1 class="deposit">Make a Deposit</h1>
    <form id="form">
      <input v-model="amount" type="number" name="amount" id="amount" placeholder="Enter Amount">
      <input @click="makeDeposit" type="submit" class="submit" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'DepositView',
   created () {
    if(this.$cookies.isKey('user') == true && (this.$store.state.userDetails.length == 0)) {
      const user = this.$cookies.get('user').json()
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
      amount: '',
      accountNo: '',
      themeColors: this.$store.state.settings[0]
     }
  },
  methods: {
    makeDeposit () {
      const depositRequest = {amount: this.amount, account_no: this.accountNo}
      this.$store.dispatch('makeDeposit', depositRequest)  
    } 
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .deposit {
    text-align: center;
    font-size: 35px;
    margin: 30px;
  }

  #form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    margin-left: 35%;
    height: 40%;
  }

  input {
    width: 80%;
    margin-top: 40px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: v-bind(themeColors.background_color_3);
  }

  #amount {
    font-size: 17px;
    padding-left: 20px;
  }

  .submit {
    width: 30%;
    padding: 12px;
    font-size: 18px;
    margin-top: 40px;
    background-color: v-bind(themeColors.color_1);
  }

  @media only screen and (min-width: 768px) {
  }
</style>
