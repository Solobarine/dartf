<template>
  <Overview />
  <Transfer />
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

</style>
