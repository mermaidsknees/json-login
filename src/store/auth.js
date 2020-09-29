import firebase from "firebase/app";


export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        throw e;
      }
    },
    async loginWithEmail({ dispatch, commit }, { email, actionCodeSettings }) {
      try {
          firebase
          .auth()
          .sendSignInLinkToEmail(email, actionCodeSettings)
          .then(function() {
              window.localStorage.setItem("emailForSignIn", email);
            })
            .catch(function(error) {
                throw error 
            });
      } catch (e) {
        throw e;
      }
    },
    async loggedInWithEmail({ dispatch, commit }, {email}) {
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        var email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          console.log("Email is missing")
        }
        firebase
          .auth()
          .signInWithEmailLink(email, window.location.href)
          .then(function(result) {
            // window.localStorage.removeItem("emailForSignIn");
            // var emailUser = result.user
            window.localStorage.setItem('emailUser', result.data)
          })
          .catch(function(error) {
              throw error
            });
        }
        console.log(localStorage.emailForSignIn)
        console.log(localStorage.emailUser)
    },
    logout(){
        firebase.auth().signOut();
    }
  }
};
