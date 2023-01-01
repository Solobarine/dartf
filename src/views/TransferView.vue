<template>
  <div class="container">
    <Overview />
    <Transfer />
  </div>
</template>

<script>
import Overview from '../components/Overview.vue';
import Transfer from '../components/Transfer.vue';

export default {
  name: 'TransferView',
  components: {
    Overview,
    Transfer
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    height: 760px;
  }
</style>
