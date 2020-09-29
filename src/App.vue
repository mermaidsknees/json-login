<template>
    <div id="app">
      <!-- <Login/> -->
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import EmptyLayout from '@/layouts/EmptyLayout'
import AdminLayout from '@/layouts/AdminLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout ) + '-layout'
    }
  },
  components: {
    EmptyLayout, AdminLayout,Login
  }
}
</script>


<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';


.empty-layout {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 5rem;
    height: 100%;
}

</style>
