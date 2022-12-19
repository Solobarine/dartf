<template>
  <div class="container">
    <h3 class="theme">Theme</h3>
    <select name="theme" id="themeOptions">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <h3 class="changeDetails">Update Your Details</h3>
    <button @click="showPopUp" type="submit">Update Your Settings</button>
    <form v-if="showUpdateForm" action="#">
      <input v-model="phoneNo" type="number" id="phoneNo" minlength="10" maxlength="11" required>
      <input type="email" id="mail" required>
      <input @click="showConfirmation" type="submit" value="Update">
    </form>
    <div v-if="updateDetails && showUpdateForm" class="confirm">
      <h3 class="enter">Enter Your Password.</h3>
      <input type="password" name="password" id="password" required>
      <input v-on:click="confirmChanges" type="submit" value="Submit">
    </div>
  </div>
  {{count}}
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      showUpdateForm: false,
      updateDetails: false,
      count: 0
    }
  },
  methods: {
    showPopUp () {
      console.log('clicking')
      this.showUpdateForm = !this.showUpdateForm
      this.updateDetails = false
    },
    showConfirmation () {
      this.updateDetails = !this.updateDetails
    },
    confirmChanges() {
      this.count += 1
    }
  }
}
</script>
