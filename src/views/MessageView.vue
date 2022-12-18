<template>
  <Overview />
  <Message />
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
