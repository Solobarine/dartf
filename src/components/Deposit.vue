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
  computed: {
    themeColors () {
      return this.$store.state.settings[0]
    },
    accountNo () {
      return this.$store.state.userDetails[0].account_no
    }
  },
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
     }
  },
  methods: {
    makeDeposit (e) {
      e.preventDefault()
      const depositRequest = {amount: this.amount, accountNo: this.accountNo}
      console.log(depositRequest)
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
    background-color: v-bind(themeColors.background_color_5);
  }

  .deposit {
    text-align: center;
    font-size: 35px;
    margin: 30px;
  }
  
  h1,
  .submit {
    color: v-bind(themeColors.color_3);
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
    background-color: v-bind(themeColors.color_2);
  }

  ::placeholder {
    color: #000;
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
    background-color: v-bind(themeColors.background_color_1);
  }

  @media only screen and (max-width: 768px) {
    .container {
      width: 100%;
    }

    .deposit {
      font-size: 25px;
      margin-top: 20px;
    }

    #form {
      width: 100%;
      margin: 5px auto;
      margin-top: -25px;
    }

    input {
    }
  }
</style>
