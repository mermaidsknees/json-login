import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export const sendSignInLink = email => {
    const actionCodeSettings = {
      url: `${location.origin}/signin/email`,
      handleCodeInApp: true
    }
    return firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
  }

export default new Vuex.Store({
    store:{

    },
    mutations:{

    },
    actions:{

    },
    modules:{
        auth
    }
})

