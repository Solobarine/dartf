import { createStore } from 'vuex';

export const store = createStore({
  state () {
    return{
      userDetails: [],
      cards: [],
      deposits : [],
      transfers: [],
      messages: [],
      settings: [{
        background_color_1: '#59bdbb',
        background_color_2: '#fc9790',
        background_color_3: '#f2f7f6',
        background_color_4: '#ede',
        color_1: '#427e7a',
        color_2: '#1c3a3e',
        color_3: '#b1babe'

      }]
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
      if (response.err) {
        state.error = response.err
      } else {
        state.userDetails = response.userDetails
        state.cards = response.cards
        state.deposits = response.deposits
        state.transfers = response.transfers
        state.messages = response.messages
        state.settings = response.settings
        const user = { firstName: state.userDetails.firstName, accountNo: state.userDetails.account_no }
        this.$cookies.set('user', user)
        this.$router.replace({path: '/dashboard'})
      }
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
        state.settings = response.settings
        const user = { firstName: state.userDetails.firstName, accountNo: state.userDetails.account_no }
        this.$cookies.set('user', user)
        this.$router.replace({path: '/dashboard'})
      }
    },
    deposit: async (state, payload) => {
      const url = 'http://localhost:8000/deposit'
      const options = {
        "method": "POST",
        "body": JSON.stringify(payload),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch(url, options).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
      if (!response.err) {
        this.store.state.deposits.push(response)
        return 'Your Request has been Accepted. Crediting your account may take a while'
      } else {
        return 'Sorry, your transaction has failed'
      }
      
    },
    changeTheme: (state, payload) => {
      let settings = []
      if (payload == 'light') {
        settings = [{mode: 'light', 'background-color': '', color: ''}]
      } else {
        settings = [{mode: 'dark', 'background-color': '', color: ''}]
      }
      state.settings = settings
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
    },
    changeTheme: (context, payload) => {
      context.commit('changeTheme', payload)
    }
  }
});

