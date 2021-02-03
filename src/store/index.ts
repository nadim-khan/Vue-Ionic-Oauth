import { createStore } from "vuex" 

const store = createStore({
   state:{
      userProfile:[]
   },
  mutations: {
    userLogged (state, details) {
      // mutate state
      state.userProfile = details
    }
  }
})

export default store