<template>
  <h1 class="account">Account Information</h1>
  <div class="accountDetails">
    <h3 class="field name"></h3>
    <h3 class="field email"></h3>
    <h3 class="field address"></h3>
    <h3 class="field accountNo"></h3>
  </div>
  <h2 class="cardHead">Card Details</h2>
  <div class="cards">
  </div>
</template>

<script>
export default {
   created () {
    if(this.$cookie.isKey(user) && (this.$store.state.userDetails.length == 0)) {
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
  }
}
</script>

<style scoped>

</style>
