<template>
  <div class="container">
    <h1 class="account">Account Information</h1>
    <div v-if="accountDetails" class="section">
      <div class="accountDetails">
        <h2>Customer Bio</h2>
        <p class="field name">Name:  {{store.userDetails[0].first_name}}  {{store.userDetails[0].last_name}}</p>
        <p class="field email">Email:  {{store.userDetails[0].email}}</p>
        <p class="field address">Address:  {{store.userDetails[0].address}}</p>
        <p class="field country">Country:  {{store.userDetails[0].country}}</p>
        <p class="field state">State: {{store.userDetails[0].state}}</p>
        <p class="field sex">Sex: {{store.userDetails[0].sex}}</p>
        <p class="field accountNo">Account No:  {{store.userDetails[0].account_no}}</p>
      </div>
      <div class="cards">
        <h2 class="cardHead">Card Details</h2>
        <div class="card-div">
          <select v-model="tarjeta" name="card" id="details">
            <option disabled value="">Choose Your Card</option>
            <option v-bind:key="card" v-for="card in cards">{{card.card_no}}</option>
          </select>
        </div>
        <div class="card-graphic">
          <Card :tarjeta="tarjeta" />
        </div>
        <button @click="toggleCreateCard" type="submit" id="new">Create New</button>
      </div>
    </div>
    <div v-if="createCard" class="create-card">
      <h2>Create A Card</h2>
      <form>
        <p @click="viewAccountInfo" class="close">Close</p>
        <p>{{store.createCardMEssage}}</p>
        <input v-model="first_name" type="text" placeholder="Enter Your First Name">
        <input v-model="last_name" type="text" placeholder="Enter Your Last Name">
        <input v-model="account_no" type="number" placeholder="Enter Your Account Number">
        <input v-model="password" type="text" placeholder="Enter Your Account Password">
        <input v-model="pin" type="number" placeholder="Enter Your Desired Pin">
        <input @click="createDebitCard" type="submit" id="submit" value="Submit">
      </form>
    </div>
    <h2 v-if="accountDetails">Customer Statistics</h2>
    <div v-if="accountDetails" class="stats">
      <div class="deposits">
        <h3>Deposits Made</h3>
        <p>8</p>
      </div>
      <div class="transfers">
        <h3>Transfers Made</h3>
        <p>14</p>
      </div>
      <div class="failed">
        <h3>Failed Transactions</h3>
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
import Card from './Card.vue'

export default {
  name: 'AccountView',
  components: {
    Card
  },
  computed: {
    themeColors () {
      return this.$store.state.settings[0]
    },
    cards () {
      return this.$store.state.cards
    },
    store () {
      return this.$store.state
    }
  },
  data () {
    return {
      accountDetails: true,
      createCard: false,
      tarjeta: '',
      first_name: '',
      last_name: '',
      account_no: '',
      pin: '',
      password: ''
    }
  },
   async created () {
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
      const response = await fetch(url, options)
      const json = await response.json()
      if(json.err == null) {
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
      },
      createDebitCard (e) {
        e.preventDefault()
        const data = { 'first_name': this.first_name, 'last_name': this.last_name, accountNo: this.account_no, password: this.password, pin: this.pin }
        this.$store.dispatch('createCard', data)
      },
      seestore () {
        console.log(this.$store.state)
      }
   }
}
</script>

<style scoped>
  .container {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background-color: v-bind(themeColors.background_color_5);
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

  h1,
  h2,
  h3,
  p {
    color: v-bind(themeColors.color_3);
  }

  #new {
    padding: 12px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    margin-top: 25px;
    background-color: v-bind(themeColors.background_color_1);
    color: v-bind(themeColors.color_3);
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
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 12px;
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
    background-color: v-bind(themeColors.color_2);
  }

  ::placeholder {
    color: #000;
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
    color: v-bind(themeColors.color_3);
  }

  .cards {
    width: 35%;
    height: auto;
    background: v-bind(themeColors.background_color_2); 
  }

  select {
    margin: auto;
    width: 60%;
    height: 50px;
    font-size: 18px;
    border-radius: 15px;
    border: none;
    text-align: center;
    background: v-bind(themeColors.background_color_1);
    color: v-bind(themeColors.color_3);
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .card-graphic .container {
    height: 200px;
    overflow-y: hidden;
    padding: 15px;
    margin: auto;
  }

  .stats {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: auto;
    margin-top: 10px;
    padding: 12px;
  }

  .transfers {
    margin-left: 0%;
  }

  .cards > p {
    font-size: 25px;
  }

  .stats > div > p {
    font-size: 22px;
  }

  .stats > div > h3 {
    font-size: 25px;
    font-weight: 500;
    color: v-bind(themeColors.color_3);
  }

  .stats > div {
    border: 2px solid v-bind(themeColors.background_color_1);
    padding: 15px;
    border-radius: 12px;
    background-color: v-bind(themeColors.background_color_3);
  }

  @media only screen and (max-width: 768px) {
    .container {
      width: 90%;
      margin: auto;
    }

    h2 {
      font-size: 20px;
    }

    .section {
      flex-direction: column-reverse;
    }

    .accountDetails > p {
      font-size: 13px;
    }

    .cards {
      width: 80%;
      margin: auto;
    }

    .cards .container {
      height: 100px;
    }

    #new {
      padding: 10px;
      font-size: 10px;
    }

    select {
      font-size: 12px;
      font-weight: 600;
      height: 35px;
      margin-bottom: 10px;
    }

    .stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-area: 
      "box-1 box-2"
      "box-3 box-4";
      row-gap: 20px;
      column-gap: 20px;
      padding: 0;
    }

    .stats > div {
      padding: 3px;
      text-align: center;
    }

    .stats > div > p {
      font-size: 12px;
    }

    .stats > div > h3 {
      font-size: 15px;
    }

    .create-card form {
      width: 80%;
    }

    form > input {
      font-size: 15px;
    }

    #submit {
      width: 40%;
      height: 40px;
      font-size: 13px;
    }

    .close {
      font-size: 14px;
    }

    .deposits h3,
    .transfers h3,
    .status h3 {
      margin-top: 17px;
    }
  }
</style>
