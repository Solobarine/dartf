import { createStore } from 'vuex';

export const store = createStore({
  state () {
    return{
      userDetails: [],
      cards: [],
      deposits : [],
      transfers: [],
      messages: [],
      settings: []
    }
  },
  mutations: {
    createUser: async(state, payload) => {
      const url = 'http://localhost:8000/signup'
      const options = {
        "method": "POST",
        "body": JSON.stringify(payload),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch (url, options).then(res => res.json).then(res => console.log(res)).catch(err => console.log(err))
    },
    getUser: async (state, payload) => {
      const url = 'http://localhost:8000'
      const data = {email: payload.email, password: payload.password}
      const options = {
        "method": "POST",
        "body": JSON.stringify(data),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch(url, options).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
      if (response.err) {
        state.error = response.err
      } else {
        state.userDetails = response.userDetails
        state.cards = response.cards
        state.deposits = response.deposits
        state.transfers = response.transfers
        state.messages = response.messages
        const user = { firstName: state.userDetails.firstName, accountNo: state.userDetails.account_no }
        this.$cookie.set(user, user)
      }
    }
  },
  actions: {
    populateStore: (context, payload) => {
      context.commit('getUser', payload)
    },
    createAnAccount: (context, payload) => {
      context.commit('createUser', payload)
    },
    makeDeposit: (context, payload) => {
      context.commit('deposit', payload)
    },
    makeTransfer: (context, payload) => {
      context.commit('transfer', payload)
    }
  }
});

