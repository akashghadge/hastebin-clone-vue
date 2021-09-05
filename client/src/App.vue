<template>
  <div id="app">
    <h1>Write Snippet Save and Share</h1>
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
#app > h1 {
  text-align: center;
  color: var(--colMain);
}
body {
  background-color: var(--bgCol);
}
</style>
