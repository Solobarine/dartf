<template>
  <div class="sign-up">
    <div class="contents">
      <h2 id="sign">Please Create an Account</h2>
      <div class="fields">
      <input type="text" v-model="firstName" name="firstName" placeholder="First Name" minlength="2" maxlength="40" required>
      <input type="text" v-model="lastName" name="lastName" placeholder="Last Name" minlength="2" maxlength="40" required>
      <input type="password" v-model="password" name="password" id="password" placeholder="Password" minlength="8" maxlength="15" required>
      <span id="passwdError">{{error}}</span>
      <input type="password" v-model="confirmPassword" name="confirmPassword" id="c-password" placeholder="Confirm Password" required>
      <label for="date">Date of Birth<input type="date" name="date" id="date" v-model="date_of_birth" required></label>
      <input type="email" v-model="email" name="email" placeholder="Email" required>
      <span class="accountExist">{{signUpError}}</span>
      <input type="text" v-model="phoneNo" name="phoneNo" placeholder="Phone Number" required>
      <select name="countries" v-model="userCountry" required>
        <option disabled value="">Country of Origin</option>
        <option v-bind:key="country" v-for="country in countries">
          <p class="countryName" name="userCountry" value="country.name">{{country.name}}</p>
          <p value="" class="countryFlag">{{country.flag}}</p>
        </option>
      </select>
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
  </div>
</template>

<script>
import { countries } from 'country-list-json'

export default {
  name: 'SignUp',
  computed: {
    themeColors () {
      return this.$store.state.settings[0]
    },
    signUpError () {
      return this.$store.state.signInError
    }
  },
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
      error: ''
    }
  },
  methods: {
    createAccount() {
      console.log('Clicking')
      const data = {
        'first_name': this.firstName,
        'last_name': this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        'phone_no': this.phoneNo,
        'date_of_birth': this.date_of_birth,
        country: this.userCountry.slice(0, -4),
        state: this.state,
        city: this.city,
        address: this.address,
        gender: this.gender
      }
      console.log(data) 
      if (this.password === this.confirmPassword && this.firstName !== '' && this.lastName !== '' && this.email !== '' && this.state !== '' && this.address !== '' && this.userCountry !== '' && this.date_of_birth !== '' && this.city !== '') {
        this.$store.dispatch('createAnAccount', data).then(() => {
          if (this.$store.state.loggedIn == true) {
            this.$router.push({name: 'Dashboard'})
          }
        })
      } else {
        this.error = 'Invalid Credentials.'
      }
    }
  }
}
</script>

<style scoped>
  #sign {
    margin-top: 20px;
    text-align: center;
    margin-bottom: 5px;
    font-size: 20px;
  }

  .sign-up {
    color: #00f;
    height: 760px;
    overflow-y: scroll;
    background-color: v-bind(themeColors.background_color_5);
  }

  .fields {
    width: 70%;
    height: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  input,
  select {
    width: 80%;
    height: 40px;
    margin-top: 20px;
    padding-left: 20px;
    border: none;
    border-radius: 10px;
    background-color: v-bind(themeColors.color_2);
  }

  label {
    margin-bottom: 30px;
    width: 80%;
    text-align: center;
  }

  label input {
    width: 100%;
  }

  #submit {
    width: 25%;
    padding-left: 0;
    margin-left: 30%;
    font-size: 20px;
    padding: 12px;
    height: 50px;
    background-color: v-bind(themeColors.background_color_1);
  }

  a {
    text-decoration: none;
    text-decoration-color: none;
  }

  @media only screen and (max-width: 768px) {
    #sign {
      margin-bottom: 10px;
    }

    .fields {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin: auto;
    }

    input,
    select {
      width: 80%;
      margin: auto;
      margin-bottom: 15px;
    }

    label {
      display: flex;
      flex-direction: column;
      height: 60px;
      justify-content: space-evenly;
    }

    #submit {
      font-size: 12px;
      height: 40px;
      width: 65px;
      margin: auto;
      margin-bottom: 15px;
    }
  }
</style>
