<template>
<div>
    <div id="nav">
      <router-link to="/">Inici</router-link> |
      <router-link to="/clients/1">Clients</router-link> |
      <router-link to="/proveidors">Proveïdors</router-link> |
      <router-link to="/magatzem">Magatzem</router-link> |
      <router-link to="/botiga">Botiga</router-link>
    </div>
    <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
