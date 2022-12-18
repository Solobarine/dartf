<template>
  <h2 class="dashboard">Dashboard</h2>
  <div id="accountSummary">
    <div class="balanceInfo"></div>
    <div class="accountInfo"></div>
  </div>
  <h3 class="recent">Recent</h3>
  <div class="cashFlow">
    <div class="graph">

    </div>
  </div>
</template>

<script>
export default {
   created () {
    if(this.$cookie.isKey('user') && (this.$store.state.userDetails.length == 0)) {
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
      if(!err) {
        const store = this.$store.state
        store.userDetails = response.userDetails
        store.cards = response.cards
        store.deposits = response.deposits
        store.transfers = response.transfers
        store.messages = response.messages
      }
    }
  },
}
</script>

<style scoped>

</style>
