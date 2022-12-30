<template>
  <div class="home">
    <h1 class="dashboard">Dashboard</h1>
    <div id="accountSummary">
      <div class="balanceInfo">
        <i class="fa-solid fa-money-bills"></i>
        <p class="b-title">Balance</p>
        <p class="balance">$20000</p>
      </div>
      <div class="accountInfo">
        <i class="fa-solid fa-user"></i>
        <p class="name">Full Name</p>
        <p>Solomon Barine</p>
        <p class="accountNo">Account No</p>
        <p>1234567890</p>
      </div>
      <div class="income">
        <i class="fa-solid fa-money-bill"></i>
        <p>Income</p>
        <p>$26000</p>
      </div>
      <div class="expenses">
        <i class="fa-solid fa-money-bill-wave"></i>
        <p>Expenses</p>
        <p>$14000</p>
      </div>
    </div>
    <h2 class="recent">Recent</h2>
    <div class="cashFlow">
      <div class="deposits">
        <h3>Recent Deposits</h3>
        <div class="user">
          <i class="fa-solid fa-circle-user dep"></i>
          <div class="t-div">
            <p class="t-name">Solly</p>
            <p class="time">28-11-2022</p>
          </div>
          <p class="dinero">$450</p>
        </div>
         <div class="user">
          <i class="fa-solid fa-circle-user dep"></i>
          <div class="t-div">
            <p class="t-name">Solly</p>
            <p class="time">28-11-2022</p>
          </div>
          <p class="dinero">$450</p>
        </div>
        <div class="user">
          <i class="fa-solid fa-circle-user dep"></i>
          <div class="t-div">
            <p class="t-name">Solly</p>
            <p class="time">28-11-2022</p>
          </div>
          <p class="dinero">$450</p>
        </div>
           <div class="user">
          <i class="fa-solid fa-circle-user dep"></i>
          <div>
            <p class="t-name">Solly</p>
            <p class="time">28-11-2022</p>
          </div>
          <p class="dinero">$450</p>
        </div>
      </div>
      <div class="transfers">
        <h3>Recent Transfers</h3>
        <div class="send">
          <i class="fa-solid fa-circle-user"></i>
          <p>Solly</p>
          <p>to</p>
          <i class="fa-solid fa-circle-user"></i>
          <p>Fabio L.</p>
          <p>07-09-2022</p>
          <p class="amount">$25</p>
        </div>
        <div class="send">
          <i class="fa-solid fa-circle-user"></i>
          <p>Solly</p>
          <p>to</p>
          <i class="fa-solid fa-circle-user"></i>
          <p>Daniel</p>
          <p>07-09-2022</p>
          <p class="amount">$82</p>
        </div>
        <div class="send">
          <i class="fa-solid fa-circle-user"></i>
          <p>Solly</p>
          <p>to</p>
          <i class="fa-solid fa-circle-user"></i>
          <p>Papadoupolos</p>
          <p>07-09-2022</p>
          <p class="amount">$127</p>
        </div>
        <div class="send">
          <i class="fa-solid fa-circle-user"></i>
          <p>Solly</p>
          <p>to</p>
          <i class="fa-solid fa-circle-user"></i>
          <p>Fabio L.</p>
          <p>07-09-2022</p>
          <p class="amount">$900</p>
        </div>
      </div>
      <div class="cards">
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'HomeView',
  components: {
    Card
  },
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
      /*balance: this.$store.state.userDetails.balance,
      firstName: this.$store.state.userDetails.firstName,
      lastName: this.$store.state.userDetails.lastName,
      accountNo: this.$store.state.userDetails.account_no,
      deposits: this.$store.state.deposits,
      transfers: this.$store.state.transfers*/
      themeColors: this.$store.state.settings[0]
    }
   }
}
</script>

<style scoped>
  @media only screen and (min-width: 768px) {
  .home {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    padding: 20px;
    overflow-y: scroll;
  }

  #accountSummary {
    display: flex;
    justify-content: space-between;
  }

  #accountSummary > div {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 12px;
    padding: 12px;
    font-size: 20px;
    border: 2px solid v-bind(themeColors.background_color_1);
  }

  #accountSummary > div > *:nth-child(even) {
    font-weight: 700;
  }

  i {
    font-size: 30px;
    color: v-bind(themeColors.color_1);
  }

  .recent {
    margin-top: 40px;
  }

  .cashFlow {
    display: flex;
    justify-content: space-between;
  }

  .cashFlow > div {
    border-radius: 20px;
    padding: 12px;
    border: 2px solid v-bind(themeColors.color_1);
    height: auto;
    background: v-bind(themeColors.background_color_3);
  }

  .deposits h3,
  .transfers h3 {
    text-align: center;
  }

  .transfers div {
    display: grid;
    grid-template-columns: 0.2fr 0.8fr 0.4fr 0.2fr 1fr 0.8fr 0.4fr  ;
    font-size: 18px;
    font-weight: 500;
  }

  .send {
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    margin-top: 20px;
  }

  .user {
    width: 100%;
    height: 70px;
    display: grid;
    grid-template-columns: 0.4fr 1.2fr 0.4fr;
    grid-template-rows: 1fr 0.7fr;
    grid-area: 
      "icons name amount"
      "icons date amount"
    ;
  }

  .t-name {
    grid-area: name;
    font-size: 21px;
    font-weight: 500;
  }

  .dinero {
    grid: amount;
    font-size: 22px;
    font-weight: 700;
    color: green;
    padding: 10px;
  }

  .deb {
    padding-top: 40px;
  }

  .amount {
    font-size: 20px;
    font-weight: 600;
    color: red;
  }

  .deposits i {
    text-align: center;
  }

  .deposits > div >div {
    display: flex;
    flex-direction: column;
  }

  .transfers {
    width: 46%;
  }

  .deposits {
    width: 25%;
  }

  .cards {
    width: 25%;
  }

  .cards .container {
    width: 100%;
    height: 200px;
    overflow-y: hidden;
    padding: 12px 20px;
    border-radius: 15px;
    border: 2px solid v-bind(themeColors.color_1);
}
}
</style>
