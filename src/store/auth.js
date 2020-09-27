import firebase from 'firebase/app'
import axios from 'axios'

export default {
    state:{
        token:null,
        user: null
    },
    actions:{
        retrieveToken(context,credentials){
            axios.post('/',{
                email:credentials.email
            }).then(response =>{
                console.log(response)
            })
        }
    }
}
                // async login({dispatch,commit},{email,actionCodeSettings}){
                //     try{
                //         firebase
                // 		.auth()
                // 		.sendSignInLinkToEmail(email, actionCodeSettings)
                // 		.then(function () {
                //             console.log("email sent")
        
                // 			// The link was successfully sent. Inform the user.
                // 			// Save the email locally so you don't need to ask the user for it again
                // 			// if they open the link on the same device.
                //             window.localStorage.setItem("emailForSignIn", email);
                //             const uid = dispatch('getUidmm')
                // 		})
                //     }catch(e){
                //         throw e
                //     }
                // },
                // async logout(){
                //     await firebase.auth().signOut()
                // },
                // getUid(){
                //     const user = firebase.auth().currentUser
                //     return user ? user.uid : null
                // }