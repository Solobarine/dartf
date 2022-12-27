<template>
  <Overview />
  <Home />
</template>

<script>
import Home from '../components/Home.vue';
import Overview from '../components/Overview.vue';

export default {
  name: 'DashboardView',
  components: {
    Home,
    Overview
  }
}
</script>
