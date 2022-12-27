<template>
  <div class="sign-up">
    <div class="contents">
      <h2 id="sign">Please Create an Account</h2>
      <input type="text" v-model="firstName" name="firstName" placeholder="First Name" minlength="2" maxlength="40" required>
      <input type="text" v-model="lastName" name="lastName" placeholder="Last Name" minlength="2" maxlength="40" required>
      <input type="password" v-model="password" name="password" id="password" placeholder="Password" minlength="8" maxlength="15" required>
      <span id="passwdError">{{error}}</span>
      <input type="password" v-model="confirmPassword" name="confirmPassword" id="c-password" placeholder="Confirm Password" required>
      <input type="date" name="date" id="date" v-model="date_of_birth" required>
      <input type="email" v-model="email" name="email" placeholder="Email" required>
      <input type="text" v-model="phoneNo" name="phoneNo" placeholder="Phone Number" required>
      <select name="countries" v-model="userCountry" required>
        <option disabled value="">Country of Origin</option>
        <option v-bind:key="country" v-for="country in countries">
          <p class="countryName" name="userCountry" value="country.name">{{country.name}}</p>
          <p value="" class="countryFlag">{{country.flag}}</p>
        </option>
      </select>
      {{userCountry}}
      <input type="text" v-model="state" name="state" id="state" placeholder="State" minlength="2" maxlength="40" required>
      <input type="text" v-model="city" name="city" id="city" placeholder="City" minlength="2" maxlength="40" required>
      <input type="text" v-model="address" name="address" id="address" placeholder="Address" minlength="8" maxlength="60" required>
      <select name="gender" v-model="gender" required>
        <option disabled value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Others</option>
      </select>
      <input v-on:click="createAccount" id="submit" type="submit" value="Submit">
      <p>Already a User, <router-link to="/login" id="login">Sign in</router-link></p>
    </div>
  </div>
</template>

<script>
import { countries } from 'country-list-json'

export default {
  name: 'SignUp',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      date_of_birth: '',
      phoneNo: '',
      userCountry: '',
      state: '',
      city: '',
      address: '',
      gender: '',
      countries,
      error: '',
      themeColors: this.$store.state.settings[0]
    }
  },
  methods: {
    createAccount() {
      console.log('Clicking')
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        phoneNo: this.phoneNo,
        date_of_birth: this.date_of_birth,
        country: this.userCountry.slice(0, -4),
        state: this.state,
        city: this.city,
        address: this.address,
        gender: this.gender
      }
      console.log(data) 
      if (this.password === this.confirmPassword) {
        this.$store.dispatch('createAnAccount', data)
      } else {
        this.error = 'Password does not match.'
      }
    }
  }
}
</script>

<style scoped>
  #sign {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
  }

  .sign-up {
    color: #00f;
    height: 80vh;
  }

  .contents {
    width: 30%;
    height: 95%;
    margin-left: 35%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
  }

  input,
  select {
    width: 80%;
    height: 40px;
    padding-left: 20px;
    border: none;
    border-radius: 10px;
    background-color: v-bind(themeColors.background_color_3);
  }

  #submit {
    width: 30%;
    padding-left: 0;
    font-size: 20px;
    margin: 12px;
    background-color: v-bind(themeColors.color_1);
  }

  a {
    text-decoration: none;
    text-decoration-color: none;
  }
</style>
