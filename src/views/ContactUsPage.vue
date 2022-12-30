<template>
  <div class="container">
    <Overview />
    <ContactUs />
  </div>
</template>

<script>
import Overview from '../components/Overview.vue'
import ContactUs from '../components/ContactUs.vue'

export default {
  name: 'ContactUsPage',
  components: {
    Overview,
    ContactUs
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    height: 760px;
  }

  .container .contact-page {
    height: 100%;
  }
</style>
