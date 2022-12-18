<template>
  <Overview />
  <Home />
</template>

<script>
import Home from '../components/Home.vue';
import Overview from '../components/Overview.vue';

export default {
  namr: 'Dashboard',
  components: {
    Home,
    Overview
  }
}
</script>
