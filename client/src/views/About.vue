<template>
  <div class="home">
    <CodeDisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import CodeDisplay from "@/views/CodeDisplay";
export default {
  name: "About",
  components: {
    CodeDisplay,
  },
};
</script>
