<template>
  <nav>
    <router-link to="/">Getting Started</router-link> |
    <router-link to="/exo1">Exo 1</router-link> |
		<router-link to="/exo2">Exo 2</router-link> |
		<router-link to="/exo3">Exo 3</router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
