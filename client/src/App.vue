<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#nav,
a {
  text-align: center;
  text-decoration: none;
  text-transform: none;
  color: black;
}
</style>
