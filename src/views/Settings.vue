<template>
  <div class="container">
    <div class="section">
      <ul>
        <li @click="showThemeOption" id="c-theme">Theme</li>
        <li @click="showPopUp" id="userDetails">User Details</li>
      </ul>
    </div>
    <div id="settings">
      <div v-if="showThemeSetting" class="categories">
        <div class="chooseTheme">
          <h2 class="theme">Select Your Prefered Theme</h2>
          <select v-model="theme" name="theme" id="themeOptions">
            <option disabled value="Choose Theme">Choose Your Theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <button @click="saveTheme" id="saveTheme" class="save" type="submit">Save</button>
        </div>
      </div>
      <div v-if="showUpdateForm" id="updates">
        <form class="form" action="#">
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
  </div>
</template>

<script>
  export default {
    name: 'SettingsPage',
    computed: {
      themeColors () {
        return this.$store.state.settings[0]
      }
    },
    data () {
      return {
        showThemeSetting: true,
        showUpdateForm: false,
        updateDetails: false,
        count: 0,
        theme: null,
        dark: false,
        light: true
    }
  },
  methods: {
    saveTheme () {
     this.$store.dispatch('changeTheme', this.theme) 
    },
    showThemeOption () {
      this.showThemeSetting = true
      this.showUpdateForm = false
      this.updateDetails = false
    },
    showPopUp () {
      this.showUpdateForm = true
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
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 25px;
    background-color: v-bind(themeColors.background_color_5);
  }

  li,
  h2,
  h3,
  button,
  .submit {
    color: v-bind(themeColors.color_3);
  }

  ul > li {
    list-style: none;
    font-size: 16px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  #settings {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .categories {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    padding: 20px;
    border-radius: 30px;
    background-image: linear-gradient(90deg, v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_2));
  }

  .theme {
    font-size: 20px;
  }

  select {
    font-size: .9rem;
    text-align: center;
    margin-bottom: 20px;
    border: none;
    padding: 15px;
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
    text-align: center;
    cursor: pointer;
  }

  #saveTheme {
    width: 120px;
    padding: 15px;
    border-radius: 15px;
    border: none;
    font-size: 1rem;
    margin-bottom: 30px;
    color: #eee;
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

  #updates {
    padding: 20px;
    padding-bottom: 30px;
    border-radius: 30px;
    background: linear-gradient(90deg, v-bind(themeColors.background_color_1), v-bind(themeColors.background_color_2));
  }

  input {
    margin: auto;
    margin-top: 20px;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    padding: 15px;
    background-color: v-bind(themeColors.color_2);
  }

  ::placeholder {
    color: #000;
  }

  .submit {
    width: 120px;
    font-size: 16px;
    margin-bottom: 20px;
    color: #eee;
    background-color: var(--green);
  }

  @media only screen and (max-width: 500px) {
    .container {
      width: 100%;
    }

    ul {
      width: 90%;
      justify-content: space-between;
      text-align: center;
      margin: auto;
    }

    ul > li {
      font-size: 16px;
    }

    select {
      width: 80%;
      font-size: 14px;
    }

    #saveTheme {
      font-size: 15px;
    }

    input {
      width: 90%;
      font-size: .9rem;
    }

    .submit {
      font-size: 16px;
    }
  }
</style>
