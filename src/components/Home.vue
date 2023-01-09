<template>
  <div class="home">
    <h1 class="dashboard">Dashboard</h1>
    <div id="accountSummary">
      <div class="balanceInfo">
        <i class="fa-solid fa-money-bills"></i>
        <p class="b-title">Balance</p>
        <p class="balance">${{store.userDetails[0].balance}}</p>
      </div>
      <div class="accountInfo">
        <i class="fa-solid fa-user"></i>
        <p class="name">Full Name</p>
        <p>{{store.userDetails[0].first_name}}   {{store.userDetails[0].last_name}}</p>
        <p class="accountNo">Account No</p>
        <p>{{store.userDetails[0].account_no}}</p>
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
      <div class="deposits-record">
        <h3>Recent Deposits</h3>
        <div v-if="isDeposits" class="depo">
        <div  :key="deposit" v-for="deposit in depositRecords" class="deposits">
          <div class="user">
          <i class="fa-solid fa-circle-user dep"></i>
          <div class="t-div">
            <p class="t-name">{{store.userDetails[0].first_name}}</p>
            <p class="time">{{deposit.created_at.substring(0, 10)}}</p>
          </div>
          <p class="dinero">${{deposit.amount}}</p>
        </div>
      </div>
    </div>
      <div v-else class="depo">
        <h3 id="not">No Current Deposits.</h3>
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
      </div>
      <div v-bind:key="tarjeta" v-for="tarjeta in cards" class="cards">
        <Card :tarjeta= "tarjeta.card_no"/>
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
  computed: {
    store () {  
     return this.$store.state
    },
    themeColors () {
      return this.$store.state.settings[0]
    },
    isDeposits () {
      if (this.$store.state.deposits.length > 0) {
        return true
      } else {
        return false
      }
    },
    cards () {
      return this.$store.state.cards
    },
    depositRecords () {
      return this.$store.state.deposits
    }
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
  method: {
    date: (input) => {
      return input.splice(0, 10)
    }
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    padding: 20px;
    overflow-y: scroll;
    background-color: v-bind(themeColors.background_color_5);
  }

  p {
    color: v-bind(themeColors.color_3);
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

  h1,
  h2,
  .deposits h3,
  .transfers h3 {
    text-align: center;
    color: v-bind(themeColors.color_3);
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
    margin-top: 12px;
  }

  .deposits > div >div {
    display: flex;
    flex-direction: column;
  }

  #not {
    top: 50%;
    color: red;
  }

  .transfers {
    width: 46%;
  }

  .deposits {
    width: 100%;
  }

  .cards {
    width: 25%;
  }

  .cards .container {
    width: 100%;
    height: 150px;
    overflow-y: hidden;
    padding: 12px 20px;
    border-radius: 15px;
    border: 2px solid v-bind(themeColors.color_1);
  }

  @media only screen and (max-width: 768px) {
    .home {
      height: auto;
      width: 100%;
    }

    #accountSummary {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 
        "box-1 nox-2"
        "box-3 box-4"
        ;
      width: 100%;
      grid-gap: 20px;
      justify-content: flex-start;
    }

    #accountSummary > div {
      font-size: 16px;
      width: 100%;
    }

    .balanceInfo {
      grid-area: box-1;
    }

    .acountInfo {
      grid-area: box-2;
    }

    .cashFlow {
      flex-direction: column;
    }

    .cashFlow > div {
      width: 80%;
      font-size: 12px;
    }

    .deposits {
      margin-right: auto;
      margin-bottom: 30px;
    }

    .transfers {
      margin-left: auto;
    }

    .t-name {
      font-size: 16px;
    }

    .dinero {
      font-size: 16px;
    }

    .transfers div {
      display: flex;
      justify-content: space-between;
    }

    .send > * {
      font-size: 10px;
    }

    .send > i {
      display: none;
    }

    .cards {
      display: none;
    }
  }
</style>
