<template>
  <div class="messages">
    <div class="mesage">
      <p class="id"></p>
      <p class="sender"></p>
      <p class="description"></p>
      <p class="date"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  created () {
    if (this.$cookie.isKey(user)) {
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
  data () {
    return {
      messages: this.$store.state.messages
    }
  }
}
</script>
