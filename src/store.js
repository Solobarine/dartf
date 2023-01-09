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
        background_color_3: '#f6f7f6',
        background_color_4: '#ede',
        background_color_5: '#fff',
        color_1: '#427e7a',
        color_2: '#ede',
        color_3: '#000', 
      }],
      loggedIn: false,
      loginError: '',
      signUpError: '',
      createCardMEssage: '',
      transferReceipient: {
        receiverFirstName: '',
        receiverLastName: '',
        errorMessage: ''
      },
      transferStatus: ''
    }
  },
  mutations: {
    cookieLoader: () => {

    },
    createUser: async(state, payload) => {
      console.log(payload)
      if (payload.response == 'Account already Exists') {
        state.signUpError = payload.response
      } else {
        console.log(state)
        state.userDetails[0] = payload.userDetails
        state.cards = payload.accounts
        state.deposits = payload.deposits
        state.transfers = payload.transfers
        state.messages = payload.messages
        if (payload.res.settings.length !== 0) {
          state.settings = payload.settings
        } else {
          state.settings
        }
      }
    },
    getUser: async (state, payload) => {
            console.log(payload)
        if (payload.res == 'Incorrect Email or Password') {
          state.loginError = payload.res
          console.log(state.loginError)
      } else {
        state.userDetails = payload.res.userDetails
        state.cards = payload.res.accounts
        state.deposits = payload.res.deposits
        state.transfers = payload.res.transfers
        state.messages = payload.res.messages
        if (payload.res.settings.length !== 0) {
          state.settings = payload.res.settings
        } else {
          state.settings
        }
        state.loggedIn = true
      }
    },
    createCard: async (state, payload) => {
      console.log(payload)
      if (payload.Cards) {
        state.createCardMEssage = 'Card Created Successfully'
        state.cards.push(payload.Cards)
      } else {
        state.createCardMEssage = 'Sorry, Unable to create a Card'
      }
    },
    deposit: async (state, payload) => {
      if (payload.status == 'Invalid Deposit Request' ) {
        state.deposits.push(payload)
        return 'Your Request has been Accepted. Crediting your account may take a while'
      } else {
        return 'Sorry, your transaction has failed'
      }
      
    },
    receiver: async (state, payload) => {
      if (payload.response == null) {
        return state.transferReceipient.errorMessage = 'User Not Found'
      } else if (payload.response == 'User Not Found') {
         state.transferReceipient.errorMessage = payload.response
        state.transferReceipient.receiverFirstName = ''
        state.transferReceipient.receiverLastName = ''
        return
      } else {
        state.transferReceipient.receiverFirstName = payload.response.first_name
        state.transferReceipient.receiverLastName = payload.response.last_name
        state.transferReceipient.errorMessage = ''
        return
      }
    },
    transfer: (state, payload) => {
      state.transferStatus = payload.response
    },
    toggleTheme: (state, payload) => {
      let colors = []
      if (payload == 'light') {
        colors = [{
          mode: 'light',
          'background_color_1': '#59bdbb',
          'background_color_2': '#fc9790',
          'background_color_3': '#f6f7f6',
          'background_color_4': '#ede',
          'background_color_5': '#fff',
          'color_1': '#427e7a',
          'color_2': '#ede',
          'color_3': '#000'
        }]
        state.settings[0] = colors[0]
        console.log('Light Theme', state.settings[0])
      } else {
        colors = [{
          mode: 'dark',
          'background_color_1': '#18656a',
          'background_color_2': '#a53168',
          'background_color_3': '#04656a',
          'background_color_4': '#ff4081',
          'background_color_5': '#6f7378',
          'color_1': '#fff',
          'color_2': '#ede',
          'color_3': '#fff'
        }]
        state.settings[0] = colors[0]
        console.log('Dark Theme', state.settings[0])
      }
    }
  },
  actions: {
    cookieLoader: async () => {
    
    },
    populateStore: async (context, payload) => {
      const url = 'https://pure-harbor-30545.herokuapp.com/user/login'
      const data = {email: payload.email, password: payload.password}
      const options = {
        "method": "POST",
        "body": JSON.stringify(data),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch(url, options)
      const json = await response.json()

      context.commit('getUser', json)
    },
    createAnAccount: async (context, payload) => {
      const url = 'https://pure-harbor-30545.herokuapp.com/user/signup'
      const options = {
        "method": "POST",
        "body": JSON.stringify(payload),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch (url, options)
      const resp = await response.text()

      context.commit('createUser', resp)
    },
    createCard: async (context, payload) => {
      const url = 'https://pure-harbor-30545.herokuapp.com/account/create'
      const options = {
        "method": "POST",
        "body": JSON.stringify(payload),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch(url, options)
      const data = await response.text()

      context.commit('createCard', data)
    },
    makeDeposit: async (context, payload) => {
      const url = 'https://pure-harbor-30545.herokuapp.com/account/deposit/create'
      const options = {
        "method": "POST",
        "body": JSON.stringify(payload),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch(url, options)
      const data = await response.text()
      console.log(data)

      context.commit('deposit', data)
    },
    getReceiverName: async (context, payload) => {
      const url = 'https://pure-harbor-30545.herokuapp.com/account/transfer/checkaccountno'
      const options = {
        "method": "POST",
        "body": JSON.stringify(payload),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)

      context.commit('receiver', data)
    },
    makeTransfer: async (context, payload) => {
      const url = 'https://pure-harbor-30545.herokuapp.com/account/transfer'
      const options = {
        "method": "POST",
        "body": JSON.stringify(payload),
        "headers": {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch (url, options)
      const json = await response.text()
      console.log(json)

      context.commit('transfer', json)
    },
    changeTheme: (context, payload) => {
      context.commit('toggleTheme', payload)
      console.log('Clicking')
    }
  }
});

