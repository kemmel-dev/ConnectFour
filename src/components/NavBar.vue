<!-- HTML and CSS based on https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp -->

<template>
  <div class="navbar">
    <router-link to="/home">Home</router-link>
    <div class="dropdown" :class="{'router-link-active': currentRoute.toString().startsWith('/games/')}">
      <button class="dropbtn">Games
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content" >
        <router-link to="/games/overview31">All Games overview</router-link>
        <a href="#">Game details (comp)</a>
        <router-link to="/games/overview32">Game details (router)</router-link>
      </div>
    </div>
    <router-link to="/register" id="register" >Sign Up</router-link>
    <router-link to="/login" id="login">Log In</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    currentRoute () {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
  .router-link-active {
    background-color: #731e1e !important;
  }

  /* Navbar container */
  .navbar {
    border-style: outset;
    border-color: white;
    color: #ffb121;
    font-weight: bold;
    overflow: hidden;
    background-color: #610000;
    font-family: Arial,serif;
  }

  button {
    color: inherit;
    font-weight: inherit;
  }

  /* Links inside the navbar */
  .navbar a {
    color: inherit;
    font-weight: inherit;
    float: left;
    font-size: 16px;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  /* The dropdown container */
  .dropdown {
    float: left;
    overflow: hidden;
  }

  /* Dropdown button */
  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
  }

  /* Add a red background color to navbar links on hover */
  .navbar a:hover, .dropdown:hover .dropbtn {
    background-color: #9d0000;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    color: white;
    font-weight: normal;
    display: none;
    position: absolute;
    background-color: #481c1c;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: inherit;
    float: none;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Add a grey background color to dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #964242 !important;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  #login, #register {
    float:right;
  }
</style>
