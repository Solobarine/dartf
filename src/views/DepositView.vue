<template>
  <div class="container">
    <Overview />
    <Deposit />
  </div>
</template>

<script>
import Deposit from '../components/Deposit.vue';
import Overview from '../components/Overview.vue';

export default {
  name: 'DepositView',
  components: {
    Deposit,
    Overview
  }
}
</script>

<style scoped>
  .container {
    display: flex;
  }
</style>
