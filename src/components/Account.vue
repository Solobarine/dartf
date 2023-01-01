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
        <p class="field sex">Sex: Male</p>
        <p class="field accountNo">Account No:  1234567899</p>
      </div>
      <div class="cards">
        <h2 class="cardHead">Card Details</h2>
        <div class="card-div">
          <select v-model="tarjeta" name="card" id="details">
            <option disabled value="">Choose Your Card</option>
            <option :key="card.id" v-for="card in cards">{{card}}</option>
          </select>
        </div>
        {{tarjeta}}
        <div class="card-graphic">
          <Card />
        </div>
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
  data () {
    return {
      themeColors: this.$store.state.settings[0],
      accountDetails: true,
      createCard: false,
      cards: ['8964 xxxx xxxx 9012',  '3512 xxxx xxxx 9012', '3567 xxxx xxxx 9012'],
      tarjeta: ''
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
    height: 80%;
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
    background-color: v-bind(themeColors.background_color_4);
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
    width: 35%;
    height: auto;
    background: v-bind(themeColors.color_1); 
  }

  select {
    margin: auto;
    width: 60%;
    height: 50px;
    font-size: 26px;
    border-radius: 15px;
    border: none;
    background: v-bind(themeColors.background_color_2);
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
  }
</style>
