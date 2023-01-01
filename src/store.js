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
        background_color_1: '#18656a',
        background_color_2: '#a53168',
        background_color_3: '#04656a',
        background_color_4: '#ff4081',
        color_1: '#fff',
        color_2: '#ede',
        color_3: '#fff', 
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

