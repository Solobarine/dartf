<template>
  <div class="container">
    <Overview />
    <Settings />
  </div>
</template>

<script>
import Overview from '../components/Overview.vue'
import Settings from './Settings.vue'

export default {
  name: 'SettingsPage',
  components: {
    Overview,
    Settings
  },
}
</script>

<style scoped>
  .container {
    display: flex;
  } 
</style>
