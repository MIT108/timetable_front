<template>
  <router-view />
</template>

<script>
import { AUTO_LOGIN_ACTION, TEST } from "./store/storeConstants"
import { AUTO_GET_DAY, GET_CURRENT_DAY } from "./store/TimetableConstants"
import { mapGetters, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapGetters("Day",{
        getDay : GET_CURRENT_DAY
      })
    },
    methods: {
      ...mapActions("auth", {
        test: TEST
      })
    },
    created(){
       this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`)
       this.$store.dispatch(`Day/${AUTO_GET_DAY}`)
       this.test()
    }
  }
</script>
