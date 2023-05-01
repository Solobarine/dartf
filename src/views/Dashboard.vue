<template>
  <div class="container">
    <Overview />
    <Home />
  </div>
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

<style scoped>
  .container {
    display: flex;
  }

  .home {
    height: 100%;
  }

  @media only screen and (max-width: 500px) {
    .container {
      position: relative;
      flex-direction: column;
      height: auto;
    }
  }
</style>
