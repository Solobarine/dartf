<template>
  <h2 class="dashboard">Dashboard</h2>
  <div id="accountSummary">
    <div class="balanceInfo">
      <p class="b-title">Balance</p>
      <p class="balance">${{balance}}</p>
    </div>
    <div class="accountInfo">
      <p class="name">{{firstName}} {{lastName}}</p>
      <p class="accountNo">Account No: {{accountNo}}</p>
    </div>
  </div>
  <h3 class="recent">Recent</h3>
  <div class="cashFlow">
    <div v-bind:key="deposit.id" v-for="deposit in deposits" class="deposits"></div>
    <div v-bind:key="transfer.id" v-for="transfer in transfer" class="transfers"></div>
  </div>
</template>

<script>
export default {
   created () {
    if(this.$cookies.isKey('user') == true && this.$store.state.userDetails.length == 0) {
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
      balance: this.$store.state.userDetails.balance,
      firstName: this.$store.state.userDetails.firstName,
      lastName: this.$store.state.userDetails.lastName,
      accountNo: this.$store.state.userDetails.account_no,
      deposits: this.$store.state.deposits,
      transfers: this.$store.state.transfers
    }
   }
}
</script>

<style scoped>

</style>
