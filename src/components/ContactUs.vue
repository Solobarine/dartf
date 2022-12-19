<template>
  <form id="form">
    <input type="email" name="email" id="mail" required>
    <input type="text" name="comment" id="comment" minlength="2" maxlength="100" required>
    <input type="submit" value="Submit">
  </form>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped>

</style>
