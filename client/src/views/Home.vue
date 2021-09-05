<template>
  <div class="home">
    <!-- <CodeDisplay /> -->
    <CodeEditor />
  </div>
</template>

<script>
// @ is an alias to /src
import CodeDisplay from "@/views/CodeDisplay";
import CodeEditor from "./CodeEditor.vue";
export default {
  name: "Home",
  components: {
    CodeDisplay,
    CodeEditor,
  },
};
</script>
