<template>
  <div class="container">
    <Overview />
    <Account />
  </div>
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

<style scoped>
  .container {
    display: flex;
    height: 760px;
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      height: auto;
    }
    
  }
</style>
