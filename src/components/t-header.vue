<template>

  <nav>
      <ul class="nav-links">
        <li><router-link to="/">Work</router-link></li>
        <li><router-link to="/about_me">About Me</router-link></li>
      </ul>
  </nav>

</template>

<script>
export default {
  name: "t-header"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

nav{
  display: flex;
  justify-content: space-around;

}
.nav-links{
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  z-index: 15;

}
li{
  list-style: none;
}
li a {
  text-decoration: none;
  font-family: Poppins;
  font-weight: normal;
  font-size: 1.5rem;
  color: #F2E252;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: #090909 0 0 9px;

}

@media screen and (max-width: 1000px){
  li a{
    font-size: 1rem;
  }

}

</style>