import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [],

    //FORM USER
    user: {
      name: "",
      address: "",
      city: "",
      email: "",
      phone: "",
      payment: "",
      pack: "",
      topping: "",
      obs: ""
    }


  },
  mutations: {
    //cart
    addProduct(state, payload) {
      const existingProduct = state.cart.find(prod => prod.id === payload.id)
      if (existingProduct) {
        existingProduct.qtd += 1
        alert(`${payload.title} adicionado ao seu carrinho`)
      } else {
        payload.qtd = 1
        state.cart.push(payload)
        alert(`${payload.title} adicionado ao seu carrinho`)
      }
    },
    //FORM USER
    saveUserName(state, payload) {
      state.user.name = payload
    },
    saveUserAddress(state, payload) {
      state.user.address = payload
    },
    saveUserCity(state, payload) {
      state.user.city = payload
    },
    saveUserEmail(state, payload) {
      state.user.email = payload
    },
    saveUserCep(state, payload) {
      state.user.cep = payload
    },
    saveUserPhone(state, payload) {
      state.user.phone = payload
    },
    saveUserPayment(state, payload) {
      state.user.payment = payload
    },
    saveUserPack(state, payload) {
      state.user.pack = payload
    },
    saveUserObs(state, payload) {
      state.user.obs = payload
    },
    saveUserTop(state, payload) {
      state.user.topping = payload
    }

  },
  actions: {

  },
  modules: {
  }
})
