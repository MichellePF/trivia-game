<template>
  <div id="app">
    <div class="container">

      <div class="nav">
        <ul>
          <li><a><router-link to="/">Home</router-link></a></li>
          <li><a><router-link to="/quiz">Quiz</router-link></a></li>
          <li><a><router-link to="/login">Login</router-link></a></li>
          <li><a><router-link to="/register">Register</router-link></a></li>
        </ul>
        <div>
          <h3 v-if="user">{{user.name}}</h3>
        </div>
        
      </div>
    </div>
    <router-view/>
  </div>

</template>

<script>

export default {
  name: 'App',
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
    },
  }
}
</script>

<style>

.container {
	width: 80%;
	margin: 0 auto;
}



.logo {
  text-align: center;
  padding: 10px 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  background: #1a2537;
}

.nav h3{
  color: white;
  text-align: end;
  padding-right: 30px;
  font-size: 25px;
}
.nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav li {
  display: inline-block;
  margin-left: 70px;
  padding-top: 23px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
}

.nav a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

.nav a:hover {
  color: cadetblue;
}

.nav a::before {
  content: '';
  display: block;
  height: 5px;
  background-color:cadetblue;

  position: absolute;
  top: 0;
  width: 0%;

  transition: all ease-in-out 250ms;
}

.nav a:hover::before {
  width: 100%;
}
</style>
