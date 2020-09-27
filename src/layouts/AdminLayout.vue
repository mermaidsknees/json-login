<template>
<div class="admin-layout">
       
<v-layout>     <!-- <Popup/> -->
  <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a @click.prevent="reload"><i class="material-icons">refresh</i></a></li>
        <!-- <li><a @click.prevent="$emit('create-user')">Create User</a></li> -->
        <li><a @click.prevent="logout">Log Out</a></li>

      </ul>
    </div>
  </nav>
</v-layout>
     <router-view />
</div>  
</template>

<script>

export default {
  methods:{
    reload(){
      window.location.reload()
    },
    async logout(){
      await this.$store.dispatch('logout');
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
nav{
    margin-bottom: 2.5vh;
}
</style>