<template>
  <div class="home-page container center-align">
    <Popup />
    <div class="card-container">
      <UserCard
        v-for="user of users"
        :key="user.id"
        v-bind:user="user"
        class="split"
      />
    </div>
    <Observer v-on:fetch="fetch" />
  </div>
</template>


<script>
import axios from "axios";
import UserCard from "@/components/UserCard";
import Popup from "./Popup";
import Observer from "./Observer";
import { mapGetters } from 'vuex'
import firebase from 'firebase'
const baseURL = "http://localhost:3000/users/";

export default {
  components: {
    UserCard,
    Popup,
    Observer,
  },
  data() {
    return {
      users: [],
      page: 1,
    };
  },
  methods: {
    async addUser() {
      const res = await axios.post(baseURL, {
        name: this.first_name,
        email: this.email,
      });

      this.todos = [...this.users, res.data];

      this.first_name = "";
    },
    async fetch() {
    //   this.$store.dispatch("loggedInWithEmail", localStorage.emailForSignIn);
      const res = await axios.get(
        `http://localhost:3000/users?_page=${this.page}&_limit=15`
      );
      this.users = [...this.users, ...res.data];

      this.page++;
    },
  },
  computed: {
    ...mapGetters(["signInEmail"]),
  },
  created() {
    const url = location.href;
    const email = this.signInEmail;
    if (firebase.auth().isSignInWithEmailLink(url)) {
      firebase.auth().signInWithEmailLink(email, url);
    }
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.empty-layout {
  height: 100%;
}

.container {
  max-width: 1200px;
}
.split {
  width: 26%;
  margin: 2%;
}
</style>