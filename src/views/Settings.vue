<template>
  <Overview />
  <div class="container">
    <ul>
      <li id="c-theme">Theme</li>
      <li @click="showPopUp" id="userDetails">User Details</li>
    </ul>
    <div class="categories">
      <h3 class="theme">Theme</h3>
      <select v-model="theme" name="theme" id="themeOptions">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <button @click="saveTheme" id="saveTheme" type="submit">Save</button>
      <h3 class="changeDetails">Update Your Details</h3>
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
    {{this.$store.state.settings}}
  </div>
</template>

<script>
import Overview from '../components/Overview.vue'

export default {
  name: 'Settings',
  components: {
    Overview
  },
  data () {
    return {
      showUpdateForm: false,
      updateDetails: false,
      count: 0,
      theme: 'light',
      dark: false,
      light: true
    }
  },
  methods: {
    saveTheme () {
     this.$store.dispatch('changeTheme', this.theme) 
    },
    showPopUp () {
      this.showUpdateForm = !this.showUpdateForm
      this.updateDetails = false
    },
    showConfirmation () {
      this.updateDetails = !this.updateDetails
    },
    confirmChanges () {
      this.count += 1
    }
  }
}
</script>
