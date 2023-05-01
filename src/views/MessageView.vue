<template>
  <div class="container">
    <Overview />
    <Message />
  </div>
</template>

<script>
import Message from '../components/Message.vue'
import Overview from '../components/Overview.vue'

export default {
  name: 'MessageView',
  components: {
    Message,
    Overview
  }
}
</script>

<style scoped>
  .container { 
    display: flex;
  }

  @media only screen and (max-width: 768px) {
    .container {
      height: auto;
    }
  }
</style>
