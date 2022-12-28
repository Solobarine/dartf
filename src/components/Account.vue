<template>
  <div class="container">
    <h1 class="account">Account Information</h1>
    <div v-if="accountDetails" class="section">
      <div class="accountDetails">
        <h2>Customer Bio</h2>
        <p class="field name">Name:  Akpuru Solomon Barine</p>
        <p class="field email">Email:  solobarine@gmail.com</p>
        <p class="field address">Address:  No 3 Hauzen Avenue, Del Rico Estate</p>
        <p class="field country">Country:  Nigeria</p>
        <p class="field state">State: Rivers</p>
        <p class="field accountNo">Account No:  1234567899</p>
      </div>
      <div class="cards">
        <h2 class="cardHead">Card Details</h2>
        <p class="card">Card No:  xxxx-xxxx-9012</p>
        <p class="card">Card No:  xxxx-xxxx-9012</p>
        <p class="card">Card No:  xxxx-xxxx-9012</p>
        <div class="card-graphic"></div>
        <button @click="toggleCreateCard" type="submit" id="new">Create New</button>
      </div>
    </div>
    <div v-if="createCard" class="create-card">
      <h2>Create A Card</h2>
      <form>
        <p @click="viewAccountInfo" class="close">Close</p>
        <input type="text" placeholder="Enter Your First Name">
        <input type="text" placeholder="Enter Your Last Name">
        <input type="number" placeholder="Enter Your Account Number">
        <input type="text" placeholder="Enter Your Account Password">
        <input type="submit" id="submit" value="Submit">
      </form>
    </div>
    <h2 v-if="accountDetails">Customer Statistics</h2>
    <div v-if="accountDetails" class="stats">
      <div class="deposits">
        <h3>Number of Deposits Made</h3>
        <p>8</p>
      </div>
      <div class="transfers">
        <h3>Number of Transfers Made</h3>
        <p>14</p>
      </div>
      <div class="failed">
        <h3>Number of Failed Transactions</h3>
        <p>5</p>
      </div>
      <div class="status">
        <h3>Status</h3>
        <p>Active User</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountView',
  data () {
    return {
      themeColors: this.$store.state.settings[0],
      accountDetails: true,
      createCard: false
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
   methods: {
      toggleCreateCard () {
        this.createCard = !this.createCard
        this.accountDetails = false
     },
      viewAccountInfo () {
        this.accountDetails = true
        this.createCard = false
     }
   }
}
</script>

<style scoped>
  .container {
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  h1,
  h2,
  .accountDetails,
  .cards,
  .stats {
    text-align: center;
    margin-top: 1%;
  }
  
  h2 {
    font-size: 35px;
  }

  #new {
    padding: 12px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    margin-top: 25px;
    background-color: v-bind(themeColors.background_color_1);
  }

  #new:hover {
    padding: 14px;
    font-size: 21px;
  }

  .section {
    display: flex;
    justify-content: space-evenly;
  }

  .section > div {
    padding: 20px;
    border: 2px solid v-bind(themeColors.background_color_1);
    border-radius: 30px;
  }

  .accountDetails > p {
    text-align: start;
  }

  .create-card form {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
  }

  form > input {
    height: 60px;
    padding-left: 20px;
    margin-top: 20px;
    font-size: 20px;
    border-radius: 15px;
    background-color: v-bind(themeColors.background_color_4);
  }

  .close {
    font-size: 25px;
    margin-left: auto;
    cursor: pointer;
  }

  .close:hover {
    color: red;
  }

  #submit {
    width: 20%;
    padding-left: 0;
    margin: 25px auto;
    background: v-bind(themeColors.background_color_1);
  }

  .cards {
    max-height: 300px;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    margin-top: 10px;
    padding: 12px;
  }

  .transfers {
    margin-left: 0%;
  }

  .accountDetails > p,
  .cards > p {
    font-size: 25px;
  }

  .stats > div > p {
    font-size: 22px;
  }

  .stats > div > h3 {
    font-size: 25px;
    font-weight: 500;
  }

  .stats > div {
    border: 2px solid v-bind(themeColors.background_color_1);
    padding: 15px;
    border-radius: 12px;
    background-color: v-bind(themeColors.background_color_3);
  }
</style>
