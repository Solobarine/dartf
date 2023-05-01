<template>
  <div class="container">
    <form id="form">
      <h1 class="deposit">Make a Deposit</h1>
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
    font-size: 20px;
    margin: 10px;
  }
  
  h1,
  .submit {
    color: v-bind(themeColors.color_3);
  }

  #form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-bottom: 40px;
    gap: 20px;
    background: linear-gradient(90deg, v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_2));
    border-radius: 30px;
    width: 40%;
    max-width: 350px;
    margin: auto;
  }

  input {
    width: 80%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background-color: v-bind(themeColors.color_2);
  }

  ::placeholder {
    color: #000;
  }

  #amount {
    font-size: .9rem;
  }

  .submit {
    padding: 12px;
    font-size: 16px;
    color: #eee;
    background-color: var(--green)
  }

  @media only screen and (max-width: 500px) {
    .container {
      width: 100%;
    }

    .deposit {
      font-size: 16px;
      margin-top: 20px;
    }

    #form {
      width: 80%;
    }

    input {
    }
  }
</style>
