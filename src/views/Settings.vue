<template>
  <div class="container">
    <div class="section">
    <ul>
      <li @click="showThemeOption" id="c-theme">Theme</li>
      <li @click="showPopUp" id="userDetails">User Details</li>
    </ul>
    <div class="categories">
      <div v-if="showThemeSetting" class="chooseTheme">
        <h2 class="theme">Theme</h2>
        <select v-model="theme" name="theme" id="themeOptions">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        <button @click="saveTheme" id="saveTheme" class="save" type="submit">Save</button>
      </div>
    </div>
    <form v-if="showUpdateForm" class="form" action="#">
      <h2 class="changeDetails">Update Your Details</h2>
        <input v-model="phoneNo" type="number" id="phoneNo" minlength="10" maxlength="11" placeholder="Enter New Phone Number" required>
        <input type="email" id="mail" placeholder="Enter New Email" required>
        <input @click="showConfirmation" type="submit" class="submit" value="Update">
      </form>
      <div v-if="updateDetails && showUpdateForm" class="confirm">
        <h3 class="enter">Enter Your Password.</h3>
        <input type="password" name="password" id="password" placeholder="Enter Your Password" required>
        <input v-on:click="confirmChanges" type="submit" class="submit" value="Submit">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SettingsPage',
    data () {
      return {
        showThemeSetting: false,
        showUpdateForm: false,
        updateDetails: false,
        count: 0,
        theme: 'light',
        dark: false,
        light: true,
        themeColors: this.$store.state.settings[0]
    }
  },
  methods: {
    saveTheme () {
     this.$store.dispatch('changeTheme', this.theme) 
    },
    showThemeOption () {
      this.showThemeSetting = !this.showThemeSetting
      this.showUpdateForm = false
      this.updateDetails = false
    },
    showPopUp () {
      this.showUpdateForm = !this.showUpdateForm
      this.updateDetails = false
      this.showThemeSetting = false
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

<style scoped>
  @media only screen and (min-width: 768px) {
  .container {
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    background-color: v-bind(themeColors.background_color_3);
    padding-top: 30px;
  }

  ul {
    width: 20%;
  }

  ul > li {
    list-style: none;
    font-size: 25px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .categories {
    display: flex;
    flex-direction: column;
  }

  select {
    width: 50%;
    height: 50px;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    border: none;
    border-radius: 12px;
    margin-top: 20px;
  }

  .section {
    width: 60%;
    margin: 0 auto;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  li {
    font-size: 30px;
    text-align: center;
    cursor: pointer;
  }

  #saveTheme {
    width: 20%;
    border-radius: 12px;
    border: none;
    padding: 7px;
    font-size: 24px;
    margin-bottom: 30px;
    background-color: v-bind(themeColors.color_1);
  }

  .chooseTheme,
  .form,
  .confirm {
    margin: auto;
    margin-top: 40px;
  }

  .chooseTheme {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .form,
  .confirm {
    display: flex;
    text-align: center;
    flex-direction: column;
  }

  input {
    width: 50%;
    height: 50px;
    margin: auto;
    margin-top: 25px;
    border: none;
    border-radius: 12px;
    font-size: 22px;
    padding-left: 20px;
    background-color: v-bind(themeColors.background_color_4);
  }

  .submit {
    width: 13%;
    font-size: 18px;
    margin-bottom: 20px;
    padding-left: 0;
    background-color: v-bind(themeColors.color_1);
  }
}
</style>
