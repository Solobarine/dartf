<template>
  <Overview />
  <Deposit />
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

</style>
