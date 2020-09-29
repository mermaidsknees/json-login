<template>
  <div class="login">
    <form class="card login-card" action>
      <div class="card-content">
        <span class="card-title">Authentification</span>
        <div class="input-field">
          <input v-model="email" type="text" />
          <label for="email">Email</label>
        </div>
        <div class="card-button">
          <button
            @click.prevent="submitHandler()"
            class="btn waves-teal waves-light"
            type="submit"
            name="action"
          >
            Log In
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
    <v-alert v-if="emailSent" color="blue"
      >Email was sent to {{ email }}</v-alert
    >
    <v-alert v-if="isAuthenticated" color="green"
      >Succesfully signed in. Now you can access
      <router-link style="color: blue; text-decoration: underline" to="/home"
        >Home</router-link
      ></v-alert
    >
  </div>
</template>


<script>
import firebase from "firebase";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      emailSent: false,
      error: null,
      isAuthenticated: false,
    };
  },
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
        actionCodeSettings: {
          url: "http://localhost:8080/",
          handleCodeInApp: true,
        },
      };

      this.$store.dispatch("loginWithEmail", formData);
      this.emailSent = true;
    },
  },
  created() {
    const url = location.href;
    const email = localStorage.emailForSignIn;

    if (firebase.auth().isSignInWithEmailLink(url)) {
      firebase.auth().signInWithEmailLink(email, url);
      this.isAuthenticated = true;
    }
  },
};
</script>

<style scoped lang='scss'>
body {
  overflow: hidden;
}

.login {
  height: 92vh;
}

.btn {
  background-color: #ffac81;
  background-image: linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
}
form {
  display: inline-block;
  max-width: 500px;
}

.login-card {
  width: 500px;
}
</style>