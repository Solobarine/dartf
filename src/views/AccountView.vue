<template>
  <Overview />
  <Account />
</template>

<script>
import Overview from '../components/Overview.vue'
import Account from '../components/Account.vue'

export default {
  name: 'AccountView',
  components: {
    Overview,
    Account
  }
}
</script>
