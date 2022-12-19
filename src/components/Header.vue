<template>
  <header id="navBar">
    <div id="company">
      <h3 id="companyName">dart</h3> 
      <i className="fa-target"></i>
    </div>
    <div class="navLinks">
      <p class="welcome"><router-link to="/">Welcome</router-link></p>
      <p class="contact"><router-link to="/dashboard/contact-us">Contact Us</router-link></p>
      <p class="discover">Discover</p>
    </div>
    <div id="icons">
      <router-link to="/dashboard/messages"><i class="notfication" /></router-link>
      <i class="profile"></i>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderView',
  };
</script>

<style scoped>
  #navBar {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
</style>
