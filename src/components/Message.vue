<template>
  <div v-bind:key="message.id" v-for="message in messages" class="messages">
    <div class="mesage">
      <p class="sender" v-html="message.sender"></p>
      <p class="description" v-html="message.description"></p>
      <p class="date" v-html="message.created_at"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  created () {
    if (this.$cookies.isKey('user') == true && (this.$store.state.userDetails.length == 0)) {
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
      messages: this.$store.state.messages
    }
  }
}
</script>
