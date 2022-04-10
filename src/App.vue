<template>
  <router-view />
</template>

<script>import { AUTO_LOGIN_ACTION } from "./store/storeConstants"

  export default {
    created(){
       this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`)
    }
  }
</script>
