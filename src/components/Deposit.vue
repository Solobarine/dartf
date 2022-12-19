<template>
  <h1 class="deposit">Make a Deposit</h1>
  <form id="form">
    <input v-model="amount" type="text" name="amount" id="amount">
    <input @click="makeDeposit" type="submit" value="Submit">
  </form>
</template>

<script>
export default {
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
      accountNo: ''
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

</style>
