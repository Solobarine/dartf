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
    height: 760px;
  }
</style>
