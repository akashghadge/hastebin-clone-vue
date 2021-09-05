<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <ButtonBox />
    <router-view />
  </div>
</template>
<script>
import ButtonBox from "./components/ButtonBox.vue";
export default {
  components: { ButtonBox },
};
</script>
<style>
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --bgCol: #002b36;
  --colMain: #93a1a1;
}
body {
  background-color: var(--bgCol);
}
</style>
